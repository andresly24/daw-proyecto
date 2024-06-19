import { Component } from '@angular/core';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [MapaComponent],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
  titulo:string="Contáctanos en:"

  items = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/bobagrillquevedo/',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
    },
    {
      name: 'TikTok',
      link: 'https://www.tiktok.com/@boba.and.grill',
      imageUrl: 'https://w7.pngwing.com/pngs/663/193/png-transparent-tiktok-2-hd-logo-thumbnail.png'
    },
    {
      name: 'WhatsApp',
      link: 'https://wa.me/593979867318',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
    }
  ];
}
