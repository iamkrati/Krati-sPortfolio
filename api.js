var  totalSolvedQuestions = 0;
var hardQues=0;
var mediumQues=0;
var easyQues=0;
fetch('https://leetcode-stats-api.herokuapp.com/Krati_Goyal').then(response=>
{
  return response.json();
}).then(data=>{
    var a=data.totalQuestions;
    console.log(a);
  console.log(data.totalSolved);
  //////////////
  totalSolvedQuestions = document.getElementById("all").innerHTML=data.totalSolved
document.getElementById("allques").innerHTML=data.totalQuestions
////
document.getElementById("hard").innerHTML=data.hardSolved
hardQues=data.hardSolved;
document.getElementById("hardques").innerHTML=data.totalHard
////
document.getElementById("medium").innerHTML=data.mediumSolved
document.getElementById("mediumques").innerHTML=data.totalMedium
mediumQues=data.mediumSolved;
////
document.getElementById("easy").innerHTML=data.easySolved
document.getElementById("easyques").innerHTML=data.totalEasy
easyQues=data.easySolved;
drawChart();
})
.catch(error=>{
    console.log(error);
});

// // pie chart
// var arr=new Array(2);
// fir(int )
function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['All',totalSolvedQuestions],
  ['Hard',hardQues],
  ['Medium',mediumQues],
  ['Easy',easyQues],    
]);

var options = {
  is3D:true,
  backgroundColor: 'transparent'
};

var chart = new google.visualization.PieChart(document.getElementById('myChart'));

  chart.draw(data, options);
}

