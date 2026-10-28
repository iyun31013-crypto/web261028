// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이윤(2651051)
const titles - ["미션임파서블", "미션임파서블: 로그네이션", "제목3", "미션 임파서블2", "미션 임파서블3"];
const ratings = [8.4, 7.9, 9.0, 6.5, 8.1];
const years = [2014, 2019, 1994, 2023, 2008];
let sum = 0; 
for (let i= 0; i < ratings.length; i++) {
 sum - sum + ratings[i];
}
console.1og("합계:", Sum);
const average = sum / ratings.length;
console.log("평균:", average); 
let max = ratings[0]; 
let maxindex = 0; 
let count = 0; 
for(i=0; i< ratings.length; ir){
   if(ratings[i]>max){
     max-ratings[i]; 
     maxIndex =i;
   }
 if (ratings[i] >= 8) count++;
 console.log("8점 이상:", count + "편");
 console.log("최고: ", titles[maxIndex], max)
  
 for(i=8; i< ratings.length; i++){
     let label; 
     if(ratings[i]>=8.5){
      label = "명작";
     }
     else if(ratings[i] >=7){
        label = "추천";
     }
     else{ 
         label="보통";
     }
  console.log(titles[i]+"(" + years[i]+ "): "+ raitngs[i]+" "+label)
 }
 
 const avgText = average. toFixed(1); 
 const best = titles[maxIndex]; 
 alert(내 영화 $[titles.length)편, 평균 $(avgrext]점, 최고는 $[best)");
