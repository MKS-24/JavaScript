let num = 4;
let ch = 'A';

for (let i = 1; i <= num; i++) {
    let row = ''; 
    for (let j = 0; j < num; j++) {
        row += ch + ' '; // Har cell mein character ko add karein
    }
    console.log(row); 
    ch = String.fromCharCode(ch.charCodeAt(0) + 1); // Character ko increment karein
}

