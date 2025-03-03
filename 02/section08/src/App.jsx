import './App.css'
import { useState, useRef } from 'react'
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

function App() {
  const [todo, setTodo] = useState(mockData);
  const idRef = useRef(3);
  
  const onCreate = (contents) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : contents,
      date : new Date().getTime(),
    }

    setTodo([newTodo,...todo])
  }

  const onUpdate = (targetId) => {
    // todo State 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수 : todo 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodo(todo.map( (item) => item.id === targetId ? {...item, isDone : !item.isDone} : item ))
  }

  const onDelete = (targetId) => {
    setTodo(todo.filter((item) => item.id !== targetId));
  }

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
