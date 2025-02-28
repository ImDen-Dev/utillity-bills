import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavLinkModel } from '../../models/nav-link.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss',
})
export class NavLinksComponent {
  containerClass = input('sm:hidden');
  containerId = input('mobile-menu');
  wrapperClass = input('space-y-1 px-2 pb-3 pt-2');
  navLinksItems = input<NavLinkModel[]>([
    {
      link: 'dashboard',
      name: 'Dashboard',
    },
  ]);

  linkClass = input('block rounded-md px-3 py-2 text-base font-medium');
  activeClass = input('bg-gray-900 px-3 py-2 text-base font-medium text-white');
  notActiveClass = input('text-gray-300 hover:bg-gray-700 hover:text-white');
}
