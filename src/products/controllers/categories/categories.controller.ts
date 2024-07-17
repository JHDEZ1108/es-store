import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoriesId/:productId')
  getCategory(
    @Param('categoriesId') categoriesId: string,
    @Param('productId') productId: string,
  ) {
    return `Product: ${productId} and Category: ${categoriesId}`;
  }
}
