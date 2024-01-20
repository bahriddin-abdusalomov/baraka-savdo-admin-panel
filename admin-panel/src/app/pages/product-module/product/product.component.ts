import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductService } from '../../../services/products/product.service';
import { promises } from 'dns';
import { Observable } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  unitPrice: number;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'image',
    'unitPrice',
    'yangilash',
    'ochirish',
  ];
  dataSource: MatTableDataSource<Product>;
  products: Product[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ProductService) {
    this.getAllProducts()
  }



  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllProducts() {
    this.service.getAllProduct()
      .subscribe(
        (respone) => {
          this.dataSource = new MatTableDataSource(respone);
        });
  }

  deleteProduct(row: any) {
    this.service.deleteProduct(row.id).subscribe({
      next: (res) => {
        console.log(row);
        console.log('this is result');
        console.log(res);
        alert('Product delete Sucsessfully');
        this.getAllProducts();
      },

      error: () => {
        console.log(row);
        alert('Something want wrong while delete product');
      },
    });
  }
}
