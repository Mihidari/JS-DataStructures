class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        this.values.push(val)

        let index = this.values.length - 1
        let parent = Math.floor((index-1)/2)

        //Bubble up
        while(true) {
            if(this.values[parent] > this.values[index] || index === 0) {
                return this
            } else {
                [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]]
                index = parent
                parent = Math.floor((index-1)/2)
            }
        }
    }

    extractMax() {
        [this.values[0], this.values[this.values.length - 1]] =  [this.values[this.values.length - 1], this.values[0]]

        let max = this.values.pop()
        let index = 0

        //Bubble down
        while(true) {
            let child = (index * 2)+1
            if(this.values[child] < this.values[child + 1]) {
                child++
            }

            if(this.values[child] > this.values[index]) {
                [this.values[index], this.values[child]] = [this.values[child], this.values[index]]
                index = child
            } else {
                return max
            }
        }
    }
}
