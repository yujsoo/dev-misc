// enum타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

enum Language {
    Korean = "ko",
    English = "en"
}

const user1 = {
    name : "유지수",
    role : Role.ADMIN, // 0 <- 관리자
    language: Language.Korean
}
const user2 = {
    name : "김지수",
    role : Role.USER // 1 <- 일반 유저
}
const user3 = {
    name : "박지수",
    role : Role.GUEST // 2 <- 게스트
}

console.log(user1,user2,user3)