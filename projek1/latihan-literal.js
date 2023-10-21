// const murid = {
//     nama : 'rehan',
//     nis : 222930029,
//     umur : 16,
//     email : 'rehan@gmail.com'
// }

// const el = `<div class="murid">
//     <h2>${murid.nama}</h2>
//     <span>${murid.nis}</span>
// </div>`


// 2. metode looping
// const siswa = [
//     {
//         nama : 'fajar',
//         email : 'fajar@gmail.com'
//     },
//     {
//         nama : 'rehan',
//         email : 'rehan@gmail.com'
//     },
//     {
//         nama : 'rizky',
//         email : 'rizky@gmail.com'
//     }
// ]

// const el = `<div class="siswa">
//     ${siswa.map(s => `<ul>
//         <li>${s.nama}</li>
//         <li>${s.email}</li>
//     </ul>`).join('')}
// </div>`


// 3.metode condition
// const lagu = [
//     {
//         nama_lagu : 'kau adalah',
//         penyanyi : 'rehanz',
//         feat : 'yoga'
//     },
//     {
//         nama_lagu : 'mencintai separuh hati',
//         penyanyi : 'rizky',
//         // feat : 'irwan'
//     },
//     {
//         nama_lagu : 'aku tak yakin',
//         penyanyi : 'razi',
//         feat : 'doni'
//     },
// ]

// const el = `<div class="lagu">
//     ${lagu.map(l => `<ul>
//         <li>${l.nama_lagu}</li>
//         <li>${l.penyanyi} ${l.feat ? `(feat. ${l.feat})` : ''}</li>
//     </ul>`).join('')}
// </div>`


// 4.Nested
// HTML Bersarang

// const mahasiswa = {
//     nama : 'fajar',
//     semester : 5,
//     mataKuliah : [
//         'Rekayasa Web',
//         'Analisis dan Perancangan Sistem Informasi',
//         'Pemrogramman Sistem Interaktif',
//         'Perancangan Sistem Berorientasi Object'
//     ]
// }

// function cekMataKuliah (mataKuliah) {
//     return `
//         <ol>
//             ${mataKuliah.map(mhs => `<li>${mhs}</li>`).join('')}
//         </ol>
//     `
// }

// const el = `<div class="mahasiswa">
//     <h2>Nama : ${mahasiswa.nama}</h2>
//     <span>Semester : ${mahasiswa.semester}</span>
//     <h4>Mata Kuliah :</h4>
//     ${cekMataKuliah(mahasiswa.mataKuliah)}
// </div>`



// latihan literal string

const mahasiswa = [
    {
        nama : 'fajar',
        semester : 5,
        mataKuliah : [
            'Rekayasa Web',
            'Analisis dan Perancangan Sistem Informasi',
            'Pemrogramman Sistem Interaktif',
            'Perancangan Sistem Berorientasi Object'
        ]
    },
    {
        nama : 'rehan',
        semester : 5,
        mataKuliah : [
            'Rekayasa Web',
            'Analisis dan Perancangan Sistem Informasi',
            'Pemrogramman Sistem Interaktif',
            'Perancangan Sistem Berorientasi Object'
        ]
    },
    {
        nama : 'rizky',
        semester : 5,
        mataKuliah : [
            'Rekayasa Web',
            'Analisis dan Perancangan Sistem Informasi',
            'Pemrogramman Sistem Interaktif',
            'Perancangan Sistem Berorientasi Object'
        ]
    }
]

function cekMahasiswa (sarjana) {
    return `
        <ol>
            ${sarjana.map(mhs => `<li>${mhs}</li>`).join('')}
        </ol>
    `
}

function cekMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `
}

const el = `<div class="mhs">
        ${cekMahasiswa(mahasiswa.map(mahasiswa => `
            <h2>nama : ${mahasiswa.nama}</h2>
            <span>semester : ${mahasiswa.semester}</span>
            <h4>Mata Kuliah : </h4>
            ${cekMataKuliah(mahasiswa.mataKuliah)}
        `))}
    </div>
`
document.body.innerHTML = el;