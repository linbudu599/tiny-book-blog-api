import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';
import {
  ResolvedResponse,
  RejectedResponse,
  ResponseUnion,
} from '../utils/response-wrapper.provider';
import { Article, ArticleCreateInput, ArticleUpdateInput } from '../types';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async create(createInput: ArticleCreateInput): ResponseUnion<Article> {
    try {
      const res = await this.prisma.article.create({
        data: createInput,
        include: {
          category: true,
          tag: true,
        },
      });

      return new ResolvedResponse(res);
    } catch (error) {
      return new RejectedResponse(null);
    }
  }

  async update(updateInput: ArticleUpdateInput): ResponseUnion<Article> {
    const { id } = updateInput;
    try {
      const record = await this.prisma.article.findUnique({
        where: { id },
        include: {
          category: true,
          tag: true,
        },
      });

      if (!record) {
        return new RejectedResponse(null);
      }

      const res = await this.prisma.article.update({
        where: { id },
        data: updateInput,
        include: {
          category: true,
          tag: true,
        },
      });

      return new ResolvedResponse(res);
    } catch (error) {
      return new RejectedResponse(null);
    }
  }

  async queryRecords(
    includeInvisible: boolean = false,
  ): ResponseUnion<Article[]> {
    try {
      const res = await this.prisma.article.findMany({
        where: includeInvisible
          ? {}
          : {
              visible: true,
            },
        include: {
          category: true,
          tag: true,
        },
      });

      return new ResolvedResponse(res);
    } catch (error) {
      return new RejectedResponse(null);
    }
  }

  async querySingleRecord(id: number): ResponseUnion<Article> {
    try {
      const res = await this.prisma.article.findUnique({
        where: { id },
        include: {
          category: true,
          tag: true,
        },
      });
      return new ResolvedResponse(res);
    } catch (error) {
      return new RejectedResponse(null);
    }
  }

  async toggleArticleVisible(id: number): ResponseUnion<Article> {
    try {
      const record = await this.prisma.article.findUnique({
        where: { id },
        include: {
          category: true,
          tag: true,
        },
      });
      if (!record) {
        return new RejectedResponse(null);
      }

      const res = await this.prisma.article.update({
        where: { id },
        data: {
          visible: !record.visible,
        },
        include: {
          category: true,
          tag: true,
        },
      });

      return new ResolvedResponse(res);
    } catch (error) {
      console.log('error: ', error);
      return new RejectedResponse(null);
    }
  }
}
