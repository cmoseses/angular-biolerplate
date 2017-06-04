export class Sorter {

  direction: number;
  key: string;

  constructor() {
    this.direction = 1;
  }

  sort(key: string, data: Array<any>) {

    if (this.key === key) {
      this.direction = -this.direction;
    } else {
      this.direction = 1;
    }

    this.key = key;

    data.sort((a, b) => a[key] > b[key] ? 1 : -1);
  }

}
