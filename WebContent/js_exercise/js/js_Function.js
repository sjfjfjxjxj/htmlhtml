document.querySelector("#p1").innerHTML = "힝입니다"; //defer 없으면 동작안함
function jsFunc1(){
    var pTag = document.querySelector("#p1");
    pTag.innerHTML = "jsFunc1() 함수 실행 완료"
}
var jsFunc2 = function (){
    document.querySelector("#p2").innerHTML = "jsFunc2() 함수 실행 완료";
} //익명함수: 변수에 함수 때려박기...!

function resultJsFunc4(){
    jsFunc4(23,5,10);
}
function jsFunc4(value, value2, value3){
    document.querySelector("#p4").innerHTML = "값: " + (value+value2+value3)+"<br>";
}

function resultJsFunc5(){
    var result = jsFunc5();
    console.log(result);
    document.querySelector("#p5").innerHTML = result;
}
function jsFunc5(){ //난수! 랜덤!
    return Math.floor(Math.random()*100+1);
}

function calculator(num1, num2, operator){
    var result = 0;
    switch(operator){
        case '+' : result =num1+num2; break;
        case '-' : result =num1-num2; break;
    }
    return result;
}

function callFuncTenTimes(otherFunc){
    for(var i = 0; i<10; i++){
        otherFunc(i); 
        //얘가 익명함수인가보다
        //calleeFunc(0);
        //calleeFunc(1);....(9);
        //console.log(i);   이렇게 써도 되는데 함수 실행 순서 중요한거 할때 밑에처럼 함수 따로 만들어서 쓴대 
        //★이해갈랑말랑하네 진짜 ㅠ          
    }
}
function calleeFunc(num){
    console.log(num);
    var pTag = document.querySelector("#p6");
    pTag.innerHTML += (num+1) + "번째 함수 호출 완료<br>";
}
callFuncTenTimes(calleeFunc);


function jsReturnFunc(){
    var nameTag = document.querySelector("#name");
    var pTag = document.querySelector("#p7");
    //pTag.innerHTML = nameTag.value;
    return function(){pTag.innerHTML = nameTag.value;}();
}