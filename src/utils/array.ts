export class ArrayTrasformer {
    private array: any[];

    constructor(array: any[]) {
        this.array = array;
    }

    public array2String(): string {
        return `[\n ${this.array.join(',\n')} \n]`;
    }
}
