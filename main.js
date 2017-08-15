var moment = require('moment');
let today = moment().format("dddd, MMMM, Do YYYY, h:mm:ss a");
let DayOfYear = moment().format("DDDo");
let seconds = moment().get('seconds');
let minutes = moment().get('minutes');
let hours = moment().get('hours');
let minuteConv = minutes*60;
let hourConv = hours*60*60;


function DsT() {
  let DsT = moment([2017, 8, 14]).isDST();
if (DsT === true) {
return "is";
} else {
  return "isn't";
}}

function leapYear(){
  let check = moment().isLeapYear()
  if (check === true){
    return "is";
  } else {
    return "is not";
  }
}

// let leap = moment(timestamp).isLeapYear();

const chalk = require('chalk');
console.log("It is " + chalk.blue.bold(today));
console.log("It is the " + chalk.magenta.bold(DayOfYear) + " day of the year.");
console.log("It is " + chalk.yellow.bold(seconds + minuteConv + hourConv) + " seconds into the day.");
console.log("It " + chalk.cyan.bold(DsT()) + " during Daylight Savings Time.");
console.log("It " + chalk.red.bold(leapYear()) + " not a leap year.");

// function dayLight(){
//   let dateCheck = moment().format('Mo-Do');
//   if (3-3 < dateCheck < 11-5){
//     return "is";
//   } else{
//     return "is not";
//   }
// }
// console.log("It " + chalk.cyan.bold(dayLight()) + " during Daylight Savings Time.");




// console.log("It is the " + chalk.purple(moment().format("DDDo"))+ " day of the year.");
// console.log(chalk.red('Hello world!'));
