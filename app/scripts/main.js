(function() {
  require.config({
    paths: {
      'jquery': '../bower_components/jquery/jquery'
    }
  });

  require(['jquery'], function($) {
     'use strict';
     var people = {};
     people.age = 30;
     people.name = 'guwei';
     $('#pp').text(people.age+'岁的'+people.name)
  });

}).call(this);
