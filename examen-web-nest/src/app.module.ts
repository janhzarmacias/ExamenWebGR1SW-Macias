import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CasaController } from './casa/casa.controller';
import { CasaService } from './casa/casa.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './common/middleware/auth.middleware';

@Module({
  imports: [],
  controllers: [AppController, CasaController],
  providers: [AppService, CasaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'casa/vista', method: RequestMethod.GET },
        { path: 'casa/vista/:id', method: RequestMethod.GET }
      );
  }
}
