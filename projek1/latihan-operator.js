// Spread Operator
// Menggabungkan array
// const angka1 = [1,2,3];
// const angka2 = [4,5,6];

// const gabung = [...angka1,...angka2];
// console.log(gabung);

// menggabungkan object
// const abjad_angka1 = { a : 1,b : 2 };
// const abjad_angka2 = { c : 3,d : 4 };

// const join = {...abjad_angka1,...abjad_angka2};
// console.log(join);


// Membuat salinan data array
// const number1 = [1,2,3];
// const newNumber = [...number1]
// newNumber.push(4,5,6)

// console.log(number1); // nilai aslinya
// console.log(newNumber); // nilai salinan tanpa merubah nilai aslinya

// Membuat salinan data object
// const numer1 = {a : 1, b : 2};
// const newNumber = Object.assign(numer1,{c : 3, d : 4});

// console.log(newNumber);

// Mengirim argumen ke fungsi
// function penjumlahan(a,b,c) {
//     return a + b + c;
// }

// const number = [1,2,3];
// const operasi = penjumlahan(...number);

// console.log(operasi)

// Menginisialisasi Array
// const number = [1,2,3];
// const newNumber = [...number,4,5,6];

// console.log(newNumber)

// Menginisialisasi object / Menggabungkan object dan membuat klon object 
// const number = {a : 1,b : 2};
// const newNumber = {...number,c : 3,d : 4};

// console.log(newNumber)

// menggabungkan nilai default
// const person1 = {
//     nama : 'rehan',
//     umur : 16
// };

// const person2 = {
//     nama : 'fajar',
//     umur : 16
// }

// const newPers = {...person1,...person2} // jadi person1 di ganti menjadi person2
// console.log(newPers);