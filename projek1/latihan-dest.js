// Destructuring itu apa? "membongkar" sebuah value array atau value object

// Destructuring Array tidak harus sama penamaannya dengan properti di dalam array dan harus berdasarkan urutan index.
// const person = ['rehan','burhan','gilbert','rendi'];
// const [pertama,kedua,ketiga,keempat] = person;

// console.log(ketiga);
// console.log(pertama);
// console.log(kedua);
// console.log(keempat);


// Destructuring Object itu harus sama penamaannya dengan properti di dalam object dan menyimpan nilai nya harus berdasarkan propertinya.
// const bio = {
//     nama : 'burhan gilbert',
//     umur : 30,
// };
// const {nama,umur} = bio;

// console.log(nama);
// console.log(umur);

// Destructuring Object bisa bernilai default / atau nilai bawaan
// const bio = {
//     nama : 'burhan gilbert',
//     umur : 30,
// };
// const {nama,umur,email = 'email@default.com'} = bio;

// console.log(nama);
// console.log(umur);
// console.log(email);

// Destructuring Object bisa mengganti nama variabel lokal saat melakukan destructuring objek.
// const bio = {
//     nama : 'burhan gilbert',
//     umur : 30,
// };
// const {nama : names,umur : age} = bio;

// console.log(names);
// console.log(age);

// Destructuring parameter fungsi + Default Values
// const funcPerson = ({firstName,lastName = 'adammullah'}) => {
//     return `Full name : ${firstName} ${lastName}`;
// };

// const person = {
//     firstName : 'muhammad fajar'
// };

// console.log(funcPerson(person));

// Destructuring Looping
// const fruits = [
//     {id : 1, fruit : 'apel'},
//     {id : 2, fruit : 'mangga'},
//     {id : 3, fruit : 'sirsak'}
// ];

// for (const {id,fruit} of fruits) {
//     console.log(`ID : ${id}, NAME FRUIT : ${fruit}`);
// };