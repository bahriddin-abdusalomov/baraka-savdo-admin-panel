import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/products/product';
import { map } from 'rxjs';
// import { ProductDto } from '../../dtos/products/productDto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(product: any) {
    return this.http.post<any>(
      'hhttps://localhost:7030/api/Products/Create',
      product
    );
  }

  getAllProduct() {
    return this.http
      .get<any>('https://localhost:7030/api/Products/GetAll?page=1')
      .pipe(
        map((products) =>
          products.sort((a: Product, b: Product) => a.id - b.id)
        )
      );
  }

  updateProduct(id: number, product: any) {
    return this.http.put<Product>(
      'https://localhost:7030/api/Products/Update?id=' + id,
      product
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(
      'https://localhost:7030/api/Products/Delete?categoryId=' + id
    );
  }
}
