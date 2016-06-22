exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var filesList = [];
    var subDirName = false;

    function getFiles(directory){
      var file;
      var files = directory.files;

      if (directory.dir === dirName){
        subDirName = true;
      }

      for (var i = 0; i < files.length; i++){
        file = files[i];
        if (typeof file === 'string'){
          if (!dirName || subDirName){
            filesList.push(files[i]);
          }
        } else {
          console.log(files[i], 'else')
          getFiles(files[i]);
        }
      }
      subDirName = false;
    }

    getFiles(data);
    console.log(filesList);
    return filesList;
  },

  permute: function(inputArr) {
    var results = [];

    function doPermute(arr, memo) {
      var cur, memo = memo || [];
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        console.log(memo);
        doPermute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }

      return results;
    }

    return doPermute(inputArr);
  },
  // to visualize the recursion
  /*fib(6)
   5 + 3
   fib(5)
   3 + 2
   fib(4)
   2 + 1
   fib(3)
   1 + 1
   fib(2)
   1*/
  fibonacci: function(n) {
    if (n <= 0){
      return 0
    } else if (n <= 2) {
        return 1;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {
    // not able to figure this one out yet;
  }
};



