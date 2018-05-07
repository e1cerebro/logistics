<template>
      <section class="whychoose-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6  secpaddlf">
                        <div class="fh-section-title clearfix  text-left version-dark paddbtm40">
                            <h2>Why Choosing us? {{origin}}</h2>
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
    origin: {
      get() {
        return this.$store.getters.getTravelDistance;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
