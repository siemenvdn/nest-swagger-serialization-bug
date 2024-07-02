import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHello as GetHello } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(@Query() query: GetHello): string {
    return this.appService.getHello(query.info.name);
  }

  @Post('/hello')
  createHello(@Body() body: GetHello): string {
    return this.appService.getHello(body.info.name);
  }
}
