import { Module } from '@nestjs/common';

import { CustomerController } from '../users/controllers/customers/customers.controller';
import { CustomersService } from '../users/services/customers/customers.service';
import { UsersController } from '../users/controllers/users/users.controller';
import { UsersService } from '../users/services/users/users.service';

@Module({
  imports: [],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
