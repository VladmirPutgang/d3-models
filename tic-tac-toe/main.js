// Set height and width variables based on window size, to make visual sizes responsive
const height = window.innerHeight;
const width = window.innerWidth;
// draw svg container
const svg = d3
  .select('body')
  .append('g')
  .attr('class', 'svg-container')
  .append('svg')
  .attr("transform", "translate(0,0)")
  .attr('height', height)
  .attr('width', width)


// draw board
const board = svg
  .append('g')
  .attr('class', 'gameboard')
  .attr('height', '100%')
  .attr('width', '100%')

// add x axis of 3
const xAxis = d3
  .scaleBand()
  .rangeRound(0,2)
// add y axis of 3
