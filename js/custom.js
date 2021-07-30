/* Azalma Artma Tuşları */
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

$input.val(value);

});

$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
        value =100;
    }

    $input.val(value);
});

$('.like-btn').on('click', function() {
$(this).toggleClass('is-active');
});


  /* Onaylama Bildirimi Sweet Alert */

  $('.custom').on('click',function(){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tebrikler, Ödemeniz Onaylandı',
      showConfirmButton: false,
      timer: 1500
    });

  });
  
  $('.sepet').on('click',function(){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ürününüz Sepete Eklendi!',
      showConfirmButton: false,
      timer: 1500
    });

  });
  
  $('.favori').on('click',function(){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ürününüz Favorilere Eklendi!',
      showConfirmButton: false,
      timer: 1500
    });

	});

  
  function myFunction() {
    var element = document.getElementById("renkli");
    element.classList.toggle("degis");
 }
  function myFunction2() {
    var element = document.getElementById("renkli2");
    element.classList.toggle("degis2");
  }


/* Gallery */
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});