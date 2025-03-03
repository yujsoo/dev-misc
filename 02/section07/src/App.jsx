import './App.css'
import { useEffect, useState, useRef } from 'react';
import Controller from './components/Controller'
import Viewer from './components/Viewer';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 컴포넌트가 마운트 되었는지 안 되었는지를 체크하는 변수를 useRef를 이용해서 하나 만들어주자.
  const isMount = useRef(false); // : 아직 마운트 되지 않았다 -> false

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, [])

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      //console.log("초기 렌더링 (마운트): useEffect 훅이 실행 if조건 참-> useRef(true)로 바뀜 -> 그 후는 유지!")
      return;
    }
    console.log("update") // "update"는 isMount.current가 true로 바뀐 후, 리렌더링마다 실행
  })
  // 이 방식은 isMount를 사용해 컴포넌트가 처음 마운트될 때만 특정 코드가 실행되도록 하고,
  // 그 이후 리렌더링 시에는 마운트 시에 실행된 코드를 건너뛰도록 만들어줍니다.

  // 3. 언마운트 : 죽음



  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value) }/>
      </section>
      <section>
        <Viewer count={count}></Viewer>
        {count % 2 === 0 ? <Even count={count}></Even> : null }
      </section>
      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  )
}

export default App
