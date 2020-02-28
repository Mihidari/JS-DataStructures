class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.rigth = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let node = new Node(val)

        if(!this.root) {
            this.root = node
        } else {
            let current = this.root
            let before;
            while(current) {
                before = current
                if(current.value === val) return undefined
                if(current.value > val) {
                    current = current.left
                } else {
                    current = current.rigth
                }
            }
            if(before.value > val) {
                before.left = node
            } else {
                before.rigth = node
            }
        }
        return this 
    }

    find(val) {
        if(!this.root) return undefined

        let current = this.root

        while(current) {
            if(current.value > val) {
                current = current.left
            } else if (current.value < val) {
                current = current.rigth
            } else {
                return current
            }
        }

        return undefined
    }
}
