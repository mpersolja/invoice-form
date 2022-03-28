<template>
  <p class="invoice-instructions" v-html="labels.PAYMENT_INFO"></p>
</template>

<script>
export default {
  name: "InvoiceInstructions",
  data() {
    return {
      labels: {
        PAYMENT_INFO: process.env.VUE_APP_PAYMENT_INFO
      }
    }
  }
}
</script>