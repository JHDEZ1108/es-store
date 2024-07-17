import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[] = [
    {
      productId: 1,
      name: 'Product 1',
      description: 'Description product 1',
      price: 122,
      stock: 10,
      image: 'url image',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(productId: number) {
    const product = this.products.find((item) => item.productId === productId);
    if (!product) {
      throw new NotFoundException(`Product #${productId} not found!`);
    }
    return product;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      productId: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(productId: number, payload: any) {
    const product = this.findOne(productId);
    if (product) {
      const index = this.products.findIndex(
        (item) => item.productId === productId,
      );
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  remove(productId: number) {
    const index = this.products.findIndex(
      (item) => item.productId === productId,
    );
    if (index === -1) {
      throw new NotFoundException(`Product #${productId} Not Found!`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
