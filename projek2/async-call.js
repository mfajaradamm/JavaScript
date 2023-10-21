// callback
// synchronous callback
// function halo(nama) {
//     alert(`halo, ${nama}`); 
// }

// function masukanNama (callback) {
//     const nama = prompt('masukan nama : ');
//     callback(nama);
// }

// masukanNama(nama => alert(`halo,${nama}`))


// const murid = [
//     {
//         nama : 'fajar',
//         nis : 111,
//         hobbi : 'badminton',
//         agama : 'islam'
//     },
//     {
//         nama : 'rehan',
//         nis : 122,
//         hobbi : 'futsal',
//         agama : 'islam'
//     },
//     {
//         nama : 'rendi',
//         nis : 133,
//         hobbi : 'voli',
//         agama : 'islam'
//     },
// ]

// console.log('mulai')
// murid.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama);
// });
// console.log('selesai')


// Asynchronous Callback
// function getDataMurid (url, success, error) {
//     let xrl = new XMLHttpRequest();

//     xrl.onreadystatechange = function () {
//         if (xrl.readyState === 4) {
//             if (xrl.status === 200) {
//                 success(xrl.response);
//             } else if (xrl.status === 404) {
//                 error();
//             }
//         }
//     }
//     xrl.open('get', url);
//     xrl.send();
// }

// console.log('mulai');
// getDataMurid('/data/murid.json', results => {
//     const mrd = JSON.parse(results);
//     mrd.forEach(m => console.log(m.nama));
// },() => {

// });
// console.log('selesai')


// JQuery
// JQuery itu $
// console.log('mulai');
// $.ajax({
//     url: '/data/murid.json',
//     success: (mrd) => {
//         mrd.forEach(m => console.log(m.email));
//     },
//     error: (e) => {
//         console.log(e.responeText);
//     } 
// });
// console.log('selesai');


// contoh Async Callback 
// function getData (callback) {
//     setTimeout(function() {
//         callback('data berhasil di ambil');
//     },10000);
// }

// getData(function(result) {
//     console.log(result)
// });

// contoh kode async callback
// const murid = [
//     {
//         nama : 'fajar',
//         nis : 111,
//         hobbi : 'badminton',
//         agama : 'islam'
//     },
//     {
//         nama : 'rehan',
//         nis : 122,
//         hobbi : 'futsal',
//         agama : 'islam'
//     },
//     {
//         nama : 'rendi',
//         nis : 133,
//         hobbi : 'voli',
//         agama : 'islam'
//     },
// ]


// console.log('coba ambil data');
// function getData(ambilData) {
//     setTimeout (function(){
//         ambilData('data berhasil di ambil')
//     },5000);
// }

// getData(function(result){
//     console.log(result);
// })

// function data(dataJson) {
//     setTimeout(function(){
//         dataJson(murid)
//     },6000)
// }

// data(function(data){
//     console.log(data)
// })

// contoh kode async callback,promise dan async/await
// const murid = [
//     {
//       nama: 'fajar',
//       nis: 111,
//       hobbi: 'badminton',
//       agama: 'islam'
//     },
//     {
//       nama: 'rehan',
//       nis: 122,
//       hobbi: 'futsal',
//       agama: 'islam'
//     },
//     {
//       nama: 'rendi',
//       nis: 133,
//       hobbi: 'voli',
//       agama: 'islam'
//     },
//   ];

//   console.log('coba ambil data');

//   function ambilData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('data berhasil diambil');
//       }, 5000);
//     });
//   }

//   async function getData() {
//     const result = await ambilData();
//     console.log(result);
//   }

//   function dataJson() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(murid);
//       }, 6000);
//     });
//   }

//   async function tampil() {
//     const data = await dataJson();
//     console.log(data);
//   }

//   getData();
//   tampil();


// contoh promise
const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
                const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
                let cek = dataDay.find((item) => {
                    return item == day
                })
                if(cek){
                    resolve(cek)
                }else{
                    reject(new Error(' bukan hari kerja'))
                }
        }, 2000)

    })
        
}


const getCekHariKerja = () => {
    let inputHari = "minggu";
    cekHariKerja(inputHari)
        .then((hasil) => { 
            console.log("Hari " + hasil + " adalah hari kerja");
            // menampilkan hasil jika promise nya berhasil / resolved
        })
        .catch((error) => {
            console.log("Hari " + inputHari + error.message); 
            // menampilkan pesan error jika promise gagal / rejected
        });
  };
  
  try {
    getCekHariKerja(); 
    // Memanggil fungsi getCekHariKerja untuk memulai operasi asyncronus
  } catch (error) {
        console.log(error.message); 
        // menangkap semua error dan menampilkan pesan error
  }