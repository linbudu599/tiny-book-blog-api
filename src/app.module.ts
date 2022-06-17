import { Module } from '@nestjs/common';
import PrismaModule from './data/prisma.module';
import { ArticleController } from './controllers/article.controller';
import { TagController } from './controllers/tag.controller';
import { CategoryController } from './controllers/category.controller';

import { SeedController } from './controllers/seed.controller';

import { ArticleService } from './services/article.service';
import { TagService } from './services/tag.service';
import { CategoryService } from './services/catagory.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    ArticleController,
    TagController,
    CategoryController,
    SeedController,
  ],
  providers: [ArticleService, CategoryService, TagService],
})
export class AppModule {}
