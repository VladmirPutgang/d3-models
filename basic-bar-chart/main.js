// base SVG
const svg = d3
  .select('body')
  .append('svg')
  .attr('margin', 200)
  .attr('height', 500)
  .attr('width', 600)

let width = svg.attr('width') - svg.attr('margin');
let height = svg.attr('height') - svg.attr('margin');

// scales
const xScale = d3
  .scaleBand()
  .range([0,width])
  .padding(0.4);

const yScale = d3
  .scaleLinear()
  .range([height, 0]);

let g = svg
  .append('g')
  .attr('transform', "translate(" + 100 + "," + 100 + ")")

const data = d3.csv('xyz.csv')
  .then(data => {
    console.log(data);

  // Maps the data domains to the axes
  xScale.domain(data.map(d => d.year));
  yScale.domain([0, d3.max(data, d=>d.value)]);

  // adds margin then adds the x axis
  g.append('g')
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  // Adds the y axis and formats the ticks
  g.append('g')
    .call(d3.axisLeft(yScale)
    .tickFormat(d => "$"+d).ticks(10))
    .append('text')
    .attr('y', 6)
    .attr('dy', "0.71em")
    .attr('text-anchor', 'end')
    .text('value');

  g.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', "bar")
    .attr("x", (d => xScale(d.year)))
    .attr("y", (d => yScale(d.value)))
    .attr("width", xScale.bandwidth())
    .attr("height", (d => (height - yScale(d.value))))
    .attr('fill', 'dodgerblue')
  });
