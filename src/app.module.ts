import { Module } from '@nestjs/common';
import { AppController } from './products/controllers/app/app.controller';
import { AppService } from './products/services/app/app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { BrandsService } from './brands/brands.service';
import { CategoriesService } from './categories/categories.service';
import { BrandsController } from './brands/brands.controller';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController, BrandsController],
  providers: [AppService, BrandsService, CategoriesService],
})
export class AppModule {}
