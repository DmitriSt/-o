var arrayID = [1,2,3,4,5,6,7,8,9];
var finish = false;

function addX(cube) {
	$(cube).addClass('x')
	$(cube).find('.cube__x').css('display', 'block');
}

function addOLight(arr) {
	var rand = Math.floor(Math.random() * arr.length);
	var $block;

	if (($('#1').hasClass('x') && $('#2').hasClass('x') ||
			$('#6').hasClass('x') && $('#9').hasClass('x') ||
			$('#5').hasClass('x') && $('#7').hasClass('x')) && !$('#3').hasClass('o')) {
		$block = $('#3');
	} else if (($('#2').hasClass('x') && $('#3').hasClass('x') ||
							$('#4').hasClass('x') && $('#7').hasClass('x') ||
							$('#5').hasClass('x') && $('#9').hasClass('x')) && !$('#1').hasClass('o')) {
		$block = $('#1');
	} else if (($('#5').hasClass('x') && $('#7').hasClass('x') ||
							$('#1').hasClass('x') && $('#3').hasClass('x')) && !$('#2').hasClass('o')) {
		$block = $('#2');
	}	else if (($('#5').hasClass('x') && $('#6').hasClass('x') ||
							$('#1').hasClass('x') && $('#7').hasClass('x')) && !$('#4').hasClass('o')) {
		$block = $('#4');
	} else if (($('#4').hasClass('x') && $('#6').hasClass('x') ||
							$('#2').hasClass('x') && $('#8').hasClass('x') ||
							$('#1').hasClass('x') && $('#9').hasClass('x') ||
							$('#3').hasClass('x') && $('#7').hasClass('x')) && !$('#5').hasClass('o')) {
		$block = $('#5');
	} else if (($('#3').hasClass('x') && $('#9').hasClass('x') ||
							$('#4').hasClass('x') && $('#5').hasClass('x')) && !$('#6').hasClass('o')) {
		$block = $('#6');
	} else if (($('#1').hasClass('x') && $('#4').hasClass('x') ||
							$('#8').hasClass('x') && $('#9').hasClass('x') ||
							$('#3').hasClass('x') && $('#5').hasClass('x')) && !$('#7').hasClass('o')) {
		$block = $('#7');

	} else if (($('#2').hasClass('x') && $('#5').hasClass('x') ||
							$('#7').hasClass('x') && $('#9').hasClass('x')) && !$('#8').hasClass('o')) {
		$block = $('#8');
	} else if (($('#3').hasClass('x') && $('#6').hasClass('x') ||
							$('#7').hasClass('x') && $('#8').hasClass('x') ||
							$('#1').hasClass('x') && $('#5').hasClass('x')) && !$('#9').hasClass('o')) {
		$block = $('#9');
	} else {
		$block = $(`#${arr[rand]}`);
	}

	if ($block.hasClass('o')) {
		addOLight(arr);
	}

	$block.delay(1000).queue(function() {
		$block.addClass('o');
		var idCheckItem = $block.attr('id');
		arrayID = jQuery.grep(arrayID, function(value) {
			return value != idCheckItem;
		});
		$block.find('.cube__o').css('display', 'block');
		checkStatus();
	})
}

function addOHard(arr, delay) {
	var rand = Math.floor(Math.random() * arr.length);
	var $block;

	if (($('#1').hasClass('o') && $('#2').hasClass('o') ||
			$('#6').hasClass('o') && $('#9').hasClass('o') ||
			$('#5').hasClass('o') && $('#7').hasClass('o')) && !$('#3').hasClass('x')) {
		$block = $('#3');
	} else if (($('#2').hasClass('o') && $('#3').hasClass('o') ||
							$('#4').hasClass('o') && $('#7').hasClass('o') ||
							$('#5').hasClass('o') && $('#9').hasClass('o')) && !$('#1').hasClass('x')) {
		$block = $('#1');
	} else if (($('#5').hasClass('o') && $('#7').hasClass('o') ||
							$('#1').hasClass('o') && $('#3').hasClass('o')) && !$('#2').hasClass('x')) {
		$block = $('#2');
	}	else if (($('#5').hasClass('o') && $('#6').hasClass('o') ||
							$('#1').hasClass('o') && $('#7').hasClass('o')) && !$('#4').hasClass('x')) {
		$block = $('#4');
	} else if (($('#4').hasClass('o') && $('#6').hasClass('o') ||
							$('#2').hasClass('o') && $('#8').hasClass('o') ||
							$('#1').hasClass('o') && $('#9').hasClass('o') ||
							$('#3').hasClass('o') && $('#7').hasClass('o')) && !$('#5').hasClass('x')) {
		$block = $('#5');
	} else if (($('#3').hasClass('o') && $('#9').hasClass('o') ||
							$('#4').hasClass('o') && $('#5').hasClass('o')) && !$('#6').hasClass('x')) {
		$block = $('#6');
	} else if (($('#1').hasClass('o') && $('#4').hasClass('o') ||
							$('#8').hasClass('o') && $('#9').hasClass('o') ||
							$('#3').hasClass('o') && $('#5').hasClass('o')) && !$('#7').hasClass('x')) {
		$block = $('#7');
	} else if (($('#2').hasClass('o') && $('#5').hasClass('o') ||
							$('#7').hasClass('o') && $('#9').hasClass('o')) && !$('#8').hasClass('x')) {
		$block = $('#8');
	} else if (($('#3').hasClass('o') && $('#6').hasClass('o') ||
							$('#7').hasClass('o') && $('#8').hasClass('o') ||
							$('#1').hasClass('o') && $('#5').hasClass('o')) && !$('#9').hasClass('x')) {
		$block = $('#9');

	} else if (($('#1').hasClass('x') && $('#2').hasClass('x') ||
							$('#6').hasClass('x') && $('#9').hasClass('x') ||
							$('#5').hasClass('x') && $('#7').hasClass('x')) && !$('#3').hasClass('o')) {
		$block = $('#3');
	} else if (($('#2').hasClass('x') && $('#3').hasClass('x') ||
							$('#4').hasClass('x') && $('#7').hasClass('x') ||
							$('#5').hasClass('x') && $('#9').hasClass('x')) && !$('#1').hasClass('o')) {
		$block = $('#1');
	} else if (($('#5').hasClass('x') && $('#8').hasClass('x') ||
							$('#1').hasClass('x') && $('#3').hasClass('x')) && !$('#2').hasClass('o')) {
		$block = $('#2');
	}	else if (($('#5').hasClass('x') && $('#6').hasClass('x') ||
							$('#1').hasClass('x') && $('#7').hasClass('x')) && !$('#4').hasClass('o')) {
		$block = $('#4');
	} else if (($('#4').hasClass('x') && $('#6').hasClass('x') ||
							$('#2').hasClass('x') && $('#8').hasClass('x') ||
							$('#1').hasClass('x') && $('#9').hasClass('x') ||
							$('#3').hasClass('x') && $('#7').hasClass('x')) && !$('#5').hasClass('o')) {
		$block = $('#5');
	} else if (($('#3').hasClass('x') && $('#9').hasClass('x') ||
							$('#4').hasClass('x') && $('#5').hasClass('x')) && !$('#6').hasClass('o')) {
		$block = $('#6');
	} else if (($('#1').hasClass('x') && $('#4').hasClass('x') ||
							$('#8').hasClass('x') && $('#9').hasClass('x') ||
							$('#3').hasClass('x') && $('#5').hasClass('x')) && !$('#7').hasClass('o')) {
		$block = $('#7');
	} else if (($('#2').hasClass('x') && $('#5').hasClass('x') ||
							$('#7').hasClass('x') && $('#9').hasClass('x')) && !$('#8').hasClass('o')) {
		$block = $('#8');
	} else if (($('#3').hasClass('x') && $('#6').hasClass('x') ||
							$('#7').hasClass('x') && $('#8').hasClass('x') ||
							$('#1').hasClass('x') && $('#5').hasClass('x')) && !$('#9').hasClass('o')) {
		$block = $('#9');
	} else {
		$block = $(`#${arr[rand]}`);
	}

	if ($block.hasClass('o')) {
		addOHard(arr,1000);
	}

	$block.delay(delay).queue(function() {
		$block.addClass('o');
		var idCheckItem = $block.attr('id');
		arrayID = jQuery.grep(arrayID, function(value) {
			return value != idCheckItem;
		});
		$block.find('.cube__o').css('display', 'block');

		if ($('.o').length >= 3) checkStatus();
	})
}

// check game status 
function checkStatus() {
	if ($('#1').hasClass('x') && $('#2').hasClass('x') && $('#3').hasClass('x') ||
			$('#1').hasClass('o') && $('#2').hasClass('o') && $('#3').hasClass('o')) {
		$('#1, #2, #3').addClass('finish');
		finish = true;
	} else if ($('#1').hasClass('x') && $('#4').hasClass('x') && $('#7').hasClass('x') ||
							$('#1').hasClass('o') && $('#4').hasClass('o') && $('#7').hasClass('o')) {
		$('#1, #4, #7').addClass('finish');
		finish = true;
	} else if ($('#2').hasClass('x') && $('#5').hasClass('x') && $('#8').hasClass('x') ||
							$('#2').hasClass('o') && $('#5').hasClass('o') && $('#8').hasClass('o')) {
		$('#2, #5, #8').addClass('finish');
		finish = true;
	} else if ($('#1').hasClass('x') && $('#5').hasClass('x') && $('#9').hasClass('x') ||
							$('#1').hasClass('o') && $('#5').hasClass('o') && $('#9').hasClass('o')) {
		$('#1, #5, #9').addClass('finish');
		finish = true;
	} else if ($('#3').hasClass('x') && $('#6').hasClass('x') && $('#9').hasClass('x') ||
							$('#3').hasClass('o') && $('#6').hasClass('o') && $('#9').hasClass('o')) {
		$('#3, #6, #9').addClass('finish');
		finish = true;
	} else if ($('#4').hasClass('x') && $('#5').hasClass('x') && $('#6').hasClass('x') ||
							$('#4').hasClass('o') && $('#5').hasClass('o') && $('#6').hasClass('o')) {
		$('#4, #5, #6').addClass('finish');
		finish = true;
	} else if ($('#7').hasClass('x') && $('#8').hasClass('x') && $('#9').hasClass('x') ||
							$('#7').hasClass('o') && $('#8').hasClass('o') && $('#9').hasClass('o')) {
		$('#7, #8, #9').addClass('finish');
		finish = true;
	} else if ($('#3').hasClass('x') && $('#5').hasClass('x') && $('#7').hasClass('x') ||
							$('#3').hasClass('o') && $('#5').hasClass('o') && $('#7').hasClass('o')) {
		$('#3, #5, #7').addClass('finish');
		finish = true;
	} else if ($('.x').length === 5 || $('.o').length === 5) {
		showMessage("НИЧЬЯ");
		finish = true;
	}

	if ($('.x.finish').length) {
		showMessage("ПОБЕДА!");
		$('.win-img').animate({bottom:0},1000);
	}

	if ($('.o.finish').length) {
		showMessage("ПРОИГРЫШ!");
		$('.img-loser-1, .img-loser-2, .img-loser-3').delay(1000).animate({top:0},700);
		$('.img-loser-4, .img-loser-5, .img-loser-6').delay(1000).animate({bottom:0},700);
	}
}

// click on empty coub
$('.cube').click(function() {
	if (!$(this).hasClass('x') && !$(this).hasClass('o')) {
		if (!finish && $('.x').length === $('.o').length) {
	    var idCheckItem = $(this).attr('id');
	    arrayID = jQuery.grep(arrayID, function(value) {
	      return value != idCheckItem;
	    });

			addX(this);
			
			if ($('.x').length >= 3) checkStatus()

			if (!finish) {
				if ($('.wrapper').hasClass('light')) {
					addOLight(arrayID);
				}
				if ($('.wrapper').hasClass('middle')) {
					addOHard(arrayID, 1000);
				}
			}
		}

		if (!finish && $('.wrapper').hasClass('hard') && $('.o')) {
			var idCheckItem = $(this).attr('id');
	    arrayID = jQuery.grep(arrayID, function(value) {
	      return value != idCheckItem;
			});
			
			addX(this);

			if ($('.x').length >= 3) checkStatus()

			if (!finish) {
				addOHard(arrayID, 1000);
			}
		}
	}
})


// start game //

// start game animations
function start() {
	$('.levels').removeClass('showing');
	$('.start-wrapper').animate({opacity: 0}, 600, () => {$('.start-wrapper').css('visibility', 'hidden')});
}

// check level & start game
function levelSelection(event) {
	if (event.hasClass('light')) {
		$('.wrapper').addClass('light')
		start()
	}
	if (event.hasClass('middle')) {
		$('.wrapper').addClass('middle')
		start()
	}
	if (event.hasClass('hard')) {
		$('.wrapper').addClass('hard');
		start();
		addOHard(arrayID, 300);
	}
}

// level click
$('.level').click(function() {
	levelSelection($(this))
})


// finish game //

// show status message
var showMessage = function(text) {
	$('.wrapper').css('z-index', '-1');
	$('.message').html(text);
	$('.message').css('visibility','visible').animate({
		opacity: 1
	}, 700);
}

// reload game
$('.message').click(function() {
	 location.reload()
})
