import { Room } from '@modules/hotel/models/Hotel';

export interface HotelReservation {
  uuid: string;
  checkInDate: string; // Fecha de entrada al alojamiento (formato: aaaa-mm-dd)
  checkOutDate: string; // Fecha de salida del alojamiento (formato: aaaa-mm-dd)
  numberOfGuests: number; // Cantidad de personas que se alojarán
  destinationCity: string; // Ciudad de destino
  selectedIdHotel: number;
  selectedRoom: Room; // Detalles de la habitación seleccionada
  guestDetails: GuestDetails; // Arreglo de detalles de los huéspedes
  isReservationConfirmed: boolean; // Bandera que indica si la reserva está confirmada
}

export interface GuestDetails {
  fullName: string; // Nombre completo del huésped
  dateOfBirth: string; // Fecha de nacimiento del huésped (formato: aaaa-mm-dd)
  gender: string; // Género del huésped
  documentType: string; // Tipo de documento del huésped
  documentNumber: string; // Número de documento del huésped
  email: string; // Dirección de correo electrónico del huésped
  contactNumber: string; // Número de teléfono de contacto del huésped
  emergencyContact: EmergencyContact; // Contacto de emergencia
}

export interface EmergencyContact {
  fullName: string; // Nombre completo del contacto de emergencia
  phoneNumber: string; // Teléfono completo del contacto de emergencia
}
