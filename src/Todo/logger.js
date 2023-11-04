import { act } from "react-dom/test-utils"
import reducer from "./reducer"

function logger(reducer){
    return (preState, action) => {
        console.group(action.type)
        console.log('Prev State', preState)
        console.log('action', action)

        const newState = reducer (preState,action)
        console.log('Next State', newState)
        
        console.groupEnd()

        return newState
    }
}

export default logger