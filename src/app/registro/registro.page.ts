import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { FormGroup, FormBuilder,Validators, AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public datos: FormGroup;
  
  constructor(private FormBuilder: FormBuilder, private alertController: AlertController ) { }
  
  

  ngOnInit(): void{
      this.datos = this.FormBuilder.group({
        nombre: ['', [Validators.required, Validators.minLength(4)]],
        apellido: ['', [Validators.required, Validators.minLength(4)]],
        celular: ['', [Validators.required, Validators.min(9)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
        repeat: ['', [Validators.required]]

      });
  }

  send(): any{
    console.log(this.datos.value);
  }

  
  async registroCompleto() {
    const alert = await this.alertController.create({
      header: 'Registro Enviado',
      message: 'Se ha enviado un correo de confirmacion exitosamente.',
      buttons: ['OK'],
    });
    
    await alert.present();
  }
  
}