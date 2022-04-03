<template>
  <div>
    <table>
      <thead class="layout">
        <tr>
          <td>&nbsp;</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <invoice-info />
            <invoice-table />
            <invoice-instructions />
          </td>
        </tr>
      </tbody>
      <tfoot class="layout">
        <tr>
          <td>&nbsp;</td>
        </tr>
      </tfoot>
    </table>
      <invoice-header />
      <invoice-footer />
    <modal-date-input />
    <modal-help />
  </div>
</template>

<script>
import InvoiceInfo from "./components/InvoiceInfo.vue";
import InvoiceTable from "./components/InvoiceTable.vue";
import ModalDateInput from "./components/ModalDateInput.vue";
import ModalHelp from "./components/ModalHelp.vue";
import InvoiceInstructions from "./components/InvoiceInstructions";
import InvoiceHeader from "./components/InvoiceHeader.vue";
import InvoiceFooter from "./components/InvoiceFooter.vue";

var kbdEv, ctrlSEv;

export default {
  name: "App",
  components: {
    InvoiceInfo,
    ModalDateInput,
    InvoiceTable,
    ModalHelp,
    InvoiceInstructions,
    InvoiceHeader,
    InvoiceFooter,
  },
  mounted() {
    ctrlSEv = document.addEventListener("keydown", this.ctrlSHadler, false);
    kbdEv = window.addEventListener("keyup", this.evtHandler);
  },
  methods: {
    ctrlSHadler(e) {
      if (e.keyCode == 83 && e.ctrlKey) e.preventDefault();
    },
    evtHandler(e) {
      if (e.key == "Escape" && e.altKey) {
        this.$store.commit("RESET_INVOICE_DATA");
        return;
      }
      if (e.key == "PageUp" && e.altKey) {
        this.$store.commit("INCREMENT_SN");
        return;
      }
      if (e.key == "PageDown" && e.altKey) {
        this.$store.commit("DECREMENT_SN");
        return;
      }
      if (e.key == "0" && e.altKey) {
        alert("change invoice date");
        return;
      }
      if (e.key == "=" && e.altKey) {
        this.$store.commit("ADD_INVOICE_ENTRY");
        return;
      }
      if (e.key == "-" && e.altKey) {
        this.$store.commit("REMOVE_INVOICE_ENTRY");
        return;
      }
      if (e.key == "\\" && e.altKey) {
        this.$store.commit("NEGATE_AMMOUNT");
        return;
      }
    },
  },
  deactivated() {
    window.removeEventListener(kbdEv, this.evtHandler);
    document.removeEventListener(ctrlSEv, this.ctrlSHadler);
  },
  unmounted() {
    window.removeEventListener(kbdEv, this.evtHandler);
  },
};
</script>

