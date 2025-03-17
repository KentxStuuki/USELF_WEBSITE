import { Component } from '@angular/core';

@Component({
  selector: 'app-will-happen',
  standalone: true,
  imports: [],
  templateUrl: './will-happen.component.html',
  styleUrl: './will-happen.component.css'
})
export class WillHappenComponent {
  //Question Container
  will_happen_para = [
    "Climate change is primarily driven by an excess of greenhouse gases in the atmosphere, a phenomenon that occurs when these gases, such as carbon dioxide and methane, trap heat from the sun. This is known as the greenhouse effect, which is vital for maintaining life on Earth by keeping temperatures stable.",

    "However, human activities have intensified this natural process. The burning of fossil fuels like coal, oil, and gas for energy, along with deforestation, which reduces the number of trees that absorb carbon dioxide, significantly increase the concentration of greenhouse gases",

    "If the 2030 climate change deadline is missed, we can expect significantly worsened impacts of climate change."
  ];

  will_happen_list = [
    "Increased extreme weather: More frequent and intense heatwaves, heavy rainfall events leading to flooding, droughts, and severe storms. ",
    "Sea level rise: Accelerated coastal flooding due to rising sea levels, threatening coastal cities and infrastructure. ",
    "Biodiversity loss: Large-scale extinction of plant and animal species due to changing habitats and extreme weather events. ",
    "Food insecurity: Reduced crop yields due to droughts and floods, leading to potential food shortages in many regions. ",
    "Water scarcity: Reduced water availability in many regions due to changing precipitation patterns and increased water demand. ",
    "Economic disruption: Significant economic losses due to climate-related disasters, infrastructure damage, and decreased agricultural productivity. ",
    "Mass migration: Potential displacement of large populations due to rising sea levels and climate-related disasters, leading to refugee crises.  "
  ];

  will_happen_header = "KEY POTENTIAL CONSEQUENCES:";
  
}
