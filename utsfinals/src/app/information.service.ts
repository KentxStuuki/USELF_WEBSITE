import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }
  get todoList(){
    return [
      'Energy conservation at home is one of the easiest methods for addressing climate change.  Energy monitors and programmable thermostats are examples of smart home equipment that enables homeowners to better track and minimize their energy consumption.  Over time, small daily routines like maximizing daylight and shutting off lights when leaving a room can have a significant impact.  In addition to lowering electricity costs, energy conservation also lessens the need for fossil fuels, which cuts carbon emissions.',
      'Switching in to renewable energy, such as wind or solar, will help you lower the carbon footprint in your household as well for reducing the reliance when it comes to fossil fuels. A lot of electricity providers has green energy plans to offer, as well for options like community solar projects that’ll allow participation without the installment of personal systems. ',
      'When it comes to pollution, Transportation is considered a major source of carbon emission. But, there are ways to reduce its impact, such as the use of the public transit, as well as carpooling, and planning on efficient routes that will help you decrease the use of fossil fuels, as well for cutting emissions.',
      'We know that Recycling conserves resources, while composting of food scraps will reduce landfill methane. Reducing the waste is key when it comes to the protection of the environment, as well for cutting the gas emissions from the greenhouse. Supporting a better waste management, as well for making a mindful consumption choice will contribute to a better, cleaner, and healthier planet.',
      'With the 2 billion tons of waste that is discarded on a yearly basis, doing mindful consumption  and responsible disposal are important. The improper waste disposal pollutes both of the land  and water, as well as harming people, plants, and animals. We must Encourage the others and  join clean up efforts to make the environment healthy.',
      'By spreading awareness, this can become a powerful way to make changes. Have a  discussion about the issues on environment, as well as supporting eco-friendly businesses and  advocating for sustainable policies. These collective actions will surely create a lasting impact  not only to us, but for our planet as well.',
      'Buying only what we need, storing food properly, and composting scraps is what we need to  do in-order to reduce waste when it comes to food. We know that food waste produces methane  and depletes many resources, and worst of all, it can affect climate change. Even small changes  can lower the carbon footprint by 300 kg of Co2 yearly.',
      'We must avoid pesticides in-order to protect beneficial species. Planting and growing native  species will support our local ecosystem by providing us with food, as well as becoming a  shelter for the wildlife. Even one tree can help us preserve biodiversity as it will improve the  condition of our environment.'
    ]
  }
  get todoSpan(){
    return[
      'Energy',
      'Energy',
      'Lower Pollution',
      'Minimize Waste',
      'Clean',
      'Speak Up',
      'Reduce',
      'Plant'
    ]
  }
}
