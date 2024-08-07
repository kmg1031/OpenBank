const express = require('express');
const app = express();
const port = 3000; // 서버가 사용할 포트 번호

// JSON 파싱 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 콜백을 받을 엔드포인트 설정
app.get('/callback', (req, res) => {
    const authorizationCode = req.query.code; // Authorization Code 추출

    console.log('Authorization Code received:', authorizationCode);

    // Authorization Code를 사용하여 추가 작업을 수행하거나, 클라이언트에 응답
    res.send(`Authorization Code: ${authorizationCode}`);
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
