let num = 3 ; // number is odd 
for (let i = 1; i <= num; i++) {
    let row = ''; 
    for (let j = 1; j <= num; j++) {
        if((j == num/2 +0.5) || i == num/2 +0.5)
        row += '* '; // Har cell mein character ko add karein
        else row += '  '
    }
    console.log(row); 
}

