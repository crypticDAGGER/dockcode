<template>
  <codemirror
    ref="cmEditor"
    :value="code"
    :options="cmOptions"
    @ready="onCmReady"
    @focus="onCmFocus"
    @input="onCmCodeChange"
  />
</template>
<script>
import "codemirror/mode/python/python.js";
import "codemirror/theme/base16-dark.css";
export default {
  data() {
    return {
      code: "",
      cmOptions: {
        tabSize: 2,
        mode: {
          name: "python",
          version: 3
        },
        theme: "base16-dark",
        lineNumbers: true,
        line: true
      }
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focused!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
      this.$store.state.DatainJs = newCode;
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror;
    }
  },
  mounted() {
    console.log("the current CodeMirror instance object:", this.codemirror);
    // you can use this.codemirror to do something...
  }
};
</script>