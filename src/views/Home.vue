<template>
  <v-app>
    <v-main>
      <v-container class="fill-height pa-16" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 white--text font-weight-bold">Sign in to Jetlight</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <v-form class="mt-4">
                          <v-text-field label="Email" name="Email" prepend-icon="email" type="email" color="#01579B" v-model="email"></v-text-field>
                          <v-text-field id="password" label="Password" name="Password" prepend-icon="lock" type="password" color="#01579B" v-model="password" ></v-text-field>
                        </v-form>
                        <h3 class="text-center mt-3">Forget your password ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn @click="login" rounded dark class="mb-3" style="background: #082543;">SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4"  style="background: #082543;">
                      <v-card-text class="white--text mt-16 pt-16">
                        <h1 class="text-center display-1">Hello, Friends !</h1>
                        <h5 class="text-center">Enter your personnel details and start journay with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded dark outlined @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" style="background: #082543;">
                      <v-card-text class="white--text mt-16 pt-16">
                        <h1 class="text-center display-1">Welcome Back</h1>
                        <h5 class="text-center">To Keep connected with us please login with your personel info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded dark outlined @click="step--">SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 white--text font-weight-bold">Create Account</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="white" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <v-form class="mt-4">
                          <v-text-field label="Name" name="Name" prepend-icon="person" type="text" color="#01579B"  ></v-text-field>
                          <v-text-field label="Email" name="Email" prepend-icon="email" type="email" color="#01579B" v-model="email"></v-text-field>
                          <v-text-field label="Password" name="Password" prepend-icon="lock" type="password" color="#01579B" v-model="password"></v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn @click="signUp" rounded dark class=" mb-3" style="background: #082543;">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
  
</template>

<script>
import * as firebase from "firebase";

export default {
  name: "Home",
  data() {
    return{
      step:1,
      email:"",
      password:""
    };
  },
  methods: {
    login: function() {
      //log the user in
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
          console.log(user.data)
        },
        err => {
          alert(err);
        }
      );
    },
    signUp: function() {
      console.log(this.email)
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
          console.log("hello")
          console.log(user.data)
        },
        err => {
          alert(err);
        }
      );
    }
  }
}
</script>
