/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

import React from 'react';
import { useRecoilValue } from 'recoil';
import { allTasksList } from 'src/atoms';
import { TaskList } from './TaskList';
import { TaskListProps } from './TaskList.props';
import { TodoTask } from "components/_global/Task.props";

/**
 * Task List wrapper component.
 * @export
 * @returns {JSX.Element} The `<TaskListWrapper />` component.
 */
 export const TaskListWrapper = (): JSX.Element => {
    const all_tasks = useRecoilValue(allTasksList) as Array<TodoTask>;

    let props: TaskListProps = {
        tasks: all_tasks
    };

    return <TaskList {...props} />
};
