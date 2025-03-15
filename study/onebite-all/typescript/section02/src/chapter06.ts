// any
// 특정 변수의 타입을 확실히 모를때
let anyVar: any = 10;
anyVar = "Hello";

anyVar = true;
anyVar = {};
anyVar.toUpperCase();

let num : number = 10;
num = anyVar;

//Unknown
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar 오류 발생

// 타입정제 
if (typeof unknownVar === 'number'){ // 타입이 'number'타입이라고 확신할때
    num = unknownVar;
}