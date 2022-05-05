function loadData() {
  d3.csv("orra.csv")
    .then(data => drawData(data))
}

let height = window.innerHeight;
let width = window.innerWidth;

function drawData(data){
  console.log(data);
  // draw SVG
  const svg = d3
    .select('body')
    .append('svg')
    // .attr("transform", `translate(${width*.1},${height*9})`)
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'bar-chart')

  //set scales
  let minSales = d3.min(data, d=>d.Sales)
  const yScale = d3
    .scaleLinear()
    .domain([minSales*.8, d3.max(data, d => d.Sales)])
    .range([height*.75, height*.1])

  const xScale = d3
    .scaleBand()
    .domain(data.map(d => d.Month))
    .range([width*.05, width*.75])

  // draw x axis
  const xAxis = svg
    .append('g')
    // .attr("transform", `translate(0, 100)`)
    .call(d3.axisBottom(xScale))
    .attr("transform", `translate(${width*.03},${height*.75})`)
    // .append('text')
    // .attr('text-anchor', 'start')
    // .text('value')
  const yAxis = svg
    .append('g')
    .call(d3.axisLeft(yScale))
    .attr("transform", `translate(${width*.08},0)`)
    .append('text')
    .attr("text-anchor", "end")
    .text("value")

  // draw the bars
  const bars = svg
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', "bar")
    .attr('transform', `translate(${width * .045}, 0)`)

    .attr('x', (d => xScale(d.Month)))
    .attr('y', (d => yScale(d.Sales)))
    .attr('width', xScale.bandwidth()*.5)
    .attr('height', (d => (height*.75 - yScale(d.Sales))))
    // .attr('padding', 10)
    .attr('fill', 'dodgerblue')

}
loadData();
