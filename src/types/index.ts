export type { Article, Tag, Category } from '@prisma/client';

import type { Prisma } from '@prisma/client';

export type ArticleCreateInput = Prisma.ArticleCreateInput;
export type ArticleUpdateInput = Prisma.ArticleUpdateInput &
  Prisma.ArticleWhereUniqueInput;

export type TagCreateInput = Prisma.TagCreateInput;
export type TagUpdateInput = Prisma.TagUpdateInput & Prisma.TagWhereUniqueInput;

export type CategoryCreateInput = Prisma.CategoryCreateInput;
export type CategoryUpdateInput = Prisma.CategoryUpdateInput &
  Prisma.CategoryWhereUniqueInput;

export type MaybeArray<T> = T | T[];

export type MaybeNull<T> = T | null;
