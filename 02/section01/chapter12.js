// 함수 표현식과 화살표 함수
function funcA() { // 선언식 : 변수의 값으로써 담기지 않은 것
    console.log("funcA")
}
let varA = funcA;
console.log(varA) // 함수 자체가 출력
varA() // 출력 : funcA 

// 값으로써 함수 생성 -> 함수 표현식 : 호이스팅 X
let varB = function (){
    console.log("funcB")
}
varB()

// 2. 화살표 함수
let varC = (value) => {
    console.log(value)
    return value + 1
}
console.log(varC(10))