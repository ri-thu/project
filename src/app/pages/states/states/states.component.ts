import { Component } from '@angular/core';
import { CardComponent } from "../../../ui/card/card/card.component";
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-states',
  imports: [CardComponent],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent{
  constructor(public api:ApiService){}
}
