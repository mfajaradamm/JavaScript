// Promise
// object yang mempresentasikan keberhasilan / kegagalan sebuah event yang Asynchronous di masa yang akan datang
// Pormise itu janji (ditepati / ingkar) 
// kalo di javascript state (fulfilled / rejected / panding),panding itu waktu tunggu sebelum janjinya terpenuhi atau tidak
// untuk menjalankan keadaan ini ada fungsi callback :
// callback (resolve / reject / finally),finally waktu tunggunya selesai
// aksi (then / catch)


// contoh 1
// let ditepati = false;

// const janji = new Promise((resolve,reject) => {
//     if (ditepati) {
//         resolve('janji telah ditepati!');
//     } else {
//         reject('ingkar janji..');
//     } 
// });

// // console.log(janji);
// // cara menagkap resolve dan reject
// janji
//     .then(Response => console.log(`OK! : ${Response}`)) // resolve ditangkap oleh then
//     .catch(Response => console.log(`NOT OK! : ${Response}`)) // reject ditangkap oleh catch


// contoh 2 membuat janji nya tidak langsung ditepati nunggu proses dulu
// let ditepati = false;
// const janji2 = new Promise((resolve,reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         },2000)
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!');
//         },2000)
//     }
// });

// // kedua cara ini bisa disebut Asynchronous
// console.log('mulai')
// // console.log(janji2.then(() => console.log(janji2))); // Cara ini supaya pendingnya/prosesnya keliatan 
// janji2 // kalo menggunakan cara ini,cara menangkap resolve sama reject dia tidak akan menampilkan pending/proses 
//     .finally(() => console.log('Selesai menunggu!')) // finally seperti animasi loading
//     .then((Response) => console.log(`OK! : ${Response}`))
//     .catch((Response) => console.log(`NOT OK! : ${Response}`))
// console.log('selesai')


// Promise.all ketika mempunyai banyak promise kita bisa menjalankannya sekaligus
// let kondisi = false;
// const film = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if(kondisi) {
//             resolve([{
//                 judul : 'Avengers',
//                 sutradara : 'fajar',
//                 pemeran : 'rehan,irwan'
//             }])
//         } else {
//             reject('Film tidak ditemukan!')
//         }
//     },3000)
// })

// const cuaca = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if(kondisi) {
//             resolve([{
//                 kota : 'Bandung',
//                 tempratur : 26,
//                 kondisi : 'Cerah'
//             }])
//         } else {
//             reject('Cuaca tidak diketahui')
//         }
//     },2000)
// })

// Promise.all([film,cuaca])
// .then((Response) => {
//         const [film,cuaca] = Response;
//         console.log(film)
//         console.log(cuaca)
//     })
    // .catch((error) => {
    //     console.error(error)
//     })

// membuat error
// console.log('data yang anda minta')
// // console.log(film.then(() => console.log(film))) // kode ini untuk menampilkan proses dioutput seperti pending
// Promise.all([film.catch((error) => error), cuaca.catch((error) => error)]) // kode ini membuat error dari variabel film dan variabel cuaca
//     .then((responses) => { // menangkap resolve dari variabel film dan cuaca
//         const [filmError, cuacaError] = responses; // membuat destructuring untuk membongkar dan membuat wadah yang baru

//         if (filmError === 'Film tidak ditemukan!') {
//             console.log(filmError);
//         } else {
//             console.log(film);
//         }

//         if (cuacaError === 'Cuaca tidak diketahui') {
//             console.log(cuacaError);
//         } else {
//             console.log(cuaca);
//         }
//     });
// setTimeout(() => {
//     console.log('data siap!')
// },1000)

// film
//     .then((Response) => console.log(Response))
//     .catch((Response) => console.log(Response))

// cuaca
//     .then((Response) => console.log(Response))
//     .catch((Response) => console.log(Response))


// latihan promise
console.log('ambil data murid')

let kondisi = false;
const siswa = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(kondisi) {
            resolve([{
                nama : 'rehan',
                umur : 17,
                email : 'rehan@gmail.com'
            },
            {
                nama : 'irwan',
                umur : 17,
                email : 'irwan@gmail.com'
            }])
        } else {
            reject([{
                nama : 'dodi',
                umur : 17,
                email : 'dodi@gmail.com'
            },
            {
                nama : 'michel',
                umur : 17,
                email : 'michel@gmail.com'
            }])
        }
    },3000)
})

const siswi = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(kondisi) {
            resolve([{
                nama : 'salwa',
                umur : 17,
                email : 'salwa@gmail.com'
            },
            {
                nama : 'vidya',
                umur : 17,
                email : 'anggi@gmail.com'
            }]);
        } else {
            reject([{
                nama : 'alya',
                umur : 18,
                email : 'alya@gmail.com'
            },
            {
                nama : 'nanay',
                umur : 17,
                email : 'nanay@gmail.com'
            }]);
        }
    },4000)
})

// Promise.all([siswa,siswi])
//     .then((Response) => {
//         const [siswa,siswi] = Response;
//         console.log(siswa)
//         console.log(siswi)
//     })
//     .catch((Response) => {
//         const [siswa,siswi] = Response;
//         console.log(siswa)
//         console.log(siswi)
//     })
Promise.all([siswa,siswi.catch((error) => error),siswa,siswi.catch((error) => error)])
    .then((Response) => {
        const [siswaError,siswiError] = Response;

        if(siswaError === 'Bukan murid SMKBN') {
            console.log(siswaError)
        } else {
            console.log(siswa)
        }

        if(siswiError === 'Bukan murid SMKBN'){
            console.log(siswiError);
        } else {
            console.log(siswi)
        }
    })

setTimeout(() => {
    console.log("selesai")
},2000)


// console.log('ambil data murid')

// let kondisi = false;
// const siswa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (kondisi) {
//             resolve([{
//                 nama: 'rehan',
//                 umur: 17,
//                 email: 'rehan@gmail.com'
//             },
//             {
//                 nama: 'irwan',
//                 umur: 17,
//                 email: 'irwan@gmail.com'
//             }])
//         } else {
//             reject([{
//                 nama: 'dodi',
//                 umur: 17,
//                 email: 'dodi@gmail.com'
//             },
//             {
//                 nama: 'michel',
//                 umur: 17,
//                 email: 'michel@gmail.com'
//             }])
//         }
//     }, 3000)
// }).catch((reason) => {
//     console.error('Siswa promise rejected:', reason);
// });

// const siswi = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (kondisi) {
//             resolve([{
//                 nama: 'salwa',
//                 umur: 17,
//                 email: 'salwa@gmail.com'
//             },
//             {
//                 nama: 'vidya',
//                 umur: 17,
//                 email: 'anggi@gmail.com'
//             }]);
//         } else {
//             reject([{
//                 nama: 'alya',
//                 umur: 18,
//                 email: 'alya@gmail.com'
//             },
//             {
//                 nama: 'nanay',
//                 umur: 17,
//                 email: 'nanay@gmail.com'
//             }]);
//         }
//     }, 4000)
// }).catch((reason) => {
//     console.error('Siswi promise rejected:', reason);
// });

// Promise.all([siswa, siswi])
//     .then((Response) => {
//         const [siswa, siswi] = Response;
//         console.log(siswa)
//         console.log(siswi)
//     })
//     .catch((Response) => {
//         const [siswa, siswi] = Response;
//         console.error('Promise.all rejected:', siswa, siswi);
//     });
