d3
  .select('body')
  .append('svg')
    .attr("width", 1440)
    .attr("height", 30)
  .append('g')
    .attr('transform', "translate(0,30)")
    .call(axis);
