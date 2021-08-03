// $( function() {
 
// if (localStorage.getItem("myKey")) {
//     var stored_select = localStorage.getItem("myKey");
//     $('#' + stored_select).prop( "selected", true );
//     $('.' + stored_select).show();
//     } else {
// $('.chelyabinsk').show();
// }
// });

$('.piter').show();
 
$("#selectItem").change(function(){
    $('.containerss').find('div').hide();
    var selected = $('#selectItem option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});  