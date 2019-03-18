import * as React from 'react';

import './Task.scss';
import locked from '../../../assets/svgs/locked.svg';
import incomplete from '../../../assets/svgs/incomplete.svg';
import completed from '../../../assets/svgs/completed.svg';

export interface TaskProps {
  id: number;
  group: string;
  task: string;
  dependencyIds: number[];
  completedAt: string | null;
}

interface Props extends TaskProps {
  dispatchTask: () => void;
  tasks: TaskProps[];
}

export const Task = (props: Props) => {
  const { dependencyIds, dispatchTask, completedAt, task, tasks } = props;
  const isLocked = dependencyIds.length === 0 ? false : !dependencyIds.every((id: number) => {
    const foundTask = tasks.find((task: TaskProps) => task.id === id);
    return foundTask && foundTask.completedAt ? true : false;
  });
  const icon = isLocked ? locked : completedAt ? completed : incomplete;
  const iconAlt = isLocked ? 'locked icon' : completedAt ? 'completed icon' : 'incompleted icon';

  return (
    <a className={`task-container ${isLocked ? 'task-locked' : ''}`.trim()} onClick={isLocked ? noop : dispatchTask}>
      <article className="task">
        <div className="task-content">
          <div className="task-icon-container">
            <img src={icon} alt={iconAlt} />
          </div>
          <div className="task-meta">
            <h2>{task}</h2>
          </div>
        </div>
      </article>
    </a>
  );

  function noop() { null };
}