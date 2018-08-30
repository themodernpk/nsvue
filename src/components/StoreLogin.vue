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


      <GridLayout v-if="!credentials.username">
      <TextField v-model="credentials.username" hint="Username" />
      <TextField v-model="credentials.password" hint="Password" />


      <Button class="btn btn-primary" @tap="onButtonTab" text="Fetch List" />
      </GridLayout>

      <GridLayout v-else>
        <Label text="You're already logged in" />
      </GridLayout>

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
            credentials: {
                username: null,
                password: null,
            },

        };
      },
      //-------------------------------------------------
      mounted () {

          this.credentials.username = appSettings.getString("username");
          this.credentials.password = appSettings.getString("password");

          console.log("Stored credentials -->");
          console.log(this.credentials);

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

              const url = this.api_base_url+"/api/login";
              console.log("url->", url);

              const data = this.credentials;
              console.log("data->", data);

              axios.post(url, data)
                  .then(response => {
                      console.log("response-->", response.data);

                      appSettings.setString("username", this.credentials.username);
                      appSettings.setString("token", response.data.token);

                      this.stopLoader();
                  })
                  .catch(error => {
                      console.error("error-->", error);
                      this.stopLoader();
                  })

          },
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
