// 배열
// 우선 배열의 요소 타입을 작성하고 배열임을 알리기 위해 []표시를 넣어줌

let numArr:number[] = [1,2,3]
let strArr:string[] = ['a','b','c'];
let boolArr: Array<boolean> = [true,false,false]

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1,"hello"]

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
]

// 튜플 : 길이와 타입이 고정된 배열, 타입스크립트에만 있음
let tup1: [number,number] = [1,2];
// tup1 = [1,2,3]; 길이를 넘거나 안에 다른 타입이 들어갈수없음

let tup2: [number,string,boolean] = [1,"2",true];

const users: [String,number][] = [
    ['유지수',1],
    ['이아무개',2],
    ['김아무개',3],
    //[5,'박아무개']
    //우리가 배열에 순서나 값의 타입을 잘 지켜야할때 이용하면 유용함~
]