/* Filename: quiz.js
   Target html: result.html
   Purpose: Check the answer for any questions and compared answer with correct answers to defined and caculated final score
   Author: Nguyen Huong Thu
   Date written: 18.09.2020 */

"use strict";

function init () {
    var f_name = document.getElementById("firstname");
    var l_name = document.getElementById("lastname");
    var stu_ID = document.getElementById("studentid");
    var point = document.getElementById("point");
    

    document.getElementById("firstname").readOnly = true;
    document.getElementById("lastname").readOnly = true;
    document.getElementById("studentid").readOnly = true;
    document.getElementById("point").readOnly = true;

    f_name.value = localStorage.getItem("firstname");
    l_name.value = localStorage.getItem("lastname");
    stu_ID.value = localStorage.getItem("studentid");
    point.value = localStorage.getItem("point");

}

window.onload = init;