// const moduleData = require("./math");
// console.log(moduleData) // { add: [Function: add], sub: [Function: sub] }
// console.log(moduleData.add(1,2)) // 3
// console.log(moduleData.sub(1,2)) // -1

// 객체 구조 분해 할당
// add와 sub는 각각 require("./math")에서 가져온 함수에 직접 할당
// const { add , sub } = require("./math");

// // add와 sub 변수를 통해 각 함수를 사용
// console.log(add(1,2)) // 3
// console.log(sub(1,2)) // -1

//console.log("안녕 node.js")

// node src/index.js => 자바스크립트 코드 간단하게 실행

// import mul from './math.js';
// export default로 기본 값으로 내보내진 함수는 중괄호 없이 작성
// 기본값은 불러올 때 작명도 가능 multiply -> mul

// import { add, sub } from './math.js';

// 위에 처럼 동일한 경로로부터 값을 불러오는 import문이 여러개라면 이렇게 합치자
import mul, { add, sub } from './math.js'

// console.log(add(1,2)) // 3
// console.log(sub(1,2)) // -1
// console.log(mul(1,3))


import randomColor from 'randomcolor'
// 라이브러리에서 어떠한 값을 가져올 때는 from 뒤에 라이브러리의 이름만 명시하자.

const color = randomColor();
console.log(color);