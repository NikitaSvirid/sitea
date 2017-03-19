	$(document).ready(function() {
		var images = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
		var currentImage = 0;

		$("#img").attr("src", images[currentImage]);
	
		$("#back").click(function(){
			if (currentImage != 0) {
				currentImage--;
				$("#img").attr("src", images[currentImage]);
			}
		});
		$("#forward").click(function(){
			if (currentImage != images.length - 1) {
				currentImage++;
				$("#img").attr("src", images[currentImage]);
		}
	});
});