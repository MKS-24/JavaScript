rnum = 4
nos = 1
value = 1
for(let i = 1 ; i <= rnum ; i++)
{
    let row = ''; 
    for(let j = 1; j <= nos; j++) {
        row += value + ' '; 
        value++
    }
    console.log(row); 
    nos++
}
