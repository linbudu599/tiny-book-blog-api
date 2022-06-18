import { MaybeNull } from '../types';

export enum StatusCode {
  RESOLVED = 10000,
  REJECTED = 10001,
}

export class ResponseWrapper<TData = any> {
  constructor(
    public statusCode: StatusCode,
    public data: TData,
    public message?: string,
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.message =
      message ?? statusCode === StatusCode.RESOLVED ? 'Success' : 'Failed';
  }
}

export class ResolvedResponse<TData = any> extends ResponseWrapper {
  constructor(public data: TData, public message?: string) {
    super(StatusCode.RESOLVED, data, message);
  }
}

export class RejectedResponse<TData = any> extends ResponseWrapper {
  constructor(public data: TData, public message?: string) {
    super(StatusCode.REJECTED, data, message);
  }
}

export type ResponseUnion<TData> = Promise<
  ResolvedResponse<MaybeNull<TData>> | RejectedResponse<MaybeNull<TData>>
>;
