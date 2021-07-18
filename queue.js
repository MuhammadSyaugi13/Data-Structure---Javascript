//  Data Structure - Queue
// First In First Out (FIFO).
// Yang paling "awal masuk" maka yang paling "awal keluar"
const arrQueue = [];
console.log(arrQueue);
function createQueue() {
    return {
        enqueue: function (item) {
            arrQueue.unshift(item);
        },
        dequeue: function () {
            arrQueue.pop();
        },
        peek: function () {
            return arrQueue[arrQueue.length - 1];
        },
        size: function () {
            return arrQueue.length;
        }
    }

}

const q = createQueue();
q.enqueue("Eat");
q.enqueue("Sleep");
q.enqueue("Code");

q.dequeue();

console.log(q.peek());