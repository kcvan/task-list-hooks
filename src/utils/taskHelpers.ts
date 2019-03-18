import { TaskProps } from '../components/shared/Task';

export interface SortedTask {
  group: string;
  tasks: TaskProps[];
}

export const sortTasks = (tasks: TaskProps[]): SortedTask[] => {
  let sortedTasks: SortedTask[] = [];

  tasks.forEach((taskItem: TaskProps) => {
    const foundTaskGroup = sortedTasks.find((sortedTaskItem: SortedTask) => {
      return sortedTaskItem.group === taskItem.group;
    });

    if (!foundTaskGroup) {
      sortedTasks.push({
        group: taskItem.group,
        tasks: [taskItem],
      });
    } else {
      foundTaskGroup.tasks.push(taskItem);
    }
  });
  return sortedTasks;
}

export const getGroupTasks = (group: string, tasks: TaskProps[]): TaskProps[] => {
  return (tasks || []).filter((task: TaskProps) => getSnakeCase(task.group) === group);
}

export const countGroupTasks = (group: string, sortedTasks: SortedTask[]): number => {
  const foundTask = sortedTasks.find((sortedTask: SortedTask) => {
    return sortedTask.group === group;
  });
  return foundTask ? foundTask.tasks.length : 0;
}

export const countFinishedGroupTasks = (group: string, sortedTasks: SortedTask[]): number => {
  let finishedTasks = 0;
  const foundTask = sortedTasks.find((sortedTask: SortedTask) => {
    return sortedTask.group === group;
  });

  if (foundTask) {
    (foundTask.tasks || []).forEach((task: TaskProps) => {
      if (task.completedAt) {
        finishedTasks++;
      }
    });
  }
  return finishedTasks;
}

export const getSnakeCase = (words: string): string => words.toLowerCase().replace(/ /g,"_");

export const getGroupFromSnakeCase = (group: string, tasks: TaskProps[]): string => {
  const task = tasks.find((task: TaskProps) => getSnakeCase(task.group) === group);
  return task ? task.group : 'Tasks';
}