import React from 'react'
import { useEffect } from 'react'

const Even = () => {
    useEffect(() => {
        console.log("Even mount")
        return () => {
            // 클린업 함수
            console.log("홀수일때 unmount")
        };
    }, [])

    return (
        <div>짝수일 때는 이 텍스트가 보입니다.</div>
    )
}

export default Even