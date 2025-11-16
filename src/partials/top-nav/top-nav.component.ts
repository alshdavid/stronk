import { Component, ComponentRef, viewChild, ViewContainerRef } from '@angular/core';
import { TopNavService } from '../../services/top-nav.service';
import { ProfilePageNavComponent } from '../../pages/profile/profile-nav.component';

@Component({
  standalone: false,
  selector: 'app-navigation-top',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent {
  vcr = viewChild('container', { read: ViewContainerRef });
  topNavService: TopNavService;
  #componentRef?: ComponentRef<unknown>;

  constructor(topNavService: TopNavService) {
    this.topNavService = topNavService;
  }

  ngOnInit() {
    this.topNavService.initOutlet(this.vcr);
    this.vcr()?.clear();
    const componentRef = this.vcr()?.createComponent(ProfilePageNavComponent);
    console.log(this.vcr);
  }
}
