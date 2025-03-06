import React, { useState } from 'react'

const List = ({ phoneList, setPhoneList }) => {
    // 리스트 선택 State
    const [profile, setProfile] = useState(null); // 선택된 프로필
    const [isEditing, setIsEditing] = useState(false); // 수정 중인지 여부
    const [name, setName] = useState(""); // 입력 중인 이름
    const [number, setNumber] = useState(""); // 입력 중인 전화번호
     
    // 리스트 클릭시
    const handleProfileClick = (el) => {
        setProfile(el)
        setName(el.name) // 초기화
        setNumber(el.number) // 초기화
        setIsEditing(false)
    }

    const switchEditMode = () => {
        setIsEditing((prev) => !prev)
        
        if (isEditing) {// 수정 완료 했을때
            setPhoneList((prevList) =>
                prevList.map((item) =>
                    item.id === profile.id
                        ? { ...item, name: name, number: number }
                        : item
                )
            );
            setProfile((prev) => ({ ...prev, name: name, number: number }));
        } 
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePhoneNumberChange = (e) => {
        setNumber(e.target.value)
    }

    return (
        <div className='list'>
            {
                profile ? <div className='selected-profile'>
                    <div className='profile'>
                        <strong>편집하기</strong>
                        <p>
                            이름:
                            {!isEditing ?
                                <b>{name}</b> :
                                <input type="text" name="" id="" value={name} onChange={handleNameChange}/>
                            }
                        </p>
                        <p>전화전호:
                            {!isEditing ?
                                <b>{number}</b> :
                                <input type="text" name="" id="" value={number} onChange={handlePhoneNumberChange}/>
                            }
                        </p>
                    </div>
                    <div className="btns">
                        <button onClick={switchEditMode}>{!isEditing ? "수정" : "수정 완료"}</button>
                        <button>닫기</button>
                        <button>삭제</button>
                    </div>
                </div> : null
            }
            <ul>
                { phoneList.map((item) => (
                    <li key={item.id} onClick={() => handleProfileClick(item)}>
                        <p>이름 : {item.name}</p>
                        <p>전화번호 : {item.number}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List