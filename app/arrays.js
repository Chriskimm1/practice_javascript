exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return _.indexOf(arr, item);
  },

  sum: function(arr) {
    var sum = 0;
    _.forEach(arr, function(num){
      sum += num;
    })

    return sum;
  },

  remove: function(arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy: function(arr, item) {
    var indexToRemove = [];
    var indexToMinus = 0;
    _.forEach(arr, function(value, index){
      if (value === item){
        indexToRemove.push(index);
      }
    });

    _.forEach(indexToRemove, function(index){
      arr.splice(index - indexToMinus, 1);
      indexToMinus++
    })

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    _.forEach(arr, function(number){
      if (number === item){
        count++;
      }
    })

    return count;
  },

  duplicates: function(arr) {
    var tracking = {};
    var duplication = [];

    _.forEach(arr, function(num){
       if (tracking[num]){
         tracking[num] += 1;
       } else {
         tracking[num] = 1;
       }
    });

    _.map(tracking, function(value, key){
      if (value > 1){
        duplication.push(parseInt(key));
      }
    })

    return duplication;

  },

  square: function(arr) {
    var array = [];

    _.forEach(arr, function(number){
       array.push(number * number);
    })

    return array;

  },

  findAllOccurrences: function(arr, target) {
    var array = [];

    _.forEach(arr, function(num, index){
      if (num === target){
        array.push(index);
      }
    })

    return array;
  }
};
