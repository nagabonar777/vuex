import axios from "axios";

const kai = {
    namespaced: true,
    state: {
        kaiData: [],
    },
    getters: {
        getKai: (state) => state.kaiData,
    },
    actions: {
        async fetchKai({ commit }) {
            try {
                const data = await axios.get(
                    "https://booking.kai.id/api/stations2"
                );
                commit("SET_KAI", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_KAI(state, kai) {
            state.kaiData = kai;
        },
    },
};
export default kai;