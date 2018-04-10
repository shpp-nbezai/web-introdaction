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
  document.getElementById("content_task_03").innerHTML = '';
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

  //if (parseDateFirst )
  document.getElementById("resultTask06Label").innerText = new Date (parseDateFirst - parseDateSecond);  
}

//getLinks.fiter(link => !link);
// split
// filter
// map
// sort
// reduse
//string prototype
