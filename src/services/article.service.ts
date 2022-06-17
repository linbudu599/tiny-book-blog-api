import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';
import { Article, ArticleCreateInput } from '../types';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async create(createInput: ArticleCreateInput): Promise<Article> {
    const res = await this.prisma.article.create({
      data: createInput,
    });

    return res;
  }

  async query(): Promise<Article[]> {
    const res = await this.prisma.article.findMany();
    return res;
  }
}
