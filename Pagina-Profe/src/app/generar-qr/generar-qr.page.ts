import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {

  constructor(private menu: MenuController,private router:Router) { }

  ngOnInit() {
  }

  onClick() {
    this.menu.toggle();
  }

  ionViewDidEnter() {
    this.menu.enable(false)
  }
  ionViewWillLeave() {
    this.menu.enable(true)
  }
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Si',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/cursos']);
      },
    },
  ];

}

