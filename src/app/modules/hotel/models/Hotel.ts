export interface Hotel {
  id: number
  status: boolean
  name: string
  description: string
  images: string[]
  rooms: Room[]
}

export interface Room {
  id: number
  name: string
  price: number
  type: "Standard" | "Deluxe"
  tax: number
  status: boolean
  reserved: boolean
}

export interface HotelView extends Hotel {
  totalRooms: number;
  totalAvailableRooms: number;
  totalReservedRooms: number;
}
