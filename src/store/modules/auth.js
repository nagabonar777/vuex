import axios from "axios";

const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem("token") || "",
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post(
                    "https://fakestoreapi.com/auth/login",
                    credentials
                );
                const token = response.data.token;
                //save token to local storage
                localStorage.setItem("token", token);

                commit("SET_TOKEN", token);
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        logout({ commit }) {
            //Remove token to local storage
            const token =
            localStorage.getItem("token");
            localStorage.removeItem("token");

            commit("SET_TOKEN", "");
            console.log("Token removed:", token)
            window.location.href = "/auth";
        },
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
    },
};

export default auth;