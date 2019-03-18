import * as React from 'react';

import './TaskGroup.scss';
import groupSvg from '../../../assets/svgs/group.svg';

export interface TaskGroupProps {
  finishedTasks: number;
  group: string;
  totalTasks: number;
}

export const TaskGroup = ({ finishedTasks, group, totalTasks }: TaskGroupProps) => (
  <div className="task-group">
    <div className="task-group-content">
      <div className="group-caret-container">
        <img src={groupSvg} alt="group caret" />
      </div>
      <div className="task-group-meta">
        <h2>{group}</h2>
        <p>
          <span>
            {finishedTasks}
          </span>{' '}
          of{' '}
          <span>
            {totalTasks}
          </span>{' '}
          Tasks Complete
            </p>
      </div>
    </div>
  </div>
);