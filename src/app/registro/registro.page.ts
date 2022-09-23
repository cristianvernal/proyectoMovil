import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async registroCompleto() {
    const alert = await this.alertController.create({
      header: 'Registro Enviado',
      message: 'Se ha enviado un correo de confirmacion de registro exitosamente.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
