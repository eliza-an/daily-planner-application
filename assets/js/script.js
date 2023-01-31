//
var color=document.querySelectorAll(".textandsavebtn")


const ToDo = document.getElementsByClassName("todolist")
//getting every single button. WIll definitely work on this to make it better later, but due to time constraints, did it this way
const saveBtn1 = document.getElementById("saveBtn1")
const saveBtn2 = document.getElementById("saveBtn2")
const saveBtn3 = document.getElementById("saveBtn3")
const saveBtn4 = document.getElementById("saveBtn4")
const saveBtn5 = document.getElementById("saveBtn5")
const saveBtn6 = document.getElementById("saveBtn6")
const saveBtn7 = document.getElementById("saveBtn7")
const saveBtn8 = document.getElementById("saveBtn8")
const saveBtn9 = document.getElementById("saveBtn9")

//getting every single input by id. again woul do this better but unfortunely no time
const form1= document.getElementById("form1")
const form2= document.getElementById("form2")
const form3= document.getElementById("form3")
const form4= document.getElementById("form4")
const form5= document.getElementById("form5")
const form6= document.getElementById("form6")
const form7= document.getElementById("form7")
const form8= document.getElementById("form8")
const form9= document.getElementById("form9")




function UpdatedTime(){
 var HeadingDate= moment().format('MMMM Do YYYY, HH:mm:ss ')
 $('#currentDay').html( "Current Date and Time: "+ HeadingDate )
 
}


//Making sure the time updates every second and gives me a new value
UpdatedTime();
setInterval(function(){
   UpdatedTime();

var now=moment()
var time=now.hour()

console.log(now)

arr.forEach((value, index) => {
   if (time>index+9) {
      document.getElementsByClassName("textandsavebtn")[index].style.backgroundColor = "#d3d3d3"
   } else if (time===index+9){
      document.getElementsByClassName("textandsavebtn")[index].style.backgroundColor = "#ff6961"
   } else if (time<index+9) {
      document.getElementsByClassName("textandsavebtn")[index].style.backgroundColor = "#77dd77"
   }
 })
},

1000);


var lis = document.getElementById("todolist1").getElementsByTagName("input");
var arr = Array.from( lis )



//the save functionality for each individual button

//1
function input1() {

   localStorage.setItem("9am", form1.value);
 
}
let original1= localStorage.getItem("9am")


if (original1 ===null){
   document.getElementById("form1").setAttribute("value","")
}else{
   document.getElementById("form1").setAttribute("value",localStorage.getItem("9am")) 
}
saveBtn1.addEventListener("click",input1)


//2
function input2() {
   localStorage.setItem("10am", form2.value);
   
}


let original2= localStorage.getItem("10am")
if (original2 ===null){
   document.getElementById("form2").setAttribute("value","")
}else{
   document.getElementById("form2").setAttribute("value",localStorage.getItem("10am")) 
}


saveBtn2.addEventListener("click",input2)

//3


function input3() {
   localStorage.setItem("11am", form3.value);
   
}

let original3= localStorage.getItem("11am")
if (original3 ===null){
   document.getElementById("form3").setAttribute("value","")
}else{
   document.getElementById("form3").setAttribute("value",localStorage.getItem("11am")) 
}
saveBtn3.addEventListener("click",input3)



//4 

function input4() {
   localStorage.setItem("12pm", form4.value);
}

let original4= localStorage.getItem("12pm")
if (original4 ===null){
   document.getElementById("form4").setAttribute("value","")
}else{
   document.getElementById("form4").setAttribute("value",localStorage.getItem("12pm")) 
}
saveBtn4.addEventListener("click",input4)



//5

function input5() {
   localStorage.setItem("1pm", form5.value);
   }
  
   let original5= localStorage.getItem("1pm")
if (original5 ===null){
   document.getElementById("form5").setAttribute("value","")
}else{
   document.getElementById("form5").setAttribute("value",localStorage.getItem("1pm")) 
}
saveBtn5.addEventListener("click",input5)



//6

function input6() {
   localStorage.setItem("2pm", form6.value);
   }

   let original6= localStorage.getItem("2pm")
   if (original6 ===null){
      document.getElementById("form6").setAttribute("value","")
   }else{
      document.getElementById("form6").setAttribute("value",localStorage.getItem("2pm")) 
   }
saveBtn6.addEventListener("click",input6)



//7
function input7() {
   localStorage.setItem("3pm", form7.value);
 }

 let original7= localStorage.getItem("3pm")
 if (original7 ===null){
    document.getElementById("form7").setAttribute("value","")
 }else{
    document.getElementById("form7").setAttribute("value",localStorage.getItem("3pm")) 
 }
saveBtn7.addEventListener("click",input7)



//8
function input8() {
   localStorage.setItem("4pm", form8.value);
 }
  
 let original8= localStorage.getItem("4pm")
if (original8 ===null){
   document.getElementById("form8").setAttribute("value","")
}else{
   document.getElementById("form8").setAttribute("value",localStorage.getItem("4pm")) 
}
saveBtn8.addEventListener("click",input8)


//9


function input9() {
   localStorage.setItem("5pm", form9.value);
}
  
let original9= localStorage.getItem("5pm")
if (original9 ===null){
   document.getElementById("form9").setAttribute("value","")
}else{
   document.getElementById("form9").setAttribute("value",localStorage.getItem("5pm")) 
}
saveBtn9.addEventListener("click",input9)

