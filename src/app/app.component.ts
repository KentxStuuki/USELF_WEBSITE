import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeIntroComponent } from './components/home-intro/home-intro.component';
import { ExplanationComponent } from './components/explanation/explanation.component';
import { WillHappenComponent } from './components/will-happen/will-happen.component';
import { WhatCanDoComponent } from './components/what-can-do/what-can-do.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { OurFutureComponent } from './components/our-future/our-future.component';
import { ClimatePsychologyComponent } from './components/climate-psychology/climate-psychology.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeIntroComponent, ExplanationComponent, WillHappenComponent, WhatCanDoComponent, FooterComponent, ToDoComponent, OurFutureComponent, ClimatePsychologyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
