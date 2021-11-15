import { TodoTask } from "components/_global/Task.props";

/**
 * The props for `<Header />`.
 * @export
 * @interface HeaderProps
 */
export interface TaskListProps {
  /**
   * Tasks.
   * @type {Array<JSX.Element>}
   * @memberof TaskListProps
   */
  tasks: Array<TodoTask>;
}
