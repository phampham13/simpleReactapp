import { useReducer, useRef} from "react";
import { act } from "react-dom/test-utils";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob} from "./actions";
import logger from "./logger";

//import Content from "./Content";

//useState
//1. Xác định init state: 0
//2.Phân tích hành động: Up (state +1 ) Down (state - 1)

//useReducer
//1.InitState
//2.Action :Up (state +1 ) Down (state - 1)
//3. reducer
//4. Dispatch


function App() {
  const iRef = useRef()
  const [state, dispatch] = useReducer(logger(reducer), initState)

  const {job, jobs} = state

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    iRef.current.focus()
  }
  return (
    <div style={{ padding: 10 }}>
      <h3>To do</h3>
      <input
        ref = {iRef}
        placeholder="Enter todo..."
        value={job}
        onChange={(e)=>{
          dispatch(setJob(e.target.value)) //phải có hàm trả về để dispatch có thể mang theo dữ liệu
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index)=>(
          <li key={index}>{job} 
            <span onClick={() => dispatch(deleteJob(index))}>
              &times; 
             </span> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
