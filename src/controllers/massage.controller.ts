import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { MassageService } from '../services/massage.service';
import { Prisma, massage } from '@prisma/client';

@Controller('massage')
export class DocController {
  constructor(private readonly appService: MassageService) {}

  @Get('/all')
  getAll(): any {
    return this.appService.getAll();
  }

  @Post('/sendMassage')
  sendMassage(@Body() data: Prisma.massageCreateInput): any {
    return this.appService.sendMassage(data);
  }
}
