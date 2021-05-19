<template>
  <section class="card-section form-page">
    <ValidationObserver ref="stepFour">
      <form class="w-full text-lg pb-10 ">
        <div class="bg-white w-100 inner-section" id="q11">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  11. Below are all the ways you can further support the NSW Liberal Party:
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select any you are personally interested in.
                </h6>
                <!-- custom check container -->
                <div v-for="item in support" :key="item.id" class="checkbox">
                  <div>
                    <input
                      :id="item.id"
                      type="checkbox"
                      :value="item.id"
                      v-model="item.checked"
                      :checked="item.checked"
                      @change="inputCheckerSupport"
                    >
                    <label :for="item.id" class="col-form-label">{{ item.text }}</label>
                  </div>
                </div>
                <!-- custom check container -->
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>
        <div class="bg-grey w-100 inner-section" id="q12">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  12. A gift in a Will, no matter what size, is one of the most valued legacies to show your involvement with the Party.
                  All gifts are appreciated as they represent the final and important wishes of our community.
                  A special society is being created for those who have made this important decision.
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select one preference.
                </h6>
                <!-- custom check container -->
                <div v-for="item in gift_will" :key="item.value" class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gift_will_model"
                    :id="item.value"
                    :value="item.value"
                    v-model="answer_step4.GIW_Preference"
                  >
                  <label class="form-check-label" :for="item.value">{{ item.text }}</label>
                </div>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>
        <div class="bg-white w-100 inner-section" id="q13">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  13. Would you share your thoughts on the following:
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select one preference.
                </h6>

                <p style="font-weight: bold;">A will is to provide for family/friends.</p>
                <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio1" v-model="answer_step4.GIW_Provide_Family" value="Agree">
                    <label for="">AGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio1" v-model="answer_step4.GIW_Provide_Family" value="Disagree">
                    <label for="">DISAGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio1" v-model="answer_step4.GIW_Provide_Family" value="Maybe">
                    <label for="">MAYBE</label>
                  </div>
                </div>

                <p style="font-weight: bold;">It's also good to leave a gift to a cause if you can.</p>
                <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio2" v-model="answer_step4.GIW_Good_Cause" value="Agree">
                    <label for="">AGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio2" v-model="answer_step4.GIW_Good_Cause" value="Disagree">
                    <label for="">DISAGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio2" v-model="answer_step4.GIW_Good_Cause" value="Maybe">
                    <label for="">MAYBE</label>
                  </div>
                </div>

                <p style="font-weight: bold;">It's easy to leave a gift or update a will.</p>
                <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio3" v-model="answer_step4.GIW_Ease" value="Agree">
                    <label for="">AGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio3" v-model="answer_step4.GIW_Ease" value="Disagree">
                    <label for="">DISAGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio3" v-model="answer_step4.GIW_Ease" value="Maybe">
                    <label for="">MAYBE</label>
                  </div>
                </div>

                <p style="font-weight: bold;">I may have enough to include a gift to a cause that I believe in.</p>
                <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio4" v-model="answer_step4.GIW_Enough_Resource" value="Agree">
                    <label for="">AGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio4" v-model="answer_step4.GIW_Enough_Resource" value="Disagree">
                    <label for="">DISAGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio4" v-model="answer_step4.GIW_Enough_Resource" value="Maybe">
                    <label for="">MAYBE</label>
                  </div>
                </div>

                <p style="font-weight: bold;">I would like to be thanked in my life for a gift.</p>
                <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio5" v-model="answer_step4.GIW_Thanks" value="Agree">
                    <label for="">AGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio5" v-model="answer_step4.GIW_Thanks" value="Disagree">
                    <label for="">DISAGREE</label>
                  </div>
                  <div class="radio-box">
                    <input class="input-radio" type="radio" name="radio5" v-model="answer_step4.GIW_Thanks" value="Maybe">
                    <label for="">MAYBE</label>
                  </div>
                </div>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-grey w-100 inner-section" id="q14">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  14. NSW Liberal Party is currently developing new resources for our supporters. Which ones would you like to know more about?
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select any that you are personally interested in.
                </h6>

                <!-- custom check container -->
                <div v-for="item in new_resources" :key="item.id" class="checkbox">
                  <div>
                    <input
                      :id="item.id"
                      v-model="item.checked"
                      type="checkbox"
                      :checked="item.checked"
                      :disabled="item.disabled"
                      :value="item.id"
                      @change="inputChecker"
                    >
                  <label :for="item.id" class="col-form-label">{{ item.text }}</label>
                  </div>
                </div>
                <!-- custom check container -->
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
      form: {
        two: ''
      },
      liberal_supporter: null,
      loading: '',
      policies: [],
      resource_supporter: [],
      federal: [],
      support: [
        {
          id: 'Support_NSW_Membership',
          text: 'Become a NSW Party Member',
          disabled: false,
          checked: false
        },
        {
          id: 'Support_Donation',
          text: 'Supporting Party beliefs through a donation or gift',
          disabled: false,
          checked: false
        },
        {
          id: 'Support_Volunteer',
          text: 'Volunteer at the next Federal and/or State Election',
          disabled: false,
          checked: false
        },
        {
          id: 'Support_Corporate_Events',
          text: "Attend Corporate events with our NSW State and Federal MP's",
          disabled: false,
          checked: false
        }
      ],
      gift_will_model: '',
      gift_will: [
        {
          value: 'Confirmed',
          text: 'Yes the NSW Liberal Party is already mentioned in my Will',
          checked: false,
          disabled: false
        },
        {
          value: 'Considering',
          text: 'Yes I am considering a gift to the NSW Liberal Party',
          checked: false,
          disabled: false
        },
        {
          value: 'Prospect',
          text: 'Yes I would like information on how to leave a gift to the NSW Liberal Party',
          checked: false,
          disabled: false
        },
        {
          value: 'Society',
          text: 'No I did not know about the Society and would like to know more',
          checked: false,
          disabled: false
        },
        {
          value: 'None',
          text: 'None of the above',
          checked: false,
          disabled: false
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
      new_resources_model: [],
      new_resources: [
        { id: 'GIW_Affairs_Checklist', text: 'Affairs in order checklist - a free self audit of important life matters', checked: false, disabled: false },
        { id: 'GIW_Affairs_Guidebook', text: 'Affairs in order guidebook - a free resource', checked: false, disabled: false },
        { id: 'GIW_Willservice', text: 'Free will service', checked: false, disabled: false },
        { id: 'GIW_Society_info', text: 'A Society for involving and thanking supporters', checked: false, disabled: false },
        { id: 'GIW_No_Resource', text: 'None of the above', checked: false, disabled: false }
      ],
      subscribe_newsletter: null,
      id: '',
      ck: '',
      startDate: '',
      answer_step4: {
        Support_NSW_Membership: false,
        Support_Volunteer: false,
        Support_Corporate_Events: false,
        Support_Donation: false,
        GIW_Preference: '',
        GIW_Provide_Family: '',
        GIW_Good_Cause: '',
        GIW_Ease: '',
        GIW_Enough_Resource: '',
        GIW_Thanks: '',
        GIW_Affairs_Checklist: false,
        GIW_Affairs_Guidebook: false,
        GIW_Willservice: false,
        GIW_Society_info: false,
        GIW_No_Resource: false
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
    inputCheckerSupport () {
      // this.reasons = this.reasons_to_donate.filter(donate => donate.checked)
      this.support.forEach((el) => {
        if (el.id === 'Support_NSW_Membership') this.answer_step4.Support_NSW_Membership  = el.checked
        if (el.id === 'Support_Volunteer') this.answer_step4.Support_Volunteer = el.checked
        if (el.id === 'Support_Corporate_Events') this.answer_step4.Support_Corporate_Events = el.checked
        if (el.id === 'Support_Donation') this.answer_step4.Support_Donation = el.checked
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
        this.support.map( el => {
          if (el.id === 'Support_NSW_Membership') el.checked = res.data.Answers.Support_NSW_Membership
          if (el.id === 'Support_Donation') el.checked = res.data.Answers.Support_Donation
          if (el.id === 'Support_Volunteer') el.checked = res.data.Answers.Support_Volunteer
          if (el.id === 'Support_Corporate_Events') el.checked = res.data.Answers.Support_Corporate_Events
        })
        this.new_resources.map( el => {
          if (el.id === 'GIW_Affairs_Checklist') el.checked = res.data.Answers.GIW_Affairs_Checklist
          if (el.id === 'GIW_Affairs_Guidebook') el.checked = res.data.Answers.GIW_Affairs_Guidebook
          if (el.id === 'GIW_Willservice') el.checked = res.data.Answers.GIW_Willservice
          if (el.id === 'GIW_Society_info') el.checked = res.data.Answers.GIW_Society_info
          if (el.id === 'GIW_No_Resource') el.checked = res.data.Answers.GIW_No_Resource
        })
        this.answer_step4.Support_NSW_Membership = res.data.Answers.Support_NSW_Membership
        this.answer_step4.Support_Donation = res.data.Answers.Support_Donation
        this.answer_step4.Support_Volunteer = res.data.Answers.Support_Volunteer
        this.answer_step4.Support_Corporate_Events = res.data.Answers.Support_Corporate_Events
        this.answer_step4.GIW_Preference = res.data.Answers.GIW_Preference
        this.answer_step4.GIW_Provide_Family = res.data.Answers.GIW_Provide_Family
        this.answer_step4.GIW_Good_Cause = res.data.Answers.GIW_Good_Cause
        this.answer_step4.GIW_Ease = res.data.Answers.GIW_Ease
        this.answer_step4.GIW_Enough_Resource = res.data.Answers.GIW_Enough_Resource
        this.answer_step4.GIW_Thanks = res.data.Answers.GIW_Thanks
        this.inputChecker()
        this.$store.commit('setAnswers', res.data.Answers)
      } catch (error) {
        this.$store.commit('setCurrentPage', 1)
      } finally {
        this.loading.hide()
      }
    },
    inputChecker () {
      // this.new_resources_model = this.new_resources.filter(resources => resources.checked)
      // check the other field is tick then show
      this.new_resources.forEach((el) => {
        if( el.id === 'GIW_No_Resource' && el.checked) {
          this.new_resources.forEach( el => {
            el.checked = false
            el.disabled = true
          })
          el.checked = true
          el.disabled = false
        } else {
          this.new_resources.forEach( el => el.disabled = false)
        }
      })
    },
    inputCheckerGiftWill () {
      // check the other field is tick then show
      if (this.gift_will_model === 'None of the above') {
        this.gift_will.forEach((giftwill) => {
          if (giftwill.checked === false) { giftwill.disabled = true }
        })
      } else {
        this.gift_will.forEach((giftwill) => {
          if (giftwill.checked === false) { giftwill.disabled = false }
        })
      }
    },
    async onSubmit () {
      try {
        const isValid = await this.$refs.stepFour.validate()
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
          currentPage: 5,
          startDate: this.submitForm.startDate,
          lastView: this.startDate,
          endDate: this.submitForm.endDate
        }
        const UD_fields = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          Answers: this.answer_step4
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
        this.$store.commit('setProgress', 60)
      } catch (error) {
        this.$store.commit('setCurrentPage', 5)
        this.$store.commit('setProgress', 60)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
      } finally {
        this.loading = this.$loading.hide()
      }
    },
    async goBack () {
      try {
        this.loading = this.$loading.show()
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 3,
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
        this.$store.commit('setProgress', 30)
      } catch (error) {
        this.$store.commit('setProgress', 30)
        this.$store.commit('setCurrentPage', 3)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
      } finally {
        this.loading.hide()
      }
    }
  },
  watch: {
    new_resources: {
      deep: true,
      handler(item) {
        item.map( el => {
          if ('GIW_Affairs_Checklist' === el.id) this.answer_step4.GIW_Affairs_Checklist = el.checked
          if ('GIW_Affairs_Guidebook' === el.id) this.answer_step4.GIW_Affairs_Guidebook = el.checked
          if ('GIW_Willservice' === el.id) this.answer_step4.GIW_Willservice = el.checked
          if ('GIW_Society_info' === el.id) this.answer_step4.GIW_Society_info = el.checked
          if ('GIW_No_Resource' === el.id) this.answer_step4.GIW_No_Resource = el.checked
        })
      }
    }
  }
}
</script>
