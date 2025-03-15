// function returnFalse() {
//     console.log("false 함수")
//     return false
// }

// function returnTrue() {
//     console.log("true 함수")
//     return true
// }

// console.group(returnFalse() && returnTrue())

// 단략 평가 활용 사례
function printName(person) {
    // if (!person) {
    //     console.log("person에 값이 없음")
    //     return
    // } 이렇게 쓰지않고 falsy한 값 이용하기
    const name = person && person.name;
    console.log(name || "person의 값이 없음")
}