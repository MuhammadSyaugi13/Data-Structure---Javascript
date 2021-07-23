// Data Structure - Tree
function createNode(key) {
    const children = [];
    return {
        key,
        children,

        addChild(childKey) {
            const childNode = createNode(childKey);
            children.push(childNode);
            return childNode; //return untuk agar chilnode bisa memiliki child lagi
        }
    };
}
//2. rootKey berisi string 'html' yang dikirim saat pemanggilan fn
function createTree(rootKey) {

    // 3. mereturn hasil dari fn createnode dengan parameter rootkey ('html'),   
    //hasil {key: "html", childern: array kosong (jika tidak mempunyai child), method addChild}
    const root = createNode(rootKey);

    return {
        root, //berisi {key: "html", childern: array kosong (jika tidak mempunyai child), method addChild}
        print() {
            let result = '';
            //5. menjalankan fn node = root, visitFn = fn yg mengatur result, dan depth
            function travers(node, visitFn, depth) {
                // 6. jalankan visitFn untuk mengatur result
                visitFn(node, depth);


                // jika node.childern ada, maka lakukan rekursif 
                // nilai node.childern.length adalah panjang dari array children
                if (node.children.length) {
                    //lakukan pengulangan sebanyak jumlah childnya
                    node.children.forEach(child => {
                        //child berisi return objek pada nodeChild
                        travers(child, visitFn, depth + 1);
                    });
                }
            }

            function addKeyToResult(node, depth) {
                result += result.length === 0 ? node.key : `\n${' '.repeat(depth * 2)}${node.key}`
            }

            // 4. fn yg mengirim root, fn, nilai kedalaman
            travers(root, addKeyToResult, 1);
            return result;
        }
    }
}

// 1.memanggil fn createTree dan memberi parameter html
const dom = createTree('html');
const head = dom.root.addChild('head');
const hea = dom.root.addChild('hea');
const title = head.addChild('title');

const body = dom.root.addChild('body');
const header = body.addChild('header');

console.log(dom.print());
