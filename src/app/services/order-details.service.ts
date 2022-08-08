import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
  {
    id: 1,
    foodName:"X-Burguer",
    foodDetails:"Pão, Hambuguer, Queijo",
    foodPrice:200,
    foodImg: "https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/5d41dff8-9c08-46e2-abae-5e55ac1e023c/5d41dff8-8e1c-4562-a6b6-5e55ac1e023c.png"

  },
  {
    id:2,
    foodName:"X-Salada",
    foodDetails:"Pão, Hambuguer, Queijo , salada",
    foodPrice:200,
    foodImg: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"

  },
  {
    id:3,
    foodName:"X-Egg",
    foodDetails:"Pão, Hambuguer, Queijo, Ovo",
    foodPrice:200,
    foodImg: "../../assets/img/imagem1.jpg"

  },
  {
    id:4,
    foodName:"X-Cala",
    foodDetails:"Pão, Hambuguer, Queijo, Calabresa",
    foodPrice:200,
    foodImg: "https://images.pexels.com/photos/2874981/pexels-photo-2874981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  },
  {
    id:5,
    foodName:"Batata Frita",
    foodDetails:"300g de Batata Frita",
    foodPrice:200,
    foodImg: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  },
  {
    id:6,
    foodName:"Agua",
    foodDetails:"Agua",
    foodPrice:200,
    foodImg: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  ]
getFood(){
  return this.foodDetails.slice();
}


}
