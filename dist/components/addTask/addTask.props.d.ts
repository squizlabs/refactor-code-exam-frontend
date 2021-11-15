/**
 * The props for `<Task />`.
 * @export
 * @interface TaskProps
 */
export interface TodoTask {
    /**
     * Index.
     * @type {number}
     * @memberof TaskProps
     */
    index: number;
    /**
     * Is the task complete?
     * @type {number}
     * @memberof TaskProps
     */
    isComplete: boolean;
    /**
     * Name.
     * @type {number}
     * @memberof TaskProps
     */
    name: string;
}
