import $ from 'jquery';
module.exports = {
  puppies: () => {
    $('.active').removeClass('active');
    $('#puppiesNav').addClass('active');

  },

  timer: () => {
    $('.active').removeClass('active');
    $('#timerNav').addClass('active');
    console.log('timer handler')
  },
};