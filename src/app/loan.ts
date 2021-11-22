let nextId = 1;

export class Loan {
  id: number;
  description: string;
  title: string;
  isVisible?: boolean;

  constructor(
    public name: string,
    title: string,
    desc: string,
    public power?: string
  ) {
    this.id = nextId++;
  }
}
