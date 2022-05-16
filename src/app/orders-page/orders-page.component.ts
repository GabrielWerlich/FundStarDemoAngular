import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html'
})
export class OrdersPageComponent implements OnInit {

  public productsList: any;
  public orderForm: FormGroup;
  quantityProductSelected: number;


  constructor(private fb: FormBuilder, 
    private service: DataService) { 
      this.createForm();
  }

  ngOnInit() {
    this.getProductsList();
  }

getProductsList(){
  this
  .service
  .getProducts()
  .subscribe(
    (data:any)=> {
      this.productsList = data
    },
    (err)=>{
      console.log(err)
    })
}

createForm(): void{
  this.orderForm = this.fb.group({
    custumerName: ['', Validators.required],
    custumerDocument: ['', Validators.required],
    orderQuantity: ['', Validators.required],
    orderDate: ['', Validators.required],
    productsList: ['', Validators.required]
  });
}  
  
  getQuantity(event: Event): void{
    const idProduct = (event.target as HTMLSelectElement).value
    this.quantityProductSelected = this.productsList.find(
      (item: Product)=> item.id == idProduct
    ).quantity
    
    this.orderForm.get('orderQuantity').patchValue(null)
    this.orderForm.controls['orderQuantity'].setValidators(Validators.compose([Validators.min(1),Validators.max(this.quantityProductSelected), Validators.required]))
  }

  saveOrder(){
    this
    .service
    .createOrder(this.orderForm.value)
    .subscribe(
      (data: Order) => { 
        this.orderForm.reset();
        this.getProductsList();
        this.quantityProductSelected = 0;
        alert("Order created successfully!")
        
      },
      (err) => {
        console.log(err);
      }
    );
  }

  clearForm(): void{
    this.orderForm.reset();
    this.quantityProductSelected = null;
  }


}
