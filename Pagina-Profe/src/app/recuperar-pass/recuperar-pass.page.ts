import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {
  constructor(
    private alertController:AlertController,
    private router:Router,
    public menuCtrl:MenuController,
  ) { }
  usuario={
    username:''
   }
  ngOnInit() {
  }
  onSubmit()
  {
    if (this.usuario.username=="nico"){
      this.presentAlertAA()
      this.router.navigate(['/inicio-pagina-web'])
    }
    else{
      
      this.presentAlert()
    }

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Correo no valido",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();

 
  }
  async presentAlertAA() {
    const alert = await this.alertController.create({
      header: 'Enviado',
      subHeader: 'Información',
      message: "Correo enviado, mira tu bandeja de entrada",
      buttons: ["Ir al inicio"],
      backdropDismiss:false,
      
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
