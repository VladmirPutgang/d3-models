function drawGraph(data) {
  console.log(data);

  // draw base graph
  const svg = d3
    .select('body')
    .append('g')
    .attr('class', 'graph-container')
    .attr('width', '100%')
    .attr('height', '100%')
    .append('svg')
    .attr('class', 'graph-space')
    .style('height', '75vh')
    .style('width', '85vw')


  // Scales.
  const yMax = d3.max(data, d => d.Sales);
  const yMin = d3.min(data, d => d.Sales);
  // console.log(yMax);
  const yScale = d3
    .scaleLinear()
    .domain([0, yMax])
    .range([500, 0]);

  const xScale = d3
    .scaleBand()
    .domain(data.map(d => d.Month))
    .rangeRound([0, 300])
    .paddingInner(0.25);

  let height = window.innerHeight;
  let width = window.innerWidth;
  let margin = height * .1;

  // axes
  const xAxis = d3
    .select('svg')
    .append('g')
    .attr('transform', "translate(0, 420)")
    .call(d3.axisBottom(xScale))
    // .attr('text-anchor', 'end')
    xAxis.ticks(10)




  // draw bars
  svg
    .selectAll('.bars')
    .data(data)
    .enter()
    .append('rect')
    .attr('transform', 'translate(100,100)')
    .attr('x', d=>xScale(d.Month))
    .attr('y', d=>yScale(d.Sales))
    .attr('width', d=>xScale.bandwidth())
    .attr('height', d=>(height - yScale(d.Sales)))
    .attr('fill', 'dodgerblue')

    // .attr('dx', ((d, i)=> i * 120 + 30))
    // .attr('dy', '150px')
    // .attr('height', '200px')
    // .attr('width', '15px')
    // .attr('height', 20)
    // .attr('width', 150)


  }

function loadData(){
  let reData = d3.csv("orra.csv")
    .then(data => {
      // console.log(data);
      drawGraph(data);
    });
}
loadData();
