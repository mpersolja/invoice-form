<template>
  <div class="modal" v-if="show">
    <div>
      <input
        type="date"
        name="date-input"
        id="date-input"
        :value="date.toFormat('yyyy-MM-dd')"
        pattern="\d{4}-\d{2}-\d{2}"
      />
      <input type="button" value="OK" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ModalDateInput",
  computed: {
    ...mapState({
      date: (state) => state.date,
      show: (state) => state.modalDateInputShow,
    }),
  },
};
</script>