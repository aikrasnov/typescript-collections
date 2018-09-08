"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueueFullError extends Error {
    constructor(message = 'Queue is full!') {
        super(message);
        Object.setPrototypeOf(this, QueueFullError.prototype);
    }
}
exports.QueueFullError = QueueFullError;
//# sourceMappingURL=queue-full-error.js.map