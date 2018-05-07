import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    booking: {
        origin: "",
        destination: "",
        originCity: "",
        destinationCity: "",
        travelDistance: "",
        travelTime: "",
        email: "",
        weight: "",
        message: "",
        fullname: "",
        movement: ""
    }
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    updateFullname: (state, payload) => {
        console.log("From store: " + payload);
        state.booking.fullname = payload;
    },
    updateOriginCity: (state, payload) => {
        console.log("Setting origin city: " + payload);
        state.booking.originCity = payload;
    },
    updateOrigin: (state, payload) => {
        console.log("Setting origin :" + payload);
        state.booking.origin = payload;
    },
    updateDestinationCity: (state, payload) => {
        console.log("Setting dest city: " + payload);
        state.booking.destinationCity = payload;
    },
    updateDestination: (state, payload) => {
        console.log("Setting dest :" + payload);
        state.booking.destination = payload;
    },
    updateTravelDistance: (state, payload) => {
        console.log("dispatched from distance :" + payload);
        state.booking.travelDistance = payload;
    },
    updateTravelTime: (state, payload) => {
        console.log("dispatched from travel Time :" + payload);
        state.booking.travelTime = payload;
    },
    updateMovement: (state, payload) => {
        console.log("dispatched from movt :" + payload);
        state.booking.movement = payload;
    }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    updateFullname: ({ commit }, payload) => {
        commit("updateFullname", payload);
    },
    updateOriginCity: ({ commit }, payload) => {
        commit("updateOriginCity", payload);
    },
    updateOrigin: ({ commit }, payload) => {
        commit("updateOrigin", payload);
    },
    updateDestinationCity: ({ commit }, payload) => {
        commit("updateDestinationCity", payload);
    },
    updateDestination: ({ commit }, payload) => {
        commit("updateDestination", payload);
    },
    updateTravelDistance: ({ commit }, payload) => {
        commit("updateTravelDistance", payload);
    },
    updateTravelTime: ({ commit }, payload) => {
        commit("updateTravelTime", payload);
    },
    updateMovement: ({ commit }, payload) => {
        commit("updateMovement", payload);
    }
};

// getters are functions
const getters = {
    getFullname: state => {
        return state.booking.fullname;
    },
    getOrigin: state => {
        return state.booking.origin;
    },
    getOriginCity: state => {
        return state.booking.originCity;
    },
    getDestinationCity: state => {
        return state.booking.destinationCity;
    },
    getDestination: state => {
        return state.booking.destination;
    },
    getTravelDistance: state => {
        return state.booking.travelDistance;
    },
    getTravelTime: state => {
        return state.booking.travelTime;
    },
    getMovement: state => {
        return state.booking.movement;
    }
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});