function filterRange(arr, a, b) {
  let arrNum = [];
  for (let i of arr) {
    if (i >= a && i <= b) {
    arrNum.push(i)
    }
  }
  return arrNum
}