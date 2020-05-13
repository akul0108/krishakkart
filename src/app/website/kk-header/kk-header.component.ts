import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PwaService } from '../pwa.service';

@Component({
  selector: 'app-kk-header',
  templateUrl: './kk-header.component.html',
  styleUrls: ['./kk-header.component.css']
})
export class KkHeaderComponent implements OnInit {

  deferredPrompt;
  addBtn = document.querySelector('#a2hs');

  constructor(private pwaService: PwaService) {  }

  ngOnInit() {
    $(window).scroll(function() {
      if($(document).scrollTop() > 53) {
        $('.navbar').addClass('affix');
      } else {
        $('.navbar').removeClass('affix');
      }
    });

    // window.addEventListener('beforeinstallprompt', (evt) => {
    //   this.addBtn.setAttribute("style", "display: block");
    //   evt.preventDefault();
    //   this.deferredPrompt = evt;

    //   this.addBtn.addEventListener('click', (evt) => {
    //     this.deferredPrompt.prompt();
    //     this.deferredPrompt.userChoice.then(choiceResult => {
    //       if (choiceResult.outcome === 'accepted') {
    //         this.addBtn.setAttribute("style","display: none");
    //       } else {
    //         console.log('User dismissed the prompt');
    //       }
    //       this.deferredPrompt = null;
    //     })
    //   })
    // })

    // if (window.matchMedia('(display-mode: standalone)').matches) {
    //   this.addBtn.setAttribute("style","display: none");
    // }

    this.pwaService.initPwaPrompt();
  }

  a2hs() {
    this.pwaService.promptEvent.prompt();
  }
}
