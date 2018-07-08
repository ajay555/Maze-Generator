var rows, cols;
var w = 20;
var grid = [];
var current;
var generatorStack = [];
var startCell, endCell;

function preload() {

}

function setup() {
	var canvas = createCanvas(401, 401);
	canvas.position(10, 10);

	rows = floor(height / w);
	cols = floor(width / w);

	for(var row = 0; row < rows; row++) {
		grid[row] = [];
		for(var col = 0; col < cols; col++) 
			grid[row].push(new Cell(row, col));
	}

	current = grid[0][0];
	startCell = grid[0][0];
	endCell = grid[rows-1][cols-1];
}

function draw() {
	background(255);

	for(var row = 0; row < rows; row++) 
		for(var col = 0; col < cols; col++) 
			grid[row][col].show();

	if(current)
		generateMaze();
}

function generateMaze() {
	current.visited = true;
	var next = current.checkNeighbors();
	if(next) {
		next.visited = true;
		
		generatorStack.push(current);

		removeWall(current, next);

		current = next;
	}
	else if(generatorStack.length > 0)
		current = generatorStack.pop();
	else
		current = undefined;	
}

function removeWall(current, next) {
	var x = current.col - next.col;
	if(x === 1) {
		//current: right, next: left
		current.walls[3] = false;
		next.walls[1] = false;
	}
	else if(x === -1) {
		//current: left, next: right
		current.walls[1] = false;
		next.walls[3] = false;
	}

	var y = current.row - next.row;
	if(y === 1) {
		// current: down, next: up
		current.walls[0] = false;
		next.walls[2] = false;
	}
	else if(y === -1) {
		// current: up, next: down
		current.walls[2] = false;
		next.walls[0] = false;
	}
}