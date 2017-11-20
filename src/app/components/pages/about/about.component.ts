import { Component, OnInit } from '@angular/core';
import { AlertService, AuthService } from '../../../services/index.service';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }

}
