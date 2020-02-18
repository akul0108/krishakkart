import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent implements OnInit {

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
