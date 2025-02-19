rnum = 4
nos = 1
for(let i = 1 ; i <= rnum ; i++)
{
    let row = ''; 
    for(let j = 1; j <= nos; j++) {
        if(j%2 != 0) row += j + ' '; 
    }
    console.log(row); 
    nos+=2
}
