public class App {
    private static final String FILE_NAME = "tasks.json";

    public static void main(String[] args) {
        if (args.length == 0) {
            printUsage();
            return;
        }

        TaskRepository repo = new TaskRepository(FILE_NAME);
        String command = args[0].toLowerCase();

        try {
            switch (command) {
                case "add":
                    handleAdd(repo, args);
                    break;
                case "update":
                    handleUpdate(repo, args);
                    break;
                case "delete":
                    handleDelete(repo, args);
                    break;
                case "mark-in-progress":
                    handleMark(repo, args, Task.STATUS_IN_PROGRESS);
                    break;
                case "mark-done":
                    handleMark(repo, args, Task.STATUS_DONE);
                    break;
                case "list":
                    handleList(repo, args);
                    break;
                default:
                    System.out.println("Comando desconocido: " + command);
                    printUsage();
            }
        } catch (NumberFormatException e) {
            System.out.println("Error: El ID debe ser un número entero.");
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    private static void handleAdd(TaskRepository repo, String[] args) {
        if (args.length < 2) {
            System.out.println("Error: Falta la descripción de la tarea.");
            return;
        }
        Task task = repo.addTask(args[1]);
        System.out.println("Task added successfully (ID: " + task.id + ")");
    }

    private static void handleUpdate(TaskRepository repo, String[] args) {
        if (args.length < 3) {
            System.out.println("Error: Uso: update <id> <nueva descripción>");
            return;
        }
        int id = Integer.parseInt(args[1]);
        if (repo.updateTask(id, args[2])) {
            System.out.println("Task updated successfully");
        } else {
            System.out.println("Error: No se encontró la tarea con ID " + id);
        }
    }

    private static void handleDelete(TaskRepository repo, String[] args) {
        if (args.length < 2) {
            System.out.println("Error: Falta el ID de la tarea.");
            return;
        }
        int id = Integer.parseInt(args[1]);
        if (repo.deleteTask(id)) {
            System.out.println("Task deleted successfully");
        } else {
            System.out.println("Error: No se encontró la tarea con ID " + id);
        }
    }

    private static void handleMark(TaskRepository repo, String[] args, String newStatus) {
        if (args.length < 2) {
            System.out.println("Error: Falta el ID de la tarea.");
            return;
        }
        int id = Integer.parseInt(args[1]);
        if (repo.markTask(id, newStatus)) {
            System.out.println("Task marked as " + newStatus);
        } else {
            System.out.println("Error: No se encontró la tarea con ID " + id);
        }
    }

    private static void handleList(TaskRepository repo, String[] args) {
        String filter = null;
        if (args.length >= 2) {
            String raw = args[1].toLowerCase();
            switch (raw) {
                case "done":
                    filter = Task.STATUS_DONE;
                    break;
                case "todo":
                    filter = Task.STATUS_TODO;
                    break;
                case "in-progress":
                    filter = Task.STATUS_IN_PROGRESS;
                    break;
                default:
                    System.out.println("Error: Filtro inválido. Usa: done, todo o in-progress");
                    return;
            }
        }

        java.util.List<Task> list = repo.listTasks(filter);
        if (list.isEmpty()) {
            System.out.println("No tasks found.");
        } else {
            for (Task t : list) {
                System.out.println(t);
            }
        }
    }

    private static void printUsage() {
        System.out.println("Task Tracker CLI");
        System.out.println("Uso: task-cli <comando> [argumentos]");
        System.out.println();
        System.out.println("Comandos:");
        System.out.println("  add <descripcion>              Agregar una tarea");
        System.out.println("  update <id> <descripcion>      Actualizar una tarea");
        System.out.println("  delete <id>                    Eliminar una tarea");
        System.out.println("  mark-in-progress <id>          Marcar como en progreso");
        System.out.println("  mark-done <id>                 Marcar como completada");
        System.out.println("  list                           Listar todas las tareas");
        System.out.println("  list done|todo|in-progress     Listar por estado");
    }
}