function loadData(){
  d3.csv("alphabet.csv")
    .then(data => {
      // console.log(data);
      data = data.map(d => {
        return({"letter":d.letter,"frequency":Number(d.frequency)})
      });
      console.log(data);
      drawData(data);
    });
}

function drawData(data){
  // set up height and width variables
  let height = window.innerHeight;
  let width = window.innerWidth;

  // draw svg
  const svg = d3
    .select('body')
    .append('svg')
    .attr('height', height)
    .attr('width', width)

  // set the scales
  const xScale = d3
    .scaleBand()
    .domain(data.map(d=>d.letter))
    .range([width*.2, width*.8])

  let minFreq1 = d3.min(data, d=>+d.frequency);
  let maxFreq1 = d3.max(data, d=>+d.frequency);
  // let minFreq = Math.floor(minFreq1);
  // let maxFreq = Math.ceil(maxFreq1);
  let minFreq = (minFreq1);
  let maxFreq = (maxFreq1);
  console.log(minFreq,maxFreq);
  const yScale = d3
    .scaleLinear()
    .domain([minFreq,maxFreq])
    .range([height*.84,height*.15])
    // .domain(d3.max(data,d=>d.frequency*1.1),d3.min(data, d=>d.frequency))
    // .range([0,height*.8])

  // make the axes
  const xAxis = svg
    .append('g')
    .attr('class', 'xAxis')
    .call(d3.axisBottom(xScale))
    .attr("transform", `translate(0,${height*.85})`)
  const yAxis = svg
    .append('g')
    .call(d3.axisLeft(yScale).tickFormat(d3.format(".1%")))
    .attr('class', 'yAxis')
    .attr("transform", `translate(${width*.2},0)`)
    .append('text')
    .attr("text-anchor", "end")
    .text('ham')

  // const yTicks = yScale.ticks()
    // yTickFormat = (5, "+%");

  // yTicks.map(tickFormat);

  // draw bars
  const bars = svg
    .selectAll('.bars')
    .data(data)
    .enter()
    .append('rect')
    // .attr("transform", `translate(${width*.2},${height*.85})`)
    .attr("transform", `translate(${width*.005},0)`)
    .attr('x', d => xScale(d.letter))
    // .attr('y', d => yScale(Math.floor(d.frequency)))
    .attr('y', d => yScale((d.frequency)))
    .attr('width', xScale.bandwidth()*.5)
    // .attr('height', d => (height*.85 - yScale(Math.floor(d.frequency))))

    .attr('height', d => (height*.85 - yScale((d.frequency))))
    .attr('fill', 'dodgerblue')

  //   .attr('height', d => (height*.85 - yScale(d.frequency)))
  // data.forEach((d, i) => {
  //   console.log(yScale(1));
  // });




}
loadData()
