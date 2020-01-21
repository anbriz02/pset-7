function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

 let firstElement1= a[0]
 let lastElement1= a[a.length - 1]

 let firstElement2= b[0]
 let lastElement2= b[b.length - 1]

 if (firstElement1===firstElement2 || lastElement1===lastElement2 || a !== undefined && b !== undefined && a.length < 1 && b.length < 1){
   return true;
 } else {
   return false;
 }
}

function endsMeet(values, n) {
  let  nada = [];
  if (!values || values.length < n || n <= 0) {
    return  nada;
  } else if (n > 0) {
    let newArray = [];
    let first;
    for (f = 0; f <= n - 1; f++) {
      first = values[f];
      newArray.push(first);
    }
    let end = values.length - 1;
    let endStart = values.length - n;
    for (e = endStart; e <= end; e++) {
      let addEnd = values[e];
      newArray.push(addEnd);
    }
    return newArray;
  } else {
    return values;
  }

   
}

function difference(numbers) {
  if (!numbers || numbers.length < 1) {
    return undefined;
  } else if (numbers.length >= 1) {
    for (i = 0; i <= numbers.length - 1; i++) {
      let number = numbers[i];
      if (isNaN(number)) {
        return undefined;
      }
    }
    let biggest = Math.max.apply(null, numbers);
    let chiquito = Math.min.apply(null, numbers);
    let difference = biggest - chiquito;
    return difference;
  } else {
    return undefined;
  }
   
}

function max(number) {
  let numberthingy = true;
  if (!number || number.length < 3) {
    return undefined;
  }
  let check = number.length % 2;
  if (check === 0) {
    return undefined;
  }
  if (number.length >= 3) {
    for (i = 0; i <= number.length - 1; i++) {
      let unknown = number[i];
      if (isNaN(unknown)) {
        numberthingy = false;
      }
    }
  }
  if (numberthingy === false) {
    return undefined;
  } else {
    let end = number.length - 1;
    let first = number[0];
    let last = number[end];
    let middle = number[end / 2];
    let newArray = [];
    newArray.push(first);
    newArray.push(middle);
    newArray.push(last);
    let biggest = Math.max.apply(null, newArray);
    return biggest;
    }
   
}

function middle(values) {
  let array = [];

  if (values == undefined) {

    return [];

  } else if (values.length < 3) {

    return [];

  } else if (values.length % 2 == 0) {
    return [];
  } else {
    let middleee = values[values.length - (Math.ceil(values.length / 2))]
    let middleonleft = values[(values.length - 1) - (Math.ceil(values.length / 2))]

    array.push(middleonleft, middleee)

    return array;
  }
}

function increasing(numbers) {
if (numbers == undefined || numbers == []) {
    return undefined;
  } else if (numbers.length < 3 || numbers.some(isNaN)) {
    return undefined;
  } else {

    for (let i = 1; i < numbers.length; i++) {
      if ((numbers[i - 1] + 1) === numbers[i]) {
        i++
        if ((numbers[i - 1] + 1) === numbers[i]) {
          return true;
          break;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return false;
  }
}

function everywhere(values, x) {
  if (!values || values.length < 1 || !x) {
    return false;
  }
  let status = false;
  let test = 0;
  for (i = 0; i < values.length - 1; i = i + 2) {
    if (values[i] === x) {
      test++;
    }
  }
  if (test >= (values.length - 1) / 2) {
    return true;
  }
  let test2 = 0;
  for (h = 1; h < values.length - 1; h = h + 2) {
    if (values[h] === x) {
      test2++;
    }
  }
  if (test2 >= (values.length - 1) / 2) {
    return true;
  }
  let test3 = 0;
  for (j = 1; j < values.length - 1; j = j + 3) {
    if (values[j] === x) {
      test3++;
    }
  }
  if (test3 >= values.length / 3) {
    return true;
  } else {
    return false;
  }


}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3) {
    return false;
  }
  let numberthingy = true;
  for (i = 0; i <= numbers.length - 1; i++) {
    if (isNaN(numbers[i])) {
      numberthingy = false;
    }
  }
  if (numberthingy === false) {
    return false;
  }
  let status = false;
  for (h = 0; h <= numbers.length - 1; h++) {
    let one = numbers[h] % 2;
    let two = numbers[h + 1] % 2;
    let three = numbers[h + 2] % 2;
    if (one === 0 && two === 0 && three === 0) {
      return true;
    } else if (one > 0 && two > 0 && three >0) {
      return true;
    } else {
      status = false;
    }
  }
  if (status === false) {
    return false;
  }
   
}

function balance(numbers) {
  if (!numbers || numbers.length < 2) {
    return false;
  }
  let numberthingy = true;
  for (i = 0; i <= numbers.length - 1; i++) {
    if (isNaN(numbers[i])) {
      numberthingy = false;
    }
  }
  if (numberthingy === false) {
    return false;
  }
  let left = 0;
  let right = 0;
  let count = 0;
  for (j = numbers.length; j > -1; j--) {
    left = 0;
    right = 0;
    for (k = numbers.length - j; k > -1; k--) {
      left = left + numbers[k];
    }
    for (h = numbers.length - 1; h > numbers.length - j; h--) {
      right = right + numbers[h];
    }
    if (left === right) {
      count = 1;
      return true;
    }
  }
  if (count === 0) {
    return false;
  }
   
  console.log("test");
}

function clumps(values) {
  let count = 0;
  if (!values) {
    return -1;
  }
  else {
    for (let i = 0; i < values.length - 1; i++) {
    if (values[i - 1] === values[i]) {
    }
    else if (values[i] === values[i + 1]) {
      count++;
    }
  }
  return count;
  }
   
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
