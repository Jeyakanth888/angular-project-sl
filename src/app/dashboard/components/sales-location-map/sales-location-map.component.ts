import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import * as L from 'leaflet';

@Component({
  selector: 'app-sales-location-map',
  templateUrl: './sales-location-map.component.html',
  styleUrls: ['./sales-location-map.component.scss']
})
export class SalesLocationMapComponent implements OnInit, AfterViewInit {


  @ViewChild('map', { static: false }) public mapContainer: ElementRef;
  mapContainerBlock: any;
  map: any;
  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.setMap();
  }

  setMap() {
    this.mapContainerBlock = this.mapContainer.nativeElement;
    this.map = L.map('sales-map').setView([48, 24], 12);

    L.tileLayer(
       'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         minZoom: 2,
         maxZoom: 2
       }).addTo(this.map);
    L.svg().addTo(this.map);

    const markers = [
      { long: 77.13, lat: 28.37, radius: 12  }, // India
      { long: 138.2529, lat: 36.2048, radius: 8}, // Japan
      { long: 0.05 , lat: 51.36  , radius: 17}, // London
      { long: 104.1954, lat: 35.861, radius: 16  }, // China
      { long: 77.02, lat: 39.91 , radius: 13}, // washington
      { long: 54.22, lat: 24.28, radius: 10  }, // abudhabi
    ];

    // Select the svg area and add circles:

    d3.select('#sales-map')
        .select('svg')
        .attr('width', 800)
        .selectAll('myCircles')
        .data(markers)
        .enter()
        .append('circle')
        .attr('cx', (d) => this.map.latLngToLayerPoint([d.lat, d.long]).x)
        .attr('cy', (d) => this.map.latLngToLayerPoint([d.lat, d.long]).y)
        .attr('r', (d) => d.radius)
        .style('fill', 'rgba(163, 160, 251, 0.6)')
        .attr('stroke', 'rgba(163, 160, 251, 0.6)')
        .attr('stroke-width', 1)
        .attr('fill-opacity', 1);
    this.map.on('moveend ', this.setMap);
  }
}
