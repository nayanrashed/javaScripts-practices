function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please, provide me a valid number.";
  } else {
    const cubeOfNumber = number * number * number;
    return cubeOfNumber;
  }
}
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please, provide me a valid data.";
  } else {
    return string1.includes(string2);
  }
}
function sortMaker(arr) {
  const sortedArray = [];
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr[0] === arr[1]) {
    return "equal";
  } else if (arr[0] > arr[1]) {
    return arr;
  } else {
    sortedArray.push(arr[1]);
    sortedArray.push(arr[0]);
    return sortedArray;
  }
} 
function findAddress(obj) {
  const keys = ["street", "house", "society"];
  let address = "";

  for (let i = 0; i < keys.length; i++) {
    if (Object.hasOwn(obj, keys[i]) !== true) {
      const value = "__,";
      address = address + value;
    } else {
      const value = obj[keys[i]];
      address = address + value + ",";
    }
  }
  return address;
}
function canPay(changeArray, totalDue) {
  if (changeArray.length < 1) {
    return "Please provide a valid array";
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      const element = changeArray[i];
      sum = sum + element;
    }
    if (sum > totalDue) {
      return true;
    } else {
      return false;
    }
  }
}