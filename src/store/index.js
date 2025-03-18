import { createStore } from "vuex";
import coacheModule from "./modules/coaches";

const store = createStore({
    modules: {
        coaches: coacheModule
    }
});

export default store;