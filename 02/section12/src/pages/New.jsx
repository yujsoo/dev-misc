import React from 'react'
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from '../components/Editor'
import { useNavigate } from "react-router-dom"
import { useContext } from 'react'
import { DiaryDispatchContext } from '../App'
import usePageTitle from '../hooks/usePageTitle'

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext)
  const nav = useNavigate();
  usePageTitle('새 일기 쓰기')

  const onSubmit = (input) => {
    onCreate(
      input.createDate.getTime(), 
      input.emotionId, 
      input.content
    );
    // 추가 후 홈으로 이동 , 뒤로가기 방지 (뒤로가기를 방지하면서 페이지를 이동시키는 옵션 :replace)
    nav('/',{replace:true})
  }

  return (
    <div>
      <Header title={"새 일기 쓰기"} leftChild={<Button text={"< 뒤로"} onClick={() => nav(-1)}/>}></Header>
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  )
}

export default New
