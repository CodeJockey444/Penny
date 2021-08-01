 import {userInfo} from './interfaces.js'

 export  class taskCreatorToPay implements userInfo {
    //class properties directly defined inside constructor
    constructor(
        readonly typeOfCommitment:string,
        readonly amount:number,
        public recipient:string){}

    return(){
        let annotate:string = `We got to pay  for ${this.typeOfCommitment}
         , of value ${this.amount}.${this.recipient}`
         return(annotate)
    }
}


export  class taskCreatorToDeliver implements userInfo {
    //class properties directly defined inside constructor
    constructor(
        readonly typeOfCommitment:string,
        readonly amount:number,
        public description:string){}

    return(){
        let annotate:string = `We got to  deliver ${this.typeOfCommitment}
         , of value ${this.amount}.${this.description}`
         return(annotate)
    }
}


export  class taskCreatorToBuy implements userInfo {
    //class properties directly defined inside constructor
    constructor(
        readonly typeOfCommitment:string,
        readonly amount:number,
        public description:string){}

    return(){
        let annotate:string = `We got to purchase ${this.typeOfCommitment}
        , of value ${this.amount}.${this.description}`
        return(annotate)
    }
}