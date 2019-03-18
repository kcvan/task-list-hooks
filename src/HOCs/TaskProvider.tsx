import * as React from 'react';

import { payload } from '../utils/data';

export interface TaskContextProps {
  id: number;
  group: string;
  task: string;
  dependencyIds: number[];
  completedAt: string | null;
}

const initialState: TaskContextProps[] = [...payload];

const TaskContext = React.createContext<any>({ taskState: initialState, taskDispatch: {} });

interface TaskState {
  taskState: TaskContextProps[];
}

interface TaskDispatch {
  type: string;
  payload: TaskContextProps;
}

export interface TaskConsumerProps {
  taskState: TaskContextProps[],
  taskDispatch: React.Dispatch<TaskDispatch>,
}

interface TaskProviderProps {
  children: React.ReactNode
}

const completeTask = (taskState: TaskContextProps[], payload: TaskContextProps) => {
  const id = payload.id;
  let foundTask = taskState.find((tasks: TaskContextProps) => tasks.id === id );
  const foundTaskIndex = taskState.findIndex((tasks: TaskContextProps) => tasks.id === id );
  return [
    ...taskState.slice(0, foundTaskIndex),
    {
      ...foundTask,
      ...payload,
    },
    ...taskState.slice(foundTaskIndex + 1),
  ];
}

const undoCompletedTask = (taskState: TaskContextProps[], payload: TaskContextProps) => {
  const id = payload.id;
  let foundTask = taskState.find((tasks: TaskContextProps) => tasks.id === id );
  const foundTaskIndex = taskState.findIndex((tasks: TaskContextProps) => tasks.id === id );

  const findDeepDependants = (head: TaskContextProps) => {
    for (let i = 0; i < taskState.length; i++) {
      if (taskState[i].dependencyIds.includes(head.id)) {
        taskState[i].completedAt = null;
        findDeepDependants(taskState[i]);
      }
    }
  }

  if (foundTask) {
    findDeepDependants(foundTask);
  }

  return [
    ...taskState.slice(0, foundTaskIndex),
    {
      ...foundTask,
      ...payload,
    },
    ...taskState.slice(foundTaskIndex + 1),
  ];
}

export const TaskReducer = (taskState: any, action: TaskDispatch) => {
  switch (action.type) {
    case 'complete':
      return completeTask(taskState, action.payload);
    case 'undo':
    return undoCompletedTask(taskState, action.payload);
    default:
      return taskState;
  }
}

const TaskProvider = (props: TaskProviderProps) => {
  const context: TaskState = React.useContext(TaskContext);

  const [taskState, taskDispatch] = React.useReducer(TaskReducer, context.taskState);
  return (
    <TaskContext.Provider value={{ taskState, taskDispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };