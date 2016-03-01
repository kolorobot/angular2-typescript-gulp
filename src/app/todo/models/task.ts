export class Task {

    constructor(public name:string, public done:boolean) {
    }

    toggleDone() {
        this.done = !this.done;
    }
}