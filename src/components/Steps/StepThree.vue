<template>
  <section class="card-section form-page bg-white">
    <ValidationObserver ref="stepThree">
      <form class="w-full text-lg pb-10 ">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="mb-3 ">
                YOUR SUPPORT OF THE NSW LIBERAL PARTY
              </h2>
              <p>
                NSW Liberal Party relies on the voluntary donations from our supporters like you, to help fund every aspect of running both our NSW State and Federal Election Campaigns.
              </p>
              <p>
                Unlike Labor, we don't have the support of third party campaigners, including trade unions, which spend millions of dollars into their campaigns at each election.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-grey w-100 inner-section" id="q7">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  7. What is the main reason you donate or would donate to the NSW Liberal Party?
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select all that apply.
                </h6>

                <div v-for="item in reasons_to_donate" :key="item.id" class="checkbox">
                  <div>
                    <input
                      :id="item.id"
                      type="checkbox"
                      :value="item.id"
                      v-model="item.checked"
                      :checked="item.checked"
                      @change="inputChecker"
                    >
                    <label class="col-form-label" :for="item.id">{{ item.text }}</label>
                  </div>
                </div>

                <div v-if="other_reason" class="form-group pt-2 col-md-6 px-0">
                  <ValidationProvider name="other" rules="required" v-slot="{ errors }">
                    <label>Please provide further details</label>
                    <input v-model="answer_step3.Donate_Reason_OtherDetails" name="other" type="text" class="form-control">
                    <span class="error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-white w-100 inner-section" id="q8">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  8. What is your preferred or would be your method of donating to?
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select one preference.
                </h6>
                <div v-for="item in prefered_donations" :key="item.value" class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="prefered_donation_model"
                    :id="item.value"
                    :value="item.value"
                    v-model="answer_step3.Donation_Method"
                  >
                  <label class="form-check-label" :for="item.value">{{ item.text }}</label>
                </div>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-grey w-100 inner-section" id="q9">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  9. When do you prefer to donate ?
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select one preference.
                </h6>

                <div v-for="item in when_to_donate" :key="item.value" class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="when_to_donate_model"
                    :id="item.value"
                    :value="item.value"
                    v-model="answer_step3.Donation_Frequency"
                  >
                  <label class="form-check-label" :for="item.value">{{ item.text }}</label>
                </div>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-white w-100 inner-section" id="q10">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  10. Our Regular Givers are an especially valued group who help us with regular donations. Are you interested in a convenient way to support us ahead of the next NSW State Election ?
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select one preference.
                </h6>

                <div v-for="item in regular_givers" :key="item.value" class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="regular_givers_model"
                    :id="item.value"
                    :value="item.value"
                    v-model="answer_step3.RG_Status"
                  >
                  <label class="form-check-label" :for="item.value">{{ item.text }}</label>
                </div>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>
        <!-- Progress -->
        <div class="bg-white w-100 inner-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h4 class="pt-2">
                  Your Progress
                </h4>
                <Progress :width="width" />
                <button class="btn btn-primary mr-md-2 mb-2" @click.prevent="goBack">
                  <i
                    class="fa fa-angle-left ml-2"
                  /> Back
                </button>
                <button class="btn btn-primary mr-md-2 mb-2" @click.prevent="onSubmit">
                  Next <i
                    class="fa fa-angle-right ml-2"
                  />
                </button>
                <b class="d-block mt-3">Navigate through the survey by using the<br> Next and Back
                  buttons.</b>
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
      reasons: [],
      reasons_to_donate: [
        {
          id: 'Donate_Reason_RemainState',
          text: 'I want to ensure that we remain in Government at a State level',
          disabled: false,
          checked: false
        },
        {
          id: 'Donate_Reason_RemainFed',
          text: 'I want to ensure that we remain in Government at a Federal Level',
          disabled: false,
          checked: false
        },
        {
          id: 'Donate_Reason_Fight',
          text: 'I want to make sure the NSW Liberal Party has enough support to fight back against Labor and their third party campaigners',
          disabled: false,
          checked: false
        },
        {
          id: 'Donate_Reason_Future',
          text: 'I support the NSW Liberal Party beliefs and values and want future generations to be able to do the same',
          disabled: false,
          checked: false
        },
        {
          id: 'Donate_Reason_Other',
          text: 'Other',
          disabled: false,
          checked: false
        }
      ],
      other_reason: false,
      prefered_donation_model: '',
      prefered_donations: [
        { text: 'NSW Liberal Website nsw.liberal.org.au', value: 'Website' },
        { text: 'Via email I receive from you', value: 'email' },
        { text: 'Over the phone', value: 'phone' },
        { text: 'Via appeals I receive from you in the post', value: 'Appeals' }
      ],
      when_to_donate_model: '',
      when_to_donate: [
        { text: 'I am happy to be asked as needs arise and respond as my capacity allows', value: 'Election' },
        { text: "I like to make a regular donation to build the Party's war chest for the next election", value: 'Regular Donor' },
        { text: 'I like to support at election times as I know how important this is', value: 'Support_is_important' },
        { text: "I don't donate at all, as I support the party in other ways", value: "Doesn't Donate" }
      ],
      regular_givers_model: '',
      regular_givers: [
        { text: 'I already donate every month', value: 'already RG' },
        { text: 'I would like to consider becoming a regular (monthly) donor and would like more information', value: 'Prospect' },
        { text: 'I prefer different options to support at this stage', value: 'Support other' }
      ],
      id: '',
      ck: '',
      loading: '',
      startDate: null,
      answer_step3: {
        Donate_Reason_RemainState: false,
        Donate_Reason_RemainFed: false,
        Donate_Reason_Fight: false,
        Donate_Reason_Future: false,
        Donate_Reason_Other: false,
        Donate_Reason_OtherDetails: '',
        Donation_Method: '',
        Donation_Frequency: '',
        RG_Status: ''
      }
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.ck = this.$route.query.ck
    this.getCurrentFields()
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
      token: 'token'
    })
  },
  methods: {
    inputChecker () {
      // this.reasons = this.reasons_to_donate.filter(donate => donate.checked)
      this.reasons_to_donate.forEach((el) => {
        if (el.id === 'Donate_Reason_RemainState') this.answer_step3.Donate_Reason_RemainState = el.checked
        if (el.id === 'Donate_Reason_RemainFed') this.answer_step3.Donate_Reason_RemainFed = el.checked
        if (el.id === 'Donate_Reason_Fight') this.answer_step3.Donate_Reason_Fight = el.checked
        if (el.id === 'Donate_Reason_Future') this.answer_step3.Donate_Reason_Future = el.checked
        if (el.id === 'Donate_Reason_Other') this.answer_step3.Donate_Reason_Other = el.checked
        if (el.id === 'Donate_Reason_Other') this.other_reason = el.checked
      })
    },
    async getCurrentFields () {
      try {
        this.loading = this.$loading.show()
        const res = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetUDFields?id=' + this.id + '&ck=' + this.ck + '&surveyTableName=Survey_Supporter21', {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        this.$store.commit('setCurrentPage', res.data.Answers.Currentpage)
        this.reasons_to_donate.map( el => {
          if (el.id === 'Donate_Reason_RemainState') el.checked = res.data.Answers.Donate_Reason_RemainState
          if (el.id === 'Donate_Reason_RemainFed') el.checked = res.data.Answers.Donate_Reason_RemainFed
          if (el.id === 'Donate_Reason_Fight') el.checked = res.data.Answers.Donate_Reason_Fight
          if (el.id === 'Donate_Reason_Future') el.checked = res.data.Answers.Donate_Reason_Future
          if (el.id === 'Donate_Reason_Other') el.checked = res.data.Answers.Donate_Reason_Other
          if (el.id === 'Donate_Reason_Other') this.other_reason = res.data.Answers.Donate_Reason_Other
        })
        this.answer_step3.Donate_Reason_RemainState = res.data.Answers.Donate_Reason_RemainState
        this.answer_step3.Donate_Reason_RemainFed = res.data.Answers.Donate_Reason_RemainFed
        this.answer_step3.Donate_Reason_Fight = res.data.Answers.Donate_Reason_Fight
        this.answer_step3.Donate_Reason_Future = res.data.Answers.Donate_Reason_Future
        this.answer_step3.Donate_Reason_Other = res.data.Answers.Donate_Reason_Other
        this.answer_step3.Donate_Reason_OtherDetails = res.data.Answers.Donate_Reason_OtherDetails
        this.answer_step3.Donation_Method = res.data.Answers.Donation_Method
        this.answer_step3.Donation_Frequency = res.data.Answers.Donation_Frequency
        this.answer_step3.RG_Status = res.data.Answers.RG_Status
        this.$store.commit('setAnswers', res.data.Answers)
      } catch (error) {
        this.$store.commit('setCurrentPage', 1)
      } finally {
        this.loading.hide()
      }
    },
    async onSubmit () {
      try {
        const isValid = await this.$refs.stepThree.validate()
        if(!isValid) {
          const el = document.querySelector('.error')
          el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' })
          return false
        }
        const load = this.$loading.show()
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 4,
          startDate: this.submitForm.startDate,
          lastView: this.startDate,
          endDate: this.submitForm.endDate
        }
        const UD_fields = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          Answers: this.answer_step3
        }
        // saving post UD Fields
        await axios.post('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/PostUDFields', UD_fields, {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
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
        load.hide()
        this.$store.commit('setCurrentPage', result.data.Answers.Currentpage)
        this.$store.commit('setAnswers', result.data.Answers)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
        this.$store.commit('setProgress', 45)
      } catch (error) {
        this.$store.commit('setProgress', 45)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
      } finally {
        this.loading.hide()        
      }
    },
    async goBack () {
      try {
        this.loading = this.$loading.show()
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 2,
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
        this.$store.commit('setProgress', 15)
      } catch (error) {
        this.$store.commit('setProgress', 15)
        this.$store.commit('setCurrentPage', 2)
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

