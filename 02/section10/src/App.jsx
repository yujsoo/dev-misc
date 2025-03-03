import './App.css'
import { useState, useRef, useReducer, useCallback } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "노래 연습하기",
    date : new Date().getTime(),
  }
]

function reducer(state,action){
  switch(action.type){
    case 'CREATE' : return [action.data, ...state]
    case 'UPDATE' : 
      return state.map( (item) => item.id === action.targetId ? {...item, isDone : !item.isDone} : item)
    case 'DELETE' :
      return state.filter( (item) => item.id !== action.targetId )
    default : return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);
  
  const onCreate = useCallback((contents) => {
    dispatch({
      type : "CREATE",
      data : {
          id : idRef.current++,
          isDone : false,
          content : contents,
          date : new Date().getTime(),
      }
    })
  },[])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type:"UPDATE",
      targetId : targetId
    })
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId : targetId
    })
  },[])

  /*
  // 함수 메모제이션
  // 빈 배열로 전달시, 마운트 될 때 즉 함수를 딱 한 번만 생성하고 그 뒤는 실행 X
  const func = useCallback(() => {

  },[])
  */

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
