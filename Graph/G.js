class Graph {
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

    addEdge(vertex1, vertex2) {
        this._checkExist(vertex1, vertex2)
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return this
    }

    removeEdge(vertex1, vertex2) {
        this._checkExist(vertex1, vertex2)
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
        return this
    }

    removeVertex(vertex) {
        this._checkExist(vertex)

        for(const key in this.adjacencyList) {
            this.removeEdge(vertex, key)
        }

        delete this.adjacencyList[vertex]
        return this
    }

    DFSRecursive(start) {
        this._checkExist(start)

        let visited = {}
        let result = []

        const helper = (vertex) => {
            if(!this.adjacencyList[vertex].length) {
                return
            }
            visited[vertex] = true
            result.push(vertex)
            for(let v of this.adjacencyList[vertex]) {
                if(!visited[v]) {
                    helper(v)
                }
            }
        }

        helper(start)
        return result
    }

    DFSIterative(start) {
        let stack = []
        stack.push(start)

        let visited = {}
        let result = []

        while(stack.length) {
            let vertex = stack.pop()
            if(!visited[vertex]) {
                visited[vertex] = true
                result.push(vertex)
                for(const v of this.adjacencyList[vertex]) {
                    stack.push(v)
                }
            }
        }

        return result
    }

    BFS(start) {
        let queue = []
        queue.push(start)

        let visited = {}
        let result = []

        while(queue.length) {
            let vertex = queue.shift()
            if(!visited[vertex]) {
                visited[vertex] = true
                result.push(vertex)
                for(const v of this.adjacencyList[vertex]) {
                    queue.push(v)
                }
            }
        }

        return result
    }
}
