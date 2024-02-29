import { createStore } from 'vuex'

export default createStore({
    state: {
        phone: "",
        ref: {
            tel: "",
            name: "",
            lastname: "",
        }
    },
    getters: {
        phone: state => state.phone,
        ref: state => state.ref,
    },
    mutations: {
        setPhone(state, item) {
            state.phone = item;
        },
        setRef(state, item) {
            state.ref.tel = item.tel;
            state.ref.name = item.name;
            state.ref.lastname = item.lastname;
        }
    },
    actions: {

    },
    modules: {

    }
})