import axios from "axios";

const product = {
    namespaced: true,
    state: {
        productData: [],
    },
    getters: {
        getProduct: (state) => state.productData,
        getProductById: (state) => (productId) => {
            console.log("Fetching single product by ID:", productId);
            console.log("ProductData:", state.productData);
            const product = state.productData.find((p) => p.id == productId);
            console.log("Product:", product);
            return product;
           
        },
        getProductByCategory: (state) => (productCategory) => {
            const product = state.productData.filter(
                (p) => p.category == productCategory
            );
        },
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                commit("SET_PRODUCT", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        //get single product
        async fetchSingleProduct({ commit }, productId) {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${productId}`
                );
                commit("SET_SINGLE_PRODUCT", response.data);
            } catch (error) {
                alert(error);
                console.log(error)
            }
        },
         async fetchFilterProduct({ commit }, productCategory) {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/category/${productCategory}`
                );
                commit("SET_FILTER_PRODUCT", response.data);
            } catch (error) {
                alert(error);
                console.log(error)
            }
        },
        
    },
    mutations: {
        SET_PRODUCT(state, product) {
            state.productData = product;
        },
        SET_SINGLE_PRODUCT(state, product) {
            state.SingleProduct = product;
        },
        SET_FILTER_PRODUCT(state, product) {
            state.filterProduct= product;
        },
    },
};
export default product;