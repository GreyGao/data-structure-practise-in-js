/**
 * 冒泡、插入、选择排序
 * GreyGao
 * */

  // 冒泡排序
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


// 插入排序
const insertionSort = (list) => {
  if (list.length <= 1) return list;
  for (let n = 1; n < list.length; n++) {
    const tmp = list[n];

    for (let i = n - 1; i > 0; i--) {
      // 待插入值比当前位置值大，并且比后一位小，待插入
      if(tmp > list[i]) {

      }
    }

  }

}

// 选择排序
const selectionSort = (list) => {

}


const test = [4, 5, 6, 3, 2, 1];
console.log('---------------bubble sort list-----------------');
console.log(bubbleSort(test));
// const testSort = [4, 1, 6, 3, 2, 1]
// insertionSort(testSort)
// const testSelect = [4, 8, 6, 3, 2, 1, 0, 12]
// selectionSort(testSelect)
