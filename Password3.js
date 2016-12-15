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
        let valid = true;
        for(var i=0; i<this.privateKey.length; i++){
          if(i! == 4 && i! == 9){
            if(this.privateKey[4] !== "-" && this.privateKey[9] !== "-"){

            }
          }
        }
          return false;
    }
      else if(Number.isNaN(this.privateKey[i]) == true){
          return false;
      }
      else{
          return true;
      }
  }

    static makePrivateKey(){ //finish
      let key = "";
      const limit = 14;

        for(let i=0; i<limit; i++){
          if(i==4 || i==9){
            key = key +"-"

        }
        else if(){
          Math.random

        }
      }
    }
}
