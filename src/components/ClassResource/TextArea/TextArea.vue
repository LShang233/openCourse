<template>
  <!-- 可显示图片的编辑框 -->
  <div
    class="edit-div"
    v-html="innerText"
    :contenteditable="canEdit"
    @focus="isLocked = true"
    @blur="isLocked = false"
    @input="changeText($event)"
    @keyup.enter="handleChild"
  ></div>
</template>
<script>
export default {
  name: "editDiv",
  props: {
    value: {
      type: String,
      default: "",
    },
    canEdit: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      innerText: this.value,
      isLocked: false,
    };
  },
  watch: {
    value() {
      if (!this.isLocked || !this.innerText) {
        this.innerText = this.value;
      }
    },
  },
  methods: {
    changeText(e) {
      this.$emit("input", this.$el.innerHTML);
    },
    handleChild(){
      this.$emit('enter');
    }
  },
};
</script>
<style lang="scss" scoped>
.edit-div {
  width: 100%;
  height: 100%;
  overflow: auto;
  word-break: break-all;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  text-align: left;
  &[contenteditable="true"] {
    user-modify: read-write-plaintext-only;
    &:empty:before {
      content: attr(placeholder);
      display: block;
      color: #ccc;
    }
  }
}
</style>