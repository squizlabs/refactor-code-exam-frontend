/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

import React from 'react';
import { TaskListProps } from './TaskList.props';
import { TodoTask } from 'components/_global/Task.props';
import { Task } from 'components/_global/Task';

type MyState = {};

/**
 * Task List component.
 * @export
 * @returns {JSX.Element} The `<TaskList />` component.
 */
 export class TaskList extends React.Component<TaskListProps, MyState> {

    // Lifecycle

    constructor(props: TaskListProps) {
        super(props);

        this.state = {};
    }

    // Render
    renderTasks(all_tasks: any) {
        return all_tasks.map(function(task: any, task_index: any) {
            return (
                <li key={task_index} className="tasks-list__item">
                    <Task {...task} />
                </li>
            );
        });
    }

    render() {
        var this_component = this;
        const all_tasks = this_component.props.tasks;
        const rendered_list = this_component.renderTasks(all_tasks);
        let tasks_list_display = <ul className="tasks-list">{rendered_list}</ul>;

        // Handle an empty list
        if(all_tasks.length === 0) {
            const message = "You have no tasks - get started by adding one below!";
            let wrappingEmptyClass = 'tasks-list__empty';

            tasks_list_display =
                <div className={wrappingEmptyClass}>
                    <div className="wrapper inner">
                        <div className="tasks-list__empty-message">{message}</div>
                    </div>
                </div>;
        }

        return (
            <div className="tasks-list__wrapper">
                {tasks_list_display}
            </div>
        );
    }

};
