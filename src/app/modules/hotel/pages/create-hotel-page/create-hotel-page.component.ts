import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel, Room } from '@modules/hotel/models/Hotel';
import { Util } from 'src/app/common/util';

@Component({
  selector: 'app-create-hotel-page',
  templateUrl: './create-hotel-page.component.html',
  styleUrls: ['./create-hotel-page.component.css'],
})
export class CreateHotelPageComponent implements OnInit {
  private util: Util = new Util();
  private idGlobalHotel = 0;
  public hotelForm: FormGroup = new FormGroup({});
  public rooms: Room[] = [];
  public action: 'Actualización' | 'Creación' = 'Creación';

  constructor(private formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit() {
    const idHotel = this.util.getObj('edit', true);
    if (idHotel) {
      this.setHotelForm(idHotel);
      this.action = 'Actualización';
    } else {
      this.createHotelForm();
      this.action = 'Creación';
    }
    this.util.delObj('edit');
  }

  createHotelForm() {
    this.hotelForm = this.formBuilder.group({
      status: [true, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  setHotelForm(id: number) {
    this.idGlobalHotel = id;
    const dataHotel: Hotel | null = this.getHotelById(id);
    if (dataHotel) {
      this.hotelForm = this.formBuilder.group({
        status: [dataHotel.status, Validators.required],
        name: [dataHotel.name, Validators.required],
        description: [dataHotel.description, Validators.required],
      });
      this.rooms = dataHotel.rooms;
    } else {
      this.util.msnShow(`Hotel no encontrado`, 'warning');
      this._router.navigate(['/dashboard/hoteles']);
    }
  }

  addRoom() {
    this.rooms = [
      ...this.rooms,
      {
        id: this.rooms[this.rooms.length - 1]?.id + 1 || this.rooms.length + 1,
        name: '',
        price: 0,
        type: 'Standard',
        tax: 0,
        status: true,
        reserved: false,
      },
    ];
  }

  removeRoom(key: number) {
    this.rooms.splice(key, 1);
  }

  submitForm() {
    if (this.hotelForm.valid) {
      if (this.validateRooms(this.rooms)) {
        const hotels = this.util.getInfoLocal('hotelList');
        const { name } = this.hotelForm.value;
        if (this.action === 'Creación') {
          this.createForm(hotels, hotels.length);
        } else {
          this.editForm(hotels, {
            ...this.hotelForm.value,
            rooms: this.rooms,
            id: this.idGlobalHotel,
          });
        }

        this.util.msnShow(
          `Se realizo la ${this.action} correctamente del hotel ${name}`
        );
        this._router.navigate(['/dashboard/hoteles']);
      } else {
        this.util.msnShow(
          `Valida la información suministrada de las habitaciones`,
          'warning'
        );
      }
    } else {
      this.util.msnShow(
        `Valida la información suministrada del hotel`,
        'warning'
      );
    }
  }

  createForm(hotels: Hotel[], size: number) {
    const hotelData: Hotel = {
      id: size + 1,
      ...this.hotelForm.value,
      rooms: this.rooms,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/278572902.jpg?k=0ac5f941b6287e0a9341d0ca8ffd15749ba34b5d7c60ee2af7f93cd520aff27f&o=&hp=1',
        'https://img.freepik.com/vector-gratis/edificio-hotel-flat_23-2148162501.jpg?w=2000',
      ],
    };
    this.util.saveInfoLocal('hotelList', [...hotels, hotelData]);
  }

  editForm(hotels: Hotel[], newHotel: Hotel) {
    // Encontrar el hotel en el arreglo
    const hotelIndex = hotels.findIndex(hotel => hotel.id === newHotel.id);
    if (hotelIndex !== -1) {
      hotels[hotelIndex] = {
        ...hotels[hotelIndex],
        name: newHotel.name,
        description: newHotel.description,
        status: newHotel.status,
        rooms: newHotel.rooms,
      };
    } else {
      this.util.msnShow(
        `No se puede actualizar el hotel ${newHotel.name}`,
        'warning'
      );
    }
    this.util.saveInfoLocal('hotelList', [...hotels]);
  }

  validateRooms(rooms: Room[]): boolean {
    for (const room of rooms) {
      if (
        room.id === null ||
        room.name === null ||
        room.price === null ||
        room.type === null ||
        room.tax === null ||
        room.status === null ||
        room.id === 0 ||
        room.price === 0 ||
        room.tax === 0 ||
        room.name.trim() === '' ||
        room.type.trim() === ''
      ) {
        return false;
      }
    }
    return true;
  }

  getHotelById(id: number): Hotel | null {
    const hotelList = this.util.getInfoLocal('hotelList');
    const hotel = hotelList.find((h: Hotel) => h.id === id);
    return hotel ? hotel : null;
  }
}
