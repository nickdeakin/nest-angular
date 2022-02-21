import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:term')
  public sampleRoute(@Param('term') term: string): string {
    return `your term: ${term}`;
  }

  @Get('hello')
  public hello(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      something: 'stuff',
      more: 'more stuff',
    });
  }
}
