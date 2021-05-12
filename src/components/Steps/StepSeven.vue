<template>
  <section class="card-section form-page">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="w-full text-lg pb-10 ">
          <div class="bg-white w-100">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="mb-3 ">
                    SUPPORT US FOR THE NEXT FEDERAL ELECTION
                  </h2>
                  <p>
                    Our next federal campaign is just around the corner, and preparations are underway
                  </p>
                  <p>
                    Your support will ensure we can run the strongest campaign possible, as the Coalition seeks a fourth term in office
                  </p>
                </div><!-- col-md-12 -->
              </div><!-- row -->
            </div><!-- container -->
          </div>
          <div class="bg-grey w-100 inner-section" id="q24">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="secondary-blue-text mb-2">
                    24. Federal Election Campaign Donation
                  </h3>
                  <hr>
                  <p>NSW Liberal Party relies on voluntary donations from our supporters like you, to help fund every aspect of running both our NSW State and Federal Campaigns.</p>
                  <p>Unlike Labor, we don't have the support of Third Party Campaigners, which pour millions of dollars into their campaign each Election.</p>
                  <p class="mt-5">
                    *I would like to donate
                  </p>
                  <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                    <div v-for="donate in donations" :key="donate.value" class="radio-box">
                      <input class="input-radio" type="radio" v-model="answer_step7.donation.donation_amount" name="donate_radio" :value="donate.value">
                      <label for="">{{ donate.label }}</label>
                    </div>
                    <div class="radio-box" v-if="answer_step7.donation.donation_amount">
                      <!-- dont want to donate -->
                      <input type="radio" class="input-radio" v-model="answer_step7.donation.donation_amount" :value="0" name="dont_donate" id="dont_donate">
                      <label for="">I don't want to Donate</label>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="answer_step7.donation.donation_amount === 1" class="row mt-3">
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Other Amount</label>
                    <input id="amount" type="number" class="form-control" placeholder="Other Amount" v-model="answer_step7.donation.donation_amount">
                  </div>
                </div>
              </div>
              <template v-if="answer_step7.donation.donation_amount">
                <div class="row mt-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Card Number</label>
                      <input id="card_number" type="text" class="form-control" placeholder="Card Number" v-model="answer_step7.donation.card_number">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Card Holder</label>
                      <input id="card_holder" type="text" class="form-control" placeholder="Card Holder Name" v-model="answer_step7.donation.card_holder">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Expiration Month</label>
                      <select id="exp_month" type="text" placeholder="Expiration Month" v-model="answer_step7.donation.expire_month">
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Expiration Year</label>
                      <select id="exp_month" type="text" placeholder="Expiration Month" v-model="answer_step7.donation.expire_year">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>CVV</label>
                      <input type="text" class="form-control" id="cvv" placeholder="CVV" v-model="answer_step7.donation.ccv">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="checkbox">
                  <div>
                    <ValidationProvider name="other" rules="required_affirm" v-slot="{ errors }">
                      <input id="affirm" v-model="affirm" type="checkbox" value="">
                      <label for="affirm" class="col-form-label">I affirm I am not a Foreign Donor. Refer to the <a href="https://www.elections.nsw.gov.au/Funding-and-disclosure/Political-donations/Unlawful-political-donations/Prohibited-donors" target="_blank">Donor Eligibility and Disclosure Warning</a> for further information.</label>
                      <p class="error">{{ errors[0] }}</p>
                  </ValidationProvider>
                  </div>
                </div>
                </div>
              </template>
            </div><!-- container -->
          </div>

          <div class="bg-white w-100 inner-section" id="q25">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="secondary-blue-text mb-2">
                    25. Feedback
                  </h3>
                  <h6 class="border-bottom pb-3 mb-4">
                    If you have any other comments that would be helpful to us, please write them below. 
                    This is one of our Party’s most critical times and your thoughts and opinions are valued.
                    We encourage you to contact us if you have additional points to raise and we will thank you for sharing your important insights with us.
                  </h6>
                  <div class="form-group pt-2 col-md-6 px-0">
                    <textarea
                      class="form-control"
                      id="comments"
                      maxlength="1000"
                      no-resize
                      rows="5"
                      v-model="answer_step7.Final_Comments"
                    ></textarea>
                  </div>
                </div><!-- col-md-12 -->
              </div><!-- row -->
            </div><!-- container -->
          </div>
          <!-- bg-grey -->

        <!-- Progress -->
        <div class="bg-white w-100 inner-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h6 class="pt-2">
                  Please submit the button below to complete the survey.
                </h6>
                <h6 class="mb-3">
                  Thank you for your time and contribution.
                </h6>
                <h4>Your Progress.</h4>
                <Progress :width="width" />
                <button class="btn btn-primary mr-md-2 mb-2" @click.prevent="goBack">
                  <i
                    class="fa fa-angle-left ml-2"
                  /> Back
                </button>
                <button class="btn btn-primary mr-md-2 mb-2" @click.prevent="handleSubmit(submitSurvey)">
                  Submit <i
                    class="fa fa-angle-right ml-2"
                  />
                </button>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>
      </form>
    </ValidationObserver>
  </section>
</template>

<script>
import Progress from './Progress.vue'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  components: {
    Progress
  },
  data () {
    return {
      affirm: null,
      amount_donate: null,
      feedback_message: '',
      liberal_supporter: null,
      policies: [],
      federal: [],
      donations: [
        {
          label: '$25',
          value: 25
        },
        {
          label: '$50',
          value: 50
        },
        {
          label: '$100',
          value: 100
        },
        {
          label: '$500',
          value: 500
        },
        {
          label: '$1000',
          value: 1000
        },
        {
          label: 'Other',
          value: 1
        }
      ],
      selected: 'first',
      pass_donation: null,
      options: [
        { text: 'I am a Party Member', value: 'party' },
        { text: 'I used to be a Party Member', value: 'party_member' }
      ],
      made_donation: [
        { text: 'I have made a donation to the party in the past 12 months', value: 'donate_past' },
        { text: 'I have previously donated to the party', value: 'donate_previous' }
      ],
      corporate_event_model: '',
      corporate_events: [
        { text: 'I attend corporate events (including virtual and in-person events)', value: 'attend_corporate' },
        { text: 'I used to attend Corporate events, but not in the past 12 months', value: 'used_to_attend_corporate' }
      ],
      nsw_volunteer_model: '',
      nsw_volunteer: [
        { text: 'I am currently volunteering for the NSW Liberal Party', value: 'currently_volunteered' },
        { text: 'I have previously volunteered for the Party during Election', value: 'previously_volunteered' }
      ],
      subscribe_newsletter: null,
      id: '',
      ck: '',
      submitLoading: null,
      startDate: null,
      answer_step7: {
        Final_Comments: '',
        donation: {
          donation_amount: null,
          card_type: 'CC',
          card_number: null,
          card_holder: '',
          expire_month: null,
          expire_year: null,
          ccv: null
        }
      }
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.ck = this.$route.query.ck
    this.startDate = moment().format('MM-DD-YYYY h:mm')
    window.scrollTo({
      top: 10,
      behavior: 'smooth'
    })
  },
  computed: {
    ...mapGetters({
      width: 'width',
      submitForm: 'submitForm',
      token: 'token',
      donation_settings: 'donation_settings'
    })
  },
  methods: {
    async submitSurvey (valid) {
      try {
         this.submitLoading = this.$loading.show()
        
        if(!this.affirm) {
          this.$toast.error('Please affirm you are not a foreign donor', {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        })
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
        }
        const donationPayload = {
          memberid: this.id,
          donation: this.answer_step7.donation,
          donationsettings: this.donation_settings
        }
        const donation_result = await axios.post('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/PostSurveyDonate', donationPayload, {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        if(donation_result.data.errors) {
          throw new Error(donation_result.data.errors[0])
        }
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: 'finished',
          currentPage: 8,
          startDate: this.submitForm.startDate,
          lastView: this.submitForm.lastView,
          endDate: this.startDate
        }
        await axios.post('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/PostSurveyStatus', payload, {
          headers: {
            Authorization: 'Bearer ' + this.token
          }
        })
        const UD_fields = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          Answers: this.answer_step7
        }
        // saving post UD Fields
        await axios.post('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/PostUDFields', UD_fields, {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        const result = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetUDFields?id=' + this.id + '&ck=' + this.ck + '&surveyTableName=Survey_Supporter21', {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        this.$store.commit('setDonationResponse', donation_result.data)
        this.$store.commit('setProgress', 100)
        this.$store.commit('setCurrentPage', result.data.Answers.Currentpage)
        this.$store.commit('setAnswers', result.data.Answers)
      } catch (error) {
        this.$toast.error(error.message, {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        })
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
      } finally {
        this.submitLoading.hide()
      }
    },
    async goBack () {
      try {
        this.loading = this.$loading.show()
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 6,
          startDate: this.submitForm.startDate,
          lastView: this.startDate,
          endDate: this.submitForm.endDate
        }
        await axios.post('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/PostSurveyStatus', payload, {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        const result = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetUDFields?id=' + this.id + '&ck=' + this.ck + '&surveyTableName=Survey_Supporter21', {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        this.$store.commit('setCurrentPage', result.data.Answers.Currentpage)
        this.$store.commit('setAnswers', result.data.Answers)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
        this.$store.commit('setProgress', 75)
      } catch (error) {
        this.$store.commit('setProgress', 75)
        this.$store.commit('setCurrentPage', 6)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
      } finally {
        this.loading.hide()
      }
    }
  }
}
</script>
