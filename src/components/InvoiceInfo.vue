<template>
  <div class="info">
    <h1>
      {{ labels.TITLE }} {{ date.toFormat("yyyyMMdd") }}-{{ invoiceNumber }}
    </h1>
    <textarea
      name=""
      id=""
      cols="50"
      rows="4"
      @blur="updateClientData"
      v-model="client"
      ref="client"
    ></textarea>
    <ul>
      <li>{{ labels.ISSUE_PLACE }}: {{ env.ISSUE_PLACE }}</li>
      <li>
        {{ labels.SERVICE_DATE }}:
        {{
          date.plus({ days: env.SERVICE_DATE_DIFF }).toFormat(env.DATE_FORMAT)
        }}
      </li>
      <li>{{ labels.INVOICE_DATE }}: {{ date.toFormat(env.DATE_FORMAT) }}</li>
      <li>
        {{ labels.PAYMENT_DAY }}:
        {{ date.plus({ days: env.PAYMENT_DELAY }).toFormat(env.DATE_FORMAT) }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { saveAs } from "file-saver";

var invInfKbdEv;

export default {
  name: "InvoiceInfo",
  mounted() {
    invInfKbdEv = window.addEventListener("keyup", this.keyHandler);
  },
  data() {
    return {
      labels: {
        INVOICE_DATE: process.env.VUE_APP_INVOICE_DATE_LABEL,
        ISSUE_PLACE: process.env.VUE_APP_ISSUE_PLACE_LABEL,
        PAYMENT_DAY: process.env.VUE_APP_PAYMENT_DAY_LABEL,
        SERVICE_DATE: process.env.VUE_APP_SERVICE_DATE_LABEL,
        TITLE: process.env.VUE_APP_TITLE_LABEL,
      },
      env: {
        DATE_FORMAT: process.env.VUE_APP_DATE_FORMAT,
        ISSUE_PLACE: process.env.VUE_APP_ISSUE_PLACE,
        PAYMENT_DELAY: parseInt(process.env.VUE_APP_PAYMENT_DELAY),
        SERVICE_DATE_DIFF: parseInt(process.env.VUE_APP_SERVICE_DATE_DIFF),
      },
      cClient: this.client,
    };
  },
  deactivated() {
    window.removeEventListener(invInfKbdEv, this.keyHandler);
  },
  unmounted() {
    window.removeEventListener(invInfKbdEv, this.keyHandler);
  },
  methods: {
    keyHandler(e) {
      if (e.key == "[" && e.altKey) {
        this.env.SERVICE_DATE_DIFF -= 1;
        return;
      }
      if (e.key == "]" && e.altKey) {
        this.env.SERVICE_DATE_DIFF += 1;
        return;
      }
      if (e.key == "{" && e.altKey) {
        this.env.PAYMENT_DELAY -= 1;
        return;
      }
      if (e.key == "}" && e.altKey) {
        this.env.PAYMENT_DELAY += 1;
        return;
      }
      if (e.key == "<" && e.altKey) {
        this.$store.commit("DECREMENT_INVOICE_DATE");
        return;
      }
      if (e.key == ">" && e.altKey) {
        this.$store.commit("INCREMENT_INVOICE_DATE");
        return;
      }
      if (e.key == "Escape" && e.altKey) {
        this.env.SERVICE_DATE_DIFF = parseInt(
          process.env.VUE_APP_SERVICE_DATE_DIFF
        );
        this.env.PAYMENT_DELAY = parseInt(process.env.VUE_APP_PAYMENT_DELAY);
      }
      if (e.key == "." && e.altKey) {
        alert("load config");
        return;
      }
      if (e.key == "," && e.altKey) {
        let so = {
          date: this.date.toFormat("yyyyMMdd"),
          paymentDelay: this.env.PAYMENT_DELAY,
          serviceDateDiff: this.env.SERVICE_DATE_DIFF,
          clientData: this.client,
          entires: [...this.entries],
        };
        console.log(so);
        let blob = new Blob(so, { type: "text/plain;charset=utf-8" });
        saveAs(blob, this.date.toFormat("yyyyMMdd") + "-" + this.sn + ".json");
        return;
      }
    },
    updateClientData() {
      this.$store.commit("SET_CLIENT_DATA", this.$refs.client.value);
    },
  },
  computed: {
    ...mapState({
      date: (state) => state.date,
      sn: (state) => state.seqNumber,
      entries: (state) => state.invoiceEntries,
      client: (state) => state.clientData,
    }),
    invoiceNumber() {
      return String(this.sn).padStart(3, "0");
    },
  },
};
</script>