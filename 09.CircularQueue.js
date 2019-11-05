/**
 * 1. 基于队列的循环队列
 * 2. 基于链表的循环队列
 * */

class CircularQueueBasedOnArray {

}

class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}

class CircularQueueBasedOnLinkedList {
  constructor() {
    this.head = null;
    this.head = null;
  }

  enqueue(ele) {
    // 队列为空时
    if (this.head === null) {
      this.head = new Node(ele);
      this.tail = this.head;
    } else {
      // 队列未满时
      if (this.tail.next === this.head) {
        return -1;
      } else {
        // 队列已满时
        this.tail.next = ele;
        this.tail = this.tail.next;
      }
    }
  }

  dequeue() {
    // 队列为空时
    if (this.head === null) {
      return -1;
    } else {
      const res = this.tail;
      this.tail = this.tail.next;
      return res;
    }

  }
}


// Test
const newCircularQueue = new CircularQueueBasedOnLinkedList()
// 插入元素
newCircularQueue.enqueue(1)
newCircularQueue.enqueue(2)
newCircularQueue.enqueue(3)
// 获取元素
newCircularQueue.display()
newCircularQueue.enqueue(1)
newCircularQueue.display()
// 获取元素
let res = 0
console.log('-------获取dequeue元素------')
while (res !== -1) {
  res = CircularQueueBasedOnLinkedList.dequeue()
  console.log(res)
}
