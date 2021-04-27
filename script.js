if($('input')) {
  $('input').on("click", function() {
    $('.annually').toggleClass('hidden');
    $('.monthly').toggleClass('hidden');
  });
};
