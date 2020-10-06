export class ExtendableError extends Error {
  constructor(name: string, status: number, ...param: any[]) {
    super(...param);
    this.name = name;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExtendableError);
    }
  }
}
