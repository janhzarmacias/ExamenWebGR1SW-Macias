import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasaController } from './casa/casa.controller';
import { CasaService } from './casa/casa.service';

@Module({
  imports: [],
  controllers: [AppController, CasaController],
  providers: [AppService, CasaService],
})
export class AppModule {}
