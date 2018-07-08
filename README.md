# Maze-Generator
This example shows how to generate maze. Some of the concepts covered in this example are recursion, backtracking and depth first search.

This example is built using P5JS library.

The sample can be viewed here:

https://ajay555.github.io/Maze-Generator/

Maza Generation Algorithm Wikipedia page:
https://en.wikipedia.org/wiki/Maze_generation_algorithm

Algorithm Detail:
The depth-first search algorithm of maze generation is frequently implemented using backtracking:

1: Make the initial cell the current cell and mark it as visited

2: While there are unvisited cells

	1: If the current cell has any neighbours which have not been visited
	
		1: Choose randomly one of the unvisited neighbours
		
		2: Push the current cell to the stack
		
		3: Remove the wall between the current cell and the chosen cell
		
		4: Make the chosen cell the current cell and mark it as visited
		
	2: Else if stack is not empty
	
		1: Pop a cell from the stack
		
		2: Make it the current cell
