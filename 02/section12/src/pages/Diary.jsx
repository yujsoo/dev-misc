import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import { useNavigate, useParams } from 'react-router-dom'
import useDiary from '../hooks/useDiary'
import { getStringDate } from '../util/get-string-date'
import usePageTitle from '../hooks/usePageTitle'

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const currentDiaryItem = useDiary(params.id)
  //console.log(currentDiaryItem)
    usePageTitle(`${params.id}번 일기`)
  
  if (!currentDiaryItem) {
    return <div>데이터 로딩중...</div>
  }
  const {createDate, emotionId, content} = currentDiaryItem;
  const title = getStringDate(new Date(createDate));

  return (
    <div>
      <Header 
        title={`${title} 기록`} 
        leftChild={<Button text={"< 뒤로"} onClick={() => nav(-1)}/>} 
        rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)}/>}
      />
      <Viewer emotionId={emotionId} content={content}/>
    </div>
  )
}

export default Diary
