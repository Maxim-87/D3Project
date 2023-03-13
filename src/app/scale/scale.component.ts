import { Component } from '@angular/core';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css']
})
export class ScaleComponent {

  dataArray = [20,40,100]



  ngOnInit() {
  }


  // private circle() {
  //   let s = d3.select('#svg2')
  //     .attr('width', 500)
  //     .attr('height', 500)
  //
  //   s.append('circle')
  //     .attr('r', 50)
  //     .attr('cx', 450)
  //     .attr('cy', 450)
  //
  //   s.append('line')
  //     .attr('x1', 0)
  //     .attr('y1', 100)
  //     .attr('x2', 400)
  //     .attr('y2', 400)
  //     .attr('stroke', 'green')
  //     .attr('stroke-width', 5)
  //
  //   s.selectAll('rect')
  //     .data(this.dataArray)
  //     .enter()
  //     .append('rect')
  //     .attr('width', function (d) {
  //       return d * 10
  //     })
  //     .attr('height', 80)
  //     .attr('y', function (d,i) {return i * 100})
  // }
}
