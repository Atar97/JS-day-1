Array.prototype.myEach = function (hollaback){
  for(i=0 ; i < this.length ; i++){
      hollaback(this[i]);
  }
};

Array.prototype.myMap = function(hollaback) {
  let solution = [];
  for(i=0; i < this.length; i++) {
    solution.push(hollaback(this[i]));
  }
  return solution;
};

Array.prototype.myMapTWO = function(hollaback) {
  let solution = [];

  const func = function(el) {
    solution.push(hollaback(el));
  };

  this.myEach(func);

  return solution;
};

Array.prototype.myInject = function(hollaback, el) {
  let accumulator;
  let i;
  if (el === undefined) {
    accumulator = this[0];
    i = 1;
  } else {
    accumulator = el;
    i = 0;
  }

  const func = function(el) {
    accumulator = hollaback(accumulator, el);
  };
  this.slice(i).myEach(func);
  return accumulator;
};
