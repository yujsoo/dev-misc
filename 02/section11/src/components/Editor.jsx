import React, { useState, useRef, useContext } from 'react'
import './Editor.css'
import { TodoDispatchContext } from '../App';

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [contents, setContent] = useState("");
  const contentsRef = useRef();

  const onKeyDown = (e) => { // 엔터 클릭시 onSubmit 함수 실행
      if (e.keyCode === 13) {
        onSubmit();
      }
  }

  const onSubmit = () => {
    if (contents == '') {
      contentsRef.current.focus();
      return; // 내용이 없으면 onCreate함수를 호출하지 않도록
    }
    onCreate(contents)
    setContent("") // 추가후 input초기화
  }

  const onChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <div className='editor'>
        <input type='text' placeholder='새로운 할일을 추가하세요' value={contents} onChange={onChange} onKeyDown={onKeyDown} ref={contentsRef}/>
        <button type='button' onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor