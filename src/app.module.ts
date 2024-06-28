import { massage } from '@prisma/client';
import { Module } from '@nestjs/common';
import { DocController } from './controllers/massage.controller';
import { MassageService } from './services/massage.service';
import { prisma } from './config/prisma';
@Module({
  imports: [],
  controllers: [DocController],
  providers: [prisma, MassageService],
})
export class AppModule {}
