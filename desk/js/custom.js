$(window).ready(function () {
	$('#menuBtn').unbind("click").bind("click", function (e) {
		e.preventDefault();
		var content = $("#menus").html();
		var navElemOverlay = $("<div id=\"navOverlay\">");
		$(navElemOverlay).html("<img src=\"img/logo.png\" class=\"logo\"> <span id=\"close\">close</span>" + content);
		$('body').append(navElemOverlay);
		$('.content .head, .content .caption, .controls').animate({'opacity': '.5'},1000);
		$(e.target).fadeOut("fast");

		var target_btn = e.target;

		$("#close").unbind("click").bind("click", function () {
			console.log("Clicked");
			$("#navOverlay").remove();
			$('.content .head, .content .caption, .controls').animate({'opacity': '1'},1000);
			$(target_btn).fadeIn();
		});
	});

	$(window).resize(function () {
		if ($(window).width() > 991) {
			if ($("#navOverlay").length > 0) {
				$("#navOverlay").remove();
				$(".mobile-nav #menuBtn img").fadeIn();
				$('.content .head, .content .caption, .controls').animate({'opacity': '1'},1000);
			}
		}
	})
})