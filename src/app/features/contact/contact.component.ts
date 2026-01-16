import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private portfolio = inject(PortfolioService);
  profile = this.portfolio.profile;

  email = signal('');
  message = signal('');
  honeypot = signal(''); // Секретное поле для ботов
  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Валидация через computed сигналы
  isEmailValid = computed(() => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(this.email());
  });

  isFormValid = computed(() => {
    return this.isEmailValid() && this.message().length > 10;
  });

  async onSubmit() {
    // Если "ловушка" заполнена — это бот. Просто выходим.
    if (this.honeypot().length > 0) return;

    if (!this.isFormValid()) return;

    this.status.set('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xlgggryy', {
        method: 'POST',
        body: JSON.stringify({ 
          email: this.email(), 
          message: this.message(),
          _subject: `New Portfolio Message from ${this.email()}`
        }),
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        this.status.set('success');
        this.email.set('');
        this.message.set('');
      } else {
        throw new Error();
      }
    } catch {
      this.status.set('error');
    }
  }
}