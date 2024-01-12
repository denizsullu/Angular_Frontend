import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MobileAppComponent } from './components/mobile-app/mobile-app.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,HeroSectionComponent,CategoriesComponent,CampaignsComponent,FavoritesComponent,MobileAppComponent,CardComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiftshop-frontend';
}
