import { DateTime } from 'luxon'
import { createStore } from 'vuex'

export default createStore({
  state: {
    date: DateTime.now(), // invoice date
    invoiceEntries: [{ description: "description", qty: 1, ammount: 25 }],
    clientData: "",
    seqNumber: 1,
    modalDateInputShow: false, // show date input modal
    modalHelpShow: false, // display modal with keybindings
  },
  mutations: {
    SET_CLIENT_DATA(state, payload) {
      state.clientData = payload;
    },
    SET_DATE(state, payload) {
      if (payload instanceof DateTime) {
        state.date = payload;
        return;
      }

      if (payload instanceof String) {
        try {
          state.date = DateTime.fromFormat("yyyy-MM-dd");
        } catch {
          state.date = DateTime.now();
        }
      }
    },
    RESET_INVOICE_DATA(state) {
      state.date = new DateTime.now();
      state.invoiceEntries = [];
      state.clientData = "";
      state.seqNumber = 1;
    },
    INCREMENT_SN(state) {
      state.seqNumber += 1;
    },
    DECREMENT_SN(state) {
      if (state.seqNumber < 2) return
      state.seqNumber -= 1;
    },
    INCREMENT_INVOICE_DATE(state) {
      state.date = state.date.plus({ days: 1 });
    },
    DECREMENT_INVOICE_DATE(state) {
      state.date = state.date.minus({ days: 1 });
    },
    ADD_INVOICE_ENTRY(state) {
      state.invoiceEntries.push({ description: "", qty: 0, ammount: 0 });
    },
    REMOVE_INVOICE_ENTRY(state) {
      state.invoiceEntries.splice(state.invoiceEntries.length - 1, 1);
    },
    SET_ENTRY(state, payload) {
      let index = payload.index;
      if (index < 0 || index > state.invoiceEntries.length - 1) return;
      delete (payload.index);
      state.invoiceEntries[index] = payload;
    },
    SET_ACTIVE_ROW(state, payload) {
      if (payload < 0 || payload > state.invoiceEntries.length) return;
      state.active = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
