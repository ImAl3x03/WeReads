import {createStore} from "vuex";
import StateModel from "@/store/state.model";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

const store = createStore<StateModel>({
    state() {
        return {
            user: {
                name: "",
                lastname: "",
                username: "",
                jwt: "",
            }
        }
    },
    getters,
    mutations,
    actions,
});

export default store;