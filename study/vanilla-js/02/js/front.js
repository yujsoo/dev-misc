// 랜덤 숫자 게임
// 1. 시작 버튼 클릭시 랜덤으로 숫자가 5개 나옴 (범위:1-20)
// 2. 번호 5개 모두 더해서 30보다 작으면 진다.
// 3. 지면 다시 도전하세요! / 이기면 짝짝짝!


// 랜덤 숫자 생성 함수
const randomMade = function(){
    const arr = []; // 숫자 넣을 빈 배열 생성
    let sum = 0;

    for (let i = 0; i < 5; i++){
        //console.log(i)
        const randomNumber = Math.floor(Math.random() * 21) // 1-20 가져오기

        arr.push(randomNumber);
        //console.log(arr);
    }
    document.querySelector('.txt').textContent = arr; 
    
    for (const num of arr) sum += num
    //console.log(sum);
    alertFunc(sum)
};

// 결과 관련 함수
function alertFunc(sumEl){
    if (sumEl < 40) {
        document.querySelector('.result').textContent = `숫자의 합은 ${sumEl}입니다! 짝짝짝 👏`;
    } else {
        document.querySelector('.result').textContent = `숫자의 합은 ${sumEl}입니다! 다시 도전하세요 🥲`;
    }
}

// 시작버튼 클릭시 이벤트
document.querySelector('#random-btn').addEventListener('click',function(){
    randomMade();
    document.querySelector('.result').style.display = "block";
});

