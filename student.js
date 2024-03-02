function congratulateTopStudent(data) {
  let topStudent = null;

  data.forEach(group => {
    group.forEach(student => {
      if (typeof student.name === 'string' && typeof student.score === 'number') {
        if (!topStudent || student.score > topStudent.score || (student.score === topStudent.score && new Date(student.date) > new Date(topStudent.date))) {
          topStudent = student;
        }
      } else {
        // Handle invalid data as needed
      }
    });
  });

  if (topStudent) {
    console.log('Congratulations to ${topStudent.name} for achieving the highest score (${topStudent.score}) and being the fastest with date: ${topStudent.date}!');
  }
}

module.exports = congratulateTopStudent;