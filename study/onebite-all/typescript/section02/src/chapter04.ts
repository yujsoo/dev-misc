//타입 별칭 : 코드의 중복 제거

// 1. type 이름 정하기
type User = {
    id: number,
    name: string,
    nikname: string,
    birth: string
}

// function func() {
//     type User = {};
// }

let user: User = {
    id: 1,
    name: "유지수",
    nikname: "yujsoo",
    birth:"1997.03.08"
}

let user2: User = {
    id: 2,
    name: "아무개",
    nikname: "아무개",
    birth:"1997.04.08"
}

// 인덱스 시그니처 : 타입을 좀더 유연하게 정의할수있게 도와줌
type CountryCodes = {
    // Korea : string,
    // UnitedState: string
    [key : string] : string;
};

let countryCodes: CountryCodes = {
    Korea : 'ko',
    UnitedState: 'us'
}

type CountryNumberCodes = {
    [key : string] : number
    Korea : number; // 이게 꼭 있어야 한다면 이렇게 정의!
}

let countryNumberAndCodes: CountryNumberCodes = {
    Korea : 410,
    // UnitedState: 840
}