/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 */

/**
 * Define Linked Node
 * */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
  }

  // 根据value查找节点
  findByValue(value) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.element !== value) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }

  // 根据index查找节点
  findByIndex(index) {
    let currentNode = this.head;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }

  // 根据值查找前一个
  findPrev(value) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return -1;
    }
    return currentNode;
  }

  // 指定元素向后插入
  insert(newElement, element) {
    const currentNode = this.findByValue(element);
    if (currentNode === -1) {
      console.log('未找到插入位置');
      return;
    }
    const newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 根据值删除
  remove(value) {
    const desNode = this.findByValue(value);
    if (desNode === -1) {
      console.log('未找到元素');
      return
    }

    const prevNode = this.findPrev(value);
    prevNode.next = desNode.next;
  }

  // 遍历显示所有节点
  display() {
    if (this.checkCircle()) return false;

    let curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  // 尾插法 反转单链表
  reverseList() {
    const root = new Node('head');
    // 第一个元素为head
    let curr = this.head.next;
    while (curr !== null) {
      const next = curr.next;
      // 先切断当前链表, 衔接已反转的部分（root也包含'head'节点，需要跳一格)
      curr.next = root.next;
      root.next = curr;
      curr = next;
    }
    this.head = root;
  }

  //增强尾插法可读性，便于初学者理解
  reverseList1() {

  }

  // 环验证
  checkCircle() {
    let fast = this.head;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (slow === fast) return true;
    }
    return false;
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    if(this.checkCircle()) return false;
    let pos = 1;
    this.reverseList();
    let curr = this.head.next;
    while (curr && pos < index) {
      curr = curr.next;
      pos++;
    }
    if(!curr) {
      console.log('无法删除最后一个节点或者该节点不存在')
      return false
    }
    this.remove(curr.element);
    this.reverseList();
  }

  // 求中间节点
  findMiddleNode() {

  }
}

const mergeSortedLists = (listA, listB) => {

}

// Test
const LList = new LinkedList()
LList.insert('chen', 'head')
LList.insert('curry', 'chen')
LList.insert('sang', 'head')
LList.insert('zhao', 'head')
LList.display()
console.log('-------------start reverse------------')
LList.reverseList()
LList.display()
console.log('-------------check circle------------')
console.log(LList.checkCircle())
console.log('-------------remove the one before last ------------')
LList.removeByIndexFromEnd(2)
LList.display()

// const sortedList1 = new LinkedList()
// sortedList1.insert(9, 'head')
// sortedList1.insert(8, 'head')
// sortedList1.insert(7, 'head')
// sortedList1.insert(6, 'head')
// const sortedList2 = new LinkedList()
// sortedList2.insert(21, 'head')
// sortedList2.insert(20, 'head')
// sortedList2.insert(19, 'head')
// sortedList2.insert(18, 'head')
// console.log('-------------sort two list ------------')
// let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next)
// while (sortedList !== null) {
//   console.log(sortedList.element)
//   sortedList = sortedList.next
// }

