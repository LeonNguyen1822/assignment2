/* Filename: quiz.js
   Target html: quiz.html
   Purpose: Check the answer for any questions and compared answer with correct answers to defined and caculated final score
   Author: Nguyen Huong Thu
   Date written: 18.09.2020 */


"use strict"; //prevents the creation of global variables in functions//

// validate the form //

function validate() {
    //set local variables//
    var errMsg = "";
    var result = true;
    var point = 0 ;

    // get information from form and check the rules//
    // if something is wrong set the result to false and add an error message//
    var firstname = document.getElementById("firstname").value;
    if(!firstname.match(/^[a-zA-Z]+$/)) {
        errMsg += "Your first name may only contain alpha characters. \n";
        result = false;
    }

    var lastname = document.getElementById("lastname").value;
    if(!lastname.match(/^[a-zA-Z]+$/)) {
        errMsg += "Your last name may only contain alpha characters. \n";
        result = false;
    }
    
    var studentid = document.getElementById("studentid").value;
    if(!isFinite(studentid) || isNaN(studentid)) {
        errMsg += "Student ID must be a number. \n";
        result = false;
    }
    else if (!studentid.match(/^(([0-9]{7})|([0-9]{10}))$/)){
        errMsg += "You must enter Student ID either 7 or 10 digits. \n";
        result = false;
    }

       //question 1//
    var qs1Answer = document.getElementById("question1").value;
    if (qs1Answer == "User agent is not a person.") {
        point += 2;
    }
    if (qs1Answer.length == 0) {
        errMsg += "You have not selected any answer for Question 1\n";
        result = false;
    }

        //question 2//
    var qs2Answer = document.getElementById("answ1").checked;
    var qs2Wrong = document.getElementById("answ2").checked;
    var qs2Wrong2 = document.getElementById("answ3").checked;
    if (qs2Answer) {
        point += 2;
    }
    if (!qs2Answer && !qs2Wrong && !qs2Wrong2) {
        errMsg += "You have not selected any answer for Question 2\n";
        result = false;
    }
    //question 3//
    var qs3Answer = document.getElementById("answ4").checked;
    var qs3Answer2 = document.getElementById("answ5").checked;
    var qs3Wrong = document.getElementById("answ6").checked;
    var qs3Wrong2 = document.getElementById("answ7").checked;
    if (qs3Answer) {
        point += 1;
    }
    if (qs3Answer2) {
        point += 1;
    }
    if (!qs3Answer && !qs3Answer2 && !qs3Wrong && !qs3Wrong2) {
        errMsg += "You have not selected any answer for Question 3\n"
        result = false;
    }

        //question 4//
    var qs4Answer = document.getElementById("answ8").value;
    if (qs4Answer == "Mozilla/5.0(Windows)"){
        point += 2;
    }
    if (qs4Answer == ""){
        errMsg += "You have not selected any answer for Question 4\n"
        result = false;
    }

       //question 5//
    var qs5Answer = document.getElementById("answ10").value;
    if (qs5Answer == "increadible in the future"){
        point += 2;
    }
    if (qs5Answer.length == 0){
        errMsg += "You have not entered any answer for  Question 5\n"
        result = false;
    }
    
    if(point == 0){
        errMsg += "Quiz can not submitted because your point is 0. Try again!";
        result = false;
    }
    
    if (errMsg != "") {
        alert(errMsg);
    }
    localStorage.setItem("firstname",firstname);
    localStorage.setItem("lastname",lastname);
    localStorage.setItem("studentid",studentid);
    localStorage.setItem("point",point);
    return result;
}



function init () {
    document.getElementById("quiz").onsubmit = validate;
}

window.onload = init;