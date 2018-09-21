Array.prototype.bubbleSort = function(){
  let isSorted = false;
  while (isSorted == false ){
    isSorted = true
    for(i = 0 ; i < this.length-2 ; i++){
      if (this[i] > this[i+1]){
        [this[i], this[i+1] = this[i+1], this[i]];
        isSorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function(){
  let arr = [];
  for(i = 0 ; i < this.length ; i++ ){
    for( j = 0 ; j < this.length ; j++){
        let cool = this.slice(i,j);
        if (arr.includes(cool)){
          arr.push(cool);
        }
    }
  }
  return arr;
};
