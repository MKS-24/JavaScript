rnum = 9;
nos = rnum - 1;
nostar = 1;
for (let i = 1; i <= rnum; i++) {
  let row = "";
  let value = 1;
  for (let j = 1; j <= nos; j++) {
    row += "  ";
  }
  nos--;

  let flag = true
  for (let k = 1; k <= nostar; k++) {
    if (k <= i && i <= rnum) {
      row += value + " ";
      value++
    }
    else{
        if(flag) value--
        value--
        row += value + " ";
        flag = false
    }
  }
  nostar += 2;
  console.log(row);
}
