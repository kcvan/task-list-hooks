import * as React from 'react';
import { Link } from 'react-router-dom';


import { TaskGroup } from '../TaskGroup';
import { TaskContext } from '../../../HOCs/TaskProvider';
import {
  countFinishedGroupTasks,
  countGroupTasks,
  getSnakeCase,
  sortTasks,
  SortedTask } from '../../../utils/taskHelpers';
import './TaskGroups.scss';

const TaskGroups = () => {
  const { taskState } = React.useContext(TaskContext);
  const sortedTasks = sortTasks(taskState);

  // implement useEffects here to fetch real data from an api
  
  return (
    <div className="task-groups">
      {sortedTasks.map((taskGroup: SortedTask) => {
        const { group } = taskGroup;
        return (
          <Link className="task-group-link" to={`/group/${getSnakeCase(group)}`} key={group}>
            <TaskGroup group={group} finishedTasks={countFinishedGroupTasks(group, sortedTasks)} totalTasks={countGroupTasks(group, sortedTasks)} />
          </Link>
        );
      })}
    </div>    
  );
}

export default TaskGroups;