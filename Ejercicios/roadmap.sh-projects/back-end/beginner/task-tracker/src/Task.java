import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Task {
    public int id;
    public String description;
    public String status;
    public String createdAt;
    public String updatedAt;

    public static final String STATUS_TODO = "todo";
    public static final String STATUS_IN_PROGRESS = "in-progress";
    public static final String STATUS_DONE = "done";

    public Task() {
        String now = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        this.createdAt = now;
        this.updatedAt = now;
        this.status = STATUS_TODO;
    }

    public Task(int id, String description, String status, String createdAt, String updatedAt) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return String.format("ID: %-3d | %-12s | %s", id, status, description);
    }
}
