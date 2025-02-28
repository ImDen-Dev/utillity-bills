import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLinksComponent } from '../../components/nav-links/nav-links.component';
import { NavLinkModel } from '../../models/nav-link.model';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavLinksComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  linkItemsList: NavLinkModel[] = [{ link: '', name: 'Dashboard' }];
}
