//웹페이지 화면 아무데나 우클릭 -> 검사 -> 콘솔

/*2-1. Basic Data Types (숫자와 string)---------------------------------------------------------------------------------------------------------------------------------
<Number>
-정수(integer) ex. 1, 2, 3, 4...
-소수(float) ex. 1.5, 1.55, 1.555...
-넘버끼리 연산 기호를 이용해 연산 가능

<String>
-문자로만 구성됨, "ㅇㅇ" 혹은 'ㅇㅇ'로 연산 기호를 이용해 연산 가능
ex. "hello " + "My name is Nico" = hello My name is Nico*/

//2-2. Variables (변수)--------------------------------------------------------------------------------------------------------------------------------------------------

console.log(5 + 8); //콘솔에 출력 하는 코드
console.log(5 - 8);
console.log(5 * 8);
console.log(5 / 8);

const a = 5; //변수 방법1: (constant:상수) 후에 값이 바뀔 수 없음
const b = 2; //변수 방법2: 후에 값이 바뀔 수도 있음

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

let myName = "nico"; //변수 선언 시 띄어쓰기 불가 → 각 단어의 이니셜을 대문자로 써준다
const veryLongVariableName = 0;

console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log("hello " + "nico"); //문자도 가능
console.log("hello " + myName); //변수 이름도 가능

//2-3. const and let (두가지 변수의 차이)---------------------------------------------------------------------------------------------------------------------------------

const a = 5;
const b = 8;
let myName = "nico" //생성 후 값 변경 가능 → const였다면, 50번 줄의 값 error!

console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log("hello " + myName);

myName = "nicolas"; //아무때나 업데잇

console.log("your new name is " + myName);
/*대부분 기본적으로 console 사용, 필요할 때만 let!
var는 구버전... 규칙이 없음 코드를 보고 바로 이해하고 싶다면-되도록 쓰지말자!

♣변수 정리♣
① always const ▶ 상수, 생성 후 값 변경 불가능
② sometimes let ▶ 생성 후 값 변경 가능
③ never var ▶ 어디서든 변경 가능 (거의 안씀)*/

//2-4. Booleans(새로운 data type들)-------------------------------------------------------------------------------------------------------------------------------------------

const amIFat = null; /*true or false or null
null은 말 그대로 아무것도 없음ㅡ값이란게 존재하지 않는다는 의미
true는 ""씀, false와 null은 ; 씀*/
console.log(amIFat);
let something; //변수에 값을 안주면,
console.log(something); //undefined가 뜸. 변수는 존재하지만 정의되지 않음,
console.log(something, amIFat); /*amIFat을 함께쓰면 undefined와 null이 함께 뜸

♣data 타입 정리♣
① 숫자 (이전에 배운 것)
② string (이전에 배운 것)
③ true ▶ "true"
④ false ▶ false;
⑤ null ▶ null; [값이 없음] 변수에 null(값이 없다)이 할당된다 즉, null이라는 값이 없음이라는 값이 정의됨, 박스 만들고 아무것도 안 넣고 포장함
⑥ undefined ▶ 내가 지정한 게 아님!! [값이 정의되지 않음]  변수는 선언했지만 값을 할당하지는 않음, 값이 정의되지 않음, 박스만 만듦*/

/*2-5. Arrays(data를 정리, 나열하기 위한 방법)------------------------------------------------------------------------------------------------------------------------------------

[] 안에  , , , , 로 data를 나열함.
const 배열명 = [숫자 , 변수 , string , boolean , null , undefined , ...] 안에 뭐든 넣어도 됨 */

/*귀찮게 나열한 변수들...
const mon ="mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

하지만 굳이 변수 안 써도 됨!
const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun]; */

const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];
//const 배열명 = [ , , , ] 안에 "문자"로 써도 됨!!

//위의 변수에서 5번째 element 값이 뭔가요?
console.log(daysOfWeek[4]); //컴퓨터는 숫자를 0부터 센다. 'mon, tue, wed, ...' 앞에 숨겨진 '0'이 있다!
//get item from array
console.log(daysOfWeek); //7개만 나온다

//add one more day to the array
daysOfWeek.push("sun"); //하나를 추가(push)했어

console.log(daysOfWeek); //8개가 나온다

/*♣arrays 정리♣
array? data를 정리, 나열, 목록을 만드는 것!
① console.log(배열명[index 0부터]); ▶ 특정 순서의 값을 지정
② 배열명.push("값"); ▶ 배열에 새로운 값을 추가*/

//2-6. Objects--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const playerName = "Nico";
const playerPoints = 10;
const playerFat = true; 
//하나의 그룹으로 모아서 인식하기가 힘들어

const player = ["Nico", 10, true];
//처럼 array로 지정하면 모아서 보긴 쉬운데 각각이 어떤 속성의 값인지 알 수 없어
//list는 같은 속성의 나열만 취급하니까

//다른 속성의 리스트를 만들기 위해서는 0bject를 써야 해. {}를 사용함
//object는 property를 가진 데이터를 저장함

const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player); //{name:"Nico", points:10, fat:true}

console.log(player.fat); //값은 true
console.log(player["fat"]); //값은 true

console.log(player.name); //값은 nico
console.log(player["name"]); //값은 nico

/*const는 let과 다르게 후에 update가 안되지만,
전체 object를 변경할 수는 없음!
property(속성)값을 수정/추가하는 건 가능함!*/

player = false; //error! object를 수정하는 건 안됨
player.fat = false; //success! property를 수정하는 건 되니까!

console.log(player);
player.points = 15; //object에서는 10이었지만 15로 값 수정 가능
console.log(player.points); //값은 15

console.log(player);
player.points = player.points + 15; //10+15
console.log(player.points); //값은 25

/*♣array&object 정리♣
array는 설명이 필요하지 않은 data list를,
object는 설명이 필요한 정보가 담긴 data list를,
object를 바꾸는 것은 불가능, property를 바꾸는 것은 가능*/

/*2-7. Functions part One(function으로 data 출력)--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

player.points(); 라고 사용하지 않았다.
player.points은 function이 아니기 때문. player.points은 숫자임

function: 반복해서 사용할 수 있는 코드 조각.
어떤 코드를 캡슐화 해서 실행을 여러번 할 수 있게 해줌 */

function sayHello() {
    console.log("Hello!");
}
//소괄호 안에 작성하는 것은 실행버튼을 누를 때마다 발생함

sayHello(); //함수명(); 로 실행할 수 있음

/*function 내에서 어떤 정보를 줄 수 있는 argument(인수)값을 보내야 함.
함수를 실행하는 동안 어떤 정보를 함수에게 보낼 수 있는 방법, 소괄호 안에 위치함*/

//2-8. Functions part Two(function으로 data 받기)--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sayHello() {
    console.log("Hello!");
} //data를 받는 방법? ()안에 data를 추가

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 31); //arguement 여러개를 받을 수 있음
sayHello("kwon", 29); //string, age
sayHello("lung", 35);

function plus(아, b){ //괄호 안 문자는 뭐든 됨
    console.log(아 + b);
}
function divide(first, sec){
    console.log(first / sec);
}
plus(8, 60)
divide(64, 8) 

const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!")
    },
};

console.log(player.name);
player.sayHello("lung");
player.sayHello("nico");

//object 안에서 매개변수가 arguement를 받는 방식

/*♣function 보내기/받기 코드♣
function 함수명() {console.log(실행 코드);} ▶ data를 받는 방법, ()안에 data를 추가
함수명(); ▶ data를 보내는 방법
