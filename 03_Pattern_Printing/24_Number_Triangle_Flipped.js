rnum = 4
nos = rnum-1
nostar = 1;
for(let i = 1 ; i <= rnum ; i++)
{
    let row = ''; 
    for(let j = 1; j <= nos; j++) {
        row += '  '; 
    }
    nos--
    for(let k = 1; k <= nostar; k++) {
        row += k + ' '; 
    }
    nostar++
    console.log(row); 
}
