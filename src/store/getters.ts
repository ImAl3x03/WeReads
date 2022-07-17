import StateModel from "@/store/state.model";

const getters = {
    getUser: (state: StateModel) => state.user,
}

export default getters;