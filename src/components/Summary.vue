<template>
      <section class="whychoose-1">
            <div class="container">
              <div class="col-md-12">
                    <div class=" secpaddlf">
                        <div class="fh-section-title clearfix f25 text-left version-dark paddbtm40">
                            <h2>Summary</h2>
                        </div>
                        <p class="margbtm25">{{movement}} on {{moveDate}}</p>

                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                               <div class="fh-contact-box type-address "><i class="flaticon-pin"></i>
                                    <h4 class="box-title">Name</h4>
                                    <div class="desc">
                                        <p>{{fullname}}</p>
                                    </div>
                                </div>
                            </div>
                             <div class="col-md-6 col-sm-12">
                              <div class="fh-contact-box type-email "><i class="flaticon-business"></i>
                                    <h4 class="box-title">Contact Details</h4>
                                    <div class="desc">
                                        <p>Email: {{email}}</p>
                                        <p>Phone: {{phone}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-6 col-sm-12">
                                <div class="fh-contact-box type-phone "><i class="flaticon-phone-call "></i>
                                    <h4 class="box-title">Weight</h4>
                                    <div class="desc">
                                        <p>{{weight}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="fh-contact-box type-social "><i class="flaticon-share"></i>
                                    <h4 class="box-title">Travel Time</h4>
                                    <p>Distance: {{distance}}</p>
                                    <p>Duration: {{time}}</p>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                          <div class="col-md-12 col-sm-12">
                              <div class="fh-contact-box type-social">
                                    <h4 class="box-title text-center">Additional Comment</h4>
                                    <p>{{message}}</p>
                                </div>
                          </div>
                        </div>
                        <hr/>
                        <div class="col-md-6 col-sm-12 col-xs-12">
                          <p class="field submit pull-left">
                              <button @click="booking" class="fh-btn" type="button">Back to booking</button>
                          </p>
                      </div>
                        <div class="col-md-6 col-sm-12 col-xs-12">
                          <p class="field submit text-center pull-right">
                              <button click="summary" class="fh-btn" type="button">Proceed to pay</button>
                          </p>
                      </div>
                    </div>
              </div>


            </div>
        </section>
</template>

<script>
import BookMoving from "./BookMoving";
export default {
  components: {
    "app-book-moving": BookMoving
  },
  name: "Why",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    booking() {
      this.$router.push({ path: "/" });
    }
  },
  computed: {
    message: {
      get() {
        return this.$store.getters.getMessage;
      }
    },
    fullname: {
      get() {
        return this.$store.getters.getFullname;
      }
    },
    email: {
      get() {
        return this.$store.getters.getEmail;
      }
    },
    phone: {
      get() {
        return this.$store.getters.getPhone;
      }
    },
    weight: {
      get() {
        return this.$store.getters.getWeight;
      }
    },
    movement: {
      get() {
        return this.$store.getters.getMovement;
      }
    },
    moveDate: {
      get() {
        return this.$store.getters.getMoveDate;
      }
    },
    distance: {
      get() {
        return this.$store.getters.getTravelDistance;
      }
    },
    time: {
      get() {
        return this.$store.getters.getTravelTime;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
