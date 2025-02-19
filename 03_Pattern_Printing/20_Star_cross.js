let num = 15 ; // number is odd 
for (let i = 1; i <= num; i++) {
    let row = ''; 
    for (let j = 1; j <= num; j++) {
        if(j == i || i+j == num+1)
        row += '* '; // Har cell mein character ko add karein
        else row += '  '
    }
    console.log(row); 
}

