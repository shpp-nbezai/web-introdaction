function getResultTask01() {
	let sum = 0;

	for ( let i = -1000; i <= 1000; i++ ) {
		sum = sum + i;
	}
	document.getElementById( "resultTask01Label" ).innerText = "Result = " + sum;
}

function getResultTask02() {
	let sum = 0;
	let lastDigit = 0;

	for ( let i = -1000; i <= 1000; i++ ) {
		lastDigit = Math.abs ( i % 10 );
		if ( lastDigit === 2 || lastDigit === 3 ||
			   lastDigit === 7 ) {
				sum += i;
		}
	}
	document.getElementById( "resultTask02Label" ).innerText = "Result = " + sum;
}

function getResultTask03() {
	const resultTask03 = document.getElementById( "resultTask03Div" );
	resultTask03.innerText = ' ';
	let sum = "*";
	let resultString = '';

	for ( let i = 0; i < 50; i++ ) {
			resultString += ( sum + "<br>" );
	    sum += "*";
	}
	resultTask03.innerHTML = resultString;
}

function validateNumber( inputNumber, errorElementId ) {

  const IS_VALID_INT = x => x && !isNaN ( x ) && Number.isInteger ( x ) || x === 0;
	const MAX_NUMBER_LIMIT = 1000000000;

  document.getElementById( errorElementId ).style.display = "none";

  if ( IS_VALID_INT ( inputNumber ))  {
      if ( inputNumber >= 0 && inputNumber < MAX_NUMBER_LIMIT ) {
        return true;
      } else showErrorMessage ( "Вы ввели слишком большое или отрицательное число...", errorElementId );
    } else showErrorMessage ( "Нужно ввести только число...", errorElementId );
}

function showErrorMessage ( message, elementId ) {
	const getElement = document.getElementById( elementId );
  getElement.innerText = message;
  getElement.style.display = "block";
}

//parameter @number - init number to select wordKey
//parameter @wordKey select a time interval
//  							0 - years
//								1 - months
//								2 - days
//								3 - hours
//								4 - minutes
//								5 - seconds
function selectWord( number, wordKey ) {
	if (wordKey < 0 || wordKey > 5){
		return "input error wordKey can be 0-5 ";
	}
	let WORDS = [];
	switch ( wordKey ) {
		case 0:
			WORDS = [ "год", "года", "лет" ];
			break;
		case 1:
			WORDS = [ "месяц", "месяца", "месяцев" ];
			break;
		case 2:
			WORDS = [ "день", "дня", "дней" ];
			break;
		case 3:
			WORDS = [ "час", "часа", "часов" ];
			break;
		case 4:
			WORDS = [ "минута", "минуты", "минут" ];
			break;
		case 5:
			WORDS = [ "секунда", "секунды", "секунд" ];
			break;
	}
	let resultWord = "";
	const lastDigit = number % 10;
	if ( lastDigit === 1 ) {
		resultWord = `${WORDS[0]}`;
	}

	if (( lastDigit  >= 2 ) &&
		 ( lastDigit  <= 4 )) {
			 resultWord = `${WORDS[1]}`;
	}

	if ( lastDigit  === 0 ) {
		resultWord = `${WORDS[2]}`;
	}

	if ( number > 10 && number < 20 ) {
		resultWord = `${WORDS[2]}`;
	}

	if (( lastDigit  >= 5 ) &&
		 ( lastDigit  <= 9 ))  {
			 resultWord = `${WORDS[2]}`;
			}
	return resultWord;
}

function secondsToTime ( seconds ) {
  const HOURS = 3600, MINUTES = 60;
  let resultSeconds, resultHours, resultMinutes, resultTime;

  resultHours = Math.floor( seconds / HOURS );
  resultMinutes = Math.floor(( seconds - ( resultHours * HOURS ))  / MINUTES );
  resultSeconds = seconds - ( resultHours * HOURS )  - ( resultMinutes * MINUTES );

	resultHours = resultHours.toString().padStart ( 2, '0' );
	resultMinutes = resultMinutes.toString().padStart ( 2, '0' );
	resultSeconds = resultSeconds.toString().padStart ( 2, '0' );

  resultTime = resultHours + ':' + resultMinutes + ':' + resultSeconds;

  return resultTime;
}

function getResultTask04() {
  let seconds = parseInt( document.getElementById( "secondsInput" ).value );
  let resultTime;

  if ( validateNumber( seconds, "secondsConvertErrorMsg" ))  {
      resultTime = secondsToTime( seconds );
  }

  document.getElementById( "resultTask04Label" ).innerText = resultTime;
}

function getResultTask05() {
  const ID_RESULT_TASK05 = document.getElementById( "resultTask05Label" );
  let parseAge = parseInt ( document.getElementById( "ageInput" ).value );
  let resultAgeString;

  if ( !validateNumber( parseAge, "studentAgeErrorMsg" ))  {
		return;
	}

  if ( parseAge <= 0 ) {
		showErrorMessage( "Студент должен быть когда то рождён.", "studentAgeErrorMsg" );
		return;
	}

  if ( parseAge > 100 ) {
		showErrorMessage( "Студенты так долго не живут :-D", "studentAgeErrorMsg" );
		return;
	}
	ID_RESULT_TASK05.innerText = parseAge + " " + selectWord( parseAge, 0);
}


function getResultTask06() {
  let parseDateFirst = new Date ( Date.parse( document.getElementById( "dateCompareFirstInput" ).value ));
  let parseDateSecond = new Date ( Date.parse( document.getElementById( "dateCompareSecondInput" ).value ));

	if ( isNaN( parseDateFirst )  || isNaN( parseDateSecond ))  {
		showErrorMessage( "Ошибка ввода, пожалуйста соблюдайте заданый формат.", "compareDateErrorMsg" );
		return;
	}

	if ( parseDateFirst > parseDateSecond ) {
			[ parseDateFirst , parseDateSecond ] = [ parseDateSecond , parseDateFirst ];
	}

	let diffSeconds = (parseDateSecond.getSeconds() - parseDateFirst.getSeconds());
	let diffMinutes = (parseDateSecond.getMinutes() - parseDateFirst.getMinutes());
	let diffHours = (parseDateSecond.getHours() - parseDateFirst.getHours());
	let diffDays = (parseDateSecond.getDate() - parseDateFirst.getDate());
	let diffMonths = (parseDateSecond.getMonth() - parseDateFirst.getMonth());
	let diffYears = (parseDateSecond.getFullYear() - parseDateFirst.getFullYear());

	let resultTime = diffYears + " " + selectWord(diffYears, 0) + ", ";
	resultTime += diffMonths + " " + selectWord(diffMonths, 1) + ", ";
	resultTime += diffDays + " " + selectWord(diffDays, 2) + ", ";
	resultTime += diffHours + " " + selectWord(diffHours, 3) + ", ";
	resultTime += diffMinutes + " " + selectWord(diffMinutes, 4) + ", ";
	resultTime += diffSeconds + " " + selectWord(diffSeconds, 5) + ";";

	document.getElementById( "resultTask06Label" ).innerText = resultTime;
}

function IsValidDate( day, month, year ) {

	// Check the ranges of month and year
	if ( year < 1000 || year > 3000 || month === 0 || month > 12 )
			return false;

	let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	// Adjust for leap years
	if ( year % 400 === 0 || ( year % 100 !== 0 && year % 4 === 0 ))  {
		monthLength[ 1 ] = 29;
	}

	// Check the range of the day
	return day > 0 && day <= monthLength[ month - 1 ];
}

function getResultTask07() {
	document.getElementById( "zodiacErrorMsg" ).style.display = "none";
	let inputDate = document.getElementById( "dateZodiacInput" ).value.split ( "-" );
	const RESULT_LABEL = document.getElementById( "resultTask07Label" );
	const ZODIAC_IMG = document.getElementById( "zodiacImg" );

	const zod_signs = [ "Capricorn" , "Aquarius", "Pisces", "Aries",
	"Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
	"Sagittarius" ];

	const day = parseInt( inputDate[ 2 ] );
	const month = parseInt( inputDate[ 1 ] );
	const year = parseInt( inputDate[ 0 ] );

	let zodiacSign = "";

  if ( !IsValidDate( day, month, year ))  {
		RESULT_LABEL.innerText = "";
		ZODIAC_IMG.src = "";
    showErrorMessage( "Дата введена не верно. Пожалуйста введите корректные данные.", "zodiacErrorMsg" );
    return;
  }

	switch ( month )
	{
		case 1: {//January
				 if ( day < 20 )
			 		zodiacSign = zod_signs[ 0 ];
				 else
			 		zodiacSign = zod_signs[ 1 ];
			    }break;
		case 2: {//February
				 if ( day < 19 )
			 		zodiacSign = zod_signs[ 1 ];
				 else
			 		zodiacSign = zod_signs[ 2 ];
				}break;
		case 3: {//March
				 if ( day < 21 )
				 	zodiacSign = zod_signs[ 2 ];
				 else
				 	zodiacSign = zod_signs[ 3 ];
				}break;
		case 4: {//April
				 if ( day < 20 )
			 		zodiacSign = zod_signs[ 3 ];
				 else
			 		zodiacSign = zod_signs[ 4 ];
				}break;
		case 5: {//May
				 if ( day < 21 )
			 		zodiacSign = zod_signs[ 4 ];
				 else
			 		zodiacSign = zod_signs[ 5 ];
				}break;
		case 6: {//June
				 if ( day < 21 )
			 		zodiacSign = zod_signs[ 5 ];
				 else
			 		zodiacSign = zod_signs[ 6 ];
				}break;
		case 7: {//July
				 if ( day < 23 )
			 		zodiacSign = zod_signs[ 6 ];
				 else
			 		zodiacSign = zod_signs[ 7 ];
				}break;
	 	case 8: {//August
				 if ( day < 23 )
			 		zodiacSign = zod_signs[ 7 ];
				 else
			 		zodiacSign = zod_signs[ 8 ];
				}break;
		case 9: {//September
				 if ( day < 23 )
			 		zodiacSign = zod_signs[ 8 ];
				 else
			 		zodiacSign = zod_signs[ 9 ];
				}break;
		case 10: {//October
				 if ( day < 23 )
			 		zodiacSign = zod_signs[ 9 ];
				 else
			 		zodiacSign = zod_signs[ 10 ];
				}break;
		case 11: {//November
				 if ( day < 22 )
			 		zodiacSign = zod_signs[ 10 ];
				 else
			 		zodiacSign = zod_signs[ 11 ];
				}break;
		case 12: {//December
				 if ( day < 22 )
			 		zodiacSign = zod_signs[ 11 ];
				 else{
					zodiacSign = zod_signs[ 0 ];
				 }
				}break;
	 }
	 	RESULT_LABEL.innerText = zodiacSign;
    ZODIAC_IMG.src = "images/zodiac/" + zodiacSign + ".ico";
}

function getResultTask08() {
  let resultDiv = document.getElementById( "resultTask08" );
  const CHESS_BOARD_SIZE = 480;
	const IS_VALID_INT = x => x && !isNaN( x )  && Number.isInteger( x )  || x === 0;
	document.getElementById( "chessErrorMsg" ).style.display = "none";

	let parseInput = document.getElementById( "rowAndColChessBoardInput" ).value;
	parseInput = parseInput.split( "x" );
	let parseRow = parseInt( parseInput[ 0 ] );
	let parseCol = parseInt( parseInput[ 1 ] );

	if ( !IS_VALID_INT( parseRow ) || !IS_VALID_INT( parseCol ))  {
		showErrorMessage( "Вы действительно ввели числа?!", "chessErrorMsg" );
		return;
	}

  resultDiv !== null ? ( resultDiv.remove())  : ( null );
  resultDiv = document.createElement('div');
  resultDiv.setAttribute( 'id', 'resultTask08' );
  let taskDiv = document.getElementById("content_task_08" );
  taskDiv.appendChild(resultDiv);

  let chessPlateSIze = ( parseRow < parseCol ) ? CHESS_BOARD_SIZE / parseCol : CHESS_BOARD_SIZE / parseRow;

	let colorFlag = true;
	let color = "black";
  let iDiv = document.createElement( 'div' );
  for ( let i = 0; i < parseRow; i++ ) {
    let rowDiv = document.createElement( 'div' );
    rowDiv.setAttribute( 'id', 'rowDiv' );
		rowDiv.setAttribute( "style" , "min-height: " + chessPlateSIze + "px;" );
    resultDiv.appendChild( rowDiv );
    rowDiv.setAttribute( 'class', 'chessBoardRow' );

    for ( let j = 0; j < parseCol; j++ ) {
      let colDiv = document.createElement( 'div' );
      colDiv.setAttribute( 'id', 'colDiv' );
			colDiv.style.height = chessPlateSIze +"px";
			colDiv.style.width = chessPlateSIze +"px";
			colDiv.setAttribute( 'class', 'chessBoardCol' );
			if ( j % 2 ) {
				colorFlag ? color = "white" : color = "black";
			} else {
				colorFlag ? color = "black" : color = "white";
			}

			colDiv.style.backgroundColor = color;
      rowDiv.appendChild( colDiv );
    }
		if ( colorFlag ) {
			colorFlag = false;
		} else {
			colorFlag = true;
		}
  }
}

function getResultTask09() {
  let parseEntrances = parseInt( document.getElementById( "entrancesInput" ).value );
  let parseFlats = parseInt( document.getElementById( "flatsInput" ).value );
  let parseFloors = parseInt( document.getElementById( "floorsInput" ).value );
  let parseflatsResult = parseInt( document.getElementById( "flatsResultInput" ).value );

  if ( !validateNumber( parseEntrances, "flatsCountErrorMsg" ) &&
       !validateNumber( parseFlats, "flatsCountErrorMsg" ) &&
       !validateNumber( parseFloors, "flatsCountErrorMsg" ) &&
       !validateNumber( parseflatsResult, "flatsCountErrorMsg" )) {
    showErrorMessage( "Пожалуйста введите именно число!", "flatsCountErrorMsg" );
  }

  let allFlatsCount = parseEntrances * parseFlats * parseFloors;
  if ( allFlatsCount < parseflatsResult ) {
    showErrorMessage( "Похоже эти аппартаменты вне пределов здания!", "flatsCountErrorMsg" );
  }

  let resultEntrances = Math.ceil( parseflatsResult / ( parseFlats *  parseFloors ));
	let resultFloor = 0;
	if ( resultEntrances > 1 ) {
		let allUsedEntrancesFlats = ( resultEntrances -1 )  * ( parseFlats *  parseFloors );
		resultFloor = Math.round(( parseflatsResult - allUsedEntrancesFlats )   / parseFlats );
	} else {
		resultFloor = Math.round( parseflatsResult / parseFlats );
	}
  document.getElementById( "resultTask09Label" ).innerText = `Подьезд = ${resultEntrances}, Этаж = ${resultFloor}`;
}

function getResultTask10() {
  let parseNumber = parseFloat( document.getElementById( "numberInput" ).value );
	let resultSum = 0;

	if ( parseNumber < 0 )  parseNumber *= ( -1 );

	let sNumber = parseNumber.toString().split( "" );
	let i = 0;
	for ( i ; i < sNumber.length; i++ )  {
		if ( sNumber[i] !== "." )  {
			resultSum += parseInt( sNumber[ i ] );
		}
	}
  document.getElementById( "resultTask10Label" ).innerText = resultSum;
}

function getResultTask11() {
	const resultHttpDiv = document.getElementById( "splitLinkResult" );
	resultHttpDiv.innerText = "";
	const parceLinks = document.getElementById( "httpInput" );
	const resultUl = parceLinks.value
	        .split( /[\s,]/ )
	        .filter( link => !!link )
	        .map( link => link.replace( /https?:\/\//gi, '' ))
	        .sort()
	        .reduce(( ul,link ) =>
	        	ul += `<li><a href="//${link}">${link}</a></li>`, "" );

	resultHttpDiv.innerHTML = resultUl;
}
