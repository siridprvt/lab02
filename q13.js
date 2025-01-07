class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(taskName, priority, dueDate) {
        this.tasks.push({ taskName, priority, dueDate, status: 'in-progress' });
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter(task => task.taskName !== taskName);
    }

    updateTask(taskName, updatedTask) {
        const task = this.tasks.find(task => task.taskName === taskName);
        if (task) {
            Object.assign(task, updatedTask);
        }
    }

    sortByPriority() {
        return this.tasks.sort((a, b) => a.priority - b.priority);
    }

    sortByDueDate() {
        return this.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }

    checkOverdue(task) {
        const today = new Date();
        return new Date(task.dueDate) < today && task.status !== 'completed';
    }

    filterByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
}
