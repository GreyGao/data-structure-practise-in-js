/**
 * 1. 由数组构成的队列
 * 2. 由链表构成的队列
 * */

  // 1. 由数组构成的队列
class QueueOfArray {
  constructor() {
    this.queue = [];
  }

  // 进队
  enqueue(item) {
    this.queue.push(item);
  }

  // 出队
  dequeue() {
    if (this.queue.length === 0) {
      console.log('-------the queue is empty-------');
      return -1;
    }
    return this.queue.shift();
  }
}


// 2. 由链表构成的队列
class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null
  }
}

class QueueOfLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 进队
  enqueue(item) {
    if (this.head === null) {
      this.head = new Node(item);
      this.tail = this.head;
    } else {
      // 将新进入的元素衔接至当前队列的尾部, 并重新指定tail的位置
      this.tail.next = new Node(item);
      this.tail = this.tail.next;
    }
  }

  // 出队
  dequeue() {
    if (this.head === null) {
      console.log('-------the queue is empty-------');
      return -1;
    }
    const res = this.head.ele;
    this.head = this.head.next;
    return res;
  }
}


// Test
const newQueue = new QueueOfLinkedList();
// 插入元素
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
// 获取元素
let res = 0
console.log('-------获取dequeue元素------')
while (res !== -1) {
  res = newQueue.dequeue()
  console.log(res)
}
