let total_party_domain = [0, 32270];
let day_domain = [0, 9500];
let hour_domain = [0, 5000];
let colorScheme = d3.interpolateWarm
let totalColor = d3.scaleSequential(colorScheme).domain(total_party_domain);
let dayColor = d3.scaleSequential(colorScheme).domain(day_domain);
let hourColor = d3.scaleSequential(colorScheme).domain(hour_domain);
let totalP = d3.map();
let monday = d3.map();
let tuesday = d3.map();
let wednesday = d3.map();
let thursday = d3.map();
let friday = d3.map();
let saturday = d3.map();
let sunday = d3.map();
let oneam = d3.map();
let twoam = d3.map();
let threeam = d3.map();
let fouram = d3.map();
let fiveam = d3.map();
let sixam = d3.map();
let sevam = d3.map();
let eightam = d3.map();
let nineam = d3.map();
let tenam = d3.map();
let elevam = d3.map();
let twelvam = d3.map();
let onepm = d3.map();
let twopm = d3.map();
let threepm = d3.map();
let fourpm = d3.map();
let fivepm = d3.map();
let sixpm = d3.map();
let sevpm = d3.map();
let eightpm = d3.map();
let ninepm = d3.map();
let tenpm = d3.map();
let elevpm = d3.map();
let twelvpm = d3.map();
let margin = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
let height = 650 - margin.top - margin.bottom;
let width = 650 - margin.left - margin.right;
let svgOutline = d3.select(".map")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .attr("id", "outlined")
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
d3.queue()
  .defer(d3.json, "data/future_topo.json")
  .defer(d3.json, "data/squares_topo.json")
  .defer(d3.csv, "data/id_complaints_merged.csv", function(d) {
    totalP.set(d.ID, +d.Total);
    monday.set(d.ID, +d.Monday);
    tuesday.set(d.ID, +d.Tuesday);
    wednesday.set(d.ID, +d.Wednesday);
    thursday.set(d.ID, +d.Thursday);
    friday.set(d.ID, +d.Friday);
    saturday.set(d.ID, +d.Saturday);
    sunday.set(d.ID, +d.Sunday);
  })
  .await(ready);

function ready(error, outlines, squares, data) {
  if (error) throw error;
  console.log(outlines);
  console.log(squares);
  console.log(data);

  let outlineData = topojson.feature(outlines, {
    type: "GeometryCollection",
    geometries: outlines.objects.future.geometries
  });

  let squareData = topojson.feature(squares, {
    type: "GeometryCollection",
    geometries: squares.objects.squares.geometries
  });

  let projection = d3.geoMercator()
    .fitSize([width, height], squareData);

  let geoPath = d3.geoPath()
    .projection(projection);

  d3.select("#outlined")
    .selectAll("path")
    .data(outlineData.features)
    .enter()
    .append("path")
    .attr("d", geoPath)
    .attr("class", "outlines");

  d3.select("#outlined")
    .selectAll("path")
    .data(squareData.features)
    .enter()
    .append("path")
    .attr("d", geoPath)
    .attr("class", "squares")
    .attr("fill", function(d) {
      if (isNaN(totalP.get(d.properties.Id))) {
        return "none"
      } else {
        return totalColor(d.Total = totalP.get(d.properties.Id));
      }
    });

  d3.select("#max").html(total_party_domain[1]);

  let buttonMon = d3.select("#buttonMon")
    .on("click", function() {
      console.log("Hi There");
      d3.selectAll(".squares")
        .attr("fill", function(d, i) {
          if (isNaN(monday.get(d.properties.Id))) {
            return "none"
          } else {
            // return party_color(d.Monday = monday.get(d.properties.Id));
            return dayColor(d.Monday = monday.get(d.properties.Id));
          }
        })
      d3.select("#max").html(day_domain[1]);
    });

  let buttonTue = d3.select("#buttonTue")
    .on("click", function() {
      console.log("It's Taco Tuesday");
      d3.selectAll(".squares")
        .attr("fill", function(d, i) {
          if (isNaN(tuesday.get(d.properties.Id))) {
            return "none"
          } else {
            // return party_color(d.Monday = monday.get(d.properties.Id));
            return dayColor(d.Tuesday = tuesday.get(d.properties.Id));
          }
        })
      d3.select("#max").html(day_domain[1]);
    });

  let buttonWed = d3.select("#buttonWed")
    .on("click", function() {
      console.log("Hump Day, IT's HUMP DAY");
      d3.selectAll(".squares")
        .attr("fill", function(d, i) {
          if (isNaN(wednesday.get(d.properties.Id))) {
            return "none"
          } else {
            // return party_color(d.Monday = monday.get(d.properties.Id));
            return dayColor(d.Wednesday = wednesday.get(d.properties.Id));
          }
        })
      d3.select("#max").html(day_domain[1]);
    });

  let buttonThu = d3.select("#buttonThu")
    .on("click", function() {
      console.log("Thursday is Studio");
      d3.selectAll(".squares")
        .attr("fill", function(d, i) {
          if (isNaN(thursday.get(d.properties.Id))) {
            return "none"
          } else {
            // return party_color(d.Monday = monday.get(d.properties.Id));
            return dayColor(d.Thursday = thursday.get(d.properties.Id));
          }
        })
      d3.select("#max").html(day_domain[1]);
    });

  let buttonFri = d3.select("#buttonFri")
    .on("click", function() {
      console.log("TGIF");
      d3.selectAll(".squares")
        .attr("fill", function(d, i) {
          if (isNaN(friday.get(d.properties.Id))) {
            return "none"
          } else {
            // return party_color(d.Monday = monday.get(d.properties.Id));
            return dayColor(d.Friday = friday.get(d.properties.Id));
          }
        })
      d3.select("#max").html(day_domain[1]);
    });

  let buttonSat = d3.select("#buttonSat")
    .on("click", function() {
      console.log("Saturday is a Special Day");
      d3.selectAll(".squares")
        .attr("fill", function(d, i) {
          if (isNaN(saturday.get(d.properties.Id))) {
            return "none"
          } else {
            // return party_color(d.Monday = monday.get(d.properties.Id));
            return dayColor(d.Saturday = saturday.get(d.properties.Id));
          }
        })
      d3.select("#max").html(day_domain[1]);
    });

  let buttonSun = d3.select("#buttonSun")
    .on("click", function() {
      console.log("Day of Rest");
      d3.selectAll(".squares")
        .attr("fill", function(d, i) {
          if (isNaN(sunday.get(d.properties.Id))) {
            return "none"
          } else {
            // return party_color(d.Monday = monday.get(d.properties.Id));
            return dayColor(d.Sunday = sunday.get(d.properties.Id));
          }
        })
      d3.select("#max").html(day_domain[1]);
    });

  let buttonTot = d3.select("#buttonTot")
    .on("click", function() {
      console.log("This should be all days");
      d3.selectAll(".squares")
        .attr("fill", function(d, i) {
          if (isNaN(totalP.get(d.properties.Id))) {
            return "none"
          } else {
            // return party_color(d.Monday = monday.get(d.properties.Id));
            return totalColor(d.Total = totalP.get(d.properties.Id));
          }
        })
      d3.select("#max").html(total_party_domain[1]);
    });
}