//  Data Structure - LinkedList

function createNode(nilai) {
    return {
        value: nilai,
        next: null
    }

}

function createLinkedList() {

    return {
        // property
        head: null,
        tail: null, //tail adalah node selain head
        length: 0,

        // method
        push: function (value) {
            const node = createNode(value);

            // jika linkedList kosong
            if (this.head === null) {
                this.head = node;
                this.tail = node;
                this.length += 1;
                return node;
            } else {
                this.tail.next = node;
                this.tail = node;
                this.length += 1;
                return node;
            }
        },
        pop: function () {
            // kosong
            if (this.isEmpty()) {
                return null;
            }
            const node = this.tail;
            // memiliki satu node
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
                this.length = 0;
                return node;
            }
            // memiliki lebih dari satu node
            let current = this.head;
            let penult;
            while (current) {
                if (current.next === this.tail) {
                    penult = current;
                    break;
                }
                current = current.next;
            }
            penult.next = null;
            this.tail = penult;
            this.length -= 1;
            return node;
        },
        get: function (index) {
            // list kosong
            if (index < 0 || index > this.length) {
                return null;
            }
            // list dengan item 1
            if (index === 0) {
                return this.head;
            }
            // list dengan item lebih dari 1
            let current = this.head;
            let i = 0;
            while (i < index) {
                current = current.next;
                i += 1;
            }

            return current;
        },
        delete: function (index) {
            // list kosong
            if (index < 0 || index > this.length) {
                return null;
            }
            // list item 1
            if (index === 0) {
                const deleted = this.head;
                this.head = this.head.next;
                this.length -= 1;
                return deleted;
            }
            // list item lebih dari 1
            let current = this.head;
            let prev;
            let i = 0;
            while (i < index) {
                prev = current;

                current = current.next;
                i++;
            }

            const deleted = current;
            prev.next = current.next;
            this.length -= 1;

            return deleted;
        },
        isEmpty: function () {
            return this.length === 0; //jika nol, return true, dan sebaliknya
        },
        print: function () {
            const values = [];
            let current = this.head;

            while (current) {
                values.push(current.value);
                current = current.next;
            }

            console.log(values);

            return values.join(" => ");
        }
    }
}

const list = createLinkedList();
list.push("a");
list.push("b");
// const values = ['a', 'b', 'c', 'd'];
// const nodes = values.map(function (val) {
//     list.push(val);
// });
// list.pop();
console.log(list.print());