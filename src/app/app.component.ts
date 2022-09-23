import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Iniciar sesión', url: '/login', icon: 'log-in' },
    { title: 'Registrate', url: '/registro', icon: 'person-add' },

    
];
 
  constructor() {}
}
