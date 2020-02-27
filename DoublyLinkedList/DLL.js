class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let node = new Node(val)

        if(!this.head) {
            this.head = node
        } else {
            this.tail.next = node
            node.prev = this.tail
        }

        this.tail = node
        this.length++

        return this;
    }

    pop() {
        if(!this.head) return undefined

        this.length--
        const current = this.tail

        if(this.length === 0) {
            this.tail = null
            this.head = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            current.prev = null
        }
        return current
    }

    shift() {
        if(!this.head) return undefined

        this.length--
        const current = this.head

        if(this.length === 0) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            current.next = null
        }
        return current
    }

    unshift(val) {
        if(!this.head) return this.push(val)

        let node = new Node(val)

        this.head.prev = node
        node.next = this.head
        this.head = node

        this.length++

        return this
    }

    get(index) {
        if(!this.head) return undefined
        if(index < 0 || index >= this.length) return undefined

        if(index >= this.length/2) {
            let i = this.length-1
            let node = this.tail
            while(i !== index) {
                node = node.prev
                i--
            }
            return node
        } else {
            let i = 0
            let node = this.head
            while(i !== index){
                node = node.next
                i++
            }
            return node
        }
    }

    set(index, val) {
        let node = this.get(index)

        if(node) {
            node.val = val
            return true
        } 
        return false
    }

    insert(index, val) {
        if(index === this.length - 1) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)
        if(index < 0 || this.length < index) return false

        let prevNode = this.get(index-1)
        let nextNode = prevNode.next

        let node = new Node(val)

        node.next = nextNode
        prevNode.next = node
        nextNode.prev = node
        node.prev = prevNode

        this.length++

        return true
    }

    remove(index) {
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        if(index < 0 || this.length <= index) return undefined

        let current = this.get(index)

        let prevNode = current.prev
        let nextNode = current.next

        prevNode.next = nextNode
        nextNode.prev = prevNode

        this.length--

        current.next = null
        current.prev = null
        return current
    }
}
