const initialState = {
    tasks: [
        { name: 'task 2', id: 112, description: 'do list', status: 'todo', priority: 1 },
        { name: 'task 3', id: 113, description: 'do homework', status: 'progress', priority: 1 },
        { name: 'task 4', id: 114, description: 'do articles', status: 'review', priority: 1 },
        { name: 'task 5', id: 115, description: 'do list of profitable goods', status: 'done', priority: 1 },
    ],
    statuses: [
        'todo', 'progress', 'review', 'done',
    ],
    priorities: [1, 2, 3],
    appName: 'Kanban Board App'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TASK':
            return state;
        case 'CHANGE_PRIORITY_UP':
            const newTasks=state.tasks.map(task => task.id === action.payload ? { ...task, priority: task.priority + 1 } : task )
            return {...state, tasks: newTasks};

        case 'CHANGE_PRIORITY_DOWN':
            const newTasks1=state.tasks.map(task => task.id === action.payload ? { ...task, priority: task.priority -1 } : task )
            return {...state, tasks: newTasks1};


        default:
            return state;
    }
};

export default reducer