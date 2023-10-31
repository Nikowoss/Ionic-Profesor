import { Usuario } from './../interfaces/usuario';
import { Component,OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario:Usuario={
    email:'',
    password:''
  }
 
   constructor(
     private router:Router,
     private alertController:AlertController,
     public menuCtrl:MenuController,
     private storage: Storage
     ) { }
 
   ngOnInit() {
   }
 
   onSubmit()
   {
     if (this.usuario.email=="nico" && this.usuario.password=="nico"){
       
       this.activar(1);
      //console.log("Listo!!!!");
      let ext:NavigationExtras={
        state:{
          credenciales:this.usuario,
          saludo:"Hola mundo!!!",
          
        }
      }

      this.router.navigate(['/cursos'],ext)
    }
    else{
      this.activar(0);
      this.presentAlert()
    }
  }


  async activar(valor:Number)
  {
    await this.storage.set("sesion",valor);
  }

 
 
   async presentAlert() {
     const alert = await this.alertController.create({
       header: 'Alerta',
       subHeader: 'Información',
       message: "Correo y/o contraseña incorrectos",
       buttons: ['OK'],
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