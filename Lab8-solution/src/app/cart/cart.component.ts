import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;  
  checkoutForm;
  /**
   * constaructor of cartComponent
   * @param cartService 
   * @param formBuilder 
   */
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  /**
   * onSubmit() method to process the form 
   * clearCart() method to empty the cart items and reset the form after its submission. 
   * @param customerData 
   */
  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
