import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioService } from './core/services/portfolio.service';
import { BentoGridComponent } from './features/bento-grid/bento-grid.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BentoGridComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  private portfolioService = inject(PortfolioService);
  
  profile = this.portfolioService.profile;
  education = this.portfolioService.education;
  experience = this.portfolioService.experience;
  skills = this.portfolioService.skills;
  skillGroups = this.portfolioService.skillGroups;

  isExpanded = signal(false);

  toggleText() {
    this.isExpanded.update(v => !v);
  }
}