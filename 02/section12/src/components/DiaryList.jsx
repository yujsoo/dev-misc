import React, { useState } from 'react'
import Button from './Button'
import DiaryItem from './DiaryItem'
import './DiaryList.css'
import { useNavigate } from 'react-router-dom'

const DiaryList = ( {data} ) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  const getSortDate = () => {
    return data.toSorted((a,b) => {
      if (sortType === 'oldest') {
        return Number(a.createDate) - Number(b.createDate)
      }else{
        return Number(b.createDate) - Number(a.createDate)
      }
    })
  }

  const sortedData = getSortDate();

  return (
    <div className='diary-list'>
        <div className='menu-bar'>
            <select onChange={onChangeSortType}>
                <option value={"latest"}>최신순</option>
                <option value={"oldest"}>오래된 순</option>
            </select>
            <Button onClick={() => nav("/new")} text={"새로운 일기 쓰기"} type={"POSITIVE"}/>
        </div>
        <div className='list-wrapper'>
            {sortedData.map((item) => <DiaryItem key={item.id} {...item}></DiaryItem>)}
        </div>
    </div>
  )
}

export default DiaryList