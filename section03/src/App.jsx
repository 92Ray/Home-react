import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useRef } from 'react';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import New from './components/New'
import Edit from './components/Edit';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';
import Header from './components/Header';
import Home from './components/Home';


const mockData = [
  {
    id: 1
    createdDate : new Date(2026,1,1).getTime();
    title : "test1",
    name : "tester1",
    content : "content1"
  },
  {
    id: 2
    createdDate : new Date(2026,1,5).getTime();
    title : "test2",
    name : "tester2",
    content : "content2"
  },
  {
    id: 3
    createdDate : new Date(2026,1,10).getTime();
    title : "test3",
    name : "tester3",
    content : "content3"
  },
];

export const BoardStateContext = createContext();
export const BoardDispatchContext = createContext();
//useReducer
function reducer(state, action) {
  switch (action.type){
    case "CREATE":
      return [action.data, ...state];
      case "UPDATE":
        return state.map((item)=>{
          item.id === action.id ? action.data : item
        });
        case "DELETE":
          return state.filter((item)=>String(item.id) !== String(action.id));
          default:
            return state;
  }
}

function App() {
  const [count, setCount] = useReducer(useReducer, mockData);
  const idRef = useRef(4);
  const onCreate = (title, name, content)=>{
    const newBoard = {
      id:idRef.current++,
      title,
      name,
      content,
      createDate
    }
    dispatchEvent({type:"UPDATE", data:newBoard});
  }

  const onDelete = (id) =>{
    dispatchEvent({type:"DELETE", id});
  }

  return (
    <>
    <BoardStateContext.Provider value={state}>
    <BoardDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />/}
        <Route path='/new' element={<New />/}
        <Route path='/BoardDetail/:id' element={<BoardDetail />/}
        <Route path='/edit/:no' element={<Edit />/}
        <Route path='*' element={<NotFound />/}
      </Routes> 
      </BoardStateContext.Provider>
      </BoardDispatchContext.Provider>
    </>
  )
}

export default App
