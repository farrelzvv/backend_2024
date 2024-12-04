// TODO 3: Import fruits dari data/fruits.js
// Refactor variable ke ES6 Variable
const fruits = require("./fruits");

// TODO 4: Buat method index
function index() {
    console.log("Method index - Menampilkan Buah");
    fruits.forEach(fruit => console.log(fruit));
}

// TODO 5: Buat method store
function store(name) {
    console.log(`Method store - Menambahkan buah ${name}`);
    fruits.push(name);
    index();
}

// TODO 6: Buat method update
function update(position, name) {
    console.log(`Method update - Update data ${position} menjadi ${name}`);
    if (position < fruits.length) {
        fruits[position] = name;
    }
    index();
}

// TODO 7: Buat method destroy
function destroy(position) {
    console.log(`Method destroy - Menghapus data ${position}`);
    if (position < fruits.length) {
        fruits.splice(position, 1);
    }
    index();
}

// TODO 8: Export semua method
module.exports = {
    index,
    store,
    update,
    destroy
};
