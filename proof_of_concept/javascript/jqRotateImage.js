$(document).ready(function() {
	var images = new Array('header1.jpg','header2.jpg','header3.jpg','header4.jpg','header5.jpg');

	var index = 0;
	function rotateImage() {
		$('#imgId').attr('src', images[index]);
		index++;
	}

	setInterval("rotateImage()",10000);
});