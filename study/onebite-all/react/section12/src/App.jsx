import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
import { useReducer, useRef, createContext, useEffect, useState } from 'react';

function reducer(state,action){
  let nextState;

  switch(action.type) {
    case "INIT" :
      return action.data
    case 'CREATE' : 
      {nextState = [action.data, ...state]
        break;
      }
    case 'UPDATE' : {
      nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item )
      break;
    }
    case 'DELETE' : {
      nextState =  state.filter((item) => String(item.id) != String(action.id))
      break;
    }
    default : return state;
  }
  localStorage.setItem('diary',JSON.stringify(nextState))
  return nextState;
}

// 일기 데이터를 공급할 컨텍스트부터 만들기
export const DiaryStateContext = createContext();

// 함수 공급할 컨텍스트 만들기
export const DiaryDispatchContext = createContext();


function App() {
  // 로딩상태 만들어주기
  const [isLoading, setIsLoading] = useState(true);

  // 일기관리 데이터
  const [data, dispatch] = useReducer(reducer,[]);
  const idRef = useRef(0);

  useEffect(() => {
    const storeData = localStorage.getItem('diary')
    if (!storeData) {
      setIsLoading(false)
      return
    }
    const parseData = JSON.parse(storeData)
    //console.log(parseData)
    if (!Array.isArray(parseData)) { //배열 형태가 아니라면
      setIsLoading(false)
      return; // 종료
    }
    
    let maxId = 0;
    parseData.forEach(item => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    });
    //console.log(maxId)
    idRef.current = maxId + 1;
    
    dispatch({
      type:"INIT",
      data:parseData
    })
    setIsLoading(false)
  },[])

  //localStorage.setItem('test','hello')
  //localStorage.setItem('person', JSON.stringify({name : '유지수'}))
  // 로컬스토리지는 모든 데이터들을 문자열 형태로 보관 -> 객체타입의 값은 어떻게 해야하냐 json.stringify 문자열 형태로 변환 필요

  //console.log(localStorage.getItem('test'))
  //console.log(JSON.parse(localStorage.getItem('person'))) //객체모양의 문자열 출력 -> JSON.parse를 통해 다시 객체화

  //localStorage.removeItem('test')

  // 새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current++,
        createDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type:"UPDATE",
      data:{
        id,
        createDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type:"DELETE",
      id
      
    })
  }

  if (isLoading) {
    return <div>데이터 로딩중입니다!</div>
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate,
          onUpdate,
          onDelete
        }}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/new" element={<New></New>}></Route>
            <Route path="/diary/:id" element={<Diary></Diary>}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>
            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
