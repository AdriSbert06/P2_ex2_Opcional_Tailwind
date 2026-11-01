import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class App {

  protected readonly title = signal('p2_tailwind');

  cards = [
    {
      id: 1,
      name: 'Decidueye',
      image: '/decidueye_Card.png',
      description: 'Una carta Pokémon de tipus planta i fantasma.'
    },
    {
      id: 2,
      name: 'Slowpoke',
      image: '/slowpoke_card.jpg',
      description: 'Un Pokémon tranquil de tipus aigua i psíquic.'
    },
    {
      id: 3,
      name: 'Charizard',
      image: '/charizard_Card.png',
      description: 'Un poderós Pokémon de tipus foc i volador.'
    },
    {
      id: 4,
      name: 'Infernape',
      image: '/infernape_Card.png',
      description: 'Un Pokémon de tipus foc i lluita.'
    },
    {
      id: 5,
      name: 'Blaziken',
      image: '/blaziken.png',
      description: 'Un Pokémon ràpid de tipus foc i lluita.'
    },
    {
      id: 6,
      name: 'Pikachu',
      image: '/pikachu_logo.png',
      description: 'Un dels Pokémon més coneguts de tots.'
    }
  ];

  // Mode fosc
  fosc() {
    const html = document.documentElement;

    html.classList.toggle('dark');

    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  // Recuperar el tema guardat
  ngOnInit() {
    const tema = localStorage.getItem('theme');

    if (tema === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  boton() {
    window.open(
      'https://github.com/AdriSbert06/P2_ex2-Tecnologies-i-eines-per-al-disseny-i-desenvolupament-web',
      '_blank'
    );
  }

  // Validació del formulari
  enviarFormulario(event: Event) {
    event.preventDefault();

    const formulario = event.target as HTMLFormElement;

    const nombre = (formulario.elements.namedItem('name') as HTMLInputElement).value;
    const email = (formulario.elements.namedItem('email') as HTMLInputElement).value;
    const asunto = (formulario.elements.namedItem('subject') as HTMLInputElement).value;
    const mensaje = (formulario.elements.namedItem('message') as HTMLTextAreaElement).value;

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !email || !asunto || !mensaje) {
      alert('Has d\'omplir tots els camps!');
      return;
    }

    if (!formatoEmail.test(email)) {
      alert('El correu electrònic no és correcte!');
      return;
    }

    alert('Formulari enviat correctament!');
    formulario.reset();
  }
}