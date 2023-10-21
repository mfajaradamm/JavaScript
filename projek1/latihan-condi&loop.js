// looping and condition
const printSegitiga = 10;

if (typeof printSegitiga === 'number') {
    for (let angka = printSegitiga; angka >= 1; angka--) {
            let nampung = ''; 
        for (let angka2 = 1; angka2 <= angka; angka2++) {
            nampung += angka2 + '';
        }
        console.log(nampung)
    }
} else {
    console.log('masukan nilainya harus berupa number')
}