import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }

  title = "Krishakkart";
  hide : boolean = true;
  
  
  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }
}
