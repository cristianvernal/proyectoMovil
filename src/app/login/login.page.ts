import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { DbService } from '../services/db.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup;

  modeloCorreo: string = '';
  modeloPassword: string = '';

  constructor(public loadingController: LoadingController, private FormBuilder: FormBuilder, private dbServicio: DbService) {}
ngOnInit(): void{
    this.form = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
}

send(): any{
  console.log(this.form.value);
}


validarCredenciales(){
  console.log(this.modeloCorreo);
  console.log(this.modeloPassword);
}
async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 1000,
    });
    await loading.present();

}




}

