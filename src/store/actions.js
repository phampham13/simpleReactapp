import { SET_INPUT, ADD_TODO } from "./constant";

export const setInput = payload => ({
    type: SET_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})