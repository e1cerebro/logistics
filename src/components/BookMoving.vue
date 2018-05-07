<template>
  <div class="col-lg-5 col-lg-offset-2 col-md-6 quofrm1  secpaddlf">
    <div class="fh-section-title clearfix  text-left version-dark paddbtm40">
        <h2>Book Appointment</h2>
    </div>
    <form>
        <div class="fh-form-1 fh-form">
            <div class="row fh-form-row">
                 <div class="col-md-12 col-xs-12 col-sm-12">
                    <p class="field">
                        <input v-model="fullname" placeholder="Name*" type="text">
                    </p>
                    <p>{{fullname}}</p>
                </div>
                <div class="col-md-6 col-xs-12 col-sm-12">
                    <p class="field">
                        <input name="your-email" v-model="email" value="" placeholder="Email*" type="email">
                    </p>
                </div>
                 <div class="col-md-6 col-xs-12 col-sm-12">
                    <p class="field">
                        <input name="weight" v-model="weight" value="" placeholder="Weight*" type="text">
                    </p>
                </div>
                <div class="col-md-6 col-xs-12 col-sm-12">
                  <p class="field">
                      <input name="delivery-city" v-model="origin" value="" placeholder="Origin Postal Code*" type="text">
                  </p>
                  <p v-if=" originCity.length > 0"  class="text-danger address">{{originCity}}</p>
                  <p v-else class="address">Origin city</p>
                </div>
                <div class="col-md-6 col-xs-12 col-sm-12">
                    <p class="field">
                        <input name="delivery-city" v-model="destination" value="" placeholder="Destination Postal Code*" type="text">
                    </p>
                  <p v-if="destinationCity.length > 0"  class="text-danger address">{{getMovement}}</p>
                  <p v-else class="address">Destination City</p>
                </div>
                <div class="col-md-6 col-xs-12 col-sm-12">
                    <p class="field">
                        Distance: {{ travelDistance }}
                    </p>
                </div>
                <div class="col-md-6 col-xs-12 col-sm-12">
                    <p class="field">
                        Duration: {{ travelTime }}
                    </p>
                </div>

                <div class="col-md-12 col-xs-12 col-sm-12">
                    <p class="field single-field">
                        <textarea cols="40" v-model="message" placeholder="Message*"></textarea>
                    </p>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <p class="field submit">
                        <input value="Next" class="fh-btn" type="submit">
                    </p>
                </div>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      weight: "",
      message: ""
    };
  },
  watch: {
    origin(data) {
      this.getAddress(data, "origin");
    },
    destination(data) {
      this.getAddress(data, "destination");
    }
  },
  computed: {
    fullname: {
      get() {
        return this.$store.getters.getFullname;
      },
      set(value) {
        this.$store.dispatch("updateFullname", value);
      }
    },
    origin: {
      get() {
        return this.$store.getters.getOrigin;
      },
      set(value) {
        this.$store.dispatch("updateOrigin", value);
      }
    },
    originCity: {
      get() {
        return this.$store.getters.getOriginCity;
      },
      set(value) {}
    },
    destination: {
      get() {
        return this.$store.getters.getDestination;
      },
      set(value) {
        this.$store.dispatch("updateDestination", value);
      }
    },
    destinationCity: {
      get() {
        return this.$store.getters.getDestinationCity;
      },
      set(value) {}
    },
    travelDistance: {
      get: function() {
        return this.$store.getters.getTravelDistance;
      },
      set: function(value) {
        console.log("This is from trave");
      }
    },
    travelTime: {
      get: function() {
        return this.$store.getters.getTravelTime;
      },
      set: function(value) {
        console.log("This is from trave time");
      }
    },
    getMovement: {
      get: function() {
        return this.$store.getters.getMovement;
      },
      set: function(value) {
        console.log("This is from movt");
      }
    }
  },
  methods: {
    updateValue(event) {
      console.log(event.target.value);
      this.$store.dispatch("updatex", event.target.value);
    },

    setTravelDistance() {
      if (
        (this.origin.length >= 5 || this.origin.length <= 50) &&
        (this.destination.length >= 5 || this.destination.length <= 50)
      ) {
        console.log("inside set distance");
        let service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: ["" + this.originCity + ""],
            destinations: ["" + this.destinationCity + ""],
            travelMode: "DRIVING",
            unitSystem: google.maps.UnitSystem.KM
          },
          (response, status) => {
            console.log(response);
            if ("NOT_FOUND" === response.rows[0].elements[0].status) {
              let result = "Data not found";
              let time = "Data not found";
              let movement = "Data not found";
              this.$store.dispatch("updateTravelDistance", result);
              this.$store.dispatch("updateTravelTime", time);
              this.$store.dispatch("updateMovement", movement);
            } else {
              let movement =
                "You are travelling from " +
                response.originAddresses[0] +
                " to " +
                response.destinationAddresses[0];

              console.log(movement);

              let result = response.rows[0].elements[0].distance.text;
              let time = response.rows[0].elements[0].duration.text;
              this.$store.dispatch("updateTravelDistance", result);
              this.$store.dispatch("updateTravelTime", time);
              this.$store.dispatch("updateMovement", movement);
            }
          }
        );
      } else {
        this.$store.dispatch("updateTravelDistance", "");
        this.$store.dispatch("updateTravelTime", "");
      }
    },
    getAddress(data, source) {
      if ("origin" === source) {
        this.$store.dispatch("updateOriginCity", data);
      } else if ("destination" === source) {
        this.$store.dispatch("updateDestinationCity", data);
      }

      this.setTravelDistance();
      // let vm = this;
      // if (data.length === 5 || data.length === 6) {
      //   axios
      //     .get(
      //       `https://maps.googleapis.com/maps/api/geocode/json?address=${data}&sensor=false&key=AIzaSyCMZyZ6Brr6yt8NBYXINd2KN_f5AqCB-qc`
      //     )
      //     .then(function(response) {
      //       console.log(source + "<br/> " + data);
      //       console.log(response);
      //       let result = response.data.results[0].formatted_address;
      //       if ("origin" === source) {
      //         vm.$store.dispatch("updateOriginCity", result);
      //       } else if ("destination" === source) {
      //         vm.$store.dispatch("updateDestinationCity", result);
      //       }
      //       vm.setTravelDistance();
      //     })
      //     .catch(function(error) {
      //       console.log(error);
      //     });
      //   console.log(data);
      // } else {
      //   vm.originCity = "";
      // }
    }
  }
};
</script>

<style scoped>
.address {
  font-style: italic;
  font-size: 13px;
}
</style>
