/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */
import React from 'react';
import { TaskListProps } from './TaskList.props';
declare type MyState = {};
/**
 * Task List component.
 * @export
 * @returns {JSX.Element} The `<TaskList />` component.
 */
export declare class TaskList extends React.Component<TaskListProps, MyState> {
    constructor(props: TaskListProps);
    renderTasks(all_tasks: any): any;
    render(): JSX.Element;
}
export {};
