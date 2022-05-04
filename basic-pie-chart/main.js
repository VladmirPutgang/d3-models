let data = [2, 4, 8, 10];

let height = window.innerHeight * .8;
let width = window.innerWidth * .8;
let margin = height*.2;
let radius = Math.min(width, height) / 2;

const svg = d3
  .select('body')
  .append('svg')
  .attr("transform", `translate(${margin*2},${margin*2})`)
  .attr("margin", margin)
  .attr('height', height*1.2)
  .attr('width', width)

const g = d3
  .select('svg')
  .append('g')
  .attr('transform', `translate(${width/2},${height/1.8})`)

const color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);
// color = ['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c'];

// generate the pie
const pie = d3
  .pie()

// generate the arcs
const arc = d3
  .arc()
  .innerRadius(0)
  .outerRadius(radius)

// generate groups
const arcs = g
  .selectAll('arc')
  .data(pie(data))
  .enter()
  .append("g")
  .attr("class", "arc")

// Draw arc paths
arcs.append('path')
  .attr("fill", ((d,i)=>color(i)))
  .attr("d", arc)
