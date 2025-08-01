import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get('login')
  getLoginForm(@Res() res: Response) {
    res.render('login');
  }

  @Post('login')
  login(
    @Body() body: { username: string; password: string },
    @Res() res: Response,
  ) {
    const { username, password } = body;

    if (username === 'admin' && password === '1234') {
      res.cookie('auth', 'admin');
      res.redirect('/casa/vista');
    } else {
      res.render('login', { error: 'Credenciales inválidas' });
    }
  }

  @Get('logout')
  logout(@Res() res: Response) {
    res.clearCookie('auth');
    res.redirect('/login');
  }
}
