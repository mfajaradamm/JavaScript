// Spread Operator
// memecahkan interables menjadi singel element
// apa saja interable : String,array,arguments,typedArray,map,set,user-difined-iterable

// kapan menggunakan Spread Operator
    // 1.menggabungkan 2 array
// const murid = ['fajar','rehan','rizky'];
// const guru = ['bu neni','bu gita','pak juhe']

// const orang = [...murid,...guru]
// console.log(orang)


    // 2.meng-copy array
// const murid = ['fajar','rehan','rizky'];
// const murid2 = [...murid];
// murid2[1] = 'irwan';

// console.log(murid)
// console.log(murid2)

// ini akan menampilkan satu elemen
// const liMurid = document.querySelectorAll('li')
// console.log(liMurid[0].textContent)

// menggunakan for untuk mengulang semua data yang ada didalam file html
// const liMurid = document.querySelectorAll('li')
// const murid = []
// for (let i = 0; i < liMurid.length; i++) {
//     murid.push(liMurid[i].textContent)
// }
// console.log(murid)

// menggunakan spread operator dan map lebih simpel
// const liMurid = document.querySelectorAll('li')
// const murid = [...liMurid].map(m => m.textContent)
// console.log(murid);


// contoh : gimana cara nya untuk mengambil huruf satu per satu di html
// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

// nama.innerHTML = huruf;