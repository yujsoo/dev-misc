// 객체 생성
let obj = new Object(); // 객체 생성자
let obj2= {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name : "유지수", // key : value
    age : 29,
    hobby : "코딩",
    "like cat" : true // 뛰어쓰기가 있는 경우에는 "" 감싸기
}

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 방법 (점 표기법, 괄호 표기법)
let name = person.name
console.log(name)

let age = person["age"]

let property = "hobby"
let hobby = person[property]
console.log(hobby) // 코딩

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer"
person["favoriteFood"] = "떡볶이"

console.log(person)

// 3.3 프로퍼티 수정하는 방법
person.job = "educator"
person["favoriteFood"] = "초콜릿"

// 3.4 프로퍼티 삭제하는 방법
delete person.job 
delete person["favoriteFood"]
console.log(person)

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person // person이라는 객체 프로퍼티에 name이라는 프로퍼티가 있냐를 물어보는 것
console.log(result1) // false
