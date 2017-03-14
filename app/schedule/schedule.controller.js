(function() {
  'use strict';

  angular
    .module('drsApp.schedule')
    .controller('ScheduleController', ScheduleController);

  ScheduleController.$inject = ['$state', 'authService'];

  function ScheduleController($state, authService) {
    var timetable = new Timetable();
    timetable.setScope(9,17);
    timetable.addLocations(['Silent Disco', 'Nile', 'Len Room', 'Maas Room']);
    timetable.addEvent('Frankadelic', 'Nile', new Date(2015,7,17,10,45), new Date(2015,7,17,12,30));
    var options = {
  url: '#',
  class: 'vip',
  data: {
    id: 4,
    ticketType: 'VIP'
  }
}
timetable.addEvent('Jam Session', 'Nile', new Date(2015,7,17,21,15), new Date(2015,7,17,23,30), options);

    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable');
}
});
