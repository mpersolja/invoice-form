<template>
  <tr>
    <td class="tleft">{{ this.index + 1 }}</td>
    <td class="tleft">
      <div class="no-print">
        <input
          type="text"
          name="description"
          id="description"
          v-model="this.description"
          @blur="updateTableRow"
          @focus="setActive"
        />
      </div>
      <span class="print-only">{{ this.description }}</span>
    </td>
    <td class="tright">
      <span class="no-print">
        <input
          type="number"
          name="qty"
          id="qty"
          step="0.25"
          v-model="this.qty"
          @change="calcAmmount"
          @input="calcAmmount"
          @focus="setActive"
        /> h
      </span>
      <span class="print-only">{{ toTime(this.qty) }}</span>
    </td>
    <td class="tright">
      <span class="no-print">
        <input
          type="number"
          name="ammount"
          id="ammount"
          step="0.25"
          v-model="this.ammount"
          @change="calcQty"
          @input="calcQty"
          @focus="setActive"
        /> €
      </span>
      <span class="print-only">{{ toCurrency(this.ammount) }}</span>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: ["values", "index"],
  data() {
    return {
      ...this.values,
    };
  },
  methods: {
    toCurrency(number) {
      return Intl.NumberFormat(process.env.VUE_APP_LOCALE, {
        currency: process.env.VUE_APP_CURRENCY,
        style: 'currency'
      }).format(number);
    },
    toTime(number) {
      let mins = (number % 1) * 60;
      let hours = (number - (number % 1));
      return String(hours).padStart(2,0) + ":" + String(mins).padStart(2,0) + " h"
    },
    updateTableRow() {
      this.$store.commit("SET_ENTRY", { ...this.$data, index: this.index });
    },
    calcAmmount() {
      if (this.qty == "") return;
      this.ammount = this.mult * this.qty * parseFloat(process.env.VUE_APP_RATE);
      this.$emit("updateAndRecalculate", { ...this.$data, index: this.index });
    },
    calcQty() {
      if (this.ammount == "") return;
      this.qty = this.ammount / parseFloat(process.env.VUE_APP_RATE)
      this.$emit("updateAndRecalculate", { ...this.$data, index: this.index });
    },
    setActive() {
      this.$store.commit("SET_ACTIVE_ROW", this.index);
    }
  },
  watch: {
    values(val, oldVal) {
      console.log(val, oldVal);
    }
  }
};
</script>