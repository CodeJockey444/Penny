export class taskCreatorToPay {
    //class properties directly defined inside constructor
    constructor(typeOfCommitment, amount, recipient) {
        this.typeOfCommitment = typeOfCommitment;
        this.amount = amount;
        this.recipient = recipient;
    }
    return() {
        let annotate = `We got to pay  for ${this.typeOfCommitment}`;
        return `${annotate} , of value ${this.amount}.${this.recipient}`;
    }
}
export class taskCreatorToReceive {
    //class properties directly defined inside constructor
    constructor(typeOfCommitment, amount, client) {
        this.typeOfCommitment = typeOfCommitment;
        this.amount = amount;
        this.client = client;
    }
    return() {
        let annotate = `We got to  receive for ${this.typeOfCommitment}`;
        return `${annotate} , of value ${this.amount}.${this.client}`;
    }
}
export class taskCreatorToDeliver {
    //class properties directly defined inside constructor
    constructor(typeOfCommitment, amount, description) {
        this.typeOfCommitment = typeOfCommitment;
        this.amount = amount;
        this.description = description;
    }
    return() {
        let annotate = `We got to  deliver ${this.typeOfCommitment}`;
        return `${annotate} , of value ${this.amount}.${this.description}`;
    }
}
export class taskCreatorToBuy {
    //class properties directly defined inside constructor
    constructor(typeOfCommitment, amount, description) {
        this.typeOfCommitment = typeOfCommitment;
        this.amount = amount;
        this.description = description;
    }
    return() {
        let annotate = `We got to purchase ${this.typeOfCommitment}`;
        return `${annotate} , of value ${this.amount}.${this.description}`;
    }
}
