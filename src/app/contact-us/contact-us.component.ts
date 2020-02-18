import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  message_send : FormGroup;

  @ViewChild('mapContainer', {static : false}) gmap : ElementRef;
  map : google.maps.Map;
  lat = 28.752429;
  lng = 77.499160;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions : google.maps.MapOptions = {
    center : this.coordinates,
    zoom : 17,
  };

  marker = new google.maps.Marker({
    position : this.coordinates,
    map : this.map,
  });

  mapInitializer () {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit() {
    this.message_send = this._formBuilder.group({
      name: ['',[Validators.required, Validators.pattern('[a-zA-Z]'),Validators.maxLength(30)]],
      email: ['',[Validators.required, Validators.email]],
      contact: ['',[Validators.required]]
    })
  }
  

}
