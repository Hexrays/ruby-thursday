/* eslint no-console:0 */
import addModalListeners from '../modal';

console.log('Hello World from Webpacker')

$(document).on('turbolinks:load', function() {
  addModalListeners();
});


