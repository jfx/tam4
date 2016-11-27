export class Action {

  constructor(
    public id: number,
    public title: string,
    public todo: number,
    public done: number,  // default value 0
    public description?: string,
    public date?: string) { }

  clone() {
    return new Action(
      this.id,
      this.title,
      this.todo,
      this.done,
      this.description,
      this.date);
  }
}
