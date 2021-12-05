import React, {useCallback, useEffect, useState} from "react";
import * as d3 from 'd3';
import { FormattedMessage } from "react-intl";

function PieChart(props)
{
    let canvRef=React.createRef();
    // const data = [2,4,8,10,14,20];


    const width = 500;
    const height = 400;
    const radius= 200;

   

    useEffect(()=>{
        let data= props.data;
        console.log(data);
        let svg = d3.select(canvRef.current)
        .append("svg")
          .attr("width", width)
          .attr("height", height)
        .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        let color = d3.scaleOrdinal()
          .domain(data.map(d => d.value))
          .range(d3.schemeSet2);

        let pie = d3.pie()
          .value(d=>d.value);
        let data_ready = pie(data);

        let arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

        let tooltip = d3.select(canvRef.current)
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")

        function mouseOver(d)
        {
            tooltip.style("opacity", 1)
            d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1);
        }
        
        function mouseMove(d)
        {
            tooltip
            .html(d.srcElement.__data__.data.name+": " + d.srcElement.__data__.data.value+" KwH")
            .style("left", (d3.pointer(this)[0]) + "px")
            .style("top", (d3.pointer(this)[1]) + "px");
        }

        function mouseLeave(d)
        {
            tooltip
            .style("opacity", 0)
            d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8);
        }

        svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('path')
            .attr('d', arcGenerator)
            .attr('fill', function(d){ return(color(d.value)) })
            .attr("stroke", "black")
            .style("stroke-width", "2px")
            .style("opacity", 0.7)
            .on("mouseover", mouseOver)
            .on("mousemove", mouseMove)
            .on("mouseleave", mouseLeave);
        },[]);

    


    return(
        <div className="col">
            <h2><FormattedMessage id="Stats"/></h2>
            <h5><FormattedMessage id="PowerUsage"/></h5>
            <div ref={canvRef}></div>
            {/* <svg width = "100vw" height="400" ref={canvRef}></svg> */}
            {/* {PieChart2(props.data,{
                name: d => d.name,
                value: d => d.value,
                width:400,
                height: 500
                })} */}
        </div>
    );
}

export default PieChart;