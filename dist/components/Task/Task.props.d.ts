/**
 * The props for `<Task />`.
 * @export
 * @interface TaskProps
 */
export interface TodoTask {
    /**
     * Is the task complete?
     * @type {boolean}
     * @memberof TaskProps
     */
    isComplete: boolean;
    /**
     * Name.
     * @type {boolean}
     * @memberof TaskProps
     */
    name: string;
}
