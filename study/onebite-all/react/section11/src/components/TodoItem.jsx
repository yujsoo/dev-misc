import React, { memo, useContext } from 'react'
import './TodoItem.css'
import { TodoDispatchContext } from '../App'

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext)
  const onChangeCheckbox = () => {
    onUpdate(id)
  }
  const onClickDeleteButton = () => {
    onDelete(id)
  }

  return (
    <div className="todo-item">
        <input type='checkbox' checked={isDone} onChange={onChangeCheckbox}/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

// 고차 컴포넌트 (HOC)
// export default memo (TodoItem, (prevProps, nextProps) => {
//   //반환값에 따라, Props가 바뀌었는지 안바뀌었지 판단 
//   // T-> Props 바뀌지 않음 -> 리렌더링 X 
//   // F-> Props 바뀜-> 리렌버링 0
//   if (prevProps.id != nextProps.id) return false; 
//   if (prevProps.isDone !== nextProps. isDone) return false;
//   if (prevProps.content != nextProps.content) return false;
//   if (prevProps.date != nextProps.date) return false;
  
//   // 위 조건이 모두 만족되지 않으면 : prevProps와 nextProps의 값들이 모두 동일하면 true를 반환 -> 리렌더링을 건너뛰게 한다.
//   return true;
// });

export default memo(TodoItem)