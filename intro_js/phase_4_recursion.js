function range(start, end) {
  if (start === end +1) {
    return [];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr){
  if(arr.length === 1){
    return arr[0];
  }
  last = arr.pop();
  return (last + sumRec(arr));
}

function exp1(b, n) {
  if (n == 0){
    return 1;
  }
  return b * exp1(b, n-1);
}

function exp2(b, n) {
  if (n === 0) {
    return 1;
  }
  if (n % 2 === 0) {
    return exp2(b, n/2) * exp2(b, n/2);
  }
  return b * exp2(b, Math.floor(n/2)) * exp2(b, Math.floor(n/2));
}

function fib(n) {
  if (n === 1) {
    return [0,1];
  }
  const fibnminus1 = fib(n-1);
  const leng = fibnminus1.length;
  return fibnminus1.concat([fibnminus1[leng-1] + fibnminus1[leng-2]]);
}

function bsearch(arr,target){
  if (arr.length === 1)  {
    if(arr[0] === target ){
      return 0;
    else{
      return -1;
    }

    }

  }
}
