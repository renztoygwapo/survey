<template>
    <section class="card-section form-greeting-page">
      <div class="container">
        <div class="card-rounded">
          <div class="row">
            <div class="col-md-12">
              <h2 class="mb-3 ">
                Thank You
              </h2>
              <h5 class="mb-3">
                Thank you so much for sharing your insights and time with us.
              </h5>
              <p>
                Supporters like you are the lifeblood of our Party and help us maintain our position as
                the most successful political force in post war Australia. But these are uncertain times
                and we want to ensure we
                understand your priorities, needs and help you have the connection with our Party in the
                way that works best for you.
              </p>
              <p v-if="donation">
                You will shortly receive a confirmation email with details, along with your receipt for
                payment of your Donation.
              </p>
              <p v-if="donation">
                If you have any questions regarding the survey or your donation, please contact our
                Membership Team by email at <a
                  href="mailto:chq@nsw.liberal.org.au"
                >chq@nsw.liberal.org.au</a> or
                <br>by
                phone on <a
                  href="tel:(02)83560300"
                >(02) 8356 0300.</a>
              </p>
              <p v-else>
                If you have any questions regarding the survey, please contact our Team by email at <a
                  href="mailto:chq@nsw.liberal.org.au"
                >chq@nsw.liberal.org.au</a> or
                <br>by
                phone on <a
                  href="tel:(02)83560300"
                >(02) 8356 0300.</a>
              </p>
              <template v-if="donation">
                <h4 class="pt-2">
                  Transaction Reference Number: <span class="text-blue"> {{ this.donation ? this.donation.reference_number : ''}}</span>
                </h4>
                <h4>Amount Paid: <span class="text-blue">$ {{ this.donation ? this.donation.amount_paid : '000' }}</span></h4>
              </template>
            </div>
            <div class="col-md-12 text-center pt-2">
              <h4 class="pt-2">
                Survey Complete
              </h4>
              <div class="step-progress mt-3 mx-auto">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- container -->
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      donation: 'donation',
      token: 'token'
    })
  }
}
</script>