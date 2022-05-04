// get data
function  getData() {
  d3.csv("browseruse.csv")
    .then(data => {
      console.log(data);
      createPieChart(data);
    });

}

// main function
function createPieChart(data) {

  // set the height and width of the window as variables
  let height = window.innerHeight;
  let width = window.innerWidth;
  let radius = Math.min(height, width)/2;

  // draw the svg
  const svg = d3
    .select('body')
    .append('svg')
    .attr("transform", "translate(" + width/5 + ", " + height/5 + ")")
    .attr('width', (width*.8))
    .attr('height', (height*.9))

  // define group element
  const g = svg
    .append('g')
    .attr("transform", "translate(" + width/2 + ", " + height/2 + ")")

  // create color scale
  const color = d3
    .scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c'])

  const pie = d3
    .pie()
    .value(d => d.percent)

  const path = d3
    .arc()
    .outerRadius(radius -10)
    .innerRadius(0)

  const label = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius-80)

  const arc = g
    .selectAll('.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc')

  arc.append('path')
    .attr('d', path)
    .attr('fill', ((d,i) => color(i)))

  arc.append('text')
    .attr("transform", (d => "translate(" + label.centroid(d) + ")"))
    // .text(function(d) { return d.data.browser; });
    .text(d => d.data.browser)

  svg.append('g')
    .attr("transform", "translate(" + (width/2 -120) + ", " + 20 + ")")
    .append('text')
    .text("Browser use statistics - Jan 2017")
    .attr("class", "title")
}


getData();
