import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  usuario_activo: Usuario = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let datos=this.router.getCurrentNavigation()?.extras.state;

    if(datos!==undefined){
      let usr=datos["credenciales"]
      this.usuario_activo.email=usr.email
      this.usuario_activo.password=usr.password;
      
      let mensaje=datos["saludo"]
      console.log(mensaje)
    }
    
  }
  
}
