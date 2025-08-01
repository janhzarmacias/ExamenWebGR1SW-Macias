import { Injectable } from '@nestjs/common';

@Injectable()
export class CasaService {
  private casas = [
    {
      id: 1,
      nombre: 'Casa 1',
      precio: 30000,
      propietario: 'Javier',
      imagen: '/img/casa1.png',
    },
    {
      id: 2,
      nombre: 'Casa 2',
      precio: 45000,
      propietario: 'Pedro',
      imagen: '/img/casa2.png',
    },
  ];

  findAll() {
    return this.casas;
  }

  findOneById(id: number) {
    return this.casas.find((casa) => casa.id === id);
  }
}
