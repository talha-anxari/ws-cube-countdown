let endDate = (`14 August 2024 00:01:00 AM`);
// document.getElementById(`end-date`).innerHTML = endDate;

let input = document.querySelectorAll(`input`);

function clock(){
  let end = new Date(endDate)
  let now = new Date();
  let gap = (end - now) /1000;
  if(gap < 0)
    return;
  // convert days
  input[0].value = Math.floor(gap / 3600 / 24);
  // convert hours
  input[1].value = Math.floor(gap / 3600) % 24;
  // convert minutes
  input[2].value = Math.floor(gap / 60) % 60;
  // convert seconds
  input[3].value = Math.floor(gap) % 60;
}
setInterval(clock, 1000);

// setInterval(
//   function(){
//     clock();
//   },
//   1000
// )
// 1 day = 24 hr 
// 1 hr = 60 min
// 1 min = 60 sec
// 1 sec = 1000 ms