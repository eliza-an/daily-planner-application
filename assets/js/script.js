//
var color=document.querySelectorAll(".textandsavebtn")





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

arr.forEach((value, index) => {
   if (time>index+9) {
      document.getElementsByClassName("textandsavebtn")[index].style.backgroundColor = "#d3d3d3"
   } else if (time===index+9){
      document.getElementsByClassName("textandsavebtn")[index].style.backgroundColor = "#ff6961"
   } else if (time<index+9) {
      document.getElementsByClassName("textandsavebtn")[index].style.backgroundColor =  "#77dd77"
   }
 })
},

1000);


var lis = document.getElementById("todolist1").getElementsByTagName("li");
console.log(lis)
var arr = Array.from( lis )
console.log(arr)

