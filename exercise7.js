// No. 1

function transformData(data) {
    const transformedData = {};
  
    data.forEach((obj) => {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          transformedData[obj[key]] = key;
        }
      }
    });
  
    return transformedData;
  }

  const data = [
    { name: 'Leon', age: 25 },
    { name: 'Alice', age: 30 },
  ];
  
  const switchedData = transformData(data);
  console.log(switchedData);



// No. 2

function switchPropertiesAndValues(array) {
    const result = [];
    
    for (const obj of array) {
      const switchedObj = {};
      switchedObj[obj.Name] = "name";
      switchedObj[obj.age] = "age";
      result.push(switchedObj);
    }
    
    return result;
  }

  const inputArray = [
    { Name: "Leon", age: 20 },
    { Name: "Kevin", age: 25 },
  ];
  
  const switchedArray = switchPropertiesAndValues(inputArray);
  console.log(switchedArray);
  
// No 3


  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const number = 5;
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
  
  