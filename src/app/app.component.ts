import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ControlConfig } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  public appPages = [
    
    { title: 'Iniciar sesión', url: '/login', icon: 'log-in' },
    { title: 'Registrate', url: '/registro', icon: 'person-add' },
    


    
];


}
