exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
     return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    array = _.map(obj, function(value, key){
      return key + ': ' + value;
    });

    return array;
  }
};
