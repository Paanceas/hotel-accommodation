import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from 'src/app/common/util';
import { User } from 'src/app/models/User';
import { GlobalsService } from 'src/app/services/global.service';
import { SpinnerService } from 'src/app/services/spinner.service';

import Swal from 'sweetalert2';
import * as userSession from '../../../../data/user.json';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private util: Util = new Util();

  public formLogin: FormGroup = new FormGroup({});


  public user: User;

  constructor(
    private _spinner: SpinnerService,
    private _global: GlobalsService,
    private _router:Router){
      this.user = {
        password: '',
        user: ''
      };
  }

  ngOnInit(): void {
    window.sessionStorage.clear();
    this._global.updateSession(false);
    this.resetUser();
  }

  private resetUser() {
    this.user = {
      password: '',
      user: ''
    };
    this.formLogin = new FormGroup(
      {
        user: new FormControl('',[
          Validators.required
        ]),
        password: new FormControl('', [
          Validators.required
        ])
      }
    );
  }

  loadSession() {
    this.user = this.formLogin.value;
    if(this.util.validObject(this.user)){
      this._spinner.loader(true);
      setTimeout(() => {
        const response:any = userSession.default;
        if(
          this.user.user === response.usuario &&
          this.util.encoding(this.user.password) === response.password
        ){
          this.util.setObj("token", JSON.stringify('828fbcc651f82f21e0b6fc0c23a4f5c4'));
          this.util.setObj("usuario", JSON.stringify(response));
          this._global.updateSession(true);
          this._router.navigate(['/dashboard']);
        }else {
          Swal.fire('Usuario no encontrado', `Revisa las credenciales para ${this.user.user}`, 'warning');
          this.resetUser();
        }
        this._spinner.loader(false);
      }, 1000);
    }
  }

}
