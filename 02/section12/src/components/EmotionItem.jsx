import React from 'react'
import './EmotionItem.css';
import { getEmotionImage } from "../util/get-emotion-image"

const EmotionItem = ({emotionId,emotionName,isSelected,onClick}) => {
  return (
    <div onClick={onClick} className={`emotion-item ${isSelected ? `emotion-item-on-${emotionId}`: ""}`}>
        <img src={getEmotionImage(emotionId)} className='emotion-img' alt="" />
        <div className='emotion-name'>{emotionName}</div>
    </div>
  )
}

export default EmotionItem