export class ToDo {
    constructor(
        public task: string,
        public deadline: string,
        public priority: number,
        public isDone: boolean
    ){}
}