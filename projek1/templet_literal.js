// Templet Literal / literal string
// `` back tick

const nama = 'fajar';
let umur = 16;

console.log(`nama saya ${nama},umur saya ${umur} tahun`);


// Embedded Expressions
console.log(`${(1 + 1)}`)

const nilai = 12;
console.log(`${(nilai % 2 == 0 ? 'genap' : 'ganjil')}`)


// HTML FREGMENTS
const murid = {
    nama : 'rehan',
    nis : 222930029,
    umur : 16,
    email : 'rehan@gmail.com'
}

const el = `<div class="murid">
    <h2>${murid.nama}</h2>
    <span>${murid.nis}</span>
</div>`

console.log(el)