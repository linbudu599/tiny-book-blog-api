import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}
}
