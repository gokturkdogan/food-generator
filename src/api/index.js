const api = {
    categories: "/categories",
    subcategories: "/subcategories?categoryId={id}",
    products: "/products?subcategoryId={id}",
    productdetail: "/products/{id}",
    favorites: "/favorites"
};

export default api;