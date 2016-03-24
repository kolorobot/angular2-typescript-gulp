export class Task {

    public static availableLists:Array<string> = ['finance', 'home', 'work'];


    constructor(public name:string,
                public notes:string,
                public list:string = 'home',
                public done:boolean = false) {
    }

    static newTask():Task {
        return new Task("", "")
    }

    toggleDone() {
        this.done = !this.done;
    }
}