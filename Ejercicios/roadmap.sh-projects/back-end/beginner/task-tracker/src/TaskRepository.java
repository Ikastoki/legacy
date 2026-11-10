import java.io.*;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;

public class TaskRepository {
    private final Path filePath;
    private List<Task> tasks;

    public TaskRepository(String fileName) {
        this.filePath = Paths.get(fileName).toAbsolutePath();
        this.tasks = new ArrayList<>();
        loadTasks();
    }

    public Task addTask(String description) {
        Task task = new Task();
        task.id = getNextId();
        task.description = description;
        tasks.add(task);
        saveTasks();
        return task;
    }

    public boolean updateTask(int id, String newDescription) {
        Task task = findById(id);
        if (task == null)
            return false;
        task.description = newDescription;
        task.updatedAt = java.time.LocalDateTime.now()
                .format(java.time.format.DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        saveTasks();
        return true;
    }

    public boolean deleteTask(int id) {
        Task task = findById(id);
        if (task == null)
            return false;
        tasks.remove(task);
        saveTasks();
        return true;
    }

    public boolean markTask(int id, String newStatus) {
        Task task = findById(id);
        if (task == null)
            return false;
        task.status = newStatus;
        task.updatedAt = java.time.LocalDateTime.now()
                .format(java.time.format.DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        saveTasks();
        return true;
    }

    public List<Task> listTasks(String statusFilter) {
        if (statusFilter == null || statusFilter.isEmpty()) {
            return new ArrayList<>(tasks);
        }
        List<Task> filtered = new ArrayList<>();
        for (Task t : tasks) {
            if (t.status.equals(statusFilter)) {
                filtered.add(t);
            }
        }
        return filtered;
    }

    private Task findById(int id) {
        for (Task t : tasks) {
            if (t.id == id)
                return t;
        }
        return null;
    }

    private int getNextId() {
        int max = 0;
        for (Task t : tasks) {
            if (t.id > max)
                max = t.id;
        }
        return max + 1;
    }

    // Escritura JSON

    private void saveTasks() {
        try (BufferedWriter writer = Files.newBufferedWriter(filePath,
                StandardOpenOption.CREATE,
                StandardOpenOption.TRUNCATE_EXISTING)) {
            writer.write(tasksToJson(tasks));
        } catch (IOException e) {
            System.err.println("Error al guardar tareas: " + e.getMessage());
        }
    }

    private String tasksToJson(List<Task> list) {
        StringBuilder sb = new StringBuilder();
        sb.append("[\n");
        for (int i = 0; i < list.size(); i++) {
            Task t = list.get(i);
            sb.append("  {\n");
            sb.append("    \"id\": ").append(t.id).append(",\n");
            sb.append("    \"description\": \"").append(escapeJson(t.description)).append("\",\n");
            sb.append("    \"status\": \"").append(escapeJson(t.status)).append("\",\n");
            sb.append("    \"createdAt\": \"").append(t.createdAt).append("\",\n");
            sb.append("    \"updatedAt\": \"").append(t.updatedAt).append("\"\n");
            sb.append("  }");
            if (i < list.size() - 1)
                sb.append(",");
            sb.append("\n");
        }
        sb.append("]");
        return sb.toString();
    }

    private String escapeJson(String s) {
        if (s == null)
            return "";
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            switch (c) {
                case '\\':
                    sb.append("\\\\");
                    break;
                case '"':
                    sb.append("\\\"");
                    break;
                case '\n':
                    sb.append("\\n");
                    break;
                case '\r':
                    sb.append("\\r");
                    break;
                case '\t':
                    sb.append("\\t");
                    break;
                default:
                    sb.append(c);
            }
        }
        return sb.toString();
    }

    // Lectura de JSON

    private void loadTasks() {
        if (!Files.exists(filePath))
            return;

        try (BufferedReader reader = Files.newBufferedReader(filePath)) {
            String line;
            Task current = null;
            while ((line = reader.readLine()) != null) {
                String trimmed = line.trim();
                if (trimmed.startsWith("\"id\":")) {
                    current = new Task();
                    current.id = Integer.parseInt(extractValue(trimmed));
                } else if (current != null) {
                    if (trimmed.startsWith("\"description\":")) {
                        current.description = unescapeJson(extractValue(trimmed));
                    } else if (trimmed.startsWith("\"status\":")) {
                        current.status = extractValue(trimmed);
                    } else if (trimmed.startsWith("\"createdAt\":")) {
                        current.createdAt = extractValue(trimmed);
                    } else if (trimmed.startsWith("\"updatedAt\":")) {
                        current.updatedAt = extractValue(trimmed);
                    }
                    // agregar la tarea al cerrar
                    if (trimmed.startsWith("}")) {
                        tasks.add(current);
                        current = null;
                    }
                }
            }
        } catch (IOException e) {
            System.err.println("Error al leer tareas: " + e.getMessage());
        }
    }

    private String extractValue(String line) {
        int colonIdx = line.indexOf(':');
        if (colonIdx < 0)
            return "";
        String value = line.substring(colonIdx + 1).trim();

        // Quitar coma final si existe
        if (value.endsWith(",")) {
            value = value.substring(0, value.length() - 1).trim();
        }
        // Quitar comillas si es string
        if (value.startsWith("\"") && value.endsWith("\"")) {
            value = value.substring(1, value.length() - 1);
        }
        return value;
    }

    private String unescapeJson(String s) {
        if (s == null)
            return "";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '\\' && i + 1 < s.length()) {
                char next = s.charAt(i + 1);
                switch (next) {
                    case '\\':
                        sb.append('\\');
                        i++;
                        break;
                    case '"':
                        sb.append('"');
                        i++;
                        break;
                    case 'n':
                        sb.append('\n');
                        i++;
                        break;
                    case 'r':
                        sb.append('\r');
                        i++;
                        break;
                    case 't':
                        sb.append('\t');
                        i++;
                        break;
                    default:
                        sb.append(c);
                }
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }
}