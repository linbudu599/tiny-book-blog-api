import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '../services/catagory.service';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getHello() {}
}
