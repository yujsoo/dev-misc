import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getEmotionImage } from "../util/get-emotion-image";
import Button from './Button';
import './DiaryItem.css'


const DiaryItem = ({id,emotionId,createDate,content}) => {
    const nav = useNavigate();

  return (
    <div className='diary-item'>
        <div onClick={() => nav(`/diary/${id}`)}
            className={`img-section img-section-${emotionId}`}>
            <img src={getEmotionImage(emotionId)}/>
        </div>
        <div onClick={() => nav(`/diary/${id}`)} 
            className='info-section'>
            <div className='create-date'>
                {new Date(createDate).toLocaleDateString()}
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
        <div className='button-section'>
            <Button text={"수정하기"} onClick={() => nav(`/edit/${id}`)}/>
        </div>
    </div>
  )
}

export default DiaryItem