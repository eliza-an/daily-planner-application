//
 var color=document.querySelectorAll(".textandsavebtn")

function UpdatedTime(){
 var HeadingDate= moment().format('MMMM Do YYYY, h:mm:ss a')
 $('#currentDay').html( "Current Date and Time: "+ HeadingDate )
}


//Making sure the time updates every second and gives me a new value
UpdatedTime();
setInterval(function(){
   UpdatedTime();
},1000);


console.log(color)

