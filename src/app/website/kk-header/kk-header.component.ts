import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-kk-header',
  templateUrl: './kk-header.component.html',
  styleUrls: ['./kk-header.component.css']
})
export class KkHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function() {
      if($(document).scrollTop() > 53) {
        $('.navbar').addClass('affix');
      } else {
        $('.navbar').removeClass('affix');
      }
    });
  }

}
