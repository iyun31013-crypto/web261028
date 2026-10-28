// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이름(학번)
const titles = ["제목1", "제목2", "제목3", "제목4", "제목5"];
const ratings = [8.4, 7.9, 9.0, 6.5, 8.1];
const years = [2014, 2019, 1994, 2023, 2008];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
 sum = sum + ratings[i];
}
console.log("합계:", sum);





// document.write("외부 스크립트 방법");

console.log("콘솔창에 나와야 하는 내용");

var num = 10 + 20;

console.log(num);
                                                                  
let sum = 80 + 1234;

console.log(sum);

let string1 = "Hello, World";
let string2 = '시네마 웹사이트 "Cinema Website"에 오신 것을 환영합니다.';
console.log(string1, string2);

let dan = 3;
let gugu = 8;
let string = `${dan} 곱하기 $(gugu)은/는 ${dan * gugu}입니다.`;
console.log(string);

let studentScore = [80, 70, 90, 60];

console.log(studentScore);
console.log(studentScore[2]);

let stdScore ={
    koreanScore: 80,
    englishScore: 70,
    mathScore: 90,
    scienceScore: 60
};

console.log(stdScore);
console.log(stdScore.koreanScore);

for(dan = 2; dan<=9; dan++){
   for(let i=1; i<=9; i++){
       console.log(`${dan} X ${i} = ${dan * i}`);
    }
    console.log(' ');
}
