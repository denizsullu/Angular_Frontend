import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor() {
  }

  add(x: number, y: number): number {
    return x + y;
  }
}
