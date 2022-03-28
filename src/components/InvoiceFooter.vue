<template>
  <footer v-html="content"></footer>
</template>

<script>
export default {
  name: "InvoiceFooter",
  data() {
    return {
      content: process.env.VUE_APP_FOOTER_CONTENT,
    }
  }
}
</script>