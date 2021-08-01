export class taskCreator {
    //class properties directly defined inside constructor
    constructor(typeOfCommitment, amount, description) {
        this.typeOfCommitment = typeOfCommitment;
        this.amount = amount;
        this.description = description;
    }
    return() {
        let annotate = `We got to ${this.typeOfCommitment}`;
        return `${annotate} , of value ${this.amount}.${this.description}`;
    }
}
