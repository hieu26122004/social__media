import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";

const defaultParams: CreateAxiosDefaults = {
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8080/api/v1"
      : "/",
  withCredentials: true,
};

type ApiResponse<T = null> = {
  success: boolean;
  message: string;
  data?: T;
};

const axiosInstance = axios.create(defaultParams);

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
      axios.get<ApiResponse<T>>(url, config),

    post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
      axios.post<ApiResponse<T>>(url, data, config),

    put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
      axios.put<ApiResponse<T>>(url, data, config),

    patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
      axios.patch<ApiResponse<T>>(url, data, config),

    delete: <T>(url: string, config?: AxiosRequestConfig) =>
      axios.delete<ApiResponse<T>>(url, config),
  };
};

export default api(axiosInstance);
