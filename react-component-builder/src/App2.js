import React, {useReducer, useContext, createContext} from "react"
import {v4 as uuidv4 } from 'uuid';


const BuildContext = createContext()

const useCustomHook = () => useContext(BuildContext)

const BuildProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, {
        root:[],
        all:[]
    })
    console.log(state, dispatch)
    
    return(
        <BuildContext.Provider value={{state, dispatch}}>{children}</BuildContext.Provider>
    )
}
const reducer =(state, action) =>{
    console.log(action.payload)
    if(action.type === "addContainer"){
        // const newState = Object.assign(state)
        // return {...state, root:{...state.root,  id : action.payload.id, name: action.payload.Compname}}
    const newState = state
    newState.root.push(action.payload)
    return { ...newState }
        
    }
    
}


const Container=()=>{
    // console.log(payload.Compname)
    return <div value="Container">Container</div>
}

const Block=()=>{
    const {state, dispatch} = useCustomHook()
    console.log(dispatch)
    const addItem = () => {
    console.log("clicked");
    dispatch({type:"addContainer", payload:{id:uuidv4(), Compname: "Container"}})
    console.log(state);
    // const {payload} = dispatch
    // console.log(payload)
    }
    // const addOtherItem = () => {
    // console.log("clickedOther");
    // dispatch({type:"addRow", payload:{id:uuidv4(), Compname: "Row"}})
    // console.log(state);
    // }
    return(
    <>
    <div>Hello</div>
    <button onClick={addItem}>addItem</button>
    {/* <button onClick={addOtherItem}>addOtherItem</button> */}
    {Object.keys(state.root).map(item=>{
        return <Container key={item}></Container>
    })}
    </>
    )
}
export default function App() {
  return (
    <div className="App">
        <BuildProvider>
        <Block />
        
        </BuildProvider>
        
    </div>
  );
}