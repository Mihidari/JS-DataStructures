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

    //Breadth First Search
    BFS() {
        if(!this.root) return []

        let queue = [this.root]
        let visited = []

        while(queue.length) {
            let node = queue.shift()
            
            if(node.left) queue.push(node.left)
            if(node.rigth) queue.push(node.rigth)

            visited.push(node.value)
        }
        return visited
    } 

    //Depth First preOrder
    DFPreOrder() {
        if(!this.root) return []

        let visited = []
        let current = this.root

        const helper = (node) => {
            visited.push(node.value)
            if(node.left) helper(node.left)
            if(node.rigth) helper(node.rigth)
        }

        helper(current)

        return visited
    }

    //Depth First postOrder
    DFPostOrder() {
        if(!this.root) return []

        let visited = []
        let current = this.root

        const helper = (node) => {
            if(node.left) helper(node.left)
            if(node.rigth) helper(node.rigth)
            visited.push(node.value)
        }

        helper(current)

        return visited
    }

    //Depth First inOrder
    DFInOrder() {
        if(!this.root) return []

        let visited = []
        let current = this.root

        const helper = (node) => {
            if(node.left) helper(node.left)
            visited.push(node.value)
            if(node.rigth) helper(node.rigth)
        }

        helper(current)

        return visited
    }
}
