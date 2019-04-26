// d3.queue()
//   // .defer(d3.json, "data/points.json")
//   .defer(d3.csv, "data/times_and_types.csv")
//   .await(ready);
//
// function ready(error, data) {
//   if (error) throw error;
//   // console.log(points);
//   console.log(data);
// }
let files = ["data/times_and_types.csv", "data/times_and_types_full.csv", "data/BLS_ATUS_Activities_18yo.csv"];
let promises = [];
files.forEach(function(url) {
  promises.push(d3.csv(url))
});

// promises.push(d3.json("data/points.json"));

Promise.all(promises).then(function(data) {
  ready(data);
});



function ready(data) {
  console.log(data);
  let data_set = data[0];
  let data_full = data[1];
  let atus = data[2];
  let point_data = data[3];
  let houses = 0;
  let retail = 0;
  let school = 0;
  let food = 0;
  let work = 0;
  let hospital = 0;
  let church = 0;
  let time = 720;
  let type_set = [];
  let act_codes = [];
  let sleeping = 0;
  let personal_care = 0;
  let eating = 0;
  let education = 0;
  let working = 0;
  let housework = 0;
  let houehold_care = 0;
  let nhousehold_care = 0;
  let shopping = 0;
  let pro_care = 0;
  let leisure = 0;
  let sports = 0;
  let religion = 0;
  let volunteering = 0;
  let phonecalls = 0;
  let misc = 0;
  let traveling = 0;
  let detailYear = 2017;

  function pad2(num) {
    return (num < 10 ? '0' : '') + num
  }

  function update(t) {
    type_set = [];
    act_codes = [];
    houses = 0;
    retail = 0;
    school = 0;
    food = 0;
    work = 0;
    hospital = 0;
    church = 0;
    sleeping = 0;
    personal_care = 0;
    eating = 0;
    education = 0;
    working = 0;
    housework = 0;
    houehold_care = 0;
    nhousehold_care = 0;
    shopping = 0;
    pro_care = 0;
    leisure = 0;
    sports = 0;
    religion = 0;
    volunteering = 0;
    phonecalls = 0;
    misc = 0;
    traveling = 0;
    for (let i = 0; i < 1000; i++) {
      let a = i;
      if (data_full[a].time >= t) {
        for (let j = i; j < data_full.length; j += 1000) {
          if (data_full[j].time < t) {
            a = j
          };
        };
      };
      if (data_full[a].type == 0) {
        houses += 1;
      } else if (data_full[a].type == 1) {
        retail += 1;
      } else if (data_full[a].type == 2) {
        school += 1;
      } else if (data_full[a].type == 3) {
        food += 1;
      } else if (data_full[a].type == 4) {
        work += 1;
      } else if (data_full[a].type == 5) {
        hospital += 1;
      } else if (data_full[a].type == 6) {
        church += 1;
      };
      if (data_full[a].raw == 0) {
        sleeping += 1;
      } else if (data_full[a].raw == 1) {
        personal_care += 1;
      } else if (data_full[a].raw == 2) {
        eating += 1;
      } else if (data_full[a].raw == 3) {
        education += 1;
      } else if (data_full[a].raw == 4) {
        working += 1;
      } else if (data_full[a].raw == 5) {
        housework += 1;
      } else if (data_full[a].raw == 6) {
        houehold_care += 1;
      } else if (data_full[a].raw == 7) {
        nhousehold_care += 1;
      } else if (data_full[a].raw == 8) {
        shopping += 1;
      } else if (data_full[a].raw == 9) {
        pro_care += 1;
      } else if (data_full[a].raw == 10) {
        leisure += 1;
      } else if (data_full[a].raw == 11) {
        sports += 1;
      } else if (data_full[a].raw == 12) {
        religion += 1;
      } else if (data_full[a].raw == 13) {
        volunteering += 1;
      } else if (data_full[a].raw == 14) {
        phonecalls += 1;
      } else if (data_full[a].raw == 15) {
        misc += 1;
      } else if (data_full[a].raw == 16) {
        traveling += 1;
      };
    };
    type_set.push({
      "id": 0,
      "name": "houses",
      "value": houses,
      "color": "#30495c"
    }, {
      "id": 1,
      "name": "retail",
      "value": retail,
      "color": "#016678"
    }, {
      "id": 2,
      "name": "school",
      "value": school,
      "color": "#00a17e"
    }, {
      "id": 3,
      "name": "food",
      "value": food,
      "color": "#57b95e"
    }, {
      "id": 4,
      "name": "work",
      "value": work,
      "color": "#e7e633"
    }, {
      "id": 5,
      "name": "hospital",
      "value": hospital,
      "color": "#aad239"
    }, {
      "id": 6,
      "name": "church",
      "value": church,
      "color": "#278236"
    });
    act_codes.push({
      "index": 0,
      "short": "Sleeping",
      "desc": "Sleeping",
      "value": sleeping,
      "color": "#6f479c"
    }, {
      "index": 1,
      "short": "Personal Care",
      "desc": "Personal Care",
      "value": personal_care,
      "color": "#82499c"
    }, {
      "index": 2,
      "short": "Eating & Drinking",
      "desc": "Eating and Drinking",
      "value": eating,
      "color": "#95499e"
    }, {
      "index": 3,
      "short": "Education",
      "desc": "Education",
      "value": education,
      "color": "#ae489b"
    }, {
      "index": 4,
      "short": "Work",
      "desc": "Work and Work-Related Activities",
      "value": working,
      "color": "#cb4799"
    }, {
      "index": 5,
      "short": "Housework",
      "desc": "Household Activities",
      "value": housework,
      "color": "#e64599"
    }, {
      "index": 6,
      "short": "Household Care",
      "desc": "Caring for and Helping Household Members",
      "value": houehold_care,
      "color": "#ef4a89"
    }, {
      "index": 7,
      "short": "Non-Household Care",
      "desc": "Caring for and Helping Non-Household Members",
      "value": nhousehold_care,
      "color": "#f05378"
    }, {
      "index": 8,
      "short": "Shopping",
      "desc": "Consumer Purchases",
      "value": shopping,
      "color": "#f15e66"
    }, {
      "index": 9,
      "short": "Pro. Care Services",
      "desc": "Professional and Personal Care Services",
      "value": pro_care,
      "color": "#f26d54"
    }, {
      "index": 10,
      "short": "Leisure",
      "desc": "Socializing, Relaxing, and Leisure",
      "value": leisure,
      "color": "#f47d47"
    }, {
      "index": 11,
      "short": "Sports",
      "desc": "Sports, Exercise, and Recreation",
      "value": sports,
      "color": "#f79038"
    }, {
      "index": 12,
      "short": "Religion",
      "desc": "Religious and Spiritual Activities",
      "value": religion,
      "color": "#f0a62e"
    }, {
      "index": 13,
      "short": "Volunteering",
      "desc": "Volunteer Activities",
      "value": volunteering,
      "color": "#e1b92d"
    }, {
      "index": 14,
      "short": "Phone Calls",
      "desc": "Telephone Calls",
      "value": phonecalls,
      "color": "#cfcd33"
    }, {
      "index": 15,
      "short": "Misc.",
      "desc": "Other",
      "value": misc,
      "color": "#bed747"
    }, {
      "index": 16,
      "short": "Traveling",
      "desc": "Traveling",
      "value": traveling,
      "color": "#aaaaaa"
    })
    // console.log(type_set);
  }

  update(time);
  let height = 200;
  let width = 200;
  let radius = Math.min(width, height) / 2;
  let color = d3.scaleSequential(d3.interpolateWarm).domain([0, 16]);

  let pie = d3.pie().value(function(d) {
    return d.value;
  });

  let path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 30);

  d3.select("#pie-graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "pie")
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .selectAll(".arc")
    .data(pie(type_set))
    .enter().append("g")
    .attr("class", "arc")

  d3.select("#pie").selectAll(".arc")
    .append("path")
    .attr("d", path)
    .attr("fill", function(d) {
      return d.data.color
    });

  d3.select("#pie-raw")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "raw")
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .selectAll(".arc")
    .data(pie(act_codes))
    .enter().append("g")
    .attr("class", "arc")
  d3.select("#raw").selectAll(".arc")
    .append("path")
    .attr("d", path)
    .attr("fill", function(d) {
      return d.data.color
    });

  d3.select("#hme").text(((houses / 1000) * 100).toFixed(1) + "%")
  d3.select("#rtl").text(((retail / 1000) * 100).toFixed(1) + "%")
  d3.select("#sch").text(((school / 1000) * 100).toFixed(1) + "%")
  d3.select("#fod").text(((food / 1000) * 100).toFixed(1) + "%")
  d3.select("#wrk").text(((work / 1000) * 100).toFixed(1) + "%")
  d3.select("#hsp").text(((hospital / 1000) * 100).toFixed(1) + "%")
  d3.select("#chu").text(((church / 1000) * 100).toFixed(1) + "%")
  d3.select("#slp").text(((sleeping / 1000) * 100).toFixed(1) + "%")
  d3.select("#psc").text(((personal_care / 1000) * 100).toFixed(1) + "%")
  d3.select("#ead").text(((eating / 1000) * 100).toFixed(1) + "%")
  d3.select("#edu").text(((education / 1000) * 100).toFixed(1) + "%")
  d3.select("#wkg").text(((working / 1000) * 100).toFixed(1) + "%")
  d3.select("#hsw").text(((housework / 1000) * 100).toFixed(1) + "%")
  d3.select("#hhc").text(((houehold_care / 1000) * 100).toFixed(1) + "%")
  d3.select("#nhh").text(((nhousehold_care / 1000) * 100).toFixed(1) + "%")
  d3.select("#shp").text(((shopping / 1000) * 100).toFixed(1) + "%")
  d3.select("#pro").text(((pro_care / 1000) * 100).toFixed(1) + "%")
  d3.select("#les").text(((leisure / 1000) * 100).toFixed(1) + "%")
  d3.select("#spt").text(((sports / 1000) * 100).toFixed(1) + "%")
  d3.select("#rel").text(((religion / 1000) * 100).toFixed(1) + "%")
  d3.select("#vln").text(((volunteering / 1000) * 100).toFixed(1) + "%")
  d3.select("#phc").text(((phonecalls / 1000) * 100).toFixed(1) + "%")
  d3.select("#mis").text(((misc / 1000) * 100).toFixed(1) + "%")
  d3.select("#trv").text(((traveling / 1000) * 100).toFixed(1) + "%")
  d3.select("#clock").text(pad2(Math.floor(time / 60)) + ":" + pad2(time % 60))

  function reDraw(k) {
    pie = d3.pie().value(function(d) {
      return d.value;
    });

    d3.select("#pie-graph").selectAll("svg").remove()

    d3.select("#pie-graph")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "pie")
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .selectAll(".arc")
      .data(pie(type_set))
      .enter().append("g")
      .attr("class", "arc");

    d3.select("#pie").selectAll(".arc")
      .append("path")
      .attr("d", path)
      .attr("fill", function(d) {
        return d.data.color
      });

    d3.select("#pie-raw").selectAll("svg").remove()

    d3.select("#pie-raw")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "raw")
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .selectAll(".arc")
      .data(pie(act_codes))
      .enter().append("g")
      .attr("class", "arc")

    d3.select("#raw").selectAll(".arc")
      .append("path")
      .attr("d", path)
      .attr("fill", function(d) {
        return d.data.color
      });

    d3.select("#hme").text(((houses / 1000) * 100).toFixed(1) + "%")
    d3.select("#rtl").text(((retail / 1000) * 100).toFixed(1) + "%")
    d3.select("#sch").text(((school / 1000) * 100).toFixed(1) + "%")
    d3.select("#fod").text(((food / 1000) * 100).toFixed(1) + "%")
    d3.select("#wrk").text(((work / 1000) * 100).toFixed(1) + "%")
    d3.select("#hsp").text(((hospital / 1000) * 100).toFixed(1) + "%")
    d3.select("#chu").text(((church / 1000) * 100).toFixed(1) + "%")
    d3.select("#slp").text(((sleeping / 1000) * 100).toFixed(1) + "%")
    d3.select("#psc").text(((personal_care / 1000) * 100).toFixed(1) + "%")
    d3.select("#ead").text(((eating / 1000) * 100).toFixed(1) + "%")
    d3.select("#edu").text(((education / 1000) * 100).toFixed(1) + "%")
    d3.select("#wkg").text(((working / 1000) * 100).toFixed(1) + "%")
    d3.select("#hsw").text(((housework / 1000) * 100).toFixed(1) + "%")
    d3.select("#hhc").text(((houehold_care / 1000) * 100).toFixed(1) + "%")
    d3.select("#nhh").text(((nhousehold_care / 1000) * 100).toFixed(1) + "%")
    d3.select("#shp").text(((shopping / 1000) * 100).toFixed(1) + "%")
    d3.select("#pro").text(((pro_care / 1000) * 100).toFixed(1) + "%")
    d3.select("#les").text(((leisure / 1000) * 100).toFixed(1) + "%")
    d3.select("#spt").text(((sports / 1000) * 100).toFixed(1) + "%")
    d3.select("#rel").text(((religion / 1000) * 100).toFixed(1) + "%")
    d3.select("#vln").text(((volunteering / 1000) * 100).toFixed(1) + "%")
    d3.select("#phc").text(((phonecalls / 1000) * 100).toFixed(1) + "%")
    d3.select("#mis").text(((misc / 1000) * 100).toFixed(1) + "%")
    d3.select("#trv").text(((traveling / 1000) * 100).toFixed(1) + "%")
    d3.select("#clock").text(pad2(Math.floor(k / 60)) + ":" + pad2(k % 60))
  }

  let times = [0, 90, 180, 270, 360, 450, 540, 600, 720, 810, 900, 990, 1080, 1170, 1260, 1350, 1440];
  let years = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
  let sliderStep = d3.sliderBottom()
    .min(d3.min(times))
    .max(d3.max(times))
    .step(1)
    .width(300)
    .default(720)
    .on("onchange", val => {
      update(val);
      reDraw(val);
    });

  let gStep = d3.select("div#slider")
    .append("svg")
    .attr("width", 400)
    .attr("height", 60)
    .append("g")
    .attr("transform", "translate(47,10)");
  gStep.call(sliderStep);

  let sliderYear = d3.sliderBottom()
    .min(d3.min(years))
    .max(d3.max(years))
    .step(1)
    .width(300)
    .default(2017)
    .on("onchange", val => {
      detail_update(val);
    })

  let yStep = d3.select("div#pie-details")
    .selectAll("svg")
    .attr("width", 400)
    .attr("height", 60)
    .append("g")
    .attr("transform", "translate(30,10)");
  yStep.call(sliderYear);

  let detailList = d3.select("#fields").selectAll("p").data(atus).enter();
  let detailPop = d3.select("#population").selectAll("p").data(atus).enter();
  let detailPerc = d3.select("#percentage").selectAll("p").data(atus).enter();

  detailList.append("p").text(function(d) {
    return d.field;
  });
  detailPop.append("p").text(function(d) {
    return d.hours2017 + " hrs";
  });
  detailPerc.append("p").text(function(d) {
    return d.percent2017 + "%";
  });

  function detail_update(k) {
    d3.select("#population").selectAll("p").remove()
    d3.select("#percentage").selectAll("p").remove()
    d3.select("#population").append("p").text("# of Hours Daily in Activity").attr("style", "font-weight: 400")
    d3.select("#percentage").append("p").text("Percentage of Population").attr("style", "font-weight: 400")
    detailPop.append("p").text(function(d) {
      if (k == 2007) {
        return d.hours2007 + " hrs";
      } else if (k == 2008) {
        return d.hours2008 + " hrs";
      } else if (k == 2009) {
        return d.hours2009 + " hrs";
      } else if (k == 2010) {
        return d.hours2010 + " hrs";
      } else if (k == 2011) {
        return d.hours2011 + " hrs";
      } else if (k == 2012) {
        return d.hours2012 + " hrs";
      } else if (k == 2013) {
        return d.hours2013 + " hrs";
      } else if (k == 2014) {
        return d.hours2014 + " hrs";
      } else if (k == 2015) {
        return d.hours2015 + " hrs";
      } else if (k == 2016) {
        return d.hours2016 + " hrs";
      } else if (k == 2017) {
        return d.hours2017 + " hrs";
      }
    });
    detailPerc.append("p").text(function(d) {
      if (k == 2007) {
        return d.percent2007 + "%";
      } else if (k == 2008) {
        return d.percent2008 + "%";
      } else if (k == 2009) {
        return d.percent2009 + "%";
      } else if (k == 2010) {
        return d.percent2010 + "%";
      } else if (k == 2011) {
        return d.percent2011 + "%";
      } else if (k == 2012) {
        return d.percent2012 + "%";
      } else if (k == 2013) {
        return d.percent2013 + "%";
      } else if (k == 2014) {
        return d.percent2014 + "%";
      } else if (k == 2015) {
        return d.percent2015 + "%";
      } else if (k == 2016) {
        return d.percent2016 + "%";
      } else if (k == 2017) {
        return d.percent2017 + "%";
      }
    })
  }
}