<template>
  <div class="showC3">

  </div>
</template>

<script>
export default {
  name: "showC3",
  props: {
    state: Boolean
  },
  watch: {
    state() {
      if (this.state) {
        this.$axios.get("/api/line/deleteLine",
          {
            params: {
              "lineName": this.$store.getters.getSearchWord3
            }
          })
          .then((res) => {
            if (res.data == true) {
              console.log(res)
              alert("删除成功")
              this.state = false;
              this.$emit('resultEvent', this.state)
            }
            else if (res.data == true) {
              console.log(res)
              alert("删除失败")
              this.state = false;
              this.$emit('resultEvent', this.state)
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
}
</script>

<style scoped>

</style>
