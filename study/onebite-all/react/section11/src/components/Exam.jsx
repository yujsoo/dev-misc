import React from 'react'
import { useReducer } from 'react'

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state,action){
    console.log(state,action)
    switch (action.type) {
        case 'INCREASE': return state + action.data;
        case 'DECREASE': return state - action.data;
        default : return state;
    }

    /*
    if (action.type === 'INCREASE') {
        return state + action.data
    }
    else if(action.type === 'DECREASE'){
        return state - action.data
    }
    */
    // reducer 함수안에 액션들의 타입이 많아진다면,,? if문보다는 switch문으로 작성하는게 일반적임
}

const Exam = () => {
    // dispatch : 발송하다, 급송하다
    // -> 상태변화가 있어야 한다는 사실을 알리는 , 발송하는 함수
    const [state, dispatch] = useReducer(reducer,0); // state의 초기값 -> 0

    const onClickPlus = () => {
        // 인수 : 상태가 어떻게 변화되길 원하는지 인수 전달
        // 객체형태로 전달 -> 액션 객체
        dispatch({
            type : "INCREASE",
            data : 1, // 1씩 증가시켜라
        })
    }
    // 정리 : dispatch를 호출하게 되면 function reducer 함수가 호출이 되고 액션 객체가 reducer 함수의 매개변수로 전달이 된다!

    const onClickMinus = () => {
        dispatch({
            type : "DECREASE",
            data : 1, // 1씩 증가시켜라
        })
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )
}

export default Exam