/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

import { add } from 'lodash';
import React from 'react';
import { useRecoilState } from 'recoil';
import { allTasksList } from 'src/atoms';
import { TodoTask } from './Task.props';

/**
 * Add Task component.
 * @export
 * @returns {JSX.Element} The `<AddTaskToToDoList />` component.
 */
export const AddTaskToToDoList = (): JSX.Element => {
  const [allTasks, updateTasks] = useRecoilState(allTasksList);

  const add = (): void => {
    let taskName = document.querySelector("#add-tasks--input") as HTMLInputElement;
    let name = taskName.value as string;

    let newAllTasks = allTasks.map((task) => { return {...task} });
    var task_index = newAllTasks.findIndex((task: TodoTask) => task.name === name);
    if (task_index === -1) {
        const myNewTask: TodoTask = {
            name: name,
            isComplete: false
        };
        newAllTasks.push(myNewTask);
        updateTasks(newAllTasks);
    }
  };

  return (
    <div className="add-tasks__wrapper">
        <input type="text" id="add-tasks--input" />
        <a href="#" onClick={(event): void => {
            event.preventDefault();
            add();
        }}>Add</a>
    </div>
  );
};
