// TODO 9: Import semua method FruitController
// Refactor variable ke ES6 Variable
const { index, store, update, destroy } = require("./FruitController");

// HINT: Gunakan Destructuring Object

// NOTES:
// Fungsi main tidak perlu diubah
const main = () => {
    index();
    store("Pisang");
    update(0, "Kelapa");
    destroy(0);
};

main();
