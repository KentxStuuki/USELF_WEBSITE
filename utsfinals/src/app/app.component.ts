import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { ToDoComponent } from './to-do/to-do.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoComponent],
=======
import { HomeIntroComponent } from './components/home-intro/home-intro.component';
import { ExplanationComponent } from './components/explanation/explanation.component';
import { WillHappenComponent } from './components/will-happen/will-happen.component';
import { WhatCanDoComponent } from './components/what-can-do/what-can-do.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeIntroComponent, ExplanationComponent, WillHappenComponent, WhatCanDoComponent, FooterComponent],
>>>>>>> ad26acf10366ba9d50df123b686717e4bb61f1fb
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
