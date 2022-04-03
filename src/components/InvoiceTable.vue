<template>
  <table class="invoice-table" ref="invTable">
    <thead>
      <tr>
        <th width="30px" class="tleft">{{ labels.C1 }}</th>
        <th width="auto" class="tleft">{{ labels.C2 }}</th>
        <th width="120px" class="tright">{{ labels.C3 }}</th>
        <th width="120px" class="tright">{{ labels.C4 }}</th>
      </tr>
    </thead>
    <tbody>
      <table-row
        v-for="(entry, index) in entries"
        :key="index"
        :index="index"
        :values="entry"
        @updateAndRecalculate="updateAndRecalc"
      />
    </tbody>
    <tfoot>
      <tr>
        <th colspan="2"></th>
        <th class="tright">{{ labels.C5 }}</th>
        <th class="tright">{{ calcTotal() }}</th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapState } from "vuex";
import TableRow from "./TableRow.vue";
export default {
  components: { TableRow },
  name: "InvoiceTable",
  data() {
    return {
      labels: {
        C1: process.env.VUE_APP_THEAD_C1_LABEL,
        C2: process.env.VUE_APP_THEAD_C2_LABEL,
        C3: process.env.VUE_APP_THEAD_C3_LABEL,
        C4: process.env.VUE_APP_THEAD_C4_LABEL,
        C5: process.env.VUE_APP_TFOOT_C1_LABEL,
      },
    };
  },
  mounted() {},
  methods: {
    updateAndRecalc() {
      this.calcTotal()
    },
    calcTotal() {
      let sum = this.entries.reduce((sum, e) => sum + e.ammount, 0);
      return new Intl.NumberFormat(process.env.VUE_APP_LOCALE, {
        currency: process.env.VUE_APP_CURRENCY,
        style: 'currency'
      }).format(sum);
    },
  },
  computed: {
    ...mapState({
      entries: (state) => state.invoiceEntries,
    }),
  },
};
</script>