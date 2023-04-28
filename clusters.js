mySVG = d3.select("svg");
dataset = d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType);

// or d3.csv("...", d3.autoType).then(draw_circles);

function draw_circles(ds) {
    ds.then(function(data){
        var circles = mySVG.selectAll("circle").data(data);
        circles.join("circle")
            .attr("cx", function(d){return d.Xi;})
            .attr("cy", function(d){return d.Yi;})
            .attr("r", 5)
            .attr("fill", function(d){return d.color;});
        mySVG.selectAll("circle").transition().duration(2000).ease(d3.easeBounce).attr("cx", function(d){return d.Xf;}).attr("cy", function(d){return d.Yf;});
        // or keep adding .transition().durantion(..) directly concatenated
    })
}

draw_circles(dataset);

d3.select("body")
  .append("button")
  .html("Restart")
  .on("click", refresh);

// mySVG.append("rect").attr("x","50").attr("y","30").attr("width",70).attr("height",30).attr("fill","pink")
// mySVG.append("text").attr("x","55").attr("y","50").text("Restart")

d3.select("button").on("click",refresh)

// or d3.select("button").on("click",function(){draw_circles(dataset)});

function refresh() {
    draw_circles(dataset)
 }
