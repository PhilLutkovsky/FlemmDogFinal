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
      if(this.privateKey[4] !== "-" || this.privateKey[9] !== "-"){
        return false;
      }

      else if(Nummber.isNaN(Number(this.privateKey.substring(0,4)))){
        return false;
      }

      else if(Number.isNaN(Number(this.privateKey.substring(5,9)))){
        return false;
      }

      else if(Number.isNaN(Number(this.privateKey.substring(10,14)))){
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
            key += "-"

        }
        else {
          var number = Math.random()*10;
          number = Math.floor(number);
          key = number;
        }
      }

        return key;
    }
}
