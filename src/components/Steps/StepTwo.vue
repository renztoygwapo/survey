<template>
  <section class="card-section form-page">
    <ValidationObserver ref="stepTwo">
      <form class="w-full text-lg pb-10 ">
        <div class="bg-white w-100 inner-section" id="q4">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  4. What policies at a NSW State level are most important to you ?
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select the most important reasons (up to 3).
                </h6>
                <!-- custom check container -->
                <div v-for="item in nsw_policies" :key="item.id" class="checkbox">
                  <div>
                    <input
                      :id="item.id"
                      v-model="item.checked"
                      :checked="item.checked"
                      :disabled="item.disabled"
                      type="checkbox"
                      :value="item.id"
                      @change="inputChecker"
                    >
                    <label :for="item.id" class="col-form-label">{{ item.text }}</label>
                  </div>
                </div>

                <div v-if="other_policy" class="form-group pt-2 col-md-6 px-0">
                  <ValidationProvider name="Other Policy" rules="required" v-slot="{ errors }">
                    <label>Other policy</label>
                    <input name="Other Policy" type="text" class="form-control" v-model="answer_step2.State_Policy_OtherReason">
                    <span class="error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>
        <!-- bg-grey -->
        <div class="bg-grey w-100 inner-section" id="q5">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  5. What policies at a Federal Level are most important to you ?
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select the most important reasons (up to 3).
                </h6>
                <!-- custom check container -->
                <div v-for="item in federal_policies" :key="item.id" class="checkbox">
                  <div>
                    <input
                    :id="item.id + '-federal'"
                    v-model="item.checked"
                    @change="inputCheckerFederal"
                    :disabled="item.disabled"
                    type="checkbox"
                    :value="item.id + '-federal'">
                    <label :for="item.id + '-federal'" class="col-form-label">{{ item.text }}</label>
                  </div>
                </div>

                <div v-if="federal_other" class="form-group pt-2 col-md-6 px-0">
                  <ValidationProvider name="Other" rules="required" v-slot="{ errors }">
                    <label>Please provide further details</label>
                    <input name="Other" type="text" class="form-control" v-model="answer_step2.Fed_Policy_OtherReason">
                    <span class="error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>
        <!-- bg-grey -->

        <div class="bg-white w-100 inner-section" id="q6">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  6. In what ways do you interact with the NSW Liberal Party ?
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select all that apply to you.
                </h6>

                <div class="clear-both">
                  <div v-for="item in options" :key="item.value" class="form-check form-check-inline">
                  <input
                    class="form-check-input custom-radio"
                    type="radio"
                    name="selected"
                    :id="item.value"
                    :value="item.value"
                    v-model="answer_step2.Interact_MemberStatus"
                  >
                  <label class="form-check-label" :for="item.value">{{ item.text }}</label>
                </div>
                </div>

                <div class="clear-both">
                  <div v-for="item in made_donation" :key="item.value" class="form-check form-check-inline">
                  <input
                    class="form-check-input with-or"
                    type="radio"
                    name="pass_donation"
                    :id="item.value"
                    :value="item.value"
                    v-model="answer_step2.Interact_Donation"
                  >
                  <label class="form-check-label" :for="item.value">{{ item.text }}</label>
                </div>
                </div>


                <div class="clear-both">
                  <div v-for="item in corporate_events" :key="item.value" class="form-check form-check-inline">
                  <input
                    class="form-check-input with-or"
                    type="radio"
                    name="corporate_event_model"
                    :id="item.value"
                    :value="item.value"
                    v-model="answer_step2.Interact_Events"
                  >
                  <label class="form-check-label" :for="item.value">{{ item.text }}</label>
                </div>
                </div>

                <div class="clear-both">
                  <div v-for="item in nsw_volunteer" :key="item.value" class="form-check form-check-inline">
                  <input
                    class="form-check-input with-or"
                    type="radio"
                    name="nsw_volunteer_model"
                    :id="item.value"
                    :value="item.value"
                    v-model="answer_step2.Interact_Volunteer"
                  >
                  <label class="form-check-label" :for="item.value">{{ item.text }}</label>
                </div>
                </div>

                <div class="checkbox">
                  <div>
                    <input id="subscribe-newsletter" v-model="answer_step2.Interact_Newsletter" type="checkbox" value="">
                    <label for="subscribe-newsletter" class="col-form-label">I subscribe to your newsletter</label>
                  </div>
                </div>
                <div class="checkbox">
                  <div>
                    <input id="liberal_supporter" v-model="answer_step2.Interact_StrongLiberal" type="checkbox" value="">
                  <label class="col-form-label" for="liberal_supporter">I consider myself a strong Liberal supporter</label>
                  </div>
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
      other_policy: false,
      federal_other: false,
      federal_policies_other: false,
      liberal_supporter: null,
      policies: [],
      federal: [],
      nsw_policies: [
        {
          id: 'State_Policy_Localroads',
          text: 'Investing in our local roads',
          checked: false,
          disabled: false
        },
        {
          id: 'State_Policy_Environment',
          text: 'Caring for our local environment',
          checked: false,
          disabled: false
        },
        {
          id: 'State_Policy_Invest_Schools',
          text: 'Investing in our schools',
          disabled: false,
          checked: false
        },
        {
          id: 'State_Policy_Localjobs',
          text: 'Creating more local jobs',
          disabled: false,
          checked: false
        },
        {
          id: 'State_Policy_Cost_Living',
          text: 'Helping with the cost of living',
          disabled: false,
          checked: false
        },
        {
          id: 'State_Policy_Public_Transport',
          text: 'Investing in public transport',
          disabled: false,
          checked: false
        },
        {
          id: 'State_Policy_Reduce_Crime',
          text: 'Reducing crime in our area',
          disabled: false,
          checked: false
        },
        {
          id: 'State_Policy_Invest_Hospitals',
          text: 'Investing in our hospitals',
          disabled: false,
          checked: false
        },
        {
          id: 'State_Policy_Equality',
          text: 'Promoting equality and diversity in our community',
          disabled: false,
          checked: false
        },
        {
          id: 'State_Policy_Other',
          text: 'Other',
          disabled: false,
          checked: false
        }
      ],
      federal_policies: [
        {
          id: 'Fed_Policy_Lower_Taxes',
          text: 'Lowering taxes',
          disabled: false,
          checked: false
        },
        {
          id: 'Fed_Policy_Rebuild_Econ',
          text: 'Rebuilding the economy',
          disabled: false,
          checked: false
        },
        {
          id: 'Fed_Policy_Borders_Strong',
          text: 'Keeping our borders strong and secure',
          disabled: false,
          checked: false
        },
        {
          id: 'Fed_Policy_Hospitals_Health',
          text: 'Delivering better hospitals and health outcomes',
          disabled: false,
          checked: false
        },
        {
          id: 'Fed_Policy_Education',
          text: 'Investing in better education, skills, training opportunities',
          disabled: false,
          checked: false
        },
        {
          id: 'Fed_Policy_Roads',
          text: 'Building better and safer roads',
          disabled: false,
          checked: false
        },
        {
          id: 'Fed_Policy_Climatechange',
          text: 'Tackling climate change',
          disabled: false,
          checked: false
        },
        {
          id: 'Fed_Policy_Small_business',
          text: 'Helping small businesses get ahead',
          disabled: false,
          checked: false
        },
        {
          id: 'Fed_Policy_Equality',
          text: 'Promoting equality and diversity in our community',
          disabled: false,
          checked: false
        },
        {
          id: 'Fed_Policy_Other',
          text: 'Other',
          disabled: false,
          checked: false
        }
      ],
      selected: 'first',
      pass_donation: null,
      options: [
        { text: 'I am a Party Member', value: 'Current Member' },
        { text: 'I used to be a Party Member', value: 'Lapsed Member' }
      ],
      made_donation: [
        { text: 'I have made a donation to the Party in the past 12 months', value: 'Current Donor' },
        { text: 'I have previously donated to the Party', value: 'Lapsed Donor' }
      ],
      corporate_events: [
        { text: 'I attend Corporate events (including virtual and in-person events)', value: 'Current attendee' },
        { text: 'I used to attend Corporate events, but not in the past 12 months', value: 'Lapsed Attendee' }
      ],
      nsw_volunteer: [
        { text: 'I am currently volunteering for the NSW Liberal Party', value: 'Current Volunteer' },
        { text: 'I have previously volunteered for the Party during an Election', value: 'Past Volunteer' }
      ],
      id: '',
      ck: '',
      loadingTwo: '',
      loadingSubmit: '',
      loadingBack: '',
      startDate: null,
      answer_step2: {
        State_Policy_Cost_Living: false,
        State_Policy_Environment: false,
        State_Policy_Invest_Hospitals: false,
        State_Policy_Invest_Schools: false,
        State_Policy_Localjobs: false,
        State_Policy_Localroads: false,
        State_Policy_Other: false,
        State_Policy_OtherReason: '',
        State_Policy_Public_Transport: false,
        State_Policy_Reduce_Crime: false,
        Fed_Policy_Borders_Strong: false,
        Fed_Policy_Climatechange: false,
        Fed_Policy_Education: false,
        Fed_Policy_Hospitals_Health: false,
        Fed_Policy_Lower_Taxes: false,
        Fed_Policy_Other: false,
        Fed_Policy_OtherReason: '',
        Fed_Policy_Rebuild_Econ: false,
        Fed_Policy_Roads: false,
        Fed_Policy_Small_business: false,
        Interact_MemberStatus: '',
        Interact_Donation: '',
        Interact_Events: '',
        Interact_Volunteer: '',
        Interact_Newsletter: false,
        Interact_StrongLiberal: false
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
    async getCurrentFields () {
      try {
        this.loadingTwo = this.$loading.show()
        const res = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetUDFields?id=' + this.id + '&ck=' + this.ck + '&surveyTableName=Survey_Supporter21', {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        this.loadingTwo.hide()
        this.$store.commit('setCurrentPage', res.data.Answers.Currentpage)
        this.nsw_policies.map( el => {
          if (el.id === 'State_Policy_Cost_Living') el.checked = res.data.Answers.State_Policy_Cost_Living
          if (el.id === 'State_Policy_Environment') el.checked = res.data.Answers.State_Policy_Environment
          if (el.id === 'State_Policy_Invest_Hospitals') el.checked = res.data.Answers.State_Policy_Invest_Hospitals
          if (el.id === 'State_Policy_Invest_Schools') el.checked = res.data.Answers.State_Policy_Invest_Schools
          if (el.id === 'State_Policy_Localjobs') el.checked = res.data.Answers.State_Policy_Localjobs
          if (el.id === 'State_Policy_Localroads') el.checked = res.data.Answers.State_Policy_Localroads
          if (el.id === 'State_Policy_Other') el.checked = res.data.Answers.State_Policy_Other
          if (el.id === 'State_Policy_Other') this.other_policy = res.data.Answers.State_Policy_Other
          if (el.id === 'State_Policy_Public_Transport') el.checked = res.data.Answers.State_Policy_Public_Transport
          if (el.id === 'State_Policy_Reduce_Crime') el.checked = res.data.Answers.State_Policy_Reduce_Crime
        })
        this.federal_policies.map( el => {
          if (el.id === 'Fed_Policy_Borders_Strong') el.checked = res.data.Answers.Fed_Policy_Borders_Strong
          if (el.id === 'Fed_Policy_Climatechange') el.checked = res.data.Answers.Fed_Policy_Climatechange
          if (el.id === 'Fed_Policy_Education') el.checked = res.data.Answers.Fed_Policy_Education
          if (el.id === 'Fed_Policy_Hospitals_Health') el.checked = res.data.Answers.Fed_Policy_Hospitals_Health
          if (el.id === 'Fed_Policy_Lower_Taxes') el.checked = res.data.Answers.Fed_Policy_Lower_Taxes
          if (el.id === 'Fed_Policy_Other') el.checked = res.data.Answers.Fed_Policy_Other
          if (el.id === 'Fed_Policy_Other') this.federal_other = res.data.Answers.Fed_Policy_Other
          if (el.id === 'Fed_Policy_Rebuild_Econ') el.checked = res.data.Answers.Fed_Policy_Rebuild_Econ
          if (el.id === 'Fed_Policy_Roads') el.checked = res.data.Answers.Fed_Policy_Roads
          if (el.id === 'Fed_Policy_Small_business') el.checked = res.data.Answers.Fed_Policy_Small_business
        })
        this.answer_step2.State_Policy_Cost_Living = res.data.Answers.State_Policy_Cost_Living
        this.answer_step2.State_Policy_Environment = res.data.Answers.State_Policy_Environment
        this.answer_step2.State_Policy_Invest_Hospitals = res.data.Answers.State_Policy_Invest_Hospitals
        this.answer_step2.State_Policy_Invest_Schools = res.data.Answers.State_Policy_Invest_Schools
        this.answer_step2.State_Policy_Localjobs = res.data.Answers.State_Policy_Localjobs
        this.answer_step2.State_Policy_Localroads = res.data.Answers.State_Policy_Localroads
        this.answer_step2.State_Policy_Other = res.data.Answers.State_Policy_Other
        this.answer_step2.State_Policy_Public_Transport = res.data.Answers.State_Policy_Public_Transport
        this.answer_step2.State_Policy_Reduce_Crime = res.data.Answers.State_Policy_Reduce_Crime
        this.answer_step2.Fed_Policy_Borders_Strong = res.data.Answers.Fed_Policy_Borders_Strong
        this.answer_step2.Fed_Policy_Climatechange = res.data.Answers.Fed_Policy_Climatechange
        this.answer_step2.Fed_Policy_Education = res.data.Answers.Fed_Policy_Education
        this.answer_step2.Fed_Policy_Hospitals_Health = res.data.Answers.Fed_Policy_Hospitals_Health
        this.answer_step2.Fed_Policy_Lower_Taxes = res.data.Answers.Fed_Policy_Lower_Taxes
        this.answer_step2.Fed_Policy_Other = res.data.Answers.Fed_Policy_Other
        this.answer_step2.Fed_Policy_Rebuild_Econ = res.data.Answers.Fed_Policy_Rebuild_Econ
        this.answer_step2.Fed_Policy_Roads = res.data.Answers.Fed_Policy_Roads
        this.answer_step2.Fed_Policy_Small_business = res.data.Answers.Fed_Policy_Small_business
        this.answer_step2.Fed_Policy_OtherReason = res.data.Answers.Fed_Policy_OtherReason
        this.answer_step2.State_Policy_OtherReason = res.data.Answers.State_Policy_OtherReason
        this.answer_step2.Interact_Newsletter = res.data.Answers.Interact_Newsletter
        this.answer_step2.Interact_StrongLiberal = res.data.Answers.Interact_StrongLiberal
        this.answer_step2.Interact_MemberStatus = res.data.Answers.Interact_MemberStatus
        this.answer_step2.Interact_Donation = res.data.Answers.Interact_Donation
        this.answer_step2.Interact_Events = res.data.Answers.Interact_Events
        this.answer_step2.Interact_Volunteer = res.data.Answers.Interact_Volunteer
        this.$store.commit('setAnswers', res.data.Answers)
      } catch (error) {
        console.log('error' + error)
        this.$store.commit('setCurrentPage', 1)
      } finally {
        this.loadingTwo.hide()
      }
    },
    inputChecker () {
      this.policies = this.nsw_policies.filter(policy => policy.checked)
      if (this.policies.length < 3) {
        this.nsw_policies.forEach((policies) => {
          if (policies.checked === false) { policies.disabled = false }
        })
      }
      // disable empty checkboxes if at the limit...
      if (this.policies.length === 3) {
        this.nsw_policies.forEach((policy) => {
          if (policy.checked === false) { policy.disabled = true }
        })
      }
      // check the other field is tick then show
      if (this.policies.some(policy => policy.text === 'Other')) {
        this.other_policy = true
      } else {
        this.other_policy = false
      }
    },
    inputCheckerFederal () {
      this.federal = this.federal_policies.filter(policy => policy.checked)
      if (this.federal.length < 3) {
        this.federal_policies.forEach((box) => {
          if (box.checked === false) { box.disabled = false }
        })
      }
      // disable empty checkboxes if at the limit...
      if (this.federal.length === 3) {
        this.federal_policies.forEach((box) => {
          if (box.checked === false) { box.disabled = true }
        })
      }
      // check the other field is tick then show
      if (this.federal.some(other => other.text === 'Other')) {
        this.federal_other = true
      } else {
        this.federal_other = false
      }
    },
    async onSubmit () {
      try {
        const isValid = await this.$refs.stepTwo.validate()
        if(!isValid) {
          const el = document.querySelector('.error')
          el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' })
          return false
        }
        this.loadingSubmit = this.$loading.show()
        this.$store.commit('setProgress', 30)
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 3,
          startDate: this.submitForm.startDate,
          lastView: this.startDate,
          endDate: this.submitForm.endDate
        }
        const UD_fields = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          Answers: this.answer_step2
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
        this.$store.commit('setCurrentPage', result.data.Answers.Currentpage)
        this.$store.commit('setAnswers', result.data.Answers)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
      } catch (error) {
        this.$store.commit('setProgress', 30)
        this.$store.commit('setCurrentPage', 3)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
      } finally {
        this.loadingSubmit.hide()
      }
    },
    async goBack () {
      try {
        this.loadingBack = this.$loading.show()
        this.$store.commit('setProgress', 0)
        this.$store.commit('setCurrentPage', 1)
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 1,
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
      } catch (error) {
        this.$store.commit('setProgress', 0)
        this.$store.commit('setCurrentPage', 1)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
      } finally {
        this.loadingBack.hide()
      }
    }
  },
  watch: {
    nsw_policies: {
      deep: true,
      handler(item) {
        item.map( el => {
          if ('State_Policy_Localroads' === el.id) this.answer_step2.State_Policy_Localroads = el.checked
          if ('State_Policy_Environment' === el.id) this.answer_step2.State_Policy_Environment = el.checked
          if ('State_Policy_Invest_Schools' === el.id) this.answer_step2.State_Policy_Invest_Schools = el.checked
          if ('State_Policy_Localjobs' === el.id) this.answer_step2.State_Policy_Localjobs = el.checked
          if ('State_Policy_Cost_Living' === el.id) this.answer_step2.State_Policy_Cost_Living = el.checked
          if ('State_Policy_Public_Transport' === el.id) this.answer_step2.State_Policy_Public_Transport = el.checked
          if ('State_Policy_Reduce_Crime' === el.id) this.answer_step2.State_Policy_Reduce_Crime = el.checked
          if ('State_Policy_Invest_Hospitals' === el.id) this.answer_step2.State_Policy_Invest_Hospitals = el.checked
          if ('State_Policy_Other' === el.id) this.answer_step2.State_Policy_Other = el.checked
        })
      }
    },
    federal_policies: {
      deep: true,
      handler(item) {
        item.map( el => {
          if ('Fed_Policy_Lower_Taxes' === el.id) this.answer_step2.Fed_Policy_Lower_Taxes = el.checked
          if ('Fed_Policy_Rebuild_Econ' === el.id) this.answer_step2.Fed_Policy_Rebuild_Econ = el.checked
          if ('Fed_Policy_Borders_Strong' === el.id) this.answer_step2.Fed_Policy_Borders_Strong = el.checked
          if ('Fed_Policy_Hospitals_Health' === el.id) this.answer_step2.Fed_Policy_Hospitals_Health = el.checked
          if ('Fed_Policy_Education' === el.id) this.answer_step2.Fed_Policy_Education = el.checked
          if ('Fed_Policy_Roads' === el.id) this.answer_step2.Fed_Policy_Roads = el.checked
          if ('Fed_Policy_Climatechange' === el.id) this.answer_step2.Fed_Policy_Climatechange = el.checked
          if ('Fed_Policy_Small_business' === el.id) this.answer_step2.Fed_Policy_Small_business = el.checked
          if ('Fed_Policy_Other' === el.id) this.answer_step2.Fed_Policy_Other = el.checked
        })
      }
    }
  }
}
</script>
