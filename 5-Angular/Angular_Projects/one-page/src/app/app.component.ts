import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ExampleService} from "./service/example.service";
import {NaviComponent} from "./components/navi/navi.component";
import {MainComponent} from "./components/main/main.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NaviComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private calculatorService = inject(ExampleService)
  name = "Deniz";
  title:string ="One Pages"
  surname:string = "Süllü";
  testId = 'main-cta';
  formIsInvalid: boolean = true;
  deniz = "deniz";
  isAdmin = false;
  ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];
  announcement: number = 12;
  transformText() {
    this.announcement = this.calculatorService.add(4,10);
  }



}
