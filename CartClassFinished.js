
class Cart{
  constructor(i,q){
  this.itemList = i;
  this.itemQuantity = q;
  }

  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }

  totalCart(){
    var total = 0;

    for(let t=0; t<this.itemList.length; t++);
      total += (this.itemList[t].price*this.itemQuantity[t]);
  }
    return total;

  subCart(days){
    var subCart = new Cart([],[]);

    for(let t=0; t<list.itemList.length; t++){
      if(this.itemList[t].shipping == days){
        subCart.itemList.push(this.itemList[t]);
        subCart.itemQuantity.push(this.itemQuantity[t]);
      }
    }
      return subCart;
  }
}
