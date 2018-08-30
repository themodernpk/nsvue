<template>

  <Page class="page">
    <ActionBar class="action-bar" title="Ajax List View">
      <NavigationButton text="Go Back"
                        android.systemIcon="ic_menu_back"
                        @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout orientation="vertical" width="100%" height="100%">

      <StarRating emptyBorderColor="white" emptyColor="white" filledBorderColor="black" filledColor="red" value="2" max="5"/>


    </StackLayout>



  </Page>

</template>

<script>
  const appSettings = require("application-settings");
  const axios = require("axios");
  export default {
      data () {
        return {
            api_base_url: 'https://reqres.in',
            loader: false,


        };
      },
      //-------------------------------------------------
      mounted () {



      },
      //-------------------------------------------------
      methods:{


          //-----------------------------------

          //-----------------------------------
          //-----------------------------------
          //-----------------------------------


      },
      //-------------------------------------------------
  };
</script>

<style scoped>
  .progressbar {
    height: 50;
    margin: 10;
    border-radius: 10;
    border-color: black;
    border-width: 1;
  }
  .progressbar-value {
    background: #337ab7;
  }
</style>
