<template>
  <header class="flex">
    <div class="branding flex" >
        <img src="../assets/file-dolar.png" alt="" /> 
    </div>
  </header>
</template>

<script>
export default {
    name: "navigation"

};
</script>

<style lang="scss" scoped>
    header {
      z-index: 99;
      flex-direction: row;
      background-color: #1e0c64;
      @media (min-width: 900px) {
        min-height: 100%;
        min-width: 90px;
        flex-direction: column;
        border-radius: 0 20px 20px 0;
      }
      .branding {
        border-radius: 0 20px 20px 0;
        background-color: #1e0c64;
        justify-content: center;
        padding: 24px;
        @media (min-width: 900px) {
          width: 100%;
        }
        img {
          width: auto;
          height: 30px;
        }
      }
    }
    </style>