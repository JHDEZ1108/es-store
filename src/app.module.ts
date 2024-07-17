import { Module } from '@nestjs/common';
import { AppController } from './products/controllers/app/app.controller';
import { AppService } from './products/services/app/app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
