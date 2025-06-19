import { Injectable } from '@nestjs/common';

@Injectable()
export class CasaService {
  private casas = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];

  findAll() {
    return this.casas;
  }

  findOneById(id: number) {
    return this.casas.find(c => c.id === id);
  }
}
