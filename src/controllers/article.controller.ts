import {
  Controller,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { Article, ArticleCreateInput, ArticleUpdateInput } from '../types';
import { ArticleService } from '../services/article.service';
import { ResponseUnion } from '../utils/response-wrapper.provider';
import { MaybeArray } from '../types/index';

@Controller('/article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/')
  async query(): ResponseUnion<Article[]> {
    return await this.articleService.queryRecords();
  }

  @Get('/:id')
  async queryById(
    @Param('id', ParseIntPipe) id: number,
  ): ResponseUnion<MaybeArray<Article>> {
    return await this.articleService.querySingleRecord(id);
  }

  @Post('/create')
  async create(
    @Body() createInput: ArticleCreateInput,
  ): ResponseUnion<Article> {
    return await this.articleService.create(createInput);
  }

  @Post('/update')
  async update(
    @Body() updateInput: ArticleUpdateInput,
  ): ResponseUnion<Article> {
    return await this.articleService.update(updateInput);
  }

  @Post('/visible/:id')
  async toggleVisible(
    @Param('id', ParseIntPipe) id: number,
  ): ResponseUnion<Article> {
    return await this.articleService.toggleArticleVisible(id);
  }
}
