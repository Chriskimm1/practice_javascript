exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    var deferred = $.Deferred();
    _.delay(function () {
      deferred.resolve(value);
    }, 15);
    return deferred.promise();
  },

  manipulateRemoteData: function (url) {
    var deferred = $.Deferred();

    $.ajax(url).then(function (res) {
       var names = _.map(res.people, function(people){
          return people.name;
       })
      /*   var names [];
      _.forEach(res.people, function(people){
         names.push(people.name);
      })*/

      deferred.resolve(names.sort());
    })

    return deferred.promise();

  }

}
