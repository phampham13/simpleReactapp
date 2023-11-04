import { SET_INPUT, ADD_TODO } from "./constant"

const initState = {
    todos:[],
    todoInput:''
}

function reducer(state, action){
    switch (action.type){
        case SET_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            throw new Error('Invalid action')
    }
}

export {initState}
export default reducer 