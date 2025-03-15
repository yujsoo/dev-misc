//object : 구조를 기준으로 타입을 정한다. -> 구조적 타입 시스템 -> property based TS
let user: {
    id?:number;
    name:string;
} = {
    id: 1,
    name: "유지수"
}

let config: {
    readonly apiKey: string;
} = {
    apiKey: "my api key"
}

//config.apiKey = 'aaa'