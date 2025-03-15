// 함수선언
// function greeting(){
//     console.log("안녕하세요")
// }
// console.log("호출 전")
// greeting()
// console.log("호출 후")
// 함수선언 -> 호출 전 -> 안녕하세요 -> 호출 후


// function getArea(width, height){ // 매개변수
//     let area = width * height;

//     console.log(area)
// }

// getArea(10,20); // 인수


function getArea(width, height){ // 매개변수
    let area = width * height;
    function another(){
        console.log("another")
    }
    another()
    return area //반환 값
}
let area1 = getArea(10,20);
console.log(area1)