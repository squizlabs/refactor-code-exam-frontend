/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

import { atom } from 'recoil';
import { TodoTask } from 'components/_global/Task.props';

export const allTasksList = atom({
  key: 'allTasksList',
  default: [] as Array<TodoTask>,
});
