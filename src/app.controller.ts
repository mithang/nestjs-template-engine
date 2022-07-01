import { Controller, Get, Res, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request,Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  homePage(@Res() res: Response) {
    return res.render('index',{title:"Course Online"});
  }

  @Get('/auth/register')
  registerUser(@Res() res: Response) {
    return res.render('register',{title:"Register"});
  }

  @Post('/auth/register')
  postRegisterUser(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }
}
