import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async queryArticles() {
    const res = await this.prisma.article.findMany();
    return res;
  }
}
