d3.csv("data/resume.csv", function(data) {


  var dataSet = [10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30];
  var width = 400;

  var svg = d3.select('#svg')
    .append("svg:svg")
    .style("width", width)
    .style("height", 900);

  var circle = svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr({
      r: 20,
      cx: function (d, i) {
        var cw = Math.floor(width / 80);
        var hi = (i + 1) % cw > 0 ? (i + 1) % cw : cw;
        return hi * 60
      },
      cy: function (d, i) {
        var cw = width / 80;
        console.log("what's the y position?", Math.ceil((i + 1) / cw) * 50);
        return Math.ceil((i + 1) / cw) * 50;
      },
      fill: 'red'
    });


  function show_details(data, i, element) {
    var content = "<span class=\"name\">" + data.name + "</span><br/>";
    content += "<span class=\"position\">" + data.role + "</span><br/>";
    content += "<span class=\"date\">" + data.date + "</span><br/>";
    content += "<span class=\"description\">" + data.description + "</span><br/>";
    tooltip.showTooltip(content, d3.event);
  }

  function hide_details(data, i, element) {
    tooltip.hideTooltip();
  }


  var tooltip = CustomTooltip("voice_tooltip", 240);

})//end csv
