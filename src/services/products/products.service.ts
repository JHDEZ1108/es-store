import { Injectable } from '@nestjs/common';
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

  findOne(productId: number): Product {
    return this.products.find((item) => item.productId === productId);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(productId: number, payload: any) {
    const productFound = this.products.findIndex(
      (item) => item.productId === productId,
    );
    let message = '';
    if (productFound > 0) {
      this.products[productFound] = {
        productId: productId,
        ...payload,
      };
      message = 'Product updated';
    } else {
      message = 'Product not found';
    }
    return message;
  }

  delete(productId: number) {
    const productFound = this.products.findIndex(
      (item) => item.productId === productId,
    );
    let message = '';
    if (productFound > 0) {
      this.products.splice(productFound, 1);
      message = 'product deleted';
    } else {
      message = 'product not found';
    }
    return message;
  }
}
