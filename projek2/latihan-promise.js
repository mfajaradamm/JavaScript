// soal 1
// const data = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Promise berhasil dijalankan')
//     },2000)
// })

// data.then((Respone) => console.log(Respone))


// soal 2
// const data = new Promise((reject) => {
//     setTimeout(() => {
//         reject('oops,ada masalah')
//     },1000)
// })

// data.catch((Respone) => console.log(Respone))

// soal 3
// const fetchData = (url) => {
//     return new Promise((resolve,reject) => {
//         if(url === 'https://api.example.com/data') {
//             setTimeout(() => {
//             resolve('data berhasil diambil')
//             },1000)
//         } else {
//             reject('gagal ngambil data')
//         }
//     })
// }

// fetchData('https://api.example.com/data')
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))


// soal 4
// const data1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Promise pertama berhasil')
//     },2000)
// })

// const data2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Promise kedua berhasil')
//     },1000)
// })

// Promise.all([data1,data2])
//     .then(result => console.log(result))
//     .catch(error => console.error(error))


// soal 5
// const math = Math.random()
// const data = new Promise((resolve,reject) => {
//     if(math > 0.5) {
//         resolve("berhasil")
//     } else {
//         reject("gagal")
//     }
// })

// data
//     .then(result => console.log(result))
//     .catch(error => console.error(error))

// soal 7
// const kondisi = false;
// const data = new Promise((resolve,reject) => {
//     if(kondisi) {
//         setTimeout(() => {
//             resolve("Promise berhsil dijalankan")
//         },2000)
//     } else {
//         setTimeout(() => {
//             reject("Promise ditolak")
//         },3000)
//     }
// })

// data
//     .then(result => console.log(result))
//     .catch(error => console.error(error))


// soal 8
/*
    Buatlah sebuah Promise yang akan mengambil data dari API palsu (misalnya, "https://api.fake.com/data") menggunakan fetch. 
    Jika respons dari API adalah OK (status 200), maka Promise harus berhasil dengan data respons dalam bentuk JSON. 
    Jika respons tidak OK, maka Promise harus ditolak dengan pesan "Gagal mengambil data".
*/

const fetchPromiseFromAPI = () => {
    const API = 'https://pokeapi.co/api/v2/pokemon/';

    return getData = new Promise((resolve,reject) => {
        fetch(API)
        .then((Response) => {
            if(!Response.ok) {
                reject('gagal mengambil data')
            } else {
                return Response.json()
            }
        })
        .then((data) => {
            resolve(data)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

fetchPromiseFromAPI()
    .then((data) => {
        console.log("data berhasil diambil",data)
    })
    .catch((error) => {
        console.error("data gagal diambil",error)
    })

// const fetchDataFromAPI = () => {
//     const apiUrl = "https://api.fake.com/data";
  
//     return new Promise((resolve, reject) => {
//       fetch(apiUrl)
//         .then((response) => {
//           if (!response.ok) {
//             reject("Gagal mengambil data"); // Jika respons tidak OK, tolak Promise
//           } else {
//             return response.json(); // Jika respons OK, ambil data dalam format JSON
//           }
//         })
//         .then((data) => {
//           resolve(data); // Sukses, kembalikan data sebagai hasil Promise
//         })
//         .catch((error) => {
//           reject(error); // Tangani kesalahan lainnya jika terjadi
//         });
//     });
//   };
  
//   // Contoh penggunaan
//   fetchDataFromAPI()
//     .then((data) => {
//       console.log("Data berhasil diambil:", data);
//     })
//     .catch((error) => {
//       console.error("Terjadi kesalahan:", error);
//     });
  