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

    validPrivateKey()
  }
}
