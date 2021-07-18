function buatNode(nilai) {
    return {
        value: nilai,
        next: null
    };

}

function linkedList() {
    return {
        head: null,
        tail: null,
        length: 0,

        push: function (val) {
            const node = buatNode(val);

            // cek  apakah linked list masih kosong
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
        }
    };
}
const list = linkedList();
list.push("a");
list.push("b");
console.log(list);