export class GenericError extends Error {
  constructor(public error: string, public error_description: string) {
    super(error_description);

    Object.setPrototypeOf(this, GenericError.prototype);
  }
}
export class AuthenticationError extends GenericError {
  constructor(
    error: string,
    error_description: string,
    public state: string,
    public appState: any = null
  ) {
    super(error, error_description);
    //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
}

export class TokenTaskError extends GenericError {
  constructor(
    error: string,
    error_description: string,
    public task_id: string
  ) {
    super(error, error_description);
    //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, TokenTaskError.prototype);
  }
}
