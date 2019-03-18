import * as React from 'react';
import { RouteProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

import { Task, TaskProps } from '../../shared/Task';
import { getGroupTasks, getGroupFromSnakeCase } from '../../../utils/taskHelpers';
import { TaskContext } from '../../../HOCs/TaskProvider';
import './Group.scss';

const Group = ({ location }: RouteProps) => {
  const { taskState, taskDispatch } = React.useContext(TaskContext);
  const group = location ? location.pathname.split('/group/')[1] : '';
  const tasks = getGroupTasks(group, taskState);

  // implement useEffects here to fetch real data from an external api instead of context api

  return (
    <section className="group">
      <header>
        <h1>
          {getGroupFromSnakeCase(group, tasks)}
        </h1>
        <Link className="all-groups" to="/">
          All Groups
        </Link>
      </header>
      <div className="group-content">
        {tasks.map((task: TaskProps) => (
          <Task dispatchTask={dispatchHandler(task.completedAt, task)} tasks={taskState} {...task} key={task.id} />
        ))}
      </div>
    </section>
  );

  function dispatchHandler(completedAt: string | null, task: TaskProps) {
    return completedAt
      ? () => taskDispatch({ type: 'undo', payload: { ...task, completedAt: null } })
      : () => taskDispatch({ type: 'complete', payload: { ...task, completedAt: new Date() } });
  }
}

export default withRouter(Group);