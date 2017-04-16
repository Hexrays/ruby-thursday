
const addModalListeners = () => {
  $('#modal-link').on('click', () => {
    $('#modal-background').fadeIn();
  });
  $('.close').on('click', () => {
      $('#modal-background').fadeOut();
  });
}

export default addModalListeners;