// 심플한 계산 기능 -> math 모듈
export function add(a,b) {
    return a + b;
}

export function sub(a,b) {
    return a - b;
}

export default function multiply(a,b) {
    return a * b;
}

// CJS (Common JS 모듈 시스템)
// 모듈로부터 특정 값을 내보내고 또 다른 모듈에서 require로 불러와서 내보내진 값들을 사용할 수 있는 방법
// module.exports = {
//     add : add,
//     sub : sub
// }


// ES 모듈 시스템
// export { add, sub };
