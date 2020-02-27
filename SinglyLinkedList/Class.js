class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        let node = new Node(val)

        if(this.head === null) {
            this.head = node
        }else {
            this.tail.next = node
        }

        this.tail = node
        this.length++

        return this
    }

    pop() {
        if(!this.head) return undefined

        let node = this.head
        let beforeLastNode = null

         while(node.next) {
            beforeLastNode = node
            node = node.next
        }

        this.length--
        
        if(this.length === 0) {
            this.head = null
            this.tail = null
        } else {
            this.tail = beforeLastNode
            this.tail.next = null
        }
    
        return node
    }

    shift() {
        if(!this.head) return undefined
        
        let current = this.head
        this.head = this.head.next

        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return current
    }

    unshift(val) {
        if(!this.head) {
            return this.push(val)
        }
        let node = new Node(val)
        node.next = this.head

        this.head = node

        this.length++
        return this
    }

    get(index) {
        if(!this.head) return undefined
        if(index < 0 || this.length <= index) return undefined

        let i = 0
        let node = this.head
        while(i < index) {
            node = node.next
            i++
        }

        return node
    }

    insert(index, val) {
        if(index === this.length - 1) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)
        if(index < 0 || this.length < index) return false

        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next

        let newNode = new Node(val)

        newNode.next = nextNode
        prevNode.next = newNode

        this.length++

        return true
    }

    remove(index) {
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        if(index < 0 || this.length <= index) return undefined

        let prevNode = this.get(index - 1)
        let foundNode = prevNode.next

        prevNode.next = foundNode.next

        this.length--

        return foundNode
    }

    set(index, val) {
        let foundNode = this.get(index)
        if(foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node

        let prev = null
        let next

        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        
    }
}

let list = new SinglyLinkedList()


list.push(14)
list.push(15)
list.push(16)
list.push(17)

list.reverse()

console.log(JSON.stringify(list, null, 3))