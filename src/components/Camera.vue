<template>

  <Page class="page">
    <ActionBar class="action-bar" title="Camera">
      <NavigationButton text="Go Back"
                        android.systemIcon="ic_menu_back"
                        @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout orientation="vertical" width="100%" height="100%">


      <Button text="Camera" @tap="onButtonTab()" />

    </StackLayout>



  </Page>

</template>

<script>
  var permissions = require( "nativescript-permissions" );
  var camera = require("nativescript-camera");
  var imageModule = require("ui/image");



  export default {
      data () {
        return {

            loader: false,


        };
      },
      //-------------------------------------------------
      mounted () {

          this.getPermissions();


      },
      //-------------------------------------------------
      methods:{


          //-----------------------------------
          getPermissions: function()
          {


          },
          //-----------------------------------
          //-----------------------------------
          onButtonTab: function () {


              permissions.requestPermission(android.Manifest.permission.CAMERA, "Needed for connectivity status").then(() => {
                  console.log("Permission granted!");
              }).catch(() => {
                  console.log("Permission is not granted (sadface)");
              });

              camera.takePicture()
                  .then(function (imageAsset) {
                      console.log("Result is an image asset instance");
                      var image = new imageModule.Image();
                      image.src = imageAsset;
                  }).catch(function (err) {
                  console.log("Error -> " + err.message);
              });


          },

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
