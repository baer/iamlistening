var data = [
  {rapper:"Rakim (including Eric B. & Rakim)", x: .4621, r: .45, color: "east nowutang fifth", cluster: 5, words: "4621", id: "rakim", region: "east", cx: 441.828571428571, cy: -21.9535954888632},{rapper:"DMX", x: .3214, r: .45, color: "east nowutang first", cluster: 1, words: "3,214", id: "dmx", region: "east", cx: 80.0285714285715, cy: 0},{rapper:"Too Short", x: .3391, r: .45, color: "west nowutang first", cluster: 1, words: "3,391", id: "too-short", region: "west", cx: 125.542857142857, cy: 0},{rapper:"Drake", x: .3522, r: .45, color: "other nowutang first", cluster: 1, words: "3,522", id: "drake", region: "other", cx: 159.228571428571, cy: -10.2112157120103},{rapper:"50 Cent", x: .3591, r: .45, color: "east nowutang first", cluster: 1, words: "3,591", id: "50-cent", region: "east", cx: 161.8, cy: 24.8941119229515},{rapper:"Bone Thugs-n-Harmony", x: .3547, r: .45, color: "midwest nowutang first", cluster: 1, words: "3,547", id: "bone-thugs", region: "midwest", cx: 165.657142857142, cy: -44.8185811512306},{rapper:"Master P", x: .3612, r: .45, color: "south nowutang second", cluster: 2, words: "3,612", id: "master-p", region: "south", cx: 182.371428571428, cy: 53.4565452889411},{rapper:"Salt-n-Pepa", x: .3612, r: .45, color: "east nowutang second", cluster: 2, words: "3,612", id: "salt-n-pepa", region: "east", cx: 182.371428571428, cy: -75.796459166311},{rapper:"Petey Pablo", x: .3617, r: .45, color: "south nowutang second", cluster: 2, words: "3,617", id: "petey-pablo", region: "south", cx: 183.657142857142, cy: 88.6324349298797},{rapper:"Juvenile", x: .3630, r: .45, color: "south nowutang second", cluster: 2, words: "3,630", id: "juvenile", region: "south", cx: 186.999999999999, cy: -110.690192124918},{rapper:"Young Jeezy", x: .3650, r: .45, color: "south nowutang second", cluster: 2, words: "3,650", id: "jeezy", region: "south", cx: 211.171428571428, cy: -55.5589624521424},{rapper:"Wiz Khalifa", x: .3707, r: .45, color: "midwest nowutang second", cluster: 2, words: "3,707", id: "wiz-khalifa", region: "midwest", cx: 206.799999999999, cy: -20.6320833258752},{rapper:"Lil B", x: .3724, r: .45, color: "west nowutang second", cluster: 2, words: "3,724", id: "lil-b", region: "west", cx: 207.571428571428, cy: 14.5588412316745},{rapper:"Kanye West", x: .3982, r: .45, color: "midwest nowutang second", cluster: 2, words: "3,982", id: "kanye-west", region: "midwest", cx: 254.371428571428, cy: 0},{rapper:"Lil Wayne", x: .3743, r: .45, color: "south nowutang second", cluster: 2, words: "3,743", id: "lil-wayne", region: "south", cx: 230.714285714285, cy: 41.0806141083374},{rapper:"Missy Elliot", x: .3874, r: .45, color: "east nowutang second", cluster: 2, words: "3,874", id: "missy-elliot", region: "east", cx: 249.742857142857, cy: -34.8937329586072},{rapper:"Gucci Mane", x: .3885, r: .45, color: "south nowutang second", cluster: 2, words: "3,885", id: "gucci-mane", region: "south", cx: 252.571428571428, cy: 68.671583271787},{rapper:"2Pac", x: .3970, r: .45, color: "west nowutang second", cluster: 2, words: "3,970", id: "2pac", region: "west", cx: 274.428571428571, cy: 28.9258931351158},{rapper:"Snoop Dogg", x: .3974, r: .45, color: "west nowutang second", cluster: 2, words: "3,974", id: "snoop", region: "west", cx: 275.457142857142, cy: -58.9306167720317},{rapper:"UGK", x: .4011, r: .45, color: "south nowutang third", cluster: 3, words: "4,011", id: "ugk", region: "south", cx: 284.971428571428, cy: -25.0414645164364},{rapper:"Run-D.M.C.", x: .4039, r: .45, color: "east nowutang third", cluster: 3, words: "4,039", id: "run-dmc", region: "east", cx: 292.171428571428, cy: 59.3263420407512},{rapper:"Jadakiss", x: .4108, r: .45, color: "east nowutang third", cluster: 3, words: "4,108", id: "jadakiss", region: "east", cx: 309.914285714285, cy: -51.7402357405128},{rapper:"Scarface", x: .4123, r: .45, color: "south nowutang third", cluster: 3, words: "4,123", id: "scarface", region: "south", cx: 313.771428571428, cy: -4.80396780226788},{rapper:"Insane Clown Posse", x: .4146, r: .45, color: "midwest nowutang third", cluster: 3, words: "4,146", id: "insane-clown-posse", region: "midwest", cx: 319.685714285714, cy: 29.8949874809359},{rapper:"Nicki Minaj", x: .4162, r: .45, color: "east nowutang third", cluster: 3, words: "4,162", id: "nicki-minaj", region: "east", cx: 323.8, cy: 74.7739872543018},{rapper:"T.I.", x: .4151, r: .45, color: "south nowutang third", cluster: 3, words: "4,151", id: "t-i-", region: "south", cx: 337.428571428571, cy: -73.6938312293761},{rapper:"Geto Boys", x: .4180, r: .45, color: "south nowutang fourth", cluster: 4, words: "4,180", id: "geto-boys", region: "south", cx: 339.999999999999, cy: -33.4687807033694},{rapper:"Three 6 Mafia", x: .4225, r: .45, color: "south nowutang fourth", cluster: 4, words: "4,225", id: "three-six-mafia", region: "south", cx: 339.999999999999, cy: 106.023887626238},{rapper:"Biz Markie", x: .4313, r: .45, color: "east nowutang fourth", cluster: 4, words: "4,313", id: "biz-markie", region: "east", cx: 376.971428571428, cy: -29.4693486275054},{rapper:"Ice Cube", x: .4371, r: .45, color: "west nowutang fourth", cluster: 4, words: "4,371", id: "ice-cube", region: "west", cx: 377.542857142857, cy: 6.537},{rapper:"Cam'ron", x: .4406, r: .45, color: "east nowutang fourth", cluster: 4, words: "4,406", id: "camron", region: "east", cx: 377.542857142857, cy: -64.5746762624673},{rapper:"Nelly", x: .4413, r: .45, color: "south nowutang fourth", cluster: 4, words: "4,413", id: "nelly", region: "south", cx: 388.342857142857, cy: 72.0389255895792},{rapper:"Puff Daddy", x: .4429, r: .45, color: "east nowutang default fourth", cluster: 4, words: "4,429", id: "puff-daddy", region: "east", cx: 392.457142857142, cy: -96.4582199000343},{rapper:"The Game", x: .4416, r: .45, color: "west nowutang fourth", cluster: 4, words: "4,416", id: "game", region: "west", cx: 389.114285714285, cy: 107.229850147129},{rapper:"Royce da 5'9", x: .4430, r: .45, color: "midwest nowutang fourth", cluster: 4, words: "4,430", id: "royce-da-5-9", region: "midwest", cx: 392.714285714285, cy: -131.656659507593},{rapper:"Ice T", x: .4431, r: .45, color: "east nowutang fourth", cluster: 4, words: "4,431", id: "ice-t", region: "east", cx: 409.428571428571, cy: -49.6650318084311},{rapper:"Lupe Fiasco", x: .4439, r: .45, color: "midwest nowutang fourth", cluster: 4, words: "4,439", id: "lupe-fiasco", region: "midwest", cx: 395.028571428571, cy: 141.928805430332},{rapper:"Eminem", x: .4494, r: .45, color: "midwest nowutang fourth", cluster: 4, words: "4,494", id: "eminem", region: "midwest", cx: 409.171428571428, cy: -162.771908538182},{rapper:"Jay-Z", x: .4506, r: .45, color: "east nowutang fourth", cluster: 4, words: "4,506", id: "jay-z", region: "east", cx: 412.257142857142, cy: 44.3609672462489},{rapper:"Clipse", x: .4514, r: .45, color: "south nowutang fourth", cluster: 4, words: "4,514", id: "clipse", region: "south", cx: 414.314285714285, cy: 0},{rapper:"Cypress Hill", x: .4568, r: .45, color: "west nowutang fourth", cluster: 4, words: "4,568", id: "cypress-hill", region: "west", cx: 428.199999999999, cy: -133.159246674653},{rapper:"KRS-One (only solo albums, excl. boogie productions)", x: .4585, r: .45, color: "east nowutang fourth", cluster: 4, words: "4,585", id: "krs-one-excl-boogie-production", region: "east", cx: 432.571428571428, cy: -98.2323675483859},{rapper:"Tyga", x: .4601, r: .45, color: "west nowutang fifth", cluster: 5, words: "4,601", id: "tyga", region: "west", cx: 436.685714285714, cy: 69.7034448523388},{rapper:"Brand Nubian", x: .4609, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,609", id: "brand-nubian", region: "east", cx: 438.742857142857, cy: 104.842659933516},{rapper:"Mos Def", x: .4630, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,630", id: "mos-def", region: "east", cx: 444.142857142857, cy: -64.9893485207418},{rapper:"A Tribe Called Quest", x: .4635, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,635", id: "tribe-called-quest", region: "east", cx: 445.428571428571, cy: 16.4589640544529},{rapper:"Fat Joe", x: .4686, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,686", id: "fat-joe", region: "east", cx: 458.542857142857, cy: 133.945173111178},{rapper:"Brother Ali", x: .4700, r: .45, color: "midwest nowutang fifth", cluster: 5, words: "4,700", id: "brother-ali", region: "midwest", cx: 462.142857142857, cy: -123.83837105937},{rapper:"Lil' Kim", x: .4474, r: .45, color: "east nowutang fourth", cluster: 4, words: "4,474", id: "lil-kim", region: "east", cx: 384.999999999999, cy: 175.669345265344},{rapper:"Public Enemy", x: .4481, r: .45, color: "east nowutang fourth", cluster: 4, words: "4,481", id: "public-enemy", region: "east", cx: 436.428571428571, cy: 161.330472828416},{rapper:"Talib Kweli", x: .4703, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,703", id: "talib-kweli", region: "east", cx: 462.914285714285, cy: -159.02929561692},{rapper:"Twista", x: .4705, r: .45, color: "midwest nowutang fifth", cluster: 5, words: "4,705", id: "twista", region: "midwest", cx: 474.999999999999, cy: -91.0711595392088},{rapper:"LL Cool J", x: .4743, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,743", id: "ll-cool-j", region: "east", cx: 473.199999999999, cy: -45.1228258699209},{rapper:"Mobb Deep (incl. both Prodigy and Havoc)", x: .4756, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,756", id: "mobb-deep", region: "east", cx: 483.742857142857, cy: -11.5394306198678},{rapper:"Big Daddy Kane", x: .4768, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,768", id: "big-daddy-kane", region: "east", cx: 485.285714285714, cy: 23.6261187870831},{rapper:"Ludacris", x: .4806, r: .45, color: "south nowutang fifth", cluster: 5, words: "4,806", id: "ludacris", region: "south", cx: 489.4, cy: 58.5842212286804},{rapper:"Gang Starr", x: .4794, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,794", id: "gang-starr", region: "east", cx: 486.314285714285, cy: 93.6480863978673},{rapper:"Goodie Mob", x: .4814, r: .45, color: "south nowutang fifth", cluster: 5, words: "4,814", id: "goodie-mob", region: "south", cx: 491.457142857142, cy: 146.420992490055},{rapper:"Tech n9ne", x: .4830, r: .45, color: "midwest nowutang fifth", cluster: 5, words: "4,830", id: "tech-nine", region: "midwest", cx: 511.91, cy: -114.03},{rapper:"Busta Rhymes", x: .4839, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,839", id: "busta-rhymes", region: "east", cx: 503.285714285714, cy: -70.1208697893528},{rapper:"Wale", x: .4896, r: .45, color: "east nowutang fifth", cluster: 5, words: "4,896", id: "wale", region: "east", cx: 512.542857142857, cy: -36.160575630167},{rapper:"De La Soul", x: .4933, r: .45, color: "east nowutang sixth", cluster: 6, words: "4,933", id: "de-la-soul", region: "east", cx: 522.057142857142, cy: -2.27142337457176},{rapper:"Method Man (only solo albums)", x: .4951, r: .45, color: "east wutang sixth", cluster: 6, words: "4,951", id: "method-man", region: "east", cx: 526.685714285714, cy: 32.6223095840354},{rapper:"Common", x: .4974, r: .45, color: "midwest nowutang sixth", cluster: 6, words: "4,974", id: "common", region: "midwest", cx: 532.599999999999, cy: 67.3212648672393},{rapper:"Xzibit", x: .4982, r: .45, color: "west nowutang sixth", cluster: 6, words: "4,982", id: "xzibit", region: "west", cx: 534.657142857142, cy: -86.0842573572765},{rapper:"Raekwon (only solo albums)", x: .5001, r: .45, color: "east wutang sixth", cluster: 6, words: "5,001", id: "raekwon", region: "east", cx: 539.542857142857, cy: 101.829133650313},{rapper:"Das EFX", x: .5005, r: .45, color: "east nowutang sixth", cluster: 6, words: "5,005", id: "das-efx", region: "east", cx: 557.285714285714, cy: -59.1223577884772},{rapper:"Beastie Boys", x: .5090, r: .45, color: "east nowutang sixth", cluster: 6, words: "5,090", id: "beastie-boys", region: "east", cx: 562.428571428571, cy: -24.3007080046984},{rapper:"Nas", x: .5096, r: .45, color: "east nowutang sixth", cluster: 6, words: "5,096", id: "nas", region: "east", cx: 563.971428571428, cy: 10.8648414022526},{rapper:"MF DOOM", x: .5204, r: .45, color: "east nowutang sixth", cluster: 6, words: "5,204", id: "mf-doom", region: "east", cx: 603.571428571428, cy: 0},{rapper:"E-40", x: .5207, r: .45, color: "west nowutang sixth", cluster: 6, words: "5,207", id: "e-40", region: "west", cx: 592.514285714285, cy: 33.4175981347061},{rapper:"Outkast", x: .5212, r: .45, color: "south nowutang sixth", cluster: 6, words: "5,212", id: "outkast", region: "south", cx: 593.8, cy: -40.2640955726219},{rapper:"Redman", x: .5331, r: .45, color: "east nowutang sixth", cluster: 6, words: "5,331", id: "redman", region: "east", cx: 624.4, cy: 48.3272425887428},{rapper:"Kool G Rap", x: .5394, r: .45, color: "east nowutang sixth", cluster: 6, words: "5,394", id: "kool-g-rap", region: "east", cx: 640.599999999999, cy: 17.0773422168059},{rapper:"Blackalicious", x: .5480, r: .45, color: "west nowutang sixth", cluster: 6, words: "5,480", id: "blackalicious", region: "west", cx: 662.714285714285, cy: -10.3079575004312},{rapper:"Killah Priest", x: .5737, r: .45, color: "east nowutang seventh", cluster: 7, words: "5,737", id: "killah-priest", region: "east", cx: 728.8, cy: 0},{rapper:"Ghostface Killah (only solo albums)", x: .5774, r: .45, color: "east wutang seventh", cluster: 7, words: "5,774", id: "ghostface-killah", region: "east", cx: 738.314285714285, cy: -33.8891522555953},{rapper:"Roots", x: .5803, r: .45, color: "east nowutang seventh", cluster: 7, words: "5,803", id: "roots", region: "east", cx: 745.771428571428, cy: 33.8377509799414},{rapper:"Wu-Tang Clan", x: .5895, r: .45, color: "east wutangseventh", cluster: 7, words: "5,895", id: "wu-tang", region: "east", cx: 765.628571, cy: 0},{rapper:"RZA (only solo albums)", x: .5905, r: .45, color: "east wutangseventh", cluster: 7, words: "5,905", id: "rza", region: "east", cx: 785.77, cy: 33.837},{rapper:"CunninLynguists", x: .5971, r: .45, color: "south nowutang seventh", cluster: 7, words: "5,971", id: "cunninlynguists", region: "south", cx: 803.971429, cy: 0},{rapper:"Canibus", x: .5991, r: .45, color: "east nowutang seventh", cluster: 7, words: "5,991", id: "canibus", region: "east", cx: 807.114286, cy: -34.8216497837788},{rapper:"Kool Keith", x: .6238, r: .45, color: "east nowutang seventh", cluster: 7, words: "6,238", id: "kool-keith", region: "east", cx: 842, cy: 0},{rapper:"GZA (only solo albums)", x: .6426, r: .45, color: "east wutang seventh", cluster: 7, words: "6,426", id: "gza", region: "east", cx: 880, cy: 0},{rapper:"Aesop Rock", x: .7392, r: .45, color: "east nowutang seventh", cluster: 7, words: "7,392", id: "aesop", region: "east", cx: 930.623, cy: 0}
];

console.log(data);

var w = 950;
var h = 600;

//Set up SVG and axis//
var svg = d3.select("#rapper-circles")
  ;
d3.select("svg")
  .append("g") // append the average line
  .attr("id", "x-axis") //
  .attr("transform", "translate(0,177)")
  .append("line")
  .attr("x1", "0")
  .attr("x2", "950");

d3.select("svg")
  .append("g") // append the average line
  .attr("id", "shakespeare") //
  .attr("transform", "translate(604,140)")
  .append("line")
  .attr("y1", "-80")
  .attr("y2", "33")
  .style("opacity",1);

d3.select("svg")
  .append("g") // append the average line
  .attr("id", "moby") //
  .attr("transform", "translate(834,140)")
  .append("line")
  .attr("y1", "-80")
  .attr("y2", "33")
  .style("opacity",1);



svg.selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .attr("class", function(d) {
    return "rapper-circle " + d.color;
  })
  .style("position","absolute")
  .style("width", "35px")
  .style("height", "35px")

  .style("background-image",function(d) {
    return "url(css/" + d.id + ".png)";
  })
  .style("left", function(d) {
    return d.cx + "px";
  })
  .style("top", function(d) {
    return d.cy + "px";
  })
  .attr("id", function(d) {
    return d.id;
  })
  .on("mouseover", function(d) {
    var xPosition = parseFloat(d3.select(this).style("left"));
    var yPosition = parseFloat(d3.select(this).style("top"));
    //Update the tooltip position and value
    d3.select("#tooltip")
      .style("left", xPosition + "px")
      .style("top", yPosition + "px")
      .select("#value")
      .text(d.words);
    d3.select("#tooltip")
      .select("#rapper")
      .text(d.rapper + ":");
    d3.select("#puff-daddy")
      .classed("default",false);
    //Show the tooltip

    d3.select("#tooltip").classed("hidden", false);
  })

  .on("mouseout", function() {
    //Hide the tooltip
    d3.select("#tooltip").classed("hidden", true);
  })





//end of the initial data thing
;

d3.select(".regionselect")
  .on("click", function(d) {

    d3.select("#regionlegend")
      .classed("hidden", false);
    d3.selectAll(".south")
      .classed("southern", true)
      .classed("rapper-circle", false);
    d3.selectAll(".east")
      .classed("eastern", true)
      .classed("rapper-circle", false);
    d3.selectAll(".midwest")
      .classed("midwestern", true)
      .classed("rapper-circle", false);
    d3.selectAll(".west")
      .classed("western", true)
      .classed("rapper-circle", false);
    d3.selectAll(".wutang")
      .classed('wutangfill' , false);
    d3.selectAll(".nowutang")
      .classed("nowutangfill", false);
    d3.select("#active")
      .classed("active", false);
  });

d3.select(".wutangselect")
  .on("click", function(d) {
    d3.select("#regionlegend")
      .classed("hidden", true);
    d3.selectAll(".wutang")
      .classed('wutangfill' , true);
    d3.selectAll(".nowutang")
      .classed("nowutangfill", true);
    d3.select("#active")
      .classed("active", false);
    d3.selectAll(".south")
      .classed("southern", false)
      .classed("rapper-circle", true);
    d3.selectAll(".east")
      .classed("eastern", false)
      .classed("rapper-circle", true);
    d3.selectAll(".midwest")
      .classed("midwestern", false)
      .classed("rapper-circle", true);
    d3.selectAll(".west")
      .classed("western", false)
      .classed("rapper-circle", true);
  });

d3.select(".allartists")
  .on("click", function(d) {
    d3.selectAll(".south")
      .classed("southern", false)
      .classed("rapper-circle", true);
    d3.selectAll(".east")
      .classed("eastern", false)
      .classed("rapper-circle", true);
    d3.selectAll(".midwest")
      .classed("midwestern", false)
      .classed("rapper-circle", true);
    d3.selectAll(".west")
      .classed("western", false)
      .classed("rapper-circle", true);
    d3.select("#regionlegend")
      .classed("hidden", true);
    d3.selectAll(".wutang")
      .classed('wutangfill' , false);
    d3.selectAll(".nowutang")
      .classed("nowutangfill", false);
  });
