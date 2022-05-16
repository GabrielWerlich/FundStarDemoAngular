import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    generateData() {
        return this.http.get<any[]>(`http://localhost:5000/v1/`);
    }  

    getProducts() {
        return this.http.get<Product[]>(`http://localhost:5000/v1/products`);
    }

    createProduct(data) {
        return this.http.post(`http://localhost:5000/v1/products`, data);
    }

    deleteProduct(data){
        return this.http.delete(`http://localhost:5000/v1/products/`+data.id);
    }

    updateProduct(data) {
        return this.http.put(`http://localhost:5000/v1/products/`+data.id, (data));
    }    

    createOrder(data) {
        return this.http.post(`http://localhost:5000/v1/order`, data);
    }       

    authenticate(data) {
        return this.http.post(`http://localhost:5000/v1/users/login`, data);
    }
    signUp(data) {
        return this.http.post(`http://localhost:5000/v1/users/signup`, data);
    }


}

