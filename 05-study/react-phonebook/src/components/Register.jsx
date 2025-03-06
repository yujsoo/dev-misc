import React from 'react'
import { useState } from 'react'

const Register = ({ onRegister }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    
    // 이름 검색 함수 
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    // 전화번호 검색 함수 
    const handlePhoneNumberChange = (e) => {
        setNumber(e.target.value)
    }

    //  등록 함수
    const onSubmit = () => {
        onRegister(name,number);
        setName("");
        setNumber("");
    }

    return (
    <div className='register-box'>
        <h2>번호 등록</h2>
        <div className="input-box">
            <div>
                <div>
                    <label htmlFor="">이름</label>
                    <input type="text" name="" id="" value={name} onChange={handleNameChange}/>
                </div>
                <div>
                    <label htmlFor="">전화번호</label>
                    <input type="tel" name="" id="" value={number} onChange={handlePhoneNumberChange}/>
                </div>
            </div>
            <button onClick={onSubmit}>등록</button>
        </div>
    </div>
  )
}

export default Register