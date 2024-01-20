import { Component } from '@angular/core';
import { Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/products/product.service';
import { Product } from '../../models/products/product';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  conditionProduct: string[] = ["New", "Second Hand", "B/Y"]

  productForm!: FormGroup

  actionBtn: string = "Save"

  constructor(private formBuilder: FormBuilder, 
    private api: ProductService, 
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: Product
    ) { }

    ngOnInit(): void {    
      this.productForm = this.formBuilder.group({
        Category: ["", Validators.required],
        Name: ['', Validators.required],
        Description: ['', Validators.required],
        Price: ['', Validators.required],
        Count: ['', Validators.required],
      })
  
      if(this.editData){
        this.actionBtn = "update";
        this.productForm.controls['Category'].setValue(this.editData.category);
        this.productForm.controls['Name'].setValue(this.editData.name);
        this.productForm.controls['Description'].setValue(this.editData.description);
        this.productForm.controls['Price'].setValue(this.editData.unit_price);
        this.productForm.controls['Count'].setValue(this.editData.count);
      }
  
    }


    addProduct(){
      if(!this.editData){
        if(this.productForm.valid){
          this.api.addProduct(this.productForm.getRawValue())
          .subscribe({
            next: () => {
              alert("Product addddes sucsessfully")
              // this.productForm.reset()
              // this.dialogRef.close("save")
            },
            error: () => {
              alert("Soomething went wrong while adding")
            }
          })
        }
      }
      else {
        this.updateProduct()
      }
    }

    updateProduct() {
      this.api.updateProduct(this.productForm.getRawValue(), this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Product updated sucsessfully")
          this.productForm.reset()
          this.dialogRef.close('update')
        },
  
        error: () => {
          alert("Something went wrong while updating")
        }
      })
    }

}