rnum = 15;
nos = 1;
// value = 1;
for (let i = 1; i <= rnum; i++) {
  let row = "";
  for (let j = 1; j <= nos; j++) {
    if ((i+j) % 2 == 0) row += 1 + " ";
    else row += 0 + " ";
  }
  console.log(row);
  nos++;
}
