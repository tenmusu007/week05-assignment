/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  // console.log(date)
  let year = "";
  let month = "";
  let day = "";
  let tempo = new Array();
  // for(let i = 0; i < 3; i++){

  // }
  year = date.substring(0, 4);
  month = date.substring(6, 7);
  day = date.substring(8, 11);

  tempo.push(year);
  tempo.push(month);
  tempo.push(day);
  console.log(tempo)
  switch (tempo[1]) {
    case "1":
      tempo[1] = "Jan";
      break;
    case "2":
      tempo[1] = "Feb";
      break;
    case "3":
      tempo[1] = "Mar";
      break;
    case "4":
      tempo[1] = "Apr";
      break;
    case "5":
      tempo[1] = "May";
      break;
    case "6":
      tempo[1] = "June";
      break;
    case "7":
      tempo[1] = "July";
      break;
    case "8":
      tempo[1] = "Aug";
      break;
    case "9":
      tempo[1] = "Spe";
      break;
    case "10":
      tempo[1] = "Oct";
      break;
    case "11":
      tempo[1] = "Nov";
      break;
    case "12":
      tempo[1] = "Dec";
      break;
  }
  date1(tempo)
  tempo[2] = date1(tempo)
  console.log(tempo);
};
function date1(tempo){
  if (tempo[2] < 3) {
    if (tempo[2] === "1") {
      return "1st";
    } else if (tempo[2] === "2") {
      return "2nd";
    } else {
      return "3rd";
    }
  } else {
    return tempo[2] + "th";
  }
} 
// const month = function (date) {
//   for (let i in date) {
//     // if()
//   }
// };
console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
