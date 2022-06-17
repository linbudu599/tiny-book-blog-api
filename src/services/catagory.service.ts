import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
}
