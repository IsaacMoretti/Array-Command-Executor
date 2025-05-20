# Task Manager Module

A lightweight JavaScript utility for managing tasks with priority tracking and completion status.

## Features

- **Task Tracking**: Manage tasks with descriptions, completion status, and priority levels
- **Priority Management**: Identify high-priority tasks (priority 1)
- **Completion Tracking**: Filter and count tasks by completion status
- **Immutable Operations**: Safe data transformations without side effects

## Installation

### Hhow to use

```javascriptconsole.log("Completed tasks:", taskManager.getCompletedTasks());
console.log("Pending tasks count:", taskManager.countPendingTasks());
console.log("Task with ID 3:", taskManager.findTaskById(3));
console.log("Has high priority task?", taskManager.hasHighPriorityTask());
console.log("Are all tasks completed?", taskManager.areAllTasksCompleted());
console.log("Uppercase descriptions:", taskManager.updateDescriptions());
console.log("Mark task 2 as completed:", taskManager.markAsCompleted(2));
console.log("Tasks grouped by priority:", taskManager.groupByPriority());
console.log("Task statistics:", taskManager.getTaskStatistics());
