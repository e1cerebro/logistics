<template>
  <div class="col-lg-5 col-lg-offset-2 col-md-6 quofrm1  secpaddlf">
    <div class="fh-section-title clearfix  text-left version-dark paddbtm40">
        <h2>Book Appointment</h2>
    </div>
    <form>
        <div class="fh-form-1 fh-form">
            <div class="row fh-form-row">

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
                  <p v-if="destinationCity.length > 0"  class="text-danger address">{{destinationCity}}</p>
                  <p v-else class="address">Destination City</p>
                </div>
                <div class="col-md-6 col-xs-12 col-sm-12">
                    <p class="field">
                        Distance: {{ traveldistance }} {{travelDistance}}
                    </p>
                </div>
                <div class="col-md-6 col-xs-12 col-sm-12">
                    <p class="field">
                        <input name="weight" value="" placeholder="Weight*" type="text">
                    </p>
                </div>
                <div class="col-md-6 col-xs-12 col-sm-12">
                    <p class="field">
                        <input name="your-name" value="" placeholder="Name*" type="text">
                    </p>
                </div>
                <div class="col-md-6 col-xs-12 col-sm-12">
                    <p class="field">
                        <input name="your-email" value="" placeholder="Email*" type="email">
                    </p>
                </div>
                <div class="col-md-12 col-xs-12 col-sm-12">
                    <p class="field single-field">
                        <textarea cols="40" placeholder="Message*"></textarea>
                    </p>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <p class="field submit">
                        <input value="Submit" class="fh-btn" type="submit">
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
      origin: "",
      destination: "",
      originCity: "",
      destinationCity: "",
      travelDistance: ""
    };
  },
  watch: {
    origin(data) {
      let vm = this;
      if (data.length === 5 || data.length === 6) {
        axios
          .get(
            `http://maps.googleapis.com/maps/api/geocode/json?address=${data}&sensor=true`
          )
          .then(function(response) {
            vm.originCity = response.data.results[0].formatted_address;
            console.log(response.data.results[0].formatted_address);
          })
          .catch(function(error) {
            console.log(error);
          });
        console.log(data);
      } else {
        vm.originCity = "";
      }
    },
    destination(data) {
      let vm = this;
      if (data.length === 5 || data.length === 6) {
        axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${data}&sensor=true`
          )
          .then(function(response) {
            vm.destinationCity = response.data.results[0].formatted_address;
          })
          .catch(function(error) {
            console.log(error);
          });
        console.log(data);
      } else {
      }
    }
  },
  computed: {
    traveldistance: {
      get: function() {
        let vm = this;
        if (this.origin.length === 5 && this.destination.length === 5) {
          console.log("from distance");
          let service = new google.maps.DistanceMatrixService();
          service.getDistanceMatrix(
            {
              origins: ["" + vm.origin + ""],
              destinations: ["" + vm.destination + ""],
              travelMode: "DRIVING",
              unitSystem: google.maps.UnitSystem.KM
            },
            (response, status) => {
              console.log(response.rows[0].elements[0].distance.text);
              console.log(response.rows[0].elements[0].duration.text);
              alert(response.rows[0].elements[0].duration.text);
              vm.travelDistance = response.rows[0].elements[0].distance.text;
              return response.rows[0].elements[0].duration.text;
            }
          );
        } else {
        }
      },
      set: function(value) {
        this.travelDistance = value;
      }
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
