import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getMany(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return `Products: Limit => ${limit}, Offset => ${offset}, Brand => ${brand}`;
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return `Product: ${productId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion crear',
      payload,
    };
  }

  @Put(':/productId')
  update(@Param('productId') productId: number, @Body() payload: any) {
    return {
      message: 'Update Method',
      productId,
      payload,
    };
  }

  @Delete(':/productId')
  delete(@Param('productId') productId: number) {
    return {
      message: 'Delete Method',
      productId,
    };
  }
}
