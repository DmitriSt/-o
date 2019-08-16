var ids = [1,2,3,4,5,6,7,8,9];
var finish = false;

var addX = function(cube) {
		$(cube).addClass('x')
    $(cube).find('.cube__x').css('display', 'block');
}

// var addOLight = function(arr) {
//     var rand = Math.floor(Math.random() * arr.length);
//     var $block = $(`#${arr[rand]}`);
// 		if ($block.hasClass('o')) {
// 			addOLight(arr);
// 		} else {
// 			$block.delay(1000).queue(function() {
// 				$block.addClass('o');
// 				$block.find('.cube__o').css('display', 'block');
// 				checkState();
// 			})
// 		}
// }

var logic = [
	{item1: 2,item2: 3,answer: 1},
	{item1: 4,item2: 7,answer: 1},
	{item1: 5,item2: 9,answer: 1},

	{item1: 5,item2: 7,answer: 2},
	{item1: 1,item2: 3,answer: 2},

	{item1: 1,item2: 2,answer: 3},
	{item1: 6,item2: 9,answer: 3},
	{item1: 5,item2: 7,answer: 3},

	{item1: 1,item2: 7,answer: 4},
	{item1: 5,item2: 6,answer: 4},

	{item1: 1,item2: 9,answer: 5},
	{item1: 3,item2: 7,answer: 5},
	{item1: 4,item2: 6,answer: 5},
	{item1: 2,item2: 8,answer: 5},

	{item1: 3,item2: 9,answer: 6},
	{item1: 4,item2: 5,answer: 6},

	{item1: 1,item2: 4,answer: 7},
	{item1: 3,item2: 5,answer: 7},
	{item1: 8,item2: 9,answer: 7},

	{item1: 2,item2: 5,answer: 8},
	{item1: 7,item2: 9,answer: 8},

	{item1: 1,item2: 5,answer: 9},
	{item1: 3,item2: 6,answer: 9},
	{item1: 7,item2: 8,answer: 9},
];

var addOMiddle = function(arr) {
		var rand = Math.floor(Math.random() * arr.length);
		var $block;
		// for(var i = 0; i < logic.length;i++){
		// 	var $item1 = $(`#${logic[i].item1}`);
		// 	var $item2 = $(`#${logic[i].item2}`);
		// 	var $answer = $(`#${logic[i].answer}`);
		//
		// 	if ($item1.hasClass('x') && $item2.hasClass('x') && !$answer.hasClass('o') && $block === undefined) {
		// 		$block = $answer;
		// 	}
		// }
		//
		// if ($block === undefined) {
		// 	$block = $(`#${arr[rand]}`);
		// }
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
			addOMiddle(arr);
		}

		$block.delay(1000).queue(function() {
			$block.addClass('o');
			var thisID = $block.attr('id');
	    var removeItem = thisID;
	    ids = jQuery.grep(ids, function(value) {
	      return value != removeItem;
	    });
			$block.find('.cube__o').css('display', 'block');
			checkState();
		})
}

var addOHard = function(arr, delay) {
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
			addOHard(arr,1000);
		}

		$block.delay(delay).queue(function() {
			$block.addClass('o');
			var thisID = $block.attr('id');
	    var removeItem = thisID;
	    ids = jQuery.grep(ids, function(value) {
	      return value != removeItem;
	    });
			$block.find('.cube__o').css('display', 'block');
			checkState();
		})
}

var showMessage = function(text) {
	$('.wrapper').css('z-index', '-1');
	$('.message').html(text);
	$('.message').css('visibility','visible').animate({
		opacity: 1
	}, 700);
}

$('.message').click(function() {
	 location.reload()
})

var checkState = function() {
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

$('.cube').click(function() {
	if (!$(this).hasClass('x') && !$(this).hasClass('o')) {
		if (finish !== true && $('.x').length === $('.o').length) {
	    var thisID = $(this).attr('id');
	    var removeItem = thisID;
	    ids = jQuery.grep(ids, function(value) {
	      return value != removeItem;
	    });

			addX(this);
			checkState(ids);

			if (finish !== true) {
				if ($('.wrapper').hasClass('light')) {
					addOMiddle(ids);
				}
				if ($('.wrapper').hasClass('middle')) {
					addOHard(ids, 1000);
				}
			}
		}
		if (finish !== true && $('.wrapper').hasClass('hard') && $('.o').length) {
			var thisID = $(this).attr('id');
	    var removeItem = thisID;
	    ids = jQuery.grep(ids, function(value) {
	      return value != removeItem;
	    });
			addX(this);
			checkState(ids);
			if (finish !== true) {
				addOHard(ids, 1000);
			}
		}
	}
})

function start() {
	$('.levels').removeClass('showing');
	$('.start-wrapper').animate({height: 0}, 600);
}

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
		addOHard(ids, 300);
	}
}

$('.level').click(function() {
	levelSelection($(this))
})
