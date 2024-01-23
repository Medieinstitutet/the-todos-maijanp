export class ToDo {
    constructor(
        public task: string,
        public deadline: Date,
        public priority: number,
        public isDone: boolean
    ){}
}