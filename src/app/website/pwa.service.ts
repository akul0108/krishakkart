import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  promptEvent: any;

  constructor(
    private dialog: MatDialog,
    private platform: Platform
  ) { }

  initPwaPrompt() {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
      });
    }
  }
}
