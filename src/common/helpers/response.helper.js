export const responseSuccess = (data, message, statusCode = 200) => {
  return {
    status: "Success",
    statusCode,
    message,
    data,
  };
};

export const responseError = (
  message = "Internal server error",
  statusCode = 500,
  stack = null
) => {
  return {
    status: "Error",
    statusCode,
    message,
    stack: stack,
  };
};
