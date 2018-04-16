function getResultTask01(){
	let sum = 0;

	for(let i = -1000; i <= 1000; i++){
		sum = sum + i;
	}
	document.getElementById("content_task_01").innerText = "Result = " + sum;
}

function getResultTask02(){
	let sum = 0;

	for(let i = -1000; i <= 1000; i++){
		if (i % 10 == (2 || 3 || 7 || -2 || -3 || -7 )){
				sum = sum + i;
		}
	}
	document.getElementById("content_task_02").innerText = "Result = " + sum;
}

function getResultTask03(){
	document.getElementById("content_task_03").innerText = ' ';
	var sum = "*";

	for(i = 0; i < 50; i++){
	    document.getElementById("content_task_03").innerHTML += (sum + "<br>");
	    sum = sum + "*";
	}

}

function validateNumber(inputNumber, errorElementId){
  const isValidInt = x => x && !isNaN(x) && Number.isInteger(x) || x === 0;
  document.getElementById(errorElementId).style.display = "none";
  const MAX_NUMBER_LIMIT = 1000000000;

  if (isValidInt(inputNumber)){
      if (inputNumber >= 0 && inputNumber < MAX_NUMBER_LIMIT){
        return true;
      } else showErrorMessage("You entered too much or a negative number...", errorElementId);
  } else showErrorMessage("Your data may by number...", errorElementId);
}

function showErrorMessage(message, elementId){
  document.getElementById(elementId).innerText = message;
  document.getElementById(elementId).style.display = "block";
}

function secondsToTime(seconds){
  const HOURS = 3600, MINUTES = 60;
  let resultSeconds, resultHours, resultMinutes, resultTime;

  resultHours = Math.floor(seconds / HOURS);
  resultMinutes = Math.floor((seconds - (resultHours * HOURS)) / MINUTES);
  resultSeconds = seconds - (resultHours * HOURS) - (resultMinutes * MINUTES);
  resultTime = resultHours + ':' + resultMinutes + ':' + resultSeconds;

  return resultTime;
}

function secondToDateAndTime(seconds){
	const YEAR = 31104000, MONTH = 2592000, DAY = 86400;
	let resultYears, resultMonths, resultDays, secondsRemainder, resultDate;

	resultYears = Math.floor(seconds / YEAR);
  resultMonths = Math.floor((seconds - (resultYears * YEAR)) / MONTH);
  resultDays = Math.floor((seconds - (resultYears * YEAR) - (resultMonths * MONTH)) / DAY);
	secondsRemainder = seconds - (resultYears * YEAR) - (resultMonths * MONTH) - (resultDays * DAY);

	resultDate = resultYears + " years, " ;
  resultDate += resultMonths + " month, ";
  resultDate += resultDays + " days, and time: " + secondsToTime(secondsRemainder);
	return resultDate;
}

function getResultTask04(){
  let seconds = parseInt(document.getElementById("secondsInput").value);
  let resultTime;
  if (validateNumber(seconds, "secondsConvertErrorMsg")){
      resultTime = secondsToTime(seconds);
  }
  document.getElementById("resultTask04Label").innerText = resultTime;

}

function getResultTask05(){
  const ID_RESULT_TASK05 = document.getElementById("resultTask05Label");
  let parseAge = parseInt(document.getElementById("ageInput").value);
  let resultAge;

  if (validateNumber(parseAge, "studentAgeErrorMsg")){
    if (parseAge <= 0) showErrorMessage("A student must already be born.", "studentAgeErrorMsg");
    if (parseAge > 100) showErrorMessage("Students do not live that much :-D", "studentAgeErrorMsg");
    if (parseAge % 10 === 1){
        ID_RESULT_TASK05.innerText = parseAge + " year";
    }
    if ((parseAge % 10  == 2) ||
        (parseAge % 10  == 3) ||
        (parseAge % 10  == 4)){
          ID_RESULT_TASK05.innerText = parseAge + " of the year";
        }
    if ((parseAge % 10  == 0) ||
        (parseAge % 10  == 5) ||
        (parseAge % 10  == 6) ||
        (parseAge % 10  == 7) ||
        (parseAge % 10  == 8) ||
        (parseAge % 10  == 9)){
          ID_RESULT_TASK05.innerText = parseAge + " years";
        }
  }
}

function getResultTask06(){
  let parseDateFirst = Date.parse(document.getElementById("dateCompareFirstInput").value);
  let parseDateSecond = Date.parse(document.getElementById("dateCompareSecondInput").value);
	let resultTime, resultSeconds;

	if (isNaN(parseDateFirst) || isNaN(parseDateSecond)){
		showErrorMessage("Error entering data. Please use the correct date format.", "compareDateErrorMsg");
		return;
	}
	if (parseDateFirst > parseDateSecond){
		showErrorMessage("You are trying to perform a non-correct comparison.", "compareDateErrorMsg");
		return;
	}
	resultSeconds = (parseDateSecond - parseDateFirst) / 1000;
	document.getElementById("resultTask06Label").innerText = secondToDateAndTime(resultSeconds);
}

function getResultTask07(){
	let inputDate = Date.parse(document.getElementById("dateZodiacInput").value);
	let birthday = new Date(inputDate);
	const zod_signs = ["Capricorn" , "Aquarius", "Pisces", "Aries",
	"Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
	"Sagittarius"];

	let day = birthday.getDate();
	let month = birthday.getMonth();
	let zodiacSign = "";

  if (isNaN(inputDate)){
    showErrorMessage("Error entering data. Please use the correct date format.", "zodiacErrorMsg");
    return;
  }

	switch(month)
	{
		case 0: {//January
				 if(day < 20)
			 		zodiacSign = zod_signs[0];
				 else
			 		zodiacSign = zod_signs[1];
			    }break;
		case 1: {//February
				 if(day < 19)
			 		zodiacSign = zod_signs[1];
				 else
			 		zodiacSign = zod_signs[2];
				}break;
		case 2: {//March
				 if(day < 21)
				 	zodiacSign = zod_signs[2];
				 else
				 	zodiacSign = zod_signs[3];
				}break;
		case 3: {//April
				 if(day < 20)
			 		zodiacSign = zod_signs[3];
				 else
			 		zodiacSign = zod_signs[4];
				}break;
		case 4: {//May
				 if(day < 21)
			 		zodiacSign = zod_signs[4];
				 else
			 		zodiacSign = zod_signs[5];
				}break;
		case 5: {//June
				 if(day < 21)
			 		zodiacSign = zod_signs[5];
				 else
			 		zodiacSign = zod_signs[6];
				}break;
		case 6: {//July
				 if(day < 23)
			 		zodiacSign = zod_signs[6];
				 else
			 		zodiacSign = zod_signs[7];
				}break;
	 	case 7: {//August
				 if(day < 23)
			 		zodiacSign = zod_signs[7];
				 else
			 		zodiacSign = zod_signs[8];
				}break;
		case 8: {//September
				 if(day < 23)
			 		zodiacSign = zod_signs[8];
				 else
			 		zodiacSign = zod_signs[9];
				}break;
		case 9: {//October
				 if(day < 23)
			 		zodiacSign = zod_signs[9];
				 else
			 		zodiacSign = zod_signs[10];
				}break;
		case 10: {//November
				 if(day < 22)
			 		zodiacSign = zod_signs[10];
				 else
			 		zodiacSign = zod_signs[11];
				}break;
		case 11: {//December
				 if(day < 22)
			 		zodiacSign = zod_signs[11];
				 else
			 		zodiacSign = zod_signs[0];
				}break;
	 }
	 	document.getElementById("resultTask07Label").innerText = zodiacSign;
    document.getElementById("zodiacImg").src = "images/zodiac/" + zodiacSign + ".ico";
}

function getResultTask08(){
  const shessFlag = {
    flag = true;
  };

  shessFlag.flipFlag(){
    flag = !flag;
  }

  shessFlag.flipFlag();
  console.log(shessFlag.flag);
}

function sumDigitOnNumber(number){
  let resultSum

  if ( number == 0){
    resultSum = 0;
  } else {
    resultSum = number % 10 + sumDigitOnNumber(Math.floor(number / 10));
  }
  return resultSum;  
}

function getResultTask10(){
  let parseNumber = parseInt(document.getElementById("numberInput").value);

  if ( !validateNumber(parseNumber, "calculateDigitErrorMsg")){
    showErrorMessage("Please enter exactly the number!", "studentAgeErrorMsg");
  }
  document.getElementById("resultTask10Label").innerText = sumDigitOnNumber(parseNumber);
}


//getLinks.fiter(link => !link);
// split
// filter
// map
// sort
// reduse
//string prototype
