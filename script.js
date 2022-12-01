const hour = document.getElementById('hr');
const minute = document.getElementById('min');
const second = document.getElementById('sec');
const sound = new Audio("https://www.fesliyanstudios.com/play-mp3/579");
setInterval(() => {
  sound.play();
    let date=new Date();
   let hr=date.getHours();
  let  min=date.getMinutes();
   let sec=date.getSeconds();


 hour.style.transform=`rotate(${(30*hr)+(min/2)+(sec/120)}deg)`;
 minute.style.transform=`rotate(${(6*min)+(sec/10)}deg)`;
 second.style.transform=`rotate(${(6*sec)}deg)`;

}, 1000);