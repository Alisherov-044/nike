// base
export const baseUrl = "http://127.0.0.1:8000/api";

// products
export const productsUrl = "/api/products";

// categories
export const categoriesUrl = `${baseUrl}/categories/`;
export const categoriesUrlById = (id: number) => `${baseUrl}/categories/${id}/`;
