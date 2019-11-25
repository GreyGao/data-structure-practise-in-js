/**
 * 归并排序、快速排序
 * */


/**
 * 思路
 * 分而治之
 * 1. 将数组拆分至不可拆分(使用递归的形式）
 * 2. 重新组合拆分后的数组进行排序
 * */

// 合并排序函数
const mergeList = (leftList, rightList) => {
  let i = 0;
  let j = 0;
  // 临时排序后的数组
  const tmp = [];

  // 如果leftList或rightList遍历完毕则终止循环
  while (i < leftList.length && j < rightList.length) {
    // 如果两个元素相等，则保持left数组的元素在前，维持排序的稳定性
    if (leftList[i] <= rightList[j]) {
      tmp.push(leftList[i]);
      i++;
    } else {
      tmp.push(rightList[j]);
      j++;
    }
  }

  // 如果i还有未遍历完的元素，则移至数组末尾
  if (i < leftList.length) {
    return tmp.concat(leftList.slice(i, leftList.length));
  }
  // 如果j还有未遍历完的元素，则移至数组末尾

  if (j < rightList.length) {
    return tmp.concat(rightList.slice(j, rightList.length));
  }
  return tmp;
}


const mergeSort = (list) => {
  // 递归终止条件
  if (list.length <= 1) return list;

  // 拆分数组
  const midIndex = Math.round(list.length / 2);
  const leftList = list.slice(0, midIndex);
  const rightList = list.slice(midIndex, list.length);

  // 返回合并后的有序数组
  return mergeList(mergeSort(leftList), mergeSort(rightList));
}


// Test
console.log('---------------before sort-----------------');
const testArr = []
let i = 0
while (i < 15) {
  testArr.push(Math.floor(Math.random() * 100))
  i++
}
console.log(testArr)

const res = mergeSort(testArr)
console.log('---------------merge sort-----------------');
console.log(res)
