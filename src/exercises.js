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
