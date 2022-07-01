import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request,Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  homePage(@Res() res: Response) {

    return res.render('index',{title:"custom title"});
  }
}
