const mainSettings = {
	finish: false,
	level: '',
	player: {},
	enemy: {},
	twoPlayers: false,
	first: true
}

let arrayID = [1,2,3,4,5,6,7,8,9];

const p = mainSettings.player;
const e = mainSettings.enemy;

function addSymbol(cube, type) {
	$(cube)
		.addClass(type)
		.find(`.cube__${type}`)
		.css('display', 'block');
}

function ligthGame(arr) {
	let rand = Math.floor(Math.random() * arr.length);
	let potentialBlock;

	if ( (p[2] && p[3] || p[4] && p[7] || p[5] && p[9] ) && !e[1] ) {
		e[1] = "o"
		potentialBlock = $('#1');
	} else if ((p[5] && p[8] || p[1] && p[3]) && !e[2]) {
		e[2] = "o"
		potentialBlock = $('#2');
	}	else if (( p[1] && p[2] || p[6] && p[9] || p[5] && p[7] ) && !e[3] ) {
		e[3] = "o"
		potentialBlock = $('#3');
	}	else if (( p[5] && p[6] || p[1] && p[7] ) && !e[4] ) {
		e[4] = "o"
		potentialBlock = $('#4');
	} else if ((p[4] && p[6] || p[2] && p[8] || p[1] && p[9] || p[3] && p[7] ) && !e[5]) {
		e[5] = "o"
		potentialBlock = $('#5');
	} else if ((p[3] && p[9] || p[4] && p[5]) && !e[6]) {
		e[6] = "o"
		potentialBlock = $('#6');
	} else if ((p[1] && p[4] || p[8] && p[9] || p[3] && p[5]) && !e[7]) {
		e[7] = "o"
		potentialBlock = $('#7');
	} else if ((p[2] && p[5] || p[7] && p[9]) && !e[8]) {
		e[8] = "o"
		potentialBlock = $('#8');
	} else if ((p[3] && p[6] || p[7] && p[8] || p[1] && p[5]) && !e[9]) {
		e[9] = "o"
		potentialBlock = $('#9');
	} else {
		potentialBlock = $(`#${arr[rand]}`);
	}

	if (potentialBlock.hasClass('o')) {
		ligthGame(arr);
	}

	potentialBlock.delay(1000).queue(function() {
		potentialBlock.addClass('o');
		e[`${potentialBlock.attr('id')}`] = 'o'
		let idCheckItem = potentialBlock.attr('id');
		arrayID = jQuery.grep(arrayID, function(value) {
			return value != idCheckItem;
		});
		potentialBlock.find('.cube__o').css('display', 'block');
		checkStatus();
	})
}

function hardGame(arr, delay) {
	let rand = Math.floor(Math.random() * arr.length);
	let potentialBlock;

	if ((e[2] && e[3] || e[4] && e[7] || e[5] && e[9]) && !p[1]) {
		e[1] = "o"
		potentialBlock = $('#1');
	} else if ((e[5] && e[8] || e[1] && e[3]) && !p[2]) {
		e[2] = "o"
		potentialBlock = $('#2');
	} else if ((e[1] && e[2] || e[6] && e[9] || e[5] && e[7]) && !p[3]) {
		e[3] = "o"
		potentialBlock = $('#3');
	}	else if ((e[5] && e[6] || e[1] && e[7]) && !p[4]) {
		e[4] = "o"
		potentialBlock = $('#4');
	} else if ((e[4] && e[6] || e[2] && e[8] || e[1] && e[9] || e[3] && e[7]) && !p[5]) {
		e[5] = "o"
		potentialBlock = $('#5');
	} else if ((e[3] && e[9] || e[4] && e[5]) && !p[6]) {
		e[6] = "o"
		potentialBlock = $('#6');
	} else if ((e[1] && e[4] || e[8] && e[9] || e[3] && e[5]) && !p[7]) {
		e[7] = "o"
		potentialBlock = $('#7');
	} else if ((e[2] && e[5] || e[7] && e[9]) && !p[8]) {
		e[8] = "o"
		potentialBlock = $('#8');
	} else if ((e[3] && e[6] || e[7] && e[8] || e[1] && e[5]) && !p[9]) {
		e[9] = "o"
		potentialBlock = $('#9');

	} else if ((p[2] && p[3] || p[4] && p[7] || p[5] && p[9]) && !e[1]) {
		e[1] = "o"
		potentialBlock = $('#1');
	} else if ((p[5] && p[8] || p[1] && p[3]) && !e[2]) {
		e[2] = "o"
		potentialBlock = $('#2');
	}	else if ((p[1] && p[2] || p[6] && p[9] || p[5] && p[7]) && !e[3]) {
		e[3] = "o"
		potentialBlock = $('#3');
	}	else if ((p[5] && p[6] || p[1] && p[7]) && !e[4]) {
		e[4] = "o"
		potentialBlock = $('#4');
	} else if ((p[4] && p[6] || p[2] && p[8] || p[1] && p[9] || p[3] && p[7]) && !e[5]) {
		e[5] = "o"
		potentialBlock = $('#5');
	} else if ((p[3] && p[9] || p[4] && p[5]) && !e[6]) {
		e[6] = "o"
		potentialBlock = $('#6');
	} else if ((p[1] && p[4] || p[8] && p[9] || p[3] && p[5]) && !e[7]) {
		e[7] = "o"
		potentialBlock = $('#7');
	} else if ((p[2] && p[5] || p[7] && p[9]) && !e[8]) {
		e[8] = "o"
		potentialBlock = $('#8');
	} else if ((p[3] && p[6] || p[7] && p[8] || p[1] && p[5]) && !e[9]) {
		e[9] = "o"
		potentialBlock = $('#9');
	} else {
		potentialBlock = $(`#${arr[rand]}`);
	}

	if (potentialBlock.hasClass('o') || potentialBlock.hasClass('x')) {
		hardGame(arr);
	}

	potentialBlock.delay(delay).queue(function() {
		potentialBlock.addClass('o');
		e[`${potentialBlock.attr('id')}`] = 'o'
		let idCheckItem = potentialBlock.attr('id');
		arrayID = jQuery.grep(arrayID, function(value) {
			return value != idCheckItem;
		});
		potentialBlock.find('.cube__o').css('display', 'block');

		if ($('.o').length >= 3) checkStatus();
	})
}

function twoPlayers(player) {
	mainSettings.first = !player
}

// check game status 
function checkStatus() {
	if (p[1] && p[2] && p[3] || e[1] && e[2] && e[3]) {
		mainSettings.finish = true;
		$('#1, #2, #3').addClass('finish');
	} else if (p[1] && p[4] && p[7] || e[1] && e[4] && e[7]) {
		mainSettings.finish = true;
		$('#1, #4, #7').addClass('finish');
	} else if (p[2] && p[5] && p[8] || e[2] && e[5] && e[8]) {
		mainSettings.finish = true;
		$('#2, #5, #8').addClass('finish');
	} else if (p[1] && p[5] && p[9] || e[1] && e[5] && e[9]) {
		mainSettings.finish = true;
		$('#1, #5, #9').addClass('finish');
	} else if (p[3] && p[6] && p[9] || e[3] && e[6] && e[9]) {
		mainSettings.finish = true;
		$('#3, #6, #9').addClass('finish');
	} else if (p[4] && p[5] && p[6] || e[4] && e[5] && e[6]) {
		mainSettings.finish = true;
		$('#4, #5, #6').addClass('finish');
	} else if (p[7] && p[8] && p[9] || e[7] && e[8] && e[9]) {
		mainSettings.finish = true;
		$('#7, #8, #9').addClass('finish');
	} else if (p[3] && p[5] && p[7] || e[3] && e[5] && e[7]) {
		mainSettings.finish = true;
		$('#3, #5, #7').addClass('finish');
	} else if ($('.x').length === 5 || $('.o').length === 5) {
		showMessage("DRAW");
		mainSettings.finish = true;
	}

	if ($('.x.finish').length) {
		if (!mainSettings.twoPlayers) {
			showMessage("WIN!");
			// $('.win-img').animate({bottom:0},1000);
		} else {
			showMessage("X WINS!");
		}
	}

	if ($('.o.finish').length) {
		if (!mainSettings.twoPlayers) {
			showMessage("LOSE!");
			// $('.img-loser-1, .img-loser-2, .img-loser-3').delay(1000).animate({top:0},700);
			// $('.img-loser-4, .img-loser-5, .img-loser-6').delay(1000).animate({bottom:0},700);
		} else {
			showMessage("O WINS!");
		}
	}
}

// click on empty cube
$('.cube').click(function() {
	let idCheckItem = $(this).attr('id');

	if (!$(this).hasClass('x') && !$(this).hasClass('o')) {

		if (!mainSettings.finish && 
				mainSettings.level !== 'hard' && 
				!mainSettings.twoPlayers && 
				$('.x').length === $('.o').length) 
		{
			arrayID = jQuery.grep(arrayID, function(value) {
				return value != idCheckItem;
			});
			p[`${idCheckItem}`] = 'x'

			addSymbol(this, 'x');
			
			if ($('.x').length >= 3) checkStatus()

			if (!mainSettings.finish) {
				if (mainSettings.level === 'light') {
					ligthGame(arrayID);
				} else if (mainSettings.level === 'middle') {
					hardGame(arrayID, 1000);
				} else if (mainSettings.level === 'players') {
					twoPlayers(mainSettings.first);
				}
			}
		} else if (!mainSettings.finish && mainSettings.twoPlayers) {
			if (mainSettings.first) {
				p[`${idCheckItem}`] = 'x'
				arrayID = jQuery.grep(arrayID, function(value) {
					return value != idCheckItem;
				});
				addSymbol(this, 'x');
			} else {
				e[`${idCheckItem}`] = 'o'
				addSymbol(this, 'o');
			}
			
			if ($('.x').length >= 3 || $('.o').length >= 3) checkStatus()

			if (!mainSettings.finish) {
				twoPlayers(mainSettings.first);
			}
		}

		// if (!mainSettings.finish && mainSettings.level === 'hard' && $('.x').length < $('.o').length) {
		// 	console.log('x.length',$('.x').length)
		// 	console.log('o.length',$('.o').length)
		// 	p[`${idCheckItem}`] = 'x'
		// 	addSymbol(this, 'x');

		// 	if ($('.o').length >= 3) checkStatus()

		// 	if (!mainSettings.finish) {
		// 		hardGame(arrayID, 1000);
		// 	}
		// }
	}
})


// start game //

// start game animations
function start() {
	$('.start-wrapper')
		.animate({opacity: 0}, 200, () => {
			$('.start-wrapper').css('visibility', 'hidden')
		});
}

$('.level.computer').click(function() {
	$('.levels.options').hide()
	$('.levels.showing').show()
})

$('.level.player').click(function() {
	mainSettings.twoPlayers = true
	mainSettings.level = 'players'
	start();
})

// level click
$('.level').click(function() {
	const self = $(this)
	if (self.hasClass('light')) {
		mainSettings.level = 'light'
		start()
	} else if (self.hasClass('middle')) {
		mainSettings.level = 'middle'
		start()
	// } else if (self.hasClass('hard')) {
	// 	mainSettings.level = 'hard'
	// 	start();
	// 	hardGame(arrayID, 300);
	}
})


// finish game //

// show status message
var showMessage = function(text) {
	$('.wrapper').css('z-index', '-1');
	$('.message')
		.html(text)
		.css('visibility','visible')
		.animate({opacity: 1}, 700)
}

// reload game
$('.message').click(function() {
	 location.reload()
})
