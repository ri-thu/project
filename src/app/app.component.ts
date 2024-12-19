import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { NavbarComponent } from "./ui/navbar/navbar/navbar.component";
import { ContactComponent } from "./pages/contact/contact/contact.component";
import { HomeComponent } from "./pages/home/home/home.component";
import { StatesComponent } from "./pages/states/states/states.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rhithika';

  hello() {
    alert("Hello clicked");
  }

    
  }
