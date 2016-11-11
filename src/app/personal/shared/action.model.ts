export class Action {

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public position: number) { }

  clone() {
    return new Action(this.id, this.title, this.description, this.position);
  }
}
