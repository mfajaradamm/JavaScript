// Destructuring Variabel / Assignment

// Destructuring Array
// const con = ['rehan','rendi','irwan'];

// const [name1,name2,name3] = con;

// skiping items
// const [name1,,name3] = con;
// console.log()

// swap items
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// reutrn value pada function
// function coba() {
//     return [1,2];
// }

// const [a,b] = coba();
// console.log(b)

// Rest Parameter
// const [a, ...value] = [1,2,3,4,5]
// console.log(value)



// Destructuring Object
// const mhs = {
//     nama : 'muhammad fajar adammullah',
//     umur : 16
// }

// const {nama,umur} = mhs;
// console.log(nama)

// Assignment tanpa deklarasi object
// ({nama,umur} = {
//     nama : 'muhammad fajar adammullah',
//     umur : 16
// });
// console.log(nama)

// Assign ke variabel baru
// const mhs = {
//     nama : 'muhammad fajar adammullah',
//     umur : 16
// }

// const {nama : n,umur : u} = mhs;
// console.log(u)

// memberikan Default Value
// const mhs = {
//     nama : 'muhammad fajar adammullah',
//     umur : 16,
//     email : 'mfajaradam@gmail.com'
// };

// const {nama,umur,email = 'email@default.com'} = mhs; // nilai default : email@default.com
// console.log(email);

// memberikan nilai default + assign ke variabel baru
// const mhs = {
//     nama : 'muhammad fajar adammullah',
//     umur : 16
// }

// const {nama : n,umur : u,email : e = 'email@default.com'} = mhs;
// console.log(e)

// Rest Paramater untuk object
// const mhs = {
//     nama : 'muhammad fajar adammullah',
//     umur : 16,
//     email : 'mfajaradam@gmail.com'
// }

// const {nama,...value} = mhs;
// console.log(value)

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id : 111,
//     nama : 'muhammad fajar adammullah',
//     umur : 16,
//     email : 'mfajaradam@gmail.com'
// }

// function getIdMhs ({id}) { // menggunakan {id} di dalam parameter itu fungsinya dia akan mengambil id dari object mhs
//     return id;
// }

// console.log(getIdMhs(mhs))


// Destructuring + String Literal
// const mahasiswa = [
//     {
//         nama : 'fajar',
//         semester : 5,
//         mataKuliah : [
//             'Rekayasa Web',
//             'Analisis dan Perancangan Sistem Informasi',
//             'Pemrogramman Sistem Interaktif',
//             'Perancangan Sistem Berorientasi Object'
//         ]
//     },
//     {
//         nama : 'rehan',
//         semester : 5,
//         mataKuliah : [
//             'Rekayasa Web',
//             'Analisis dan Perancangan Sistem Informasi',
//             'Pemrogramman Sistem Interaktif',
//             'Perancangan Sistem Berorientasi Object'
//         ]
//     },
//     {
//         nama : 'rizky',
//         semester : 5,
//         mataKuliah : [
//             'Rekayasa Web',
//             'Analisis dan Perancangan Sistem Informasi',
//             'Pemrogramman Sistem Interaktif',
//             'Perancangan Sistem Berorientasi Object'
//         ]
//     }
// ]

// function cekMahasiswa(sarjana) {
//     return`
//     <ol>
//         ${sarjana.map(m => `<li>${m}</li>`).join('')}
//     </ol>`
// }

// function cekMataKuliah(mataKuliah) {
//     return `
//         <ol>
//             ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//         </ol>
//     `
// }

// const mhs =
// `
// <div class="mhs">
//     ${cekMahasiswa(mahasiswa.map( mahasiswa => `
//     <h2>Nama : ${mahasiswa.nama}</h2>
//     <span>semester : ${mahasiswa.semester}</span>
//     <h4>Mata Kuliah : </h4>
//     ${cekMataKuliah(mahasiswa.mataKuliah)}
//     `
// ))}
// </div>
// `
// const mahaMap = mahasiswa.map(siswa => siswa.mataKuliah) ;
// // const [mataKuliah] = mahaMap;
// console.log(mahaMap)

// document.body.innerHTML = mhs;


// contoh assignment tanpa deklasi object
// ( {nis,nama,umur,agama} = {
//     nis : 2223162283,
//     nama : 'fajar',
//     umur : 16,
//     agama : 'islam',
// });

// console.log(nis,nama,umur,agama);

