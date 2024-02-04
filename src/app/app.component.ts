import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MoveBackgroundComponent } from './components/move-background/move-background.component';
import { AddressBarComponent } from "./components/address-bar/address-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MoveBackgroundComponent, AddressBarComponent]
})
export class AppComponent {
  title = 'RyanPortfolio';
}
