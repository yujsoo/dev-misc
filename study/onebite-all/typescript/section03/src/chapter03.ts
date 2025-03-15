// unknown타입 -> 전체집합
function unknownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c:unknown = true;
    let d:unknown = null;
    let e:unknown = undefined;

    let unknownVar: unknown;

    //let num: number = unknownVar;
    //let str: string = unknownVar;
    //let bool: boolean = unknownVar;
}

// never타입
function neverExam() {
    function neverFunc(): never {
        while (true){}
    }

    // 업캐스팅!
    let num:number = neverFunc();
    let str:string = neverFunc();
    let bool:boolean = neverFunc();

    // let never1: never = 10;
    // let never2: never = 'string';
    // let never3: never = true;
}

// void타입
function voidExam() {
    function voidFunc():void{
        console.log('hi')
        return undefined;
    }
    let voideVar: void = undefined;
}

// any타입 : 치트키
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    //neverVar = anyVar;
}