import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
//import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  imports: [ HeaderComponent/*, NavComponent*/, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('p2_tailwind');
}
