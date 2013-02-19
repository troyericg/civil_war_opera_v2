// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

var margin = 20, width = 660 - margin, height = 400 - margin;
var arr = [20, 54, 100, 8, 12, 37, 41];

function draw(data) {
	"use strict";
	
	// Filters data based on stance
	var antiReg = data.filter(function(d){ return d.antiregistration == true; });
	var proReg = data.filter(function(d){ return d.antiregistration != true; });
	
	
	// Sub-Filters
	var aHeroes = antiReg.filter(function(d){return d.alignment == "hero"}),
		aVillains = antiReg.filter(function(d){return d.alignment == "villain"}),
		pHeroes = proReg.filter(function(d){return d.alignment == "hero"}),
		pVillains = proReg.filter(function(d){return d.alignment == "villain"});
	
	
	d3.select('.chart-left').selectAll('p.chart-num').text(antiReg.length);
	d3.select('.chart-right').selectAll('p.chart-num').text(proReg.length);
	
	d3.select('.chart-left').selectAll('span.ah-add-info').text(aHeroes.length);
	d3.select('.chart-left').selectAll('span.av-add-info').text(aVillains.length);
	d3.select('.chart-right').selectAll('span.ph-add-info').text(pHeroes.length);
	d3.select('.chart-right').selectAll('span.pv-add-info').text(pVillains.length);
	d3.select('li#view-default').on('click',standardLayout);
	d3.select('li#view-scale').on('click',scaledLayout);
			
	var r = 7;
	
	var palette = d3.select("#palette")
		.append("svg")
		.attr('width',width)
		.attr('height',height + margin);
	
	var g1 = palette.append('g')
					.attr('class','g1')
					.attr('width',width / 2);
					
	var g2 = palette.append('g')
			.attr('class','g2')
			.attr('width',width / 2)
			.attr("transform", function(d,i) {
			  return "translate(" + ((width / 2)) + "," + 0 + ")"
			});
		
	function defaultLayout(){
		g1.selectAll("circle")
			.data(antiReg)
			.enter()
			.append('circle')
			.style("fill", "#67C4E8")
			.attr("class","datacirc")
			.attr("r", r)
			.attr("transform", function(d,i) {
				return "translate(" + ((r + 14)*(i%13) + 50) + "," + ((r + 14)*Math.floor(i/13) + margin) + ")"
				})
			.on('mouseover',function(d){ console.log(d.codename + ": " + d.num_appearances) });

		g2.selectAll("circle")
			.data(proReg)
			.enter()
			.append('circle')
			.style("fill", "#CC6666")
			.attr("class","datacirc")
			.attr("r", r)
			.attr("transform", function(d,i) {
			      return "translate(" + ((r + 14)*(i%13) + margin - 8) + "," + ((r + 14)*Math.floor(i/13) + margin) + ")"
			})
			.on('mouseover',function(d){ console.log(d.codename + ": " + d.num_appearances)});
	}
	
		//NEED TO FIGURE OUT HOW TO TOGGLE BETWEEN LAYOUTS
		function standardLayout(){
			var things1 = g1.selectAll("circle").data(antiReg);
			var things2 = g2.selectAll("circle").data(proReg);
			
			things1
			.transition()
			.attr('r', r)
			.attr("transform", function(d,i) {
				return "translate(" + ((r + 14)*(i%13) + 50) + "," + ((r + 14)*Math.floor(i/13) + margin) + ")"
			});
			
			things2
			.transition()
			.attr('r', r)
			.attr("transform", function(d,i) {
			    return "translate(" + ((r + 14)*(i%13) + margin - 8) + "," + ((r + 14)*Math.floor(i/13) + margin) + ")"
			});
		}
		
		function scaledLayout() {
			var things = palette.selectAll("circle").data(data);
			
			
			var force = d3.layout.force()
						.nodes(data)
						.charge(function(d){
							return -Math.pow(arr[Math.floor(Math.random()*arr.length)],2) / 18;
						})
						.gravity(0.08)
						.friction(0.01)
						.size([width,height/2])
						.start();
						
						force.on("tick", function(e){
							var things = palette.selectAll("circle")
							
							var k = 20 * e.alpha;
							things.each(function(o, i) {
								o.x = o.anti_registration == true ? k : -k;
							});
							
						   	things.attr('cx', function(d){ return d.x; })
						   		.attr('cy', function(d){ return d.y - 100; });
						});
						
						things
						.transition()
						// .attr('transform','none')
						// .attr("transform", "translate(" + width / 4 + "," + height / 2 + ")")
						.attr("r",function(d){
							return d.num_appearances;
						});
						things.call(force);
						
		}
		
		
		function highlightTeams(team) {
			d3.selectAll('circle')
			.filter(function(d){ return d.alignment == team })
			d3.selectAll('circle')
				.on('mouseover',function(d){
					if (d.team != team) {
						
					}
				})
				.attr('opacity',function(d){
					if (d.team != 'New Warriors') {
						return 0.2;
					}
				});
		}
		
		
		defaultLayout();
		
		
};