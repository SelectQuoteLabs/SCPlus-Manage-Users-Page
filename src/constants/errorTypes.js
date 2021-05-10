export class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super();
    this.message = message;
  }
}

export class ForbiddenError extends Error {
  constructor(message = 'Forbidden') {
    super();
    this.message = message;
  }
}

export class BadRequestError extends Error {
  constructor(message = 'Bad Request') {
    super();
    this.message = message;
  }
}

export class NoContentError extends Error {
  constructor(message = 'No Content') {
    super();
    this.message = message;
  }
}
