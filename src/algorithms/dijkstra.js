/* Implements dijkstra's algorithm to find the shortest path between the startNode
and finishNode */
export function dijkstra(grid, startNode, finishNode) {
    const visitedNodes = [];

    // Initialize start node with distance 0
    startNode.distance = 0;

    // Initialize set of unvisited nodes
    const unvisitedNodes = getAllNodes(grid);

    while (!!unvisitedNodes.length) {
        sortNodes(unvisitedNodes);
        let closestNode = unvisitedNodes.shift();

        // Skip nodes that are walls
        if (closestNode.isWall) continue;

        // If closest node has distance infinity, there is no possible path
        if (closestNode.distance === Infinity) return visitedNodes;

        closestNode.isVisited = true;
        visitedNodes.push(closestNode);

        // Found shortest path
        if (closestNode === finishNode) return visitedNodes;

        // Update distance of neighbors
        updateUnvisitedNeighbors(closestNode, grid);
    }

    return visitedNodes;
}

// Returns set of all nodes from the grid
function getAllNodes(grid) {
    let nodes = [];
    for (let row of grid) {
        for (let node of row) {
            nodes.push(node);
        }
    }
}

// Sorts unvisited nodes inplace by distance
function sortNodes(unvisitedNodes) {
    unvisitedNodes.sort((a, b) => a.distance - b.distance);
}

// Returns all unvisited neighbors of a node
function getUnvisitedNeighbors(node, grid) {
    let neighbors = [];
    let { col, row } = node;

    // Get neighbors
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    // Return neighbors that are unvisited
    return neighbors.filter((neighbor) => !neighbor.isVisited);
}

// Updates distance of neighbors of a specific node
function updateUnvisitedNeighbors(node, grid) {
    let unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (let neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}

// Backtracks from finishNode to the startNode to find shortest distance
export function getDijkstraPath(finishNode) {
    let shortestPathNodes = [];
    let currentNode = finishNode;

    while (currentNode != null) {
        shortestPathNodes.unshift(currentNode);
        currentNode = currentNode.previous;
    }

    return shortestPathNodes;
}
