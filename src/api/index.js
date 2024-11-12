const api = {
    categories: "api/categories",
    subcategories: "api/subcategories?categoryId={id}",
    products: "api/products?subcategoryId={id}",
    categoryproducts: "api/products?categoryId={id}",
    productdetail: "api/products/{id}",
    favorites: "api/favorites"
};

export default api;