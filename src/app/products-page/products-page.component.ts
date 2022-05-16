import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {

  public enableForm: boolean;
  public IsUpdating: boolean;
  public IsDeleting: boolean;
  public productForm: FormGroup;
  public products$: Observable<Product[]>;


  constructor(private fb: FormBuilder, 
    private service: DataService) { 
      this.createForm();
  }

  refreshPage(): void{
    this.products$ = this.service.getProducts();
  }

  ngOnInit() {
    this.refreshPage();
    this.IsDeleting = false;
  }

  createForm(): void{
    this.productForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      quantity: ['', Validators.compose([
        Validators.min(1),
        Validators.required
      ])],
      price: ['', Validators.required],
    });

  }

  enableFormCreateProduct(){
    this.enableForm = true;
    this.IsUpdating = false;
    this.productForm.reset();
  }

  selectProduct(product: Product){
    if(!this.IsDeleting){
      this.enableForm = true;
      this.IsUpdating = true;
      this.productForm.patchValue(product);
    }
      this.IsDeleting = false;
      this.refreshPage();
  }

  saveProduct(): void{    
    if(this.IsUpdating){
      this.updateProduct();
    }
    else{
      this.createProduct();
    }
  }

  createProduct(){
    delete(this.productForm.value.id);
    this
    .service
    .createProduct(this.productForm.value)
    .subscribe(
      (data: Product) => {
        this.enableForm = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateProduct(){
    this
    .service
    .updateProduct(this.productForm.value)
    .subscribe(
      (data: Product) => {
        console.log(data.id);
        this.enableForm = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cancelProduct(){
    this.enableForm = false;
    this.IsUpdating = false;
  }

  deleteProduct(product: Product){
    this.IsDeleting = true;
    this
    .service
    .deleteProduct(product)
    .subscribe(
      (data: Product) => {
        this.refreshPage();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
