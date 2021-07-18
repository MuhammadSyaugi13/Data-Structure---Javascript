//  Data Structure - Stack
// Last In First Out (LIFO).
// Yang paling akhir masuk maka yang paling awal keluar

function createStack() {
    let array = [];

    return {
        push: function (item) {
            array.push(item);
        },
        pop: function () {
            array.pop();
        },
        peek: function () {
            return array[array.length - 1];
        },
        size: function () {
            return array.length;
        }
    }
}

const kumpulanBuku = createStack();

kumpulanBuku.push("Algorthm");
kumpulanBuku.push("Programming with Javascript");
kumpulanBuku.push("Programming with PHP");

console.log(kumpulanBuku.peek());
kumpulanBuku.pop();
console.log(kumpulanBuku.size());


// contoh penggunaan stack

function add(a, b) {
    return a + b;
}

function double(a) {
    return add(a, a);
}

console.log(double(5));
