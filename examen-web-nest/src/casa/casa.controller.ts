import { Controller, Get, Query, Res, HttpStatus, Render, Param  } from '@nestjs/common';
import { CasaService } from './casa.service';
import { Response } from 'express';

@Controller('casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}

  // 🔹 Ruta original: JSON con filtro por idCasa
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

  // 🔹 Nueva ruta: renderizado en /casa/vista
  @Get('vista')
  @Render('casa')
  renderCasaTabla() {
    const casas = this.casaService.findAll();
    return { casas };
  }

  @Get('vista/:id')
  @Render('casa-detalle')
  getCasaDetalle(@Param('id') id: string) {
    const casa = this.casaService.findOneById(parseInt(id));
    return { casa }; // si es null, la vista mostrará mensaje
  }


}

