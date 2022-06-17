import { Controller, Get } from '@nestjs/common';
import { ArticleService } from '../services/article.service';

@Controller('/seed')
export class SeedController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/create')
  async seed() {
    await this.articleService.create({
      title: 'Article 1',
      content: 'Content 1',
    });

    await this.articleService.create({
      title: 'Article 2',
      content: 'Content 2',
    });

    await this.articleService.create({
      title: 'Article 3',
      content: 'Content 3',
    });

    return await this.articleService.query();
  }
}
