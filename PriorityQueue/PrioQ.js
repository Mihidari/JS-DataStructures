class Node {
    constructor(val, priority) {
        this.value = val
        this.priority = priority
    }
}

// Min binary heap
class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {

        let node = new Node(val, priority)

        this.values.push(node)

        let index = this.values.length - 1
        let parent = Math.floor((index-1)/2)

        //Bubble up
        while(true) {
            if(this.values[parent] && this.values[index]) {
                if(this.values[parent].priority <= this.values[index].priority || index === 0) {
                    return this
                } else {
                    [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]]
                    index = parent
                    parent = Math.floor((index-1)/2)
                }
            } else {
                return this
            }
        }
    }

    dequeue() {
        [this.values[0], this.values[this.values.length - 1]] =  [this.values[this.values.length - 1], this.values[0]]

        let max = this.values.pop()
        let index = 0

        //Bubble down
        while(true) {
            let child = (index * 2)+1
            if(this.values[child] && this.values[child + 1]) {
                if(this.values[child].priority > this.values[child + 1].priority) {
                    child++
                }
            }
            if(this.values[child] && this.values[index]) {
                if(this.values[child].priority < this.values[index].priority) {
                    [this.values[index], this.values[child]] = [this.values[child], this.values[index]]
                    index = child
                } else {
                    return max
                }
            } else {
                return max
            }
        }
    }
}
