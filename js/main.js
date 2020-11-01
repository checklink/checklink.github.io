$('.name_input').val('');

$(".dots").click(function() {
	$('.dots').removeClass('active');
    $(this).toggleClass('active');
});

$(".avatars").hover(function() {
	$('.avatars').removeClass('active');
    $(this).toggleClass('active');
});