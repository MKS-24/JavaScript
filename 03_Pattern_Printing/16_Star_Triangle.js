rnum = 5
nos = 1
for(let i = 1 ; i <= rnum ; i++)
{
    let row = ''; 
    for(let j = 1; j <= nos; j++) {
        row += j + ' '; 
    }
    console.log(row); 
    nos++
}
