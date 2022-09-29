import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private stateService: StateService) {}

  ngOnInit(): void {}

  navigateToHomePage(): void {
    this.router.navigateByUrl('home');
    this.stateService.setSelectedPost(null);
  }
}
