export class ValidationError extends Error {
  constructor(message, key) {
    super(message);

    this.name = "ValidationError";
    this.key = key;
  }
}
