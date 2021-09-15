import { Component, OnInit,  } from '@angular/core';
import { IPayPalConfig ,ICreateOrderRequest} from 'ngx-paypal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../service/alert.service';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { UserserviceService } from '../service/userservice.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart';
import { CartLine } from '../cart-line';
import { AddressService } from '../service/address.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup = this.formBuilder.group({
    user : this.formBuilder.group({
    id:[''],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    contact_number: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role:['']
  }), 
    id:[],
    address_1:['',Validators.required],
    address_2:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    country:['',Validators.required],
    postal_code:['',Validators.required],
    })

  count: number = 0;
  submitted = false;
  showSuccess: boolean = false;
  cartitems: CartLine[] = [];
  grandTotal: number = 0
  id: number = 0
  cart: Cart = new Cart
  public payPalConfig?:IPayPalConfig
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private alertService:AlertService,
    private route:ActivatedRoute,
    private cartservice:CartService,
    private addressservice:AddressService
  ) { }
  get f() { return this.checkoutForm.controls;
  }
  
  ngOnInit(): void {
    this.initConfig();
    
    this.id=this.route.snapshot.params['id'];
    this.cartservice.getbyid(this.id).subscribe(x=>this.cart=x);
    this.checkoutForm.patchValue(this.cart.user)
    this.cartitems=this.cart.cartline
    this.grandTotal=this.cart.total
    this.count=this.cart.cartline.length
  }


  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'AS6bGLhpvorPCfETXXz5NMLbw4o_BCrljFxrdy2EwqEcuE_LLzdYmZp3mWGk0ZI8CCH0z1ZuEEyafj7r',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: ''
              }
            }
          },
          items: [
            {
              name: '',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'INR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then( (details:any)=> {
      console.log
        ('onApprove - you can get full order details inside onApprove: ', details)
        this.onSubmit()
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      this.alertService.error("transcation is cancellled")
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }
  onSubmit(){
    this.submitted = true;
    this.alertService.clear();
    if (this.checkoutForm.invalid) {
      return;
  }
    this.addressservice.register(this.checkoutForm.value)

    this.alertService.error(this.cart.user.firstname +`   Thank you ur oder is cofirmed `)
  }
}

