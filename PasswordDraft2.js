class Password{

  constructor(pb,pv){
    this.publicKey = pb; //any kind of string
    this.privateKey = pv; //secret string of numbers "xxxx-xxxx-xxxx"
  }

  validPublicKey(){
    if(this.publicKey.length >= 8 && this.publicKey.length <= 25){
      return true;
    }
    else{
      return false;
    }

    validPrivateKey(){
      if(this.privateKey.indexof("-") == 4 && this.privateKey.indexof("-") == 9){
        for(var i=0; i<this.privateKey.length; i++){
          //learn number function!!
        }


          return true;
    }
      else{
          return false;
      }
  }

    static makePrivateKey(){ //finish
      let key = "";
      const limit = 14;

        for(let l=0; l<limit; l++){




      }
    }




}
