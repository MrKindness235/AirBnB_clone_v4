const checkedBoxes = []

$(document).ready(() => {
  $('input[type=checkbox]').change(
    function(e){
        if (this.checked) {
          checkedBoxes.push(e)
          $(".amenities h4").append(() => {
            checkedBoxes
          })
        }
    });
})