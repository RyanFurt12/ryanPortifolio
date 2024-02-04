import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-bar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './address-bar.component.html',
  styleUrl: './address-bar.component.css'
})
export class AddressBarComponent {
  Url:string = window.location.href.slice(7);
  LinkIsCopied:boolean = false;

  constructor(){
    if(this.Url.endsWith('/')){
      this.Url = this.Url.slice(0,-1)
    }
  }

  reloadPage(){
    window.location.reload();
  }

  redirectPage(event:KeyboardEvent){
    if (event.key === 'Enter') {
      let url = this.Url.startsWith('https://')?
              this.Url : 'https://' + this.Url;

      console.log();
      

      window.open(url,'_blank');
    }
  }

  goForwardPage() {
    window.history.forward();
  }

  goBackPage() {
    window.history.back();
  }

  addToFavorites(){
    alert('Pressione Ctrl+D para adicionar aos favoritos.');
  }

  copyLink(){
    navigator.clipboard.writeText(window.location.href);
    this.LinkIsCopied = true;
    
    setTimeout(() => {
      this.LinkIsCopied = false;
    }, 2000);
  }
}
