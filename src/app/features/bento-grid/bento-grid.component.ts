import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-bento-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bento-grid.component.html',
  animations: [
    trigger('staggerFade', [
      transition(':enter', [
        query('.bento-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
            style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class BentoGridComponent {
  private portfolio = inject(PortfolioService);
  
  projects = this.portfolio.projects;
  skills = this.portfolio.skills;
}