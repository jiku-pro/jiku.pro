
(function($) {
	var	$window = $(window),
		$head = $('head'),
		$body = $('body');

		var $sidebar = $('#sidebar'),
			$sidebar_inner = $sidebar.children('.inner');

			$('<a href="#sidebar" class="toggle">Toggle</a>')
				.appendTo($sidebar)
				.on('click', function(event) {
						event.preventDefault();
						event.stopPropagation();
						$sidebar.toggleClass('inactive');
				});
})(jQuery);