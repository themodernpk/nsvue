<template>



    <Button class="btn btn-primary" @tap="onButtonTab" :text="btn_text" />



</template>

<script>

  export default {
      data () {
        return {
            btn_text: "Tab to Change Text",

        };
      },
      //-------------------------------------------------
      methods:{

          //-----------------------------------
          onButtonTab: function () {

              this.btn_text = "Clicked"

          },
          //-----------------------------------

          //-----------------------------------
          //-----------------------------------
          //-----------------------------------



      },
      //-------------------------------------------------
  };
</script>
