var arr = [1,2,3,-1,-2,1];
var matrix = [[1,2,3], [4,5,6], [7,8,9]];

Array.prototype.uniq = function() {
  const value = [];
  for(i = 0; i < this.length; i++) {
    if (!(value.includes(this[i]))) {
      value.push(this[i]);
    }
  }
  return value;
};

Array.prototype.two_sum = function(target) {
  let solution = [];
  for(i = 0; i < this.length; i++) {
    for(k = i; k < this.length; k++){
      if((this[i] + this[k]) === target){
        solution.push([i,k]);
      }
    }
  }
  return solution;
};

Array.prototype.transpose = function() {
  let solution = [];
  for(i = 0; i < this.length; i++) {
    let col = [];
    for(k = 0; k < this[i].length; k++){
      col.push((this[k][i]));
    }
    solution.push(col);
  }
  return solution;
};
