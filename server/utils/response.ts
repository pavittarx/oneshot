export function Err(message: string, code = 400) {
  return {
    error: true,
    status: code,
    message,
  };
}

export function Success(message: string, code = 200) {
  return {
    success: true,
    status: code,
    message,
  };
}

type ResponseData = {
  [key: string]: string;
};

export function Result(data: ResponseData, code = 200) {
  return {
    success: true,
    status: code,
    data,
  };
}
