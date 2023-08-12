// WAP to display the current day and time in the following format 
// Today is - Tuesday 
// current time is - 10:20:20 PM

function ShowDateTime(){
    var date = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day = days[date.getDay()];
    var time = date.getHours() +':'+ date.getMinutes()+":"+ date.getSeconds(); 
    console.log("Today is : " + day);
    console.log('Current Time is : '+ time);

}
  setInterval(()=>{ 
      console.clear();
       ShowDateTime();
    }, 1000);

