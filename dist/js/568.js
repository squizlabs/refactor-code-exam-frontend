"use strict";
(self["webpackChunksquiz_react_todo"] = self["webpackChunksquiz_react_todo"] || []).push([[568],{

/***/ 568:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Header component.
 * @param {HeaderProps} props Props passed to `<Header />`.
 * @export
 * @returns {JSX.Element} The `<Header />` component.
 */
var Header = function (props) {
    var title = props.title;
    var wrapping_class = 'header__wrapper';
    return ((0,jsx_runtime.jsx)("div", { children: (0,jsx_runtime.jsx)("div", __assign({ className: wrapping_class }, { children: (0,jsx_runtime.jsx)("div", __assign({ className: "header" }, { children: (0,jsx_runtime.jsx)("div", __assign({ className: "header__title" }, { children: title }), void 0) }), void 0) }), void 0) }, void 0));
};

// EXTERNAL MODULE: ./node_modules/recoil/es/recoil.js
var recoil = __webpack_require__(804);
;// CONCATENATED MODULE: ./src/atoms.tsx
/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */

var allTasksList = (0,recoil/* atom */.cn)({
    key: 'allTasksList',
    default: [],
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/DeleteRounded.js + 75 modules
var DeleteRounded = __webpack_require__(977);
;// CONCATENATED MODULE: ./src/components/Task/Task.tsx
var Task_assign = (undefined && undefined.__assign) || function () {
    Task_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Task_assign.apply(this, arguments);
};

/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */




/**
 * Task component.
 * @export
 * @returns {JSX.Element} The `<Header />` component.
 */
var Task = function (props) {
    var _a = (0,recoil/* useRecoilState */.FV)(allTasksList), allTasks = _a[0], updateTasks = _a[1];
    var taskName = props.name;
    var taskIsCompletedFlag = props.isComplete;
    var completeTask = function () {
        var task_index = allTasks.findIndex(function (task) { return task.name === taskName; });
        var newAllTasks = allTasks.map(function (task, index) {
            var updatedTask = Task_assign({}, task);
            if (index === task_index) {
                if (updatedTask.isComplete === true) {
                    updatedTask.isComplete = false;
                }
                else {
                    updatedTask.isComplete = true;
                }
            }
            return updatedTask;
        });
        updateTasks(newAllTasks);
    };
    var removeTask = function () {
        var newAllTasks = allTasks.map(function (task) { return Task_assign({}, task); });
        var task_index = newAllTasks.findIndex(function (task) { return task.name === taskName; });
        if (task_index !== -1) {
            newAllTasks.splice(task_index, 1);
            updateTasks(newAllTasks);
        }
    };
    react.useEffect(function () {
        var getTask = allTasks.filter(function (task) { return task.name === taskName; })[0];
        taskIsCompletedFlag = getTask.isComplete;
    }, [allTasks]);
    var item_className = "task__input";
    if (taskIsCompletedFlag === true) {
        item_className = "task__input checked";
    }
    return ((0,jsx_runtime.jsxs)("div", Task_assign({ className: "task__wrapper" }, { children: [(0,jsx_runtime.jsx)("input", { type: "checkbox", id: taskName, defaultChecked: taskIsCompletedFlag, className: item_className, onChange: function (event) {
                    event.preventDefault();
                    completeTask();
                } }, void 0), (0,jsx_runtime.jsx)("label", Task_assign({ htmlFor: taskName, className: "task__label" }, { children: taskName }), void 0), (0,jsx_runtime.jsx)("a", Task_assign({ href: "#", className: "task__delete", onClick: function (event) {
                    event.preventDefault();
                    removeTask();
                } }, { children: (0,jsx_runtime.jsx)(DeleteRounded/* default */.Z, {}, void 0) }), void 0)] }), void 0));
};

;// CONCATENATED MODULE: ./src/components/TaskList/TaskList.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TaskList_assign = (undefined && undefined.__assign) || function () {
    TaskList_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TaskList_assign.apply(this, arguments);
};

/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */


/**
 * Task List component.
 * @export
 * @returns {JSX.Element} The `<TaskList />` component.
 */
var TaskList = /** @class */ (function (_super) {
    __extends(TaskList, _super);
    // Lifecycle
    function TaskList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    // Render
    TaskList.prototype.renderTasks = function (all_tasks) {
        return all_tasks.map(function (task, task_index) {
            return ((0,jsx_runtime.jsx)("li", TaskList_assign({ className: "tasks-list__item" }, { children: (0,jsx_runtime.jsx)(Task, TaskList_assign({}, task), void 0) }), task_index));
        });
    };
    TaskList.prototype.render = function () {
        var this_component = this;
        var all_tasks = this_component.props.tasks;
        var rendered_list = this_component.renderTasks(all_tasks);
        var tasks_list_display = (0,jsx_runtime.jsx)("ul", TaskList_assign({ className: "tasks-list" }, { children: rendered_list }), void 0);
        // Handle an empty list
        if (all_tasks.length === 0) {
            var message = "You have no tasks - get started by adding one below!";
            var wrappingEmptyClass = 'tasks-list__empty';
            tasks_list_display =
                (0,jsx_runtime.jsx)("div", TaskList_assign({ className: wrappingEmptyClass }, { children: (0,jsx_runtime.jsx)("div", TaskList_assign({ className: "wrapper inner" }, { children: (0,jsx_runtime.jsx)("div", TaskList_assign({ className: "tasks-list__empty-message" }, { children: message }), void 0) }), void 0) }), void 0);
        }
        return ((0,jsx_runtime.jsx)("div", TaskList_assign({ className: "tasks-list__wrapper" }, { children: tasks_list_display }), void 0));
    };
    return TaskList;
}(react.Component));

;

;// CONCATENATED MODULE: ./src/components/TaskList/TaskListWrapper.tsx
var TaskListWrapper_assign = (undefined && undefined.__assign) || function () {
    TaskListWrapper_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TaskListWrapper_assign.apply(this, arguments);
};




/**
 * Task List wrapper component.
 * @export
 * @returns {JSX.Element} The `<TaskListWrapper />` component.
 */
var TaskListWrapper = function () {
    var all_tasks = (0,recoil/* useRecoilValue */.sJ)(allTasksList);
    var props = {
        tasks: all_tasks
    };
    return (0,jsx_runtime.jsx)(TaskList, TaskListWrapper_assign({}, props), void 0);
};

;// CONCATENATED MODULE: ./src/components/addTask/addTask.tsx
var addTask_assign = (undefined && undefined.__assign) || function () {
    addTask_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return addTask_assign.apply(this, arguments);
};



/**
 * Task component.
 * @export
 * @returns {JSX.Element} The `<Header />` component.
 */
var AddTaskToToDoList = function () {
    var _a = (0,recoil/* useRecoilState */.FV)(allTasksList), allTasks = _a[0], updateTasks = _a[1];
    var add = function () {
        var taskName = document.querySelector("#add-tasks--input");
        var name = taskName.value;
        var newAllTasks = allTasks.map(function (task) { return addTask_assign({}, task); });
        var task_index = newAllTasks.findIndex(function (task) { return task.name === name; });
        if (task_index === -1) {
            var myNewTask = {
                name: name,
                isComplete: false
            };
            newAllTasks.push(myNewTask);
            updateTasks(newAllTasks);
        }
    };
    return ((0,jsx_runtime.jsxs)("div", addTask_assign({ className: "add-tasks__wrapper" }, { children: [(0,jsx_runtime.jsx)("input", { type: "text", id: "add-tasks--input" }, void 0), (0,jsx_runtime.jsx)("a", addTask_assign({ href: "#", onClick: function (event) {
                    event.preventDefault();
                    add();
                } }, { children: "Add" }), void 0)] }), void 0));
};

;// CONCATENATED MODULE: ./src/components/_global/App.tsx
var App_assign = (undefined && undefined.__assign) || function () {
    App_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return App_assign.apply(this, arguments);
};





/**
 * ToDo App
 * @export
 * @returns {JSX.Element} The `<App />` component.
 */
var App = function () {
    var app_title = "Things to remember";
    return ((0,jsx_runtime.jsx)("div", App_assign({ className: "app__wrapper" }, { children: (0,jsx_runtime.jsxs)("div", App_assign({ className: "todo__wrapper" }, { children: [(0,jsx_runtime.jsx)(Header, { title: app_title }, void 0), (0,jsx_runtime.jsxs)(recoil/* RecoilRoot */.Wh, { children: [(0,jsx_runtime.jsx)(TaskListWrapper, {}, void 0), (0,jsx_runtime.jsx)(AddTaskToToDoList, {}, void 0)] }, void 0)] }), void 0) }), void 0));
};

;// CONCATENATED MODULE: ./src/loader.tsx

/*!
 * @license
 * Copyright Squiz Australia Pty Ltd. All Rights Reserved.
 */



react_dom.render((0,jsx_runtime.jsx)(App, {}, void 0), document.querySelector("#react__app-wrapper"));


/***/ })

}]);
//# sourceMappingURL=568.js.map