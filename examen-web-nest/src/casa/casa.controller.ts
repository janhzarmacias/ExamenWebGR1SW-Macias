import { Controller, Get, Query, Res, HttpStatus } from '@nestjs/common';
import { CasaService } from './casa.service';
import { Response } from 'express';

@Controller('casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}

  @Get()
  getCasa(@Query('idCasa') idCasa: string, @Res() res: Response) {
    if (!idCasa) {
      return res.status(HttpStatus.OK).json(this.casaService.findAll());
    }

    const id = parseInt(idCasa);
    const casa = this.casaService.findOneById(id);

    if (casa) {
      return res.status(HttpStatus.OK).json([casa]);
    } else {
      return res.status(HttpStatus.NOT_FOUND).send('No se encuentra');
    }
  }
}
