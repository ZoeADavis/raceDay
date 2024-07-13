let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
var runnerAge = 20
if (runnerAge >= 18 && registeredEarly === true) {
raceNumber += 1000
} else if (runnerAge >= 18 && registeredEarly === false) {
  console.log(`Late adults run at 11:00 am. your race number is ${raceNumber}`)
} else if (runnerAge >= 18 && registeredEarly === true){
  console.log(`You will race at 9:30am. Your race number is ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`'Youth registrants run at 12:30pm. Your race number is ${raceNumber}`)
} else {
  console.log('Please seek the registration desk.')
}