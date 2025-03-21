import { createStore } from "vuex";
import coacheModule from "./modules/coaches";

const store = createStore({
    modules: {
        coaches: coacheModule
    },
    state() {
        return {
            userId: 'c3',
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;