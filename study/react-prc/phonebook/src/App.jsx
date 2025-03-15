import './App.css'
import { useState } from 'react'
import { v4 } from 'uuid'
import Header from './components/Header'
import Register from './components/Register'
import List from './components/List'
import Search from './components/Search'

function App() {
  const [phoneList, setPhoneList] = useState([]);  
 
  const onRegister = (name,number) => {
    const newPhone = {
      id : v4(), // 고유 id 생성
      name : name,
      number : number
    }

    setPhoneList((prevList) => [...prevList,newPhone])
  }

  return (
    <div className='book-wrap'>
      <Header/>
      <Register onRegister={onRegister}/>
      <Search/>
      {
        phoneList.length === 0 ? 
        <div className='greeting-text'>전화번호를 등록하면 여기에 표시돼요 🙂</div> : 
        <List phoneList={phoneList} setPhoneList={setPhoneList}></List>
      }
    </div>
  )
}

export default App
