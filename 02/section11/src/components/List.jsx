import React, { useState, useMemo, useContext } from 'react'
import './List.css'
import TodoItem from './TodoItem'
import { TodoStateContext } from '../App'

const List = () => {
  const todo = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilterData = () => {
    if (search == "") {
      return todo
    }
    return todo.filter( (todo) => todo.content.toLowerCase().includes(search.toLowerCase()) )
  }

  const filterTodo = getFilterData();

  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    console.log("getAnalyzedData 호출")
    const totalCount = todo.length; // 전체 할일 카운트
    const doneCount = todo.filter((item) => item.isDone).length; // 완료된 일 카운트
    // filter 메서드는 배열 내에 전체 요소들을 한 번씩 다 순회하기 떄문에 할 일이 많아질수록 오래걸린다
    const notDoneCount = totalCount - doneCount;
 
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  },[todo])
  // 의존성배열 : deps

  return (
    <div className='list'>
        <h4>Todo List</h4>
        <div>
          <div>전체 : {totalCount}</div>
          <div>완료 : {doneCount}</div>
          <div>아직 완료 X : {notDoneCount}</div>
        </div>
        <input type="text" placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch}/>
        <div className='todo-wrapper'>
            { filterTodo.map((item) => {return <TodoItem key={item.id} {...item}/>}) }
        </div>
    </div>
  )
}

export default List