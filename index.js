
        
var studentNames = []; //Declare an empty array using JS literal notation to store student names in future.


var students = new Array(); //Declare an empty array using JS object notation to store student names in future.


var fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"]; //Declare and initialize a strings array.


var studentAge = [14, 13, 15, 16, 12]; //Declare and initialize a numbers array.


var booleanArray = [true, false, false, true, true]; //Declare and initialize a boolean array.


var mixedArray = ["Maheen", 10, true]; //Declare and initialize a mixed array.


//Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser.
var education = ["SSC","HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("<h1>Qualifications:</h1><hr>");

for(var i=0; i<education.length; i++){
    document.write(i+1 + ") " + education[i] + "<br>");
}

//Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students
var stdNames = ["Michael", "John", "Tony"];
var stdScores = [320, 230, 480];
var perc = [];
var totalMarks = 500;

for(var j = 0; j < stdScores.length; j++){
    perc[j] = (stdScores[j]*100)/totalMarks;
}

document.write("<br><h2>Student Report: </h2>");

for(var i = 0; i< stdNames.length; i++){
    document.write("Score of "+ stdNames[i] + " is "+ stdScores[i] + ". Percentage : "+ perc[i] + "%<br>");
}




