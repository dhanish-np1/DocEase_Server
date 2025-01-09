interface ApiResponse<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
  error?: any;
}

export class ApiResponseHandler {
  static success<T>(
    data: T,
    statusCode = 200,
    message?: string
  ): ApiResponse<T> {
    return {
      success: true,
      statusCode,
      message: message ?? "Operation completed successfully",
      data,
    };
  }

  static failure(error: any, statusCode = 500, message?: string): ApiResponse {
    return {
      success: false,
      statusCode,
      message: message ?? "An error occurred",
      error,
    };
  }
}
