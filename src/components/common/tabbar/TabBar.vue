<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #tab-bar{
    margin: 0 auto;
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 5px rgb(100, 100, 100,.2);

    max-width: 1200px;
  }
  
</style>

