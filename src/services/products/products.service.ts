import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dtos';

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

  // Retorna todos los productos
  findAll(): Product[] {
    return this.products;
  }

  // Encuentra un producto por su ID
  findOne(productId: number): Product {
    const product = this.products.find((item) => item.productId === productId);
    if (!product) {
      throw new NotFoundException(`Product #${productId} not found`);
    }
    return product;
  }

  // Crea un nuevo producto
  create(payload: CreateProductDto): Product {
    this.counterId += 1;
    const newProduct: Product = {
      productId: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  // Actualiza un producto existente
  update(productId: number, payload: UpdateProductDto): Product {
    const product = this.findOne(productId);
    const index = this.products.findIndex(
      (item) => item.productId === productId,
    );
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  // Elimina un producto por su ID
  remove(productId: number): boolean {
    const index = this.products.findIndex(
      (item) => item.productId === productId,
    );
    if (index === -1) {
      throw new NotFoundException(`Product #${productId} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
