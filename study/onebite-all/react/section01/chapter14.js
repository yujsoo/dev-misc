// 스코프
// -> 전역 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a)
    
    function funcB(){
        console.log("함수 안 스코프")
        //함수도 지역 스코프를 갖는다.
    }
}
funcA()

if(true) {
    let c = 1;
}
//console.log(c)
for (let i = 0; i < 10; i++) {
    let d = 1;
    //console.log(i)
    function funcB(){
        console.log("조건문 안 스코프")
        //지역 스코프를 갖지 않음.
    }
}
//console.log()
funcB();