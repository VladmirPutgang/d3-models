// Set height and width variables based on window size, to make visual sizes responsive
const height = window.innerHeight*.75;
const width = window.innerWidth*.75;
// draw svg container
const svg = d3
  .select('body')
  .append('svg')
  .attr("transform", "translate(0,0)")
  .attr('height', height)
  .attr('width', width)


// define the width and height of the court relative to eachother
const courtWidth = 1.88*height;
const courtHeight = 1.0*height;

const g = svg
  .append('g')
  .attr('transform', `translate(${courtWidth/20},${courtHeight/20})`)
  // .attr('transform', `translate(${courtWidth/5},${courtHeight/5})`)

// create court
const court = g
  .append('rect')
  .attr('class', 'court')
  .attr('x', 0)
  .attr('y', 0)
  .attr('height', courtHeight)
  .attr('width', courtWidth)
  .attr('fill', 'dodgerblue')
  .attr('opacity', 0.2)
  .attr('stroke', 'black')

const halfCourtLinePoints = [[0, 0],[courtWidth/2,courtHeight/2]];
// const halfCourtLinePoints = [[courtWidth/2, 0],[courtWidth/2,courtHeight]];
// const halfCourtLinePoints = [[courtWidth/2, courtWidth/2],[0,courtHeight]];

const halfCourtLine = g
  // .select('.halfCourtLine')
  .append('line')
  .attr('class', "halfCourtLine")
  .attr('d', d3.line()(halfCourtLinePoints))
  .attr('stroke', 'black')
  // .attr('d', d3.line()
  //   .x(courtWidth/2, courtWidth/2)
  //   .y(0,courtHeight)
  // )
  // .call(d3.line().context(contexLine)[[(courtWidth/2),0],[(courtWidth/2),courtHeight]])

//create half court circle
const halfCourtCircle = g
  // .select('.halfCourtCircle')
  // .attr('class', 'halfCourtCircle')
  .append("circle")
  .attr('transform', `translate(${courtWidth/2},${courtHeight/2})`)
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('r', 30)
  // .attr('cx', courtWidth/2)
  // .attr('cy', courtHeight/2)
  // 0.24*courtWidth/2
  .attr('stroke', 'black')
  .attr('fill', 'white')
