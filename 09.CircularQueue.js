/**
 * 1. 基于队列的循环队列
 * 2. 基于链表的循环队列
 *
 * 队空条件: head === tail
 * 队满条件: (tail+1)%n === head  // 环形队列需要解决队伍最后一位index + 1 === index为0 位置元素的矛盾，所以取余
 * */

class CircularQueueBasedOnArray {
  constructor(capacity = 8) {
    this.queue = new Array(capacity);
    this.head = 0;  // head index
    this.tail = 0;  // tail index
  }

  enqueue(item) {
    // 队列满时
    if ((this.tail + 1) % this.queue.length === this.head) return false;

    // 其他
    this.queue[this.tail] = item;
    this.tail = (this.tail + 1) % this.queue.length;

    return true;
  }

  dequeue() {
    // 队列为空时
    if (this.head === this.tail) return null;

    // 其他
    const res = this.queue[this.head];
    this.queue.splice(this.head, 1, undefined);
    this.head = (this.head + 1) % this.queue.length;
    return res;
  }

  display() {
    console.log(`--------------当前队列: ${this.queue}---------------`);
    let i = this.head;
    while (i !== this.tail) {
      console.log(this.queue[i]);
      i = (i + 1) % this.queue.length;
    }
  }
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
// 对于环形队列来说，需要一个额外的空间为tail储存数据，所以真正能够存储的数据为capacity - 1;
const newCircularQueue = new CircularQueueBasedOnArray(4);
newCircularQueue.enqueue(1)
newCircularQueue.display()
newCircularQueue.enqueue(2)
newCircularQueue.enqueue(3)
newCircularQueue.display()

// 队满时，无法再入队
newCircularQueue.enqueue(1)
newCircularQueue.display()

// 队空时，无法再出队
newCircularQueue.dequeue()
newCircularQueue.dequeue()
newCircularQueue.display()
newCircularQueue.dequeue()
newCircularQueue.dequeue()
newCircularQueue.display()
