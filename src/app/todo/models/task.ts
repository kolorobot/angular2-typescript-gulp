export class Task {

    public static availableLists:Array<string> = ['finance', 'home', 'work'];

    constructor(public id:number,
                public name:string,
                public notes:string,
                public list:string = 'home',
                public done:boolean = false) {
    }

    static newTask():Task {
        return new Task(0, "", "");
    }

    toggleDone() {
        this.done = !this.done;
    }
}