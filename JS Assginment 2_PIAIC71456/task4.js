var grade = ""; 
var result = "";


var engMarks = parseInt(prompt("Enter English Marks Obtained: "), 10);
var mathsMarks = parseInt(prompt("Enter Maths Marks Obtained: "), 10);
var scienceMarks = parseInt(prompt("Enter Science Marks Obtained: "), 10);

document.getElementById("txtEnglish").value = engMarks;
document.getElementById("txtMaths").value = mathsMarks;
document.getElementById("txtScience").value = scienceMarks;

var totalMarks = 300;
var totalMarksObt = engMarks + mathsMarks + scienceMarks;

var averageMarks = ((totalMarksObt / totalMarks) * 100).toFixed(2);

switch (

  averageMarks > 80 && averageMarks <= 100
    ? 1
    : averageMarks > 70 && averageMarks < 80
    ? 2
    : averageMarks > 60 && averageMarks < 70
    ? 3
    : 0
) {
  case 1:
    grade = "A-One";
    result = "Excellent";
    break;
  case 2:
    grade = "A";
    result = "Good";
    break;
  case 3:
    grade = "B";
    result = "You Need To Improve";
    break;
  case 0:
    grade = "Fail";
    result = "Sorry";
    break;
}

document.getElementById("txtTotalMarks").value = totalMarks;
document.getElementById("txtTotalMarksObt").value = totalMarksObt;
document.getElementById("txtAvgMarks").value = averageMarks + "%";
document.getElementById("txtGrade").value = grade;
document.getElementById("txtResult").value = result;
