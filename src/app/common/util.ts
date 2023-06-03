import Swal from 'sweetalert2';
import { sha256 } from 'js-sha256';

export class Util {

  delObj(nom: string): void {
    sessionStorage.removeItem(btoa(nom))
  }
  setObj(nom: string, info: any): void {
    sessionStorage.setItem(btoa(nom), btoa(info));
  }

  getObj(nom: string, trasnsformJson?: boolean): any {
    try {
      let obj:any = sessionStorage.getItem(btoa(nom)) ? sessionStorage.getItem(btoa(nom)) : null;
      if(obj){
        obj = atob(obj);
        if (trasnsformJson) {
          obj = JSON.parse(obj);
        }
      }
      return obj;
    } catch (error) {
      return null;
    }
  }

  validObject(object:any){
    let val:boolean = true;
    Object.keys(object).forEach(el => {
       if(!object[el]){
        Swal.fire('Advertencia', "Falta el campo "+el, 'warning');
        val = false;
       }
    });
    return val;
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  encoding(value:string):string{
    return sha256(value);
  }

}
