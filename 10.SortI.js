/**
 * 冒泡、插入、选择排序
 * GreyGao
 * */

/**
 * 冒泡排序
 * 时间复杂度: O(n2）
 * */
const bubbleSort = (list) => {
  // 只有一个元素时，无需排序
  if (list.length <= 1) return list;

  // 保证每个元素都已经经过一次冒泡
  for (let n = 0; n < list.length; n++) {
    // 标记本次冒泡是否有数据需要交换
    let dataChanged = false;

    // 进行一次冒泡
    for (let i = 0; i < list.length; i++) {
      // 如果当前位置元素>后一位置元素，交换两者位置
      if (list[i + 1] && list[i] > list[i + 1]) {
        // ES6新数组结构交换写法
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        // 标记本次循环仍然有数据交换
        dataChanged = true;
      }
    }
    // 如果不再有数据交换，结束冒泡循环
    if (!dataChanged) {
      break;
    }
  }

  return list;
}


/**
 * 插入排序
 * 时间复杂度: O(n2）
 * [已排序区, 未排序区]
 * */
const insertionSort = (list) => {
  // 只有一个元素时，无需排序
  if (list.length <= 1) return list;

  // 保证每个元素进行过一次排序
  for (let n = 1; n < list.length; n++) {
    // 当前待排序的元素
    const tmp = list[n];
    let i = n - 1;
    for (; i >= 0; i--) {
      // 待插入值比当前位置值小，则挪动当前位置的值至后一位
      if (tmp < list[i]) {
        list[i + 1] = list[i];
      } else {
        break;
      }
    }
    // 最后一次循环i-- 多减了一位index，将待插入的值插入至停止循环后的第i+1个位置
    list[i + 1] = tmp;
  }
  return list;
}

/**
 * 选择排序
 * 时间复杂度: O(n2）
 * [已排序区, 未排序区]
 * */
const selectionSort = (list) => {
  // 只有一个元素时，无需排序
  if (list.length <= 1) return list;

  // 保证每个元素进行过一次排序
  for (let n = 0; n < list.length; n++) {
    // 当前待排序的元素
    const tmp = list[n];
    // 找到剩余待排序元素中的最小值index
    let minIndex = n;
    for(let i = n + 1; i<list.length; i++) {
      if(list[i] < list[minIndex]){
        minIndex = i;
      }
    }
    // 交换当前n与最小值的位置
    list[n] = list[minIndex];
    list[minIndex] = tmp;
  }

  return list;
}


const test = [3, 2, 1, 5, 4, 6,];
console.log('---------------bubble sort list-----------------');
console.log(bubbleSort(test));
console.log('---------------insertion sort list-----------------');
console.log(insertionSort(test));
console.log('---------------selection sort list-----------------');
console.log(selectionSort(test));
