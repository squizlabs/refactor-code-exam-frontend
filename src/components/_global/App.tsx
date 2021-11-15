/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

import React from 'react';
import { Header } from './Header';
import { TaskListWrapper } from 'components/TaskList/TaskListWrapper';
import { AddTaskToToDoList } from './addTask';
import { RecoilRoot } from 'recoil';

/**
 * ToDo App
 * @export
 * @returns {JSX.Element} The `<App />` component.
 */
export const App = (): JSX.Element => {
    const app_title = "Things to remember";

  return (
    <div className="app__wrapper">
        <div className="todo__wrapper">
            <Header title={app_title} />
            <RecoilRoot>
                <TaskListWrapper />
                <AddTaskToToDoList />
            </RecoilRoot>
        </div>
    </div>
  );
};
