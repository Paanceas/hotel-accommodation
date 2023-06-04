import Swal, { SweetAlertIcon } from 'sweetalert2';
import { sha256 } from 'js-sha256';

import * as hotels from '../data/hoteles.json';
import * as reservations from '../data/reservations.json';

export class Util {
  delObj(nom: string): void {
    sessionStorage.removeItem(btoa(nom));
  }
  setObj(nom: string, info: any): void {
    sessionStorage.setItem(btoa(nom), btoa(info));
  }

  getObj(nom: string, trasnsformJson?: boolean): any {
    try {
      let obj: any = sessionStorage.getItem(btoa(nom))
        ? sessionStorage.getItem(btoa(nom))
        : null;
      if (obj) {
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

  validObject(object: any) {
    let val = true;
    Object.keys(object).forEach(el => {
      if (!object[el]) {
        Swal.fire('Advertencia', 'Falta el campo ' + el, 'warning');
        val = false;
      }
    });
    return val;
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  encoding(value: string): string {
    return sha256(value);
  }

  setHotelList() {
    if (!this.getInfoLocal('hotelList')) {
      this.saveInfoLocal('hotelList', hotels.default);
    }
    return this.getInfoLocal('hotelList');
  }

  setReservationsList() {
    if (!this.getInfoLocal('reservationsList')) {
      this.saveInfoLocal('reservationsList', reservations.default);
    }
    return this.getInfoLocal('reservationsList');
  }

  delInfoLocal(nom: string): void {
    localStorage.removeItem(nom);
  }

  getInfoLocal(name: string) {
    const hotelsString = localStorage.getItem(name);
    if (hotelsString) {
      return JSON.parse(hotelsString);
    }
    return null;
  }

  saveInfoLocal(name: string, data: any | []) {
    this.delInfoLocal(name);
    const hotelsString = JSON.stringify(data);
    localStorage.setItem(name, hotelsString);
  }

  msnShow(msn: string, type?: SweetAlertIcon) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: type || 'success',
      title: `${msn}`,
    });
  }
}
