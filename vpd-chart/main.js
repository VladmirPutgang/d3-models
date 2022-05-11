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

// add y scale with temperatures in F
const yScale = d3
  .scaleLinear()
  .domain([59,95])
  .range([height*.05, height*.75])
// add x scale with relative humditiy
const xScale = d3
  .scaleLinear()
  .domain([35, 90])
  .range([width*.05, width*.9])

// add x axis with ticks
const xAxis = svg
  .append('g')
  .attr('class', 'x-axis')
  .call(d3.axisBottom(xScale).ticks(10))
  .attr('width', width)
  .attr("transform", `translate(0,${height*.9})`)

// add y axis with ticks
const yAxis = svg
  .append('g')
  .attr('class', 'y-axis')
  .attr("transform", `translate(${width*.05},${height*.1})`)
  .call(d3.axisRight(yScale))
  .attr('height', height)
