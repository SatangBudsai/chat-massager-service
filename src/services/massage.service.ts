import { Injectable } from '@nestjs/common';
import { Prisma, massage } from '@prisma/client';
import { prisma } from '../config/prisma';
import { TestDto } from 'src/dto/testDto';

@Injectable()
export class MassageService {
  constructor(private prisma: prisma) {}

  async getAll(): Promise<massage[]> {
    return this.prisma.massage.findMany({});
  }

  async sendMassage(data: TestDto) {
    console.log(data);
    return this.prisma.massage.findMany({});
  }
}
