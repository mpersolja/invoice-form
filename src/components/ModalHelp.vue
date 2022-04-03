<template>
  <div class="modal" v-if="show">
    <div>
      <ul>
        <li><kbd>Alt + Esc</kbd>: Reset invoice</li>
        <li><kbd>Alt + PgUp</kbd>: Increment SN</li>
        <li><kbd>Alt + PgDown</kbd>: Decrement SN</li>
        <li><kbd>Alt + =</kbd>: Add new row</li>
        <li><kbd>Alt + -</kbd>: Remove last row</li>
        <li><kbd>Alt + 0</kbd>: Change invoice date</li>
        <li><kbd>Alt + [</kbd>: Incremenet payment delay</li>
        <li><kbd>Alt + ]</kbd>: Decrement payment delay</li>
        <li><kbd>Alt + {</kbd>: Decrement service day diff</li>
        <li><kbd>Alt + }</kbd>: Decrement service day diff</li>
        <li><kbd>Alt + &lt;</kbd>: Decrement invoice date</li>
        <li><kbd>Alt + &gt;</kbd>: Decrement invoice date</li>
        <li><kbd>Ctrl + s</kbd>: Save config</li>
        <li><kbd>Alt + .</kbd>: Load config</li>
        <li><kbd>Alt + \</kbd>: Negate row ammount</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "ModalHelp",
  computed: mapState({
    show: state => state.modalHelpShow,
  })
}
</script>