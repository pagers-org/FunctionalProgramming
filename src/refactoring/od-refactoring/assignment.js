// 과제
// 내가 만든 forEach를 통해서 1. map, filter, reduce 구현하기

Array.prototype.forest = function (tree, thisArg) { 
  let k = 0;
  while (k < this.length) {
    tree(this[k], k, this);
    k += 1;
  }
  return undefined;
}

Array.prototype.newMap = function (callback, thisArg) { 

}

Array.prototype.newFilter = function (callback, thisArg) { 

}

Array.prototype.newReduce = function (callback, thisArg) { 

}




