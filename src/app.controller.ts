import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHello as GetHelloQuery } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(@Query() query: GetHelloQuery): string {
    return this.appService.getHello(query.info.name);
  }
}
