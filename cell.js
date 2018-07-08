function Cell(row, col) {
	this.row = row;
	this.col = col;
	this.walls = [true, true, true, true];
	this.visited = false;

	this.checkNeighbors = function() {
		var neighbors = [];
		var top = (this.row > 0)? grid[this.row - 1][this.col] : undefined;
		var right = (this.col < cols-1) ? grid[this.row][this.col + 1] : undefined;
		var bottom = (this.row < rows - 1) ? grid[this.row + 1][this.col] : undefined;
		var left = (this.col > 0) ? grid[this.row][this.col - 1] : undefined;

		if(top && !top.visited) neighbors.push(top);
		if(right && !right.visited) neighbors.push(right);
		if(bottom && !bottom.visited) neighbors.push(bottom);
		if(left && !left.visited) neighbors.push(left);

		if(neighbors.length > 0) {
			var r = floor(random(0, neighbors.length));
			return neighbors[r];
		}
		else
			return undefined;
	};

	this.show = function() {
		var x = this.col * w;
		var y = this.row * w;
		var val = w/2;

		stroke(0);
		if(this.walls[0])
			line(x, y, x + w, y);
		if(this.walls[1])
			line(x + w, y, x + w, y + w);
		if(this.walls[2])
			line(x + w, y + w, x, y + w);
		if(this.walls[3])
			line(x, y + w, x, y);

		if(this.visited) {
			noStroke();
			fill(255, 0, 255, 0);	
			rect(x, y, w, w);
		}

		if(this == startCell) {
			noStroke();
			fill('blue');
			ellipse(x + val, y + val, val, val);
		}
		else if(this == endCell) {
			noStroke();
			fill('green');
			ellipse(x + val, y + val, val, val);
		}

		if(this === current) {
			noStroke();
			fill('grey');
			ellipse(x + val, y + val, val, val);
		}
	};
}