function getResultTask01(){
	let sum = 0;

	for(let i = -1000; i <= 1000; i++){
		sum = sum + i;
	}
	document.getElementById("content_task_01").innerText = "Result = " + sum;
}

function getResultTask02(){
	let sum = 0;
	let lastDigit = 0;
	for(let i = -1000; i <= 1000; i++){
		lastDigit = i % 10;
		if ( lastDigit === 2 || lastDigit === 3 ||
			   lastDigit === 7 || lastDigit === -2 ||
				 lastDigit === -3 || lastDigit === -7 ){
				sum += i;
		}
	}
	document.getElementById("content_task_02").innerText = "Result = " + sum;
}

function getResultTask03(){
	let resultTask03 = document.getElementById("content_task_03");
	resultTask03.innerText = ' ';
	let sum = "*";
	let resultString = '';
	for(i = 0; i < 50; i++){
			resultString += (sum + "<br>");
	    sum += "*";
	}
	resultTask03.innerHTML = resultString;
}

function validateNumber(inputNumber, errorElementId){

  const isValidInt = x => x && !isNaN(x) && Number.isInteger(x) || x === 0;

  document.getElementById(errorElementId).style.display = "none";
  const MAX_NUMBER_LIMIT = 1000000000;

  if (isValidInt(inputNumber)){
      if (inputNumber >= 0 && inputNumber < MAX_NUMBER_LIMIT){
        return true;
      } else showErrorMessage("Вы ввели слишком большое или отрицательное число...", errorElementId);
  } else showErrorMessage("Нужно ввести только число...", errorElementId);
}

function showErrorMessage(message, elementId){
	let getElement = document.getElementById(elementId);
  getElement.innerText = message;
  getElement.style.display = "block";
}

function secondsToTime(seconds){
  const HOURS = 3600, MINUTES = 60;
  let resultSeconds, resultHours, resultMinutes, resultTime;

  resultHours = Math.floor(seconds / HOURS);
  resultMinutes = Math.floor((seconds - (resultHours * HOURS)) / MINUTES);
  resultSeconds = seconds - (resultHours * HOURS) - (resultMinutes * MINUTES);
	if (resultHours < 10) {
		resultHours = "0" + resultHours ;
	}
	if (resultMinutes < 10){
		resultMinutes = "0" + resultMinutes;
	}
	if (resultSeconds < 10){
		resultSeconds = "0" + resultSeconds;
	}
  resultTime = resultHours + ':' + resultMinutes + ':' + resultSeconds;

  return resultTime;
}

function secondToDateAndTime(seconds){
	const YEAR = 31104000, MONTH = 2592000, DAY = 86400;
	let resultYears, resultMonths, resultDays, secondsRemainder, resultDate;

	resultYears = Math.floor(seconds / YEAR);
  resultMonths = Math.floor((seconds - (resultYears * YEAR)) / MONTH);
  resultDays = Math.floor((seconds - ((resultYears * YEAR) + (resultMonths * MONTH))) / DAY);
	secondsRemainder = seconds - (resultYears * YEAR) - (resultMonths * MONTH) - (resultDays * DAY);

	resultDate = resultYears + " лет, " ;
  resultDate += resultMonths + " месяцев, ";
  resultDate += resultDays + " дней, ";
	let timesArray = secondsToTime(secondsRemainder).split(":");
	resultDate += timesArray[0] + " часов, ";
	resultDate += timesArray[1] + " минут, ";
	resultDate += timesArray[2] + " секунд.";
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
  let resultAgeString;

  if (validateNumber(parseAge, "studentAgeErrorMsg")){
    if (parseAge <= 0) showErrorMessage("Студент должен быть когда то рождён.", "studentAgeErrorMsg");
    if (parseAge > 100) showErrorMessage("Студенты так долго не живут :-D", "studentAgeErrorMsg");
		if (parseAge > 10 && parseAge < 20){
				resultAgeString = parseAge + " лет";
				ID_RESULT_TASK05.innerText = resultAgeString;
				return;
		}
		const lastDigit = parseAge % 10;
    if (lastDigit === 1){
				resultAgeString = parseAge + " год";
    }

    if ((lastDigit  >= 2) &&
        (lastDigit  <= 4)){
          resultAgeString = parseAge + " года";
        }

		if (lastDigit  === 0) resultAgeString = parseAge + " лет";

    if ((lastDigit  >= 5) &&
        (lastDigit  <= 9)){
          resultAgeString = parseAge + " лет";
        }

		ID_RESULT_TASK05.innerText = resultAgeString;
  }
}

function getResultTask06(){
  let parseDateFirst = new Date(document.getElementById("dateCompareFirstInput").value);
  let parseDateSecond = new Date(document.getElementById("dateCompareSecondInput").value);
	let diffSeconds;
	const MILISECONDS = 1000;

	if (isNaN(parseDateFirst) || isNaN(parseDateSecond)){
		showErrorMessage("Ошибка ввода, пожалуйста соблюдайте заданый формат.", "compareDateErrorMsg");
		return;
	}
	if (parseDateFirst > parseDateSecond){
			[parseDateFirst , parseDateSecond] = [parseDateSecond , parseDateFirst];
	}
	diffSeconds = (parseDateSecond.getTime() - parseDateFirst.getTime());
	document.getElementById("resultTask06Label").innerText = secondToDateAndTime(diffSeconds / MILISECONDS);
}

function IsValidDate(day, month, year){

	// Check the ranges of month and year
	if(year < 1000 || year > 3000 || month === 0 || month > 12)
			return false;

	let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	// Adjust for leap years
	if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
		monthLength[1] = 29;
	}

	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
}

function getResultTask07(){
	document.getElementById("zodiacErrorMsg").style.display = "none";
	let inputDate = document.getElementById("dateZodiacInput").value.split("-");
	const RESULT_LABEL = document.getElementById("resultTask07Label");
	const ZODIAC_IMG = document.getElementById("zodiacImg");

	//let birthday = new Date(inputDate);
	const zod_signs = ["Capricorn" , "Aquarius", "Pisces", "Aries",
	"Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
	"Sagittarius"];

	const day = parseInt(inputDate[2]);
	const month = parseInt(inputDate[1]);
	const year = parseInt(inputDate[0]);

	let zodiacSign = "";

  if (!IsValidDate(day, month, year)){
		RESULT_LABEL.innerText = "";
		ZODIAC_IMG.src = "";
    showErrorMessage("Дата введена не верно. Пожалуйста введите корректные данные.", "zodiacErrorMsg");
    return;
  }

	switch(month)
	{
		case 1: {//January
				 if(day < 20)
			 		zodiacSign = zod_signs[0];
				 else
			 		zodiacSign = zod_signs[1];
			    }break;
		case 2: {//February
				 if(day < 19)
			 		zodiacSign = zod_signs[1];
				 else
			 		zodiacSign = zod_signs[2];
				}break;
		case 3: {//March
				 if(day < 21)
				 	zodiacSign = zod_signs[2];
				 else
				 	zodiacSign = zod_signs[3];
				}break;
		case 4: {//April
				 if(day < 20)
			 		zodiacSign = zod_signs[3];
				 else
			 		zodiacSign = zod_signs[4];
				}break;
		case 5: {//May
				 if(day < 21)
			 		zodiacSign = zod_signs[4];
				 else
			 		zodiacSign = zod_signs[5];
				}break;
		case 6: {//June
				 if(day < 21)
			 		zodiacSign = zod_signs[5];
				 else
			 		zodiacSign = zod_signs[6];
				}break;
		case 7: {//July
				 if(day < 23)
			 		zodiacSign = zod_signs[6];
				 else
			 		zodiacSign = zod_signs[7];
				}break;
	 	case 8: {//August
				 if(day < 23)
			 		zodiacSign = zod_signs[7];
				 else
			 		zodiacSign = zod_signs[8];
				}break;
		case 9: {//September
				 if(day < 23)
			 		zodiacSign = zod_signs[8];
				 else
			 		zodiacSign = zod_signs[9];
				}break;
		case 10: {//October
				 if(day < 23)
			 		zodiacSign = zod_signs[9];
				 else
			 		zodiacSign = zod_signs[10];
				}break;
		case 11: {//November
				 if(day < 22)
			 		zodiacSign = zod_signs[10];
				 else
			 		zodiacSign = zod_signs[11];
				}break;
		case 12: {//December
				 if(day < 22)
			 		zodiacSign = zod_signs[11];
				 else{
					zodiacSign = zod_signs[0];
				 }
				}break;
	 }
	 	RESULT_LABEL.innerText = zodiacSign;
    ZODIAC_IMG.src = "images/zodiac/" + zodiacSign + ".ico";
}

function getResultTask08(){

  let resultDiv = document.getElementById("resultTask08");
  const CHESS_BOARD_SIZE = 480;
  let parseRow = parseInt(document.getElementById("rowChessBoardInput").value);
  let parseCol = parseInt(document.getElementById("colChessBoardInput").value);

  resultDiv !== null ? (resultDiv.remove()):(null);
  resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'resultTask08');
  let taskDiv = document.getElementById("content_task_08");
  taskDiv.appendChild(resultDiv);

  let chessPlateSIze = (parseRow < parseCol) ? CHESS_BOARD_SIZE / parseCol : CHESS_BOARD_SIZE / parseRow;

	let colorFlag = true;
	let color = "black";
  let iDiv = document.createElement('div');
  for (let i = 0; i < parseRow; i++ ){
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute('id', 'rowDiv');
		rowDiv.setAttribute("style" , "min-height: " + chessPlateSIze + "px;");
    resultDiv.appendChild(rowDiv);
    rowDiv.setAttribute('class', 'chessBoardRow');

    for(let j = 0; j < parseCol; j++){
      let colDiv = document.createElement('div');
      colDiv.setAttribute('id', 'colDiv');
			colDiv.style.height = chessPlateSIze +"px";
			colDiv.style.width = chessPlateSIze +"px";
			colDiv.setAttribute('class', 'chessBoardCol');
			if ( j % 2 ) {
				colorFlag ? color = "white" : color = "black";
			} else {
				colorFlag ? color = "black" : color = "white";
			}

			colDiv.style.backgroundColor = color;
      rowDiv.appendChild(colDiv);
    }
		if (colorFlag) {
			colorFlag = false;
		} else {
			colorFlag = true;
		}
  }
}


function getResultTask09(){
  let parseEntrances = parseInt(document.getElementById("entrancesInput").value);
  let parseFlats = parseInt(document.getElementById("flatsInput").value);
  let parseFloors = parseInt(document.getElementById("floorsInput").value);
  let parseflatsResult = parseInt(document.getElementById("flatsResultInput").value);

  if ( !validateNumber(parseEntrances, "flatsCountErrorMsg") &&
       !validateNumber(parseFlats, "flatsCountErrorMsg") &&
       !validateNumber(parseFloors, "flatsCountErrorMsg") &&
       !validateNumber(parseflatsResult, "flatsCountErrorMsg") ){
    showErrorMessage("Please enter exactly the number!", "flatsCountErrorMsg");
  }

  let allFlatsCount = parseEntrances * parseFlats * parseFloors;
  if ( allFlatsCount < parseflatsResult) {
    showErrorMessage("Unfortunately you live on the street!", "flatsCountErrorMsg");
  }

  let resultEntrances = Math.ceil(parseflatsResult / (parseFlats *  parseFloors));
	let resultFloor = 0;
	if (resultEntrances > 1){
		let allUsedEntrancesFlats = (resultEntrances -1) * (parseFlats *  parseFloors);
		resultFloor = Math.round((parseflatsResult - allUsedEntrancesFlats)  / parseFlats);
	} else {
		resultFloor = Math.round(parseflatsResult / parseFlats);
	}
  document.getElementById("resultTask09Label").innerText = `Entrances = ${resultEntrances}, Floors = ${resultFloor}`;
}

function sumDigitOnNumber(number){

  if ( number === 0){
    resultSum = 0;
  } else {
    resultSum = number % 10 + sumDigitOnNumber(Math.floor(number / 10));
  }
  return resultSum;
}

function getResultTask10(){
  let parseNumber = parseFloat(document.getElementById("numberInput").value);
	let resultSum = 0;

	if (parseNumber < 0) parseNumber * (-1);

	let sNumber = parseNumber.toString().split("");
	let i = 0;
	for ( i ; i < sNumber.length; i++) {
		if (sNumber[i] !== ".") {
			resultSum += parseInt(sNumber[i]);
		}
	}

  document.getElementById("resultTask10Label").innerText = resultSum;
}

function getResultTask11(){
	const resultHttpDiv = document.getElementById("splitLinkResult");
	resultHttpDiv.innerText = "";
	const parceLinks = document.getElementById("httpInput");
	//const ul = document.createElement("ul");
	const resultUl = parceLinks.value
	        .split(/[\s,]/)
	        .filter(link => !!link)
	        .map(link => link.replace(/http?:\/\//gi, ''))
	        .sort()
	        .reduce((ul,link) =>
	        	ul += `<li><a href="//${link}">${link}</a></li>`, "");
						console.log(resultUl);
	resultHttpDiv.innerHTML = resultUl;

}

//getLinks.fiter(link => !!link);
// split
// filter
// map
// sort
// reduse
//string prototype
