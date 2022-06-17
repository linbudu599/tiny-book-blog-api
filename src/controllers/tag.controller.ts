import { Controller, Get } from '@nestjs/common';
import { TagService } from '../services/tag.service';

@Controller()
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  getHello() {}
}
