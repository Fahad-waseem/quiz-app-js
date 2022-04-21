function check(){
    var score=0
    var username= document.getElementById("name")


    var right_ans_1=document.getElementById('q1-a1');
    var right_ans_2=document.getElementById('q1-a2');
    var  right_ans_3=document.getElementById('q1-a3');
    var  right_ans_4=document.getElementById('q1-a4');

if (right_ans_2.checked==true){
    score++
    alert('Q1 answer is right')
}else{
    alert('Q1 answer is wrong') 
}





var right_ans_1=document.getElementById('q2-a1');
var right_ans_2=document.getElementById('q2-a2');
var  right_ans_3=document.getElementById('q2-a3');
var  right_ans_4=document.getElementById('q2-a4');

if (right_ans_4.checked==true){
score++
alert('Q2 answer is right')
}else{
alert('Q2 answer is wrong') 
}



var right_ans_1=document.getElementById('q3-a1');
var right_ans_2=document.getElementById('q3-a2');
var  right_ans_3=document.getElementById('q3-a3');
var  right_ans_4=document.getElementById('q3-a4');

if (right_ans_4.checked==true){
score++
alert('Q3 answer is right')
}else{
alert('Q3 answer is wrong') 
}




var right_ans_1=document.getElementById('q4-a1');
var right_ans_2=document.getElementById('q4-a2');
var  right_ans_3=document.getElementById('q4-a3');
var  right_ans_4=document.getElementById('q4-a4');

if (right_ans_3.checked==true){
score++
alert('Q4 answer is right')
}else{
alert('Q4 answer is wrong') 
}




var right_ans_1=document.getElementById('q5-a1');
var right_ans_2=document.getElementById('q5-a2');
var  right_ans_3=document.getElementById('q5-a3');
var  right_ans_4=document.getElementById('q5-a4');

if (right_ans_3.checked==true){
score++
alert('Q5 answer is right')
}else{
alert('Q5 answer is wrong') 
}



// alert("Your score is "+  +score++ +'/3')

document.write("<h1>Your result is </h1>"+"Hello,"+ "<br>" +username.value +"<br>" +"Your score is "+   +score++ +'/5')


function reset(){
    var reset=document.getElementById("reset")
    reset.innerHTML="check"
}

}
