import { Module } from '@nestjs/common';
import PrismaModule from './data/prisma.module';
import { ArticleController } from './controllers/article.controller';
import { TagController } from './controllers/tag.controller';
import { CategoryController } from './controllers/category.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ArticleController, TagController, CategoryController],
  providers: [],
})
export class AppModule {}
