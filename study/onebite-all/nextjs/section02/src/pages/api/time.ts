import type { NextApiRequest, NextApiResponse } from "next";
//현재시간의 api를 반환
export default function handler(
    req: NextApiRequest, //요청 객체, 클라이언트가 보낸 데이터를 읽을 때
    res: NextApiResponse, //응답 객체, 클라이언트로 데이터를 보낼 때
){
    const date = new Date();
    res.json({time:date.toLocaleString()})
}