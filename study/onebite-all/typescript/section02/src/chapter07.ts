// void
// void -> 공허 -> 아무것도 없다.

function func1(): string {
    return "hello"
}
function func2(): void {
    console.log('hello')
}

// let a: void;
// a = 1;
// a = "hello";
// a = undefined;
// a = null;

function func3(): never {
    //무한 루프를 도는 함수
    while (true) {

    }
}

function func4(): never {
    throw new Error();
}

let a: never;
// never타입은 아무런 값도 담지 못함!!