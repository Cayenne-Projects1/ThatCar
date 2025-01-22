export class APIResponse {
  isSuccessful: boolean = false;
  message: string = '';
  data: any = null;

  constructor(isSuccessful?: boolean, message?: string, data?: any) {
    if (isSuccessful !== undefined) this.isSuccessful = isSuccessful;
    if (message !== undefined) this.message = message;
    if (data !== undefined) this.data = data;
  }
}
