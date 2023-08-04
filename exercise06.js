// 1. Create a function to calculate array of student 

function calculateStudentData(students) {
    const { Name, Email, Age, Score } = students.reduce(
      (acc, student) => {
        const { Name, Email, Age, Score } = student;
  
        return {
          Name: acc.Name.concat(Name),
          Email: acc.Email.concat(Email),
          Age: acc.Age.concat(new Date(Age)),
          Score: acc.Score.concat(Score),
        };
      },
      { Name: [], Email: [], Age: [], Score: [] }
    );
  
    const scoreCount = Score.length;
    const scoreSum = Score.reduce((sum, score) => sum + score, 0);
    const scoreHighest = Math.max(...Score);
    const scoreLowest = Math.min(...Score);
    const scoreAverage = scoreCount ? scoreSum / scoreCount : 0;
  
    const ageCount = Age.length;
    const ageSum = Age.reduce((sum, age) => sum + age.getTime(), 0);
    const ageHighest = new Date(Math.max(...Age));
    const ageLowest = new Date(Math.min(...Age));
    const ageAverage = ageCount ? calculateAgeSum(Age) / ageCount : 0;
  
    const studentData = students.map(({ Name, Email, Age, Score }) => ({
      Name,
      Email,
      Age: new Date(Age),
      Score,
    }));
  
    return {
      studentData,
      scoreStats: {
        highest: scoreHighest,
        lowest: scoreLowest,
        average: scoreAverage,
      },
      ageStats: {
        highest: ageHighest,
        lowest: ageLowest,
        average: ageAverage,
      },
    };
  }
  
  function calculateAgeSum(ages) {
    const now = new Date();
    return ages.reduce((sum, age) => sum + calculateAge(age, now), 0);
  }
  
  function calculateAge(birthDate, now) {
    const birth = new Date(birthDate);
    let age = now.getFullYear() - birth.getFullYear();
    const monthDiff = now.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
  
  const students = [
    {
      Name: 'Leon',
      Email: 'leon@example.com',
      Age: '2001-10-27',
      Score: 90,
    },
    {
      Name: 'Rena',
      Email: 'rena@example.com',
      Age: '2003-11-24',
      Score: 92,
    },
    {
      Name: 'Kevin',
      Email: 'kevin@example.com',
      Age: '1997-05-25',
      Score: 87,
    },
  ];
  
  const calculatedData = calculateStudentData(students);
  const { studentData, scoreStats, ageStats } = calculatedData;
  
  console.log('Student Data:');
  studentData.forEach(({ Name, Email, Age, Score }) => {
  console.log(`Name: ${Name}, Email: ${Email}, Age: ${calculateAge(Age, new Date())}, Score: ${Score}`);
  });
  
  console.log('\nScore Stats:');
  console.log(`Highest: ${scoreStats.highest}, Lowest: ${scoreStats.lowest}, Average: ${scoreStats.average}`);
  
  console.log('\nAge Stats:');
  console.log(`Highest: ${calculateAge(ageStats.highest, new Date())}, Lowest: ${calculateAge(ageStats.lowest,new Date())}, Average: ${ageStats.average}`
  );

  // Selesai 