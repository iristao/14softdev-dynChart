var depts = ["Agriculture", "Commerce", "Defense", "Education", "Energy"];
var data2013 = [146, 8.57, 570, 38.4, 23.2];
var data2014 = [131, 7.28, 533, 55, 21.8];

var button2013 = document.getElementById("2013");
var button2014 = document.getElementById("2014");

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data2013);
var barEnter = barUpdate.enter().append("div");

barEnter.text(function(d) { return d; });

var heading = document.getElementById("head");

var change2013 = function (){ 

    heading.innerHTML = "US Spending in 2013 in Billions of Dollars";
    var bar = chart.selectAll("div");
    var barUpdate = bar.data(data2013);
    barEnter.text(function(d) { return d; });
    barEnter.transition().duration(5000).style("width", function(d) {
	    return d * 10 + "px"; });

};

var change2014 = function (){ 

    heading.innerHTML = "US Spending in 2014 in Billions of Dollars";
    var bar = chart.selectAll("div");
    var barUpdate = bar.data(data2014);
    barEnter.text(function(d) { return d; });
    barEnter.transition().duration(5000).style("width", function(d) {
	    return d * 10 + "px"; });

};

change2013();

var bar = chart.selectAll("div");
bar.data(depts).append("dept").attr("style","float:left").text(function(d){return d;});

button2013.addEventListener('click', change2013);
button2014.addEventListener('click', change2014);

