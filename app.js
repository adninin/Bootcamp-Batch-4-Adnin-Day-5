const readline = require('readline');

//Require npm validator *jangan sampe lupa//
const validator = require('validator');


//Interface untuk input dan output//
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Memberi pertanyaan untuk diisi//
rl.question('What is your name? ', (name) => 
rl.question('What is your email? ', (email) => 
rl.question('What is your number? ', (num) => 
rl.question('What is your address? ', (add) => {
    

//Menjelaskan kembali pertanyaan serta jawaban diatas//

    //Menuliskan kembali nama yang telah diisi//
    console.log(`Your name : ${name}`);

    //Peringatan yang akan muncul jika email yang dimasukkan salah//
    if (validator.isEmail(email) == false) {
        console.log('Email tidak valid!')
    }

    //Tulisan yang akan muncul jika email yang dimasukkan benar//
    else {
        console.log(`Your email : ${email}`);
    }

    //Peringatan yang akan muncul jika nomor yang dimasukkan salah//
    if (validator.isMobilePhone(num) == false) {
        console.log('Nomor tidak valid!')
    }

    //Tulisan yang akan muncul jika nomor yang dimasukkan benar//
    else {
        console.log(`Your number : ${num}`);
    }

    //Menuliskan kembali alamat yang telah diisi//
    console.log(`Your address : ${add}`);

    //Mengucapkan terimakasih setelah mengisi data dengan benar//
    console.log(`Thank you for welcome ${name}!`);

    //Menutup program//
    rl.close();
}))));