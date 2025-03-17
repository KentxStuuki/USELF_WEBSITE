import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.css'
})
export class HomeIntroComponent {
  // Home Header Introduction
  home_header = [
    "MALAPIT NA ANG HULI",
    "UNDERSTANDING CLIMATE PSYCHOLOGY THROUGH THE ",
    "2030 CLIMATE CHANGE DEADLINE"
  ] 

  year = "irreversible damage ------------ 2030"

  years = [
    "2029",
    "2028",
    "2027",
    "2026",
    "current ------------ 2025"
  ]
}
