import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  // Res,
} from '@nestjs/common';
//import { Response } from 'express';

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
  @HttpCode(HttpStatus.OK)
  getOne(@Param('productId') productId: string) {
    return {
      message: `Product: ${productId}`,
    };
  }
  // EXPRESS
  //@Get(':productId')
  //@HttpCode(HttpStatus.OK)
  //getOne(@Res() response: Response, @Param('productId') productId: string) {
  //  response.status(200).send({
  //    message: `Product: ${productId}`,
  //  }),
  //}

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
