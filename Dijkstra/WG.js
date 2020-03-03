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


class WeightedGraphe {
    constructor() {
        this.adjacencyList = {}
    }

    _checkExist(...vertex) {
        for(let i = 0; i < vertex.length; i++) {
            if(!this.adjacencyList[vertex[i]]) {
                throw new Error(`The vertex '${vertex[i]}' does not exist`)
            }
        }
    }

    addVertex(vertex) {
        if(this.adjacencyList[vertex]) { 
            throw new Error('The vertex already exists')
        } 

        this.adjacencyList[vertex] = []
        return this
    }

    addEdge(vertex1, vertex2, weight) {
        this._checkExist(vertex1, vertex2)

        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
        return this
    }

    shortestPath(start, end) {
        this._checkExist(start, end)

        let distances = {}
        let previous = {}
        let path = []
        let prioQ = new PriorityQueue()

        for(const key in this.adjacencyList) {
            if(key === start) {
                distances[start] = 0
                prioQ.enqueue(start, 0)
            } else {
                distances[key] = Infinity
                prioQ.enqueue(key, Infinity)
            }
            previous[key] = null
        }
        
        while(prioQ.values.length) {
            let vertex = prioQ.dequeue().value
            if(vertex === end) {
                while(previous[vertex]) {
                    path.push(vertex)
                    vertex = previous[vertex]
                }
                break
            }
            if(vertex || distances[vertex] !== Infinity) {
                for(let neighbor in this.adjacencyList[vertex]) {
                    let nextNode = this.adjacencyList[vertex][neighbor]
                    let candidate = distances[vertex] + nextNode.weight

                    if(candidate < distances[nextNode.node]) {
                        distances[nextNode.node] = candidate
                        previous[nextNode.node] = vertex
                        prioQ.enqueue(nextNode.node, candidate)
                    }
                }
            }
        }
        return path.concat(start).reverse()
    }
}
