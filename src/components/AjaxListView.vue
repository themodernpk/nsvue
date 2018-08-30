<template>

  <Page class="page">
    <ActionBar class="action-bar" title="Ajax List View">
      <NavigationButton text="Go Back"
                        android.systemIcon="ic_menu_back"
                        @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout orientation="vertical" width="100%" height="100%">

      <ActivityIndicator row="1" #activityIndicator busy="true"
                         v-if="loader"
                         (busyChange)="onBusyChanged($event)"
                         width="100" height="100"
                         class="activity-indicator">

      </ActivityIndicator>



      <Button class="btn btn-primary" @tap="onButtonTab" text="Fetch List" />

      <Label :text="item_active.name" />

      <ListView for="item in list" @itemTap="onItemTap(item)">
        <v-template>
          <Label :text="item.name" />
        </v-template>
      </ListView>

      <Footer/>

    </StackLayout>




  </Page>

</template>

<script>
  const axios = require("axios");

  import Footer from './partials/Footer'

  export default {
      data () {
        return {
            loader: false,
            list: [],
            item_active: {
                name: ""
            }
        };
      },
      //-------------------------------------------------
      components:{
          Footer,
      },
      //-------------------------------------------------
      methods:{

          //-----------------------------------
          startLoader: function()
          {
              this.loader = true;
          },
          //-----------------------------------
          stopLoader: function()
          {
              this.loader = false;
          },
          //-----------------------------------
          onButtonTab: function () {

              this.startLoader();
              axios.get('https://restcountries.eu/rest/v2/all')
                  .then(response => {
                      this.list = response.data
                      console.log("list", this.list);
                      this.stopLoader();
                  })
                  .catch(error => {
                      console.log(error);
                      this.stopLoader();
                  })

          },
          //-----------------------------------
          onItemTap: function (item)
          {
              this.item_active = item;
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
