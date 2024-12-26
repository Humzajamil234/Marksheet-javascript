alert("Students Marksheet");

function generateMarksheet() {
    // Get input values
    var name = document.getElementById('name').value;
    var math = parseInt(document.getElementById('math').value);
    var english = parseInt(document.getElementById('english').value);
    var science = parseInt(document.getElementById('science').value);
    var chemistry = parseInt(document.getElementById('chemistry').value);
    var physics = parseInt(document.getElementById('physics').value);
    
    
    // Calculate total and percentage
    var totalMarks = math + english + science + chemistry + physics;
   var percentage = (totalMarks / 500) * 100;

    // Determine grade based on percentage
    var grade = '';
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display results
    var resultHTML = `<h3>Marksheet for ${name}</h3>
                      <p>Maths: ${math}</p>
                      <p>English: ${english}</p>
                      <p>Science: ${science}</p>
                      <p>Chemistry: ${chemistry}</p>
                      <p>Physics: ${physics}</p>
                      <p>Total Marks: ${totalMarks}/500</p>
                      <p>Percentage: ${percentage.toFixed(2)}%</p>
                      <p>Grade: ${grade}</p>`;

    document.getElementById('result').innerHTML = resultHTML;
}