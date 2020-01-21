function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  } else {
    let aEnd = a.length - 1;
    let bEnd = b.length - 1;
    if (a[0] === b[0] || a[aEnd] === b[bEnd]) {
      return true;
    } else {
      return false;
    }
  }
  // write your code here
}

function endsMeet(values, n) {
  let empty = [];
  if (!values || values.length < n || n <= 0) {
    return empty;
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

  // write your code here
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
    let largest = Math.max.apply(null, numbers);
    let smallest = Math.min.apply(null, numbers);
    let difference = largest - smallest;
    return difference;
  } else {
    return undefined;
  }
  // write your code here
}

function max(number) {
  let numeral = true;
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
        numeral = false;
      }
    }
  }
  if (numeral === false) {
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
    let largest = Math.max.apply(null, newArray);
    return largest;
    }
  // write your code here
}

function middle(values) {
  let empty = [];
  if (!values || values.length < 3) {
    return empty;
  }
  let check = values.length % 2;
  if (check === 0) {
    return empty;
  }
  let end = values.length - 1;
  let start = end / 2;
  let middle = values[start];
  let beforeMiddle = values[start - 1];
  let afterMiddle = values[start + 1];
  let newArray = [];
  newArray.push(beforeMiddle);
  newArray.push(middle);
  newArray.push(afterMiddle);
  return newArray;
  // write your code here
}

function increasing(numbers) {
  if (!numbers || numbers.length < 3) {
    return false;
  }
  let numeral = true;
  for (i = 0; i <= numbers.length - 1; i++) {
    let unknown = numbers[i];
    if (isNaN(unknown)) {
      numeral = false;
    }
  }
  if (numeral === false) {
    return false;
  }
  let status = false;
  for (x = 0; x < numbers.length - 1; x++) {
    if (numbers[x] < numbers[x + 1] && numbers[x + 1] < numbers[x + 2]) {
      status = true;
    }
  }
  if (status === true) {
    return true;
  } else {
    return false;
  }
  // write your code here
}
