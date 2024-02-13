// students.js

function congratulateTopStudent(data) {
  let maxScore = 0;
  let topStudent = null;

  

  data.forEach(group => {
    group.forEach(student => {
      if (student.score > maxScore) {
        maxScore = student.score;
        topStudent = student;
      }
    });
  });
  
  if (topStudent) {
    console.log(`Congratulations to ${topStudent.name} for achieving the highest score: ${maxScore}!`);
  } else {
    console.log('No student with a score greater than 0 found.');
  }
}

module.exports = congratulateTopStudent;