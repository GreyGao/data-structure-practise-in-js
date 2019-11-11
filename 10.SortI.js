/**
 * 冒泡、插入、选择排序
 * GreyGao
 * */

  // 冒泡排序
const bubbleSort = (list) => {
    if (list.length <= 1) return list;

    for (let n = 0; n < list.length; n++) {
      let dataChanged = false;
      for (let i = 0; i < list.length; i++) {
        if (list[i + 1] && list[i] > list[i + 1]) {
          let tmp = list[i]
          list[i] = list[i + 1];
          list[i + 1] = tmp;
          dataChanged = true;
        }
      }
      if(!dataChanged) {
        break;
      }
    }

    return list;
  }

const test = [ 3, 2, 1,4, 5, 6,];
// const test = [4, 5, 6, 3, 2, 1];
console.log('---------------bubble sort list-----------------');
console.log(bubbleSort(test));
// const testSort = [4, 1, 6, 3, 2, 1]
// insertionSort(testSort)
// const testSelect = [4, 8, 6, 3, 2, 1, 0, 12]
// selectionSort(testSelect)
