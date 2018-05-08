<template>
      <section class="whychoose-1">
            <div class="container">
              <div class="col-md-7">
                <div class="fh-section-title clearfix  text-left version-dark paddbtm40">
    <h2>Why Choosing us?</h2>
    </div>
    <div class="fh-icon-box  style-2 icon-left has-line">
        <span class="fh-icon"><i class="flaticon-international-delivery"></i></span>
        <h4 class="box-title"><span>Global supply Chain Solutions</span></h4>
        <div class="desc">
            <p>Efficiently unleash cross-media information without cross-media value.</p>
        </div>
    </div>
    <div class="fh-icon-box  style-2 icon-left has-line">
        <span class="fh-icon"><i class="flaticon-people"></i></span>
        <h4 class="box-title"><span>24 Hours - Technical Support</span></h4>
        <div class="desc">
            <p>Specialises in international freight forwarding of merchandise and associated logistic services</p>
        </div>
    </div>
    <div class="fh-icon-box  style-2 icon-left has-line">
        <span class="fh-icon"><i class="flaticon-route"></i></span>
        <h4 class="box-title"><span>Mobile Shipment Tracking</span></h4>
        <div class="desc">
            <p>We Offers intellgent concepts for road and tail and well as complex special transport services</p>
        </div>
    </div>
    <div class="fh-icon-box  style-2 icon-left">
        <span class="fh-icon"><i class="flaticon-open-cardboard-box"></i></span>
        <h4 class="box-title"><span>Careful Handling of Valuable Goods</span></h4>
        <div class="desc">
            <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
        </div>
    </div>
              </div>
              <div class="col-md-5">
                  <app-book-moving></app-book-moving>

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
  computed: {
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
