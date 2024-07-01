
        
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


//Question 9
var colorNames = ["Red", "Blue", "Green", "Orange", "Yellow"];
document.write("<br><hr><br><b>Original Color Array : </b>"+ colorNames);

var userColorAtBegin = prompt("What color you want to add to the beginning");
colorNames.unshift(userColorAtBegin);

document.write("<br><b>Add Color to the beginning of the Array : </b>"+ colorNames);

var userColorAtEnd = prompt("What color you want to add to the end");
colorNames.push(userColorAtEnd);

document.write("<br><b>Add Color to the end of the Array : </b>"+ colorNames);

colorNames.pop();
document.write("<br><b>After Removing Last element : </b>" + colorNames);

colorNames.shift();
document.write("<br><b>After Removing First element : </b>" + colorNames);

var index = prompt("At which index you want to add a color.");
var colorAtIndex = prompt("At what color you want to add.");

colorNames.splice(index,0,colorAtIndex);

document.write("<br><b>Add a color at specific index : </b>" + colorNames);

var indexForDelete = prompt("At which index you want to delete color(s)");
var deleteCount = prompt("How many colors you want to delete.");

colorNames.splice(indexForDelete, deleteCount);
document.write("<br><b>Delete color(s) : </b>"+ colorNames);

//Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var scores = [320, 230, 480, 120];
document.write("<br><br><hr><br><b>Scores of Student : </b>"+ scores);
scores.sort();
document.write("<br><b>Ordered Scores of Students : </b>"+ scores);

//Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<br><hr><br><b>Cities List : </b>"+ cityNames);
document.write("<br><b>Selected Cities List : </b>"+ cityNames.slice(2,4));



//Write a program to create a single string from the below mentioned array:

var arr = ["This", "is", "my", "cat"];
document.write("<br><hr><br><b>Array : </b>"+ arr);

document.write("<br><b>String : </b>"+ arr.join(" "));



//Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)

var devices = ["Keyboard", "Mouse", "Printer", "Monintor"];

document.write("<br><hr><br>");

for(var k = devices.length-1; k >= 0; k--){
    document.write("<br>"+ devices[k]);
}


//Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//<select name="ph" id="ph">
document.write("<br><hr><br><select name='ph' id='ph'>");

//<option value="ph">phones[m]</option>
for(var m = 0; m < phones.length; m++){
    document.write("<option value='ph'>" + phones[m]+ "</option>");
}

document.write("</select>");
