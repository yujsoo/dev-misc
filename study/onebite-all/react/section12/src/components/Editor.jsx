import React from 'react'
import './Editor.css'
import EmotionItem from './EmotionItem'
import Button from './Button'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { emotionList } from '../util/constant'
import { getStringDate } from '../util/get-string-date'

// // 데이트 객체를 날짜 -> "2024-02-20" 형태의 문자열로 변환하는 함수
// const getStringDate = (targetDate) => {
//     let year = targetDate.getFullYear();
//     let month = targetDate.getMonth() + 1;
//     let date = targetDate.getDate();

//     if (month < 10) {
//         month = `0${month}`;
//     }
//     if (date < 10) {
//         date = `0${date}`
//     }  
//     return `${year}-${month}-${date}`
// }


const Editor = ({ onSubmit, initData }) => {
    // 사용자가 입력한 일기 내용
    const [input, setInput] = useState({
        createDate:new Date(),
        emotionId: 3,
        content:""
    });

    const nav = useNavigate();

    useEffect(()=> {
        if (initData) {
            setInput({
                ...initData,
                createDate:new Date(Number(initData.createDate))
            })
        }
    },[initData])

    const onChangeInput = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);

        let name = e.target.name;
        let value = e.target.value;

        if (name === 'createDate') {
            value = new Date(value) // 문자열을 Date객체로 변환
        }

        setInput({
            ...input, //기존 값 나열  
            // [e.target.name]:e.target.value 
            // 현재 입력한 요소를 value값으로 수정
            [name] : value
        })
    }

    //const emotionId = 2;

    const onClickSubmitButton = () => {
        onSubmit(input); 
    }

  return (
    <div className='editor'>
        <section className='date-section'>
            <h4>오늘의 날짜</h4>
            <input type="date" name="createDate" id="" value={getStringDate(input.createDate)} onChange={onChangeInput}/>
        </section>
        <section className='emotion-section'>
            <h4>오늘의 감정</h4>
            <div className='emotion-list-wrapper'>
                {emotionList.map((item) => <EmotionItem 
                onClick={() => onChangeInput({
                    target : {
                        name : "emotionId",
                        value : item.emotionId
                    }
                })}
                key={item.emotionId} {...item} isSelected={item.emotionId === input.emotionId }/>)}
            </div>
        </section>
        <section className='content-section'>
            <h4>오늘의 일기</h4>
            <textarea name="content" value={input.content} onChange={onChangeInput} placeholder='오늘은 어땠나요?'/>
        </section>
        <section className='button-section'>
            <Button onClick={() => nav(-1)} text={"취소하기"}/>
            <Button onClick={onClickSubmitButton} text={"작성완료"} type={"POSITIVE"}/>
        </section>
    </div>
  )
}

export default Editor