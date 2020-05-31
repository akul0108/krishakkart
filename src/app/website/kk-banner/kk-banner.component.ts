import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-kk-banner',
  templateUrl: './kk-banner.component.html',
  styleUrls: ['./kk-banner.component.css']
})
export class KkBannerComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }
}