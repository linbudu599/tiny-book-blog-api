import { Controller, Get } from '@nestjs/common';
import { ArticleService } from '../services/article.service';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getHello() {}
}
