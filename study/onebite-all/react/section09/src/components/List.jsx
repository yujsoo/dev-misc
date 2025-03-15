import React, { useState } from 'react'
import './List.css'
import TodoItem from './TodoItem'

const List = ({ todo, onUpdate, onDelete }) => {
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

  return (
    <div className='list'>
        <h4>Todo List</h4>
        <input type="text" placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch}/>
        <div className='todo-wrapper'>
            { filterTodo.map((item) => {return <TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete}/>}) }
        </div>
    </div>
  )
}

export default List