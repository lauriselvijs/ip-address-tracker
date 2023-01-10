export interface DefaultError {
  status: string;
  error: string;
}

export enum ErrorStatus {
  FETCH_ERROR = "FETCH_ERROR",
}

export enum ErrorMsg {
  NO_CONNECTION = "Please check your internet connection!",
}
