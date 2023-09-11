import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario = {
    username: '',
    password: ''
  }

  constructor(
    private router: Router,
    private alertController: AlertController,
    public menuCtrl: MenuController

  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.usuario.username == "nico" && this.usuario.password == "nico") {
      this.router.navigate(['/generar-qr'])
    }
    else {

      this.presentAlert()
    }

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Correo y/o contraseña incorrectos",
      buttons: ['OK'],
      backdropDismiss: false,

    });

    await alert.present();


  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false)
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true)
  }
}
