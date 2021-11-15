/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

import React from 'react';
import { useRecoilState } from 'recoil';
import { allTasksList } from 'src/atoms';
import { TodoTask } from './Task.props';
import { DeleteRounded } from '@material-ui/icons';

/**
 * Task component.
 * @export
 * @returns {JSX.Element} The `<Header />` component.
 */
export const Task = (props: TodoTask): JSX.Element => {
  const [allTasks, updateTasks] = useRecoilState(allTasksList);
  const taskName = props.name;
  let taskIsCompletedFlag = props.isComplete;

  const completeTask = (): void => {
    var task_index = allTasks.findIndex((task: TodoTask) => task.name === taskName);
    let newAllTasks = allTasks.map((task, index) => {
        let updatedTask = {...task};
        if (index === task_index) {
            if (updatedTask.isComplete === true) {
                updatedTask.isComplete = false;
            } else {
                updatedTask.isComplete = true;
            }
        }
        return updatedTask;
    });
    updateTasks (newAllTasks);
  };

  const removeTask = (): void => {
    let newAllTasks = allTasks.map((task) => { return {...task} });
    var task_index = newAllTasks.findIndex((task: TodoTask) => task.name === taskName);
    if (task_index !== -1) {
        newAllTasks.splice(task_index, 1);
        updateTasks(newAllTasks);
    }
  };

  React.useEffect((): void => {
    const getTask = allTasks.filter((task: TodoTask) => task.name === taskName)[0];
    taskIsCompletedFlag = getTask.isComplete;
  }, [allTasks]);

  var item_className = "task__input";
  if(taskIsCompletedFlag === true) {
    item_className = "task__input checked";
  }

  return (
    <div className="task__wrapper">
        <input type="checkbox" id={taskName} defaultChecked={taskIsCompletedFlag} className={item_className} onChange={(event): void => {
            event.preventDefault();
            completeTask();
        }}/>
        <label htmlFor={taskName} className="task__label">{taskName}</label>
        <a href="#" className="task__delete" onClick={(event): void => {
            event.preventDefault();
            removeTask();
        }}>
            <DeleteRounded />
        </a>
    </div>
);
};
