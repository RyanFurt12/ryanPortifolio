import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-move-background',
  standalone: true,
  imports: [],
  templateUrl: './move-background.component.html',
  styleUrl: './move-background.component.css'
})

export class MoveBackgroundComponent {
  mousePos: { x:number, y:number } = { x:0, y:0 };
  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event:MouseEvent) {
    this.mousePos.x = (event.clientX / window.innerWidth * 100 - 50)/10;
    this.mousePos.y = (event.clientY / window.innerHeight * 100 - 50)/10;
  }
}
