import React from 'react'

const Button = ({ text, color="black", children }) => {
    // console.log(text,color)
    
    // SyntheticBaseEvent (합성 이벤트 객체) _ 우리가 모든 브라우저에서 사용할 수 있는 통합된 규격의 이벤트 객체
    const onClickButton = (e) => {
        console.log(e) // SyntheticBaseEvent
        console.log(text)
    }

    return (
        <button 
            onClick={ onClickButton }
            style={{color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    )
}

// defaultProps를 설정하여 기본 props 값을 지정
// 이 방식은 React의 최신 버전에서는 함수형 컴포넌트에서 defaultProps를 지원하지 않는다.
// 매개변수에 기본값을 지정하는 방법 권장!
// Button.defaultProps = {
//     color: "black",
// }

export default Button

