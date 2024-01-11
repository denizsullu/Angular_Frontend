import {Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

interface carouselImage {
  image: string;
  thumbImage: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {

@Input() images: carouselImage[] = [];

}
