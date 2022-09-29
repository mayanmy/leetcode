/**
 * https://leetcode.cn/problems/get-kth-magic-number-lcci/
 * 面试题 17.09. 第 k 个数
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
    const ans = new Array(k + 1)
    ans[0] = 1
    let p3 = 0, p5 = 0, p7 = 0
    for (let i = 1; i < k; i++) {
        const a = ans[p3] * 3
        const b = ans[p5] * 5
        const c = ans[p7] * 7
        ans[i] = Math.min(a, b, c)
        if (ans[i] === a) {
            p3++
        }
        if (ans[i] === b) {
            p5++
        }
        if (ans[i] === c) {
            p7++
        }
    }
    return ans[k - 1]
};


/**
 * 小根堆解法
 * @param {*} k 
 * @returns 
 */
var getKthMagicNumber2 = function (k) {
    const set = new Set()
    const heap = new Heap()
    set.add(1)
    heap.add(1)
    const pics = [3, 5, 7]
    let curMin = 1
    for (let i = 0; i < k; i++) {
        curMin = heap.poll()
        for (const pic of pics) {
            if (!set.has(pic * curMin)) {
                set.add(pic * curMin)
                heap.add(pic * curMin)
            }
        }
    }
    return curMin
};

function Heap() {
    this.heap = []
    this.heapSize = 0
}

Heap.prototype.heapInsert = function (index) {
    let fatherIndex = index === 0 ? 0 : Math.floor((index - 1) / 2)
    while (this.heap[fatherIndex] > this.heap[index]) {
        this.swap(fatherIndex, index)
        index = fatherIndex
        fatherIndex = index === 0 ? 0 : Math.floor((index - 1) / 2)
    }
}

Heap.prototype.heapify = function (index) {
    let leftChild = index * 2 + 1
    while (leftChild < this.heapSize) {
        const rightChild = leftChild + 1 < this.heapSize ? leftChild + 1 : leftChild
        const min = this.heap[leftChild] < this.heap[rightChild] ? this.heap[leftChild] : this.heap[rightChild]
        if (this.heap[index] < min) {
            return
        }
        const swapIndex = min === this.heap[leftChild] ? leftChild : rightChild
        this.swap(swapIndex, index)
        index = swapIndex
        leftChild = index * 2 + 1
    }
}

Heap.prototype.add = function (node) {
    this.heap.push(node)
    this.heapInsert(this.heapSize++)
}

Heap.prototype.peek = function () {
    return this.heap[0]
}

Heap.prototype.poll = function () {
    const top = this.heap[0]
    this.swap(0, --this.heapSize)
    this.heap.pop()
    this.heapify(0)
    return top
}

Heap.prototype.swap = function (i, j) {
    const t = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = t
}