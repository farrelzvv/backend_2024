// Ini untuk (Legacy Code)
var angka = [1, 2, 3, 4, 5];
var hasil = angka.map(function (num) {
  return num * 2;
});
console.log(hasil);

// Refactor ke ES6
const angka = [1, 2, 3, 4, 5];
const hasil = angka.map(num => num * 2);
console.log(hasil);

// Object Destructuring
const mahasiswa = {
  nama: "Farrel",
  jurusan: "Teknik Informatika",
  semester: 2,
};

const { nama, jurusan, semester } = mahasiswa;
console.log(`Nama: ${nama}, Jurusan: ${jurusan}, Semester: ${semester}`);

// Modules CommonJS
// file1.js
const greeting = (name) => `Hello, ${name}!`;
module.exports = greeting;

// file2.js
const greeting = require("./file1");
console.log(greeting("Farrel"));

// let dan const
let count = 0;
const max = 10;

while (count < max) {
  console.log(`Count is: ${count}`);
  count++;
}
