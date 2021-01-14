<template>
  <div id="tab_bar">
  	<slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>

#tab_bar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

</style>
