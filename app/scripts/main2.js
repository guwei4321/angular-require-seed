(function() {
  require.config({
    paths: {
      'jquery': '../bower_components/jquery/jquery'
    }
  });

  require(['jquery'], function($) {
     'use strict';
     var people = {};
     people.age = 22;
     people.name = 'hello';
     $('#pp').text(people.age+'：'+people.name)
  });

}).call(this);
