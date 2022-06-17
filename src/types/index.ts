export type { Article, Tag, Category } from '@prisma/client';

import type { Prisma } from '@prisma/client';

export type ArticleCreateInput = Prisma.ArticleCreateInput;
export type ArticleUpdateInput = Prisma.ArticleUpdateInput;

export type TagCreateInput = Prisma.TagCreateInput;
export type TagUpdateInput = Prisma.TagUpdateInput;

export type CategoryCreateInput = Prisma.CategoryCreateInput;
export type CategoryUpdateInput = Prisma.CategoryUpdateInput;
