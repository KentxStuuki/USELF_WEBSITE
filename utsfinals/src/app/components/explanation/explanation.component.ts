import { Component } from '@angular/core';

@Component({
  selector: 'app-explanation',
  standalone: true,
  imports: [],
  templateUrl: './explanation.component.html',
  styleUrl: './explanation.component.css'
})
export class ExplanationComponent {

  // Explanation Section 
  explanations = [
    "The 2030 climate change deadline is based on the global greenhouse gas emissions by that year to limit global warming to 1.5°C above pre-industrial levels. This is critical to prevent irreversible environmental damage and to avoid the worst impacts of climate change. ",
    
    "The research highlights the urgent need to address climate change. While there have been significant investments in renewable energy, more needs to be done in sectors like energy, industry, transport, food, and agriculture. The Intergovernmental Panel on Climate Change stresses that without immediate and deep emissions reductions, this requires large-scale changes, including reducing fossil fuel use and improving energy efficiency.",

    "Climate psychology explores the emotional, social, and mental processes contributing to the ecological and climate crisis and our responses to it. It aims to help individuals and communities process difficult emotions such as existential anxiety and grief. ",

    "It emphasizes the need to confront the collective emotional and psychological challenges tied to climate change, including our relationship with the nonhuman world and the systems contributing to the crisis."
  ];

}
