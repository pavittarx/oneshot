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

export function Result(data: unknown, code = 200) {
  return {
    success: true,
    status: code,
    data,
  };
}
