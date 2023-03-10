import {Component, OnInit} from '@angular/core';
import * as d3 from "d3-selection";
@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  dataArray = [{radius:10,color: 'red'}, {radius:20,color: 'green'},{radius:30,color: 'blue'}, ]

  ngOnInit() {
    this.circle()
  }

  private circle() {
    let c = d3.select('#svg')
    .attr('width',400)
    .attr('height',400)


    c.selectAll('circle')
      .data(this.dataArray)
      .enter()
      .append('circle')
      .attr('cx', 40)
      .attr('cy', function (d) {
        return d.radius * 5
      })
      .attr('r', 15)
      .attr('fill', (d: any) => d.color)
  }
}
