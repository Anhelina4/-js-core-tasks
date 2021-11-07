var invert = document.getElementById('invert');
var reset = document.getElementById('reset');
var table = document.getElementById('table');

// Field-related object
var Table = {
	'rows': 6, // number of <tr> in table
	'cols': 6, // number of <td> inside one <tr>
	'loseCells': 0.1, // percentage of failed cells
	'classes': ['red', 'green', 'checked'],

	create: function(rows, cols) {
		table.innerHTML = '';
		var totalCells = Table.rows * Table.cols,
			failCells = totalCells * Table.loseCells;

		// creating of table		
		for (var i = 0; i < Table.rows; i++) {
			var tr = document.createElement('tr'),
				rowIndex = i + 1;
			table.appendChild(tr);

			for (var a = 0; a < Table.cols; a++) {
				var td = document.createElement('td'),
					cellIndex = a + 1,
					uniqueId = rowIndex + '-' + cellIndex;
				tr.appendChild(td);
				td.id = uniqueId
			}

		}

		// randomly define failed cells
		var arr = []

		while (arr.length < failCells) {
			var randomnumber = Math.floor(Math.random() * (totalCells - 1)) + 1;
			var found = false;

			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == randomnumber) {
					found = true;
					break
				}
			}

			if (!found) {
				arr[arr.length] = randomnumber;
				table.getElementsByTagName('td')[randomnumber].setAttribute('color', Table.classes[0]);
			}
		}

	}
}

// Game-related object
var Miner = {
    //clear everything
	newGame: function() {
		var td = table.getElementsByTagName('td');
		for (var i = 0; i < td.length; i++) {
			td[i].className = ' ';
		}
		table.className = ' ';
		Table.create();
	},
    //for show button(invert colors)
	invertColors: function() {
		table.className.indexOf('invert') == -1 ? table.className += ' invert' : table.className = ' ';
        console.log(table.className.indexOf('invert'))
	},
    
	hit: function(cell, color) {
		if (table.className.indexOf('invert') == -1 && cell.tagName == 'TD') {
			cell.className.indexOf(color) == -1 ? cell.className += color : '';
		}
	},

	countGreenCells: function(cell) {
		var cellPosition = cell.id.split('-');
        console.log(cell.id)
			rowIndex = parseInt(cellPosition[0]),
			rowNext = rowIndex + 1,
			rowPrev = (rowIndex > 1) ? rowIndex - 1 : 0,

			cellIndex = parseInt(cellPosition[1]),
			cellNext = cellIndex + 1,
			cellPrev = (cellIndex > 1) ? cellIndex - 1 : 0,

			coordinates = {
				cell1: [rowPrev + '-' + cellPrev],
				cell2: [rowIndex + '-' + cellPrev],
				cell3: [rowNext + '-' + cellPrev],
				cell4: [rowNext + '-' + cellIndex],
				cell5: [rowNext + '-' + cellNext],
				cell6: [rowIndex + '-' + cellNext],
				cell7: [rowPrev + '-' + cellNext],
				cell8: [rowPrev + '-' + cellIndex]
			},

			greenBoxes = 0,
			arr = [];

		if (rowIndex > 1 && cellIndex > 1 && rowIndex < Table.rows && cellIndex < Table.cols) {
			arr.push(
				coordinates.cell1[0],
				coordinates.cell2[0],
				coordinates.cell3[0],
				coordinates.cell4[0],
				coordinates.cell5[0],
				coordinates.cell6[0],
				coordinates.cell7[0],
				coordinates.cell8[0]
			)
		}
        console.log(rowIndex)
		if (rowIndex == 1 && cellIndex < Table.cols && cellIndex > 1) {
			arr.push(
				coordinates.cell2[0],
				coordinates.cell3[0],
				coordinates.cell4[0],
				coordinates.cell5[0],
				coordinates.cell6[0]
			)
		}

		if (rowIndex == 1 && cellIndex == 1) {
			arr.push(
				coordinates.cell4[0],
				coordinates.cell5[0],
				coordinates.cell6[0]
			)
		}

		if (rowIndex == 1 && cellIndex == Table.cols) {
			arr.push(
				coordinates.cell2[0],
				coordinates.cell3[0],
				coordinates.cell4[0]
			)
		}

		if (rowIndex == Table.rows && cellIndex == 1) {
			arr.push(
				coordinates.cell6[0],
				coordinates.cell7[0],
				coordinates.cell8[0]
			)
		}

		if (rowIndex == Table.rows && cellIndex == Table.cols) {
			arr.push(
				coordinates.cell1[0],
				coordinates.cell2[0],
				coordinates.cell8[0]
			)
		}

		if (rowIndex == Table.rows && cellIndex < Table.cols && cellIndex > 1) {
			arr.push(
				coordinates.cell1[0],
				coordinates.cell2[0],
				coordinates.cell6[0],
				coordinates.cell7[0],
				coordinates.cell8[0]
			)
		}

		if (cellIndex == Table.cols && rowIndex != 1 && rowIndex != Table.rows) {
			arr.push(
				coordinates.cell1[0],
				coordinates.cell2[0],
				coordinates.cell3[0],
				coordinates.cell4[0],
				coordinates.cell8[0]
			)
		}

		if (cellIndex == 1 && rowIndex != 1 && rowIndex != Table.rows) {
			arr.push(
				coordinates.cell4[0],
				coordinates.cell5[0],
				coordinates.cell6[0],
				coordinates.cell7[0],
				coordinates.cell8[0]
			)
		}

		for (var box = 0; box < arr.length; box++) {
			if (!(document.getElementById(arr[box]).getAttribute("color") == Table.classes[0])) {
				greenBoxes++
			}
		}

		cell.innerHTML = greenBoxes;

	},

	init: function() {
		Table.create();
	}
}

// start new game
reset.addEventListener('mousedown', function() {
	Miner.newGame();
});

// hit the cell
table.addEventListener('click', function(event) {
	if (event.target.getAttribute("color") == Table.classes[0] && table.className.indexOf('invert') == -1) {
		Miner.hit(event.target, Table.classes[0]);
		alert('You are looser. Click new game button...');
	} else {
		Miner.hit(event.target, Table.classes[1]);
		Miner.countGreenCells(event.target);
	}

});

table.addEventListener('contextmenu', function(event) {
	event.preventDefault();
	Miner.hit(event.target, Table.classes[2]);
});

// show closed cells (invert)
invert.addEventListener('mousedown', function() {
	Miner.invertColors();
});

// init of the game
Miner.init();