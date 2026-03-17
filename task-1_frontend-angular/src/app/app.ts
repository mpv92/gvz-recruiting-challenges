import { Component, OnInit, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [MatListModule, MatSidenavModule, MatToolbarModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected activeNavigationLink: string | null = null;
  protected partNavigationLinks: { path: string; title: string }[] = routes
    .filter((route) => route.path !== '**')
    .filter((route) => route.data?.['section'] !== 'combined')
    .map((route) => ({
      path: route.path!,
      title: route.data?.['title'] as string,
    }));
  protected combinedNavigationLinks: { path: string; title: string }[] = routes
    .filter((route) => route.path !== '**')
    .filter((route) => route.data?.['section'] === 'combined')
    .map((route) => ({
      path: route.path!,
      title: route.data?.['title'] as string,
    }));

  private readonly matIconRegistry = inject(MatIconRegistry);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeNavigationLink = this.router.url.replaceAll('/', '');
      }
    });
  }
}
