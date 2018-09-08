export class QueueFullError extends Error {
    constructor(message: string = 'Queue is full!') {
        super(message);

        Object.setPrototypeOf(this, QueueFullError.prototype);
    }
}
