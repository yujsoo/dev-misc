// 데이트 객체를 날짜 -> "2024-02-20" 형태의 문자열로 변환하는 함수
export const getStringDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`
    }  
    return `${year}-${month}-${date}`
}