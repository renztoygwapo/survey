<template>
  <section class="card-section form-page">
        <div class="bg-white w-100" v-if="memberData">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <h2>2021 SUPPORTER SURVEY</h2>
                <h4>PRIVATE AND CONFIDENTIAL</h4>
              </div>
              <div class="col-md-4 mt-2">
                <h5 class="font-weight-bold mb-0 float-right" style="clear: both">
                  Supporter Number: {{ this.memberData.memberid }}
                </h5>
              </div>
            </div>
            <br>
            <div class="row">       
              <div class="col-md-12">
                <h5 class="mb-2" style="font-weight: bold;">
                  1 March 2021
                </h5>
                <p class="mb-3">
                  Dear {{ this.fullName }}
                </p>
                <b class="mb-3 d-block">Thank you so much for sharing your insights and time with us.</b>
                <p class="">
                  Supporters like you are the lifeblood of our Party and help us maintain our
                  position
                  as the most
                  successful political force in post war Australia. But these are uncertain times and we
                  want
                  to
                  ensure we understand your priorities, needs and can help you to have the connection with our
                  Party
                  in the way that
                  works best for you.
                </p>
                <p>
                  Your continued support and involvement is invaluable and greatly appreciated so we thank
                  you
                  in
                  advance for sharing your views
                </p>
                <p>Yours sincerely</p>
                <img class="brand-form-logo mb-2" src="http://dev.nsw.liberal.org.au/LPNSW/media/General/SurveySupport20_21/signature.png" alt="">
                <p class="font-weight-bold mb-0">
                  Chris Stone
                </p>
                <p class="font-weight-bold">
                  State Director
                </p>
                <p>
                  P.S. We know your time is important so we would like to thank you by offering to one survey
                  recipient — selected randomly — a copy of Lazarus Rising — A Personal and Political
                  Autobiography of John Howard – signed by Mr Howard with a personal inscription.
                </p>
                <hr>
                <h3 class="mb-3 ">
                  YOU AND THE NSW LIBERAL PARTY
                </h3>
              </div>
            </div>
          </div>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="w-full text-lg pb-10 " @submit.prevent="handleSubmit(onSubmit)">
            <div class="bg-grey w-100 inner-section" id="q1">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <h3 class="secondary-blue-text mb-2">
                      1. Why do you support the NSW Liberal Party?
                    </h3>
                    <h6 class="border-bottom pb-3 mb-4">
                      Please select the most important reasons (up to 3)
                    </h6>
                    <!-- custom check container -->
                    <div v-for="item in nsw_supports" :key="item.id" class="checkbox">
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
                    <div v-if="other_support" class="form-group pt-2 col-md-6 px-0">
                      <ValidationProvider name="other" rules="required" v-slot="{ errors }">
                        <label>Please provide further details</label>
                        <input v-model="answer_step1.Support_OtherDetails" name="other" type="text" class="form-control">
                        <span class="error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div><!-- col-md-12 -->
                </div><!-- row -->
              </div><!-- container -->
            </div>
            <div class="bg-white w-100 inner-section" id="q2">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <h3 class="secondary-blue-text mb-2">
                      2. Would you agree or disagree with the following
                      statements in relation to our NSW Liberal Team?
                    </h3>

                    <!-- radio box section-->
                    <p class="mb-2 font-weight-bold">
                      The Berejiklian NSW Government is best able to manage and
                      grow the NSW
                      economy.
                    </p>
                    <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio1" v-model="answer_step1.State_Grow_Economy" value="Strongly Agree">
                        <label for="">STRONGLY AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio1" v-model="answer_step1.State_Grow_Economy" value="Agree">
                        <label for="">AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio1" v-model="answer_step1.State_Grow_Economy" value="Neither">
                        <label for="">NEITHER AGREE OR DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio1" v-model="answer_step1.State_Grow_Economy" value="Disagree">
                        <label for="">DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio1" v-model="answer_step1.State_Grow_Economy" value="Strongly Disagree">
                        <label for="">STRONGLY DISAGREE</label>
                      </div>
                      <!-- radio-box -->
                    </div><!-- radio-box-con -->

                    <!-- radio box section-->
                    <p class="mb-2 font-weight-bold">
                      The Berejiklian Government has a clear plan for NSW and is
                      delivering on
                      it.
                    </p>
                    <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio2" v-model="answer_step1.State_Deliver_Clearplan" value="Strongly Agree">
                        <label for="">STRONGLY AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio2" v-model="answer_step1.State_Deliver_Clearplan" value="Agree">
                        <label for="">AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio2" v-model="answer_step1.State_Deliver_Clearplan" value="Neither">
                        <label for="">NEITHER AGREE OR DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio2" v-model="answer_step1.State_Deliver_Clearplan" value="Disagree">
                        <label for="">DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio2" v-model="answer_step1.State_Deliver_Clearplan" value="Strongly Disagree">
                        <label for="">STRONGLY DISAGREE</label>
                      </div>
                      <!-- radio-box -->
                    </div><!-- radio-box-con -->

                    <!-- radio box section-->
                    <p class="mb-2 font-weight-bold">
                      The Berejiklian Government is concentrating on issues
                      important to you and
                      your family.
                    </p>
                    <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio3" v-model="answer_step1.State_Issues_Family" value="Strongly Agree">
                        <label for="">STRONGLY AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio3" v-model="answer_step1.State_Issues_Family" value="Agree">
                        <label for="">AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio3" v-model="answer_step1.State_Issues_Family" value="Neither">
                        <label for="">NEITHER AGREE OR DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio3" v-model="answer_step1.State_Issues_Family" value="Disagree">
                        <label for="">DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio3" v-model="answer_step1.State_Issues_Family" value="Strongly Disagree">
                        <label for="">STRONGLY DISAGREE</label>
                      </div>
                      <!-- radio-box -->
                    </div><!-- radio-box-con -->

                    <!-- radio box section-->
                    <p class="mb-2 font-weight-bold">
                      The Berejiklian Government has struck the right balance in
                      addressing the
                      health and economic impacts of the COVID-19 pandemic.
                    </p>
                    <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio4" v-model="answer_step1.State_Covid19" value="Strongly Agree">
                        <label for="">STRONGLY AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio4" v-model="answer_step1.State_Covid19" value="Agree">
                        <label for="">AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio4" v-model="answer_step1.State_Covid19" value="Neither">
                        <label for="">NEITHER AGREE OR DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio4" v-model="answer_step1.State_Covid19" value="Disagree">
                        <label for="">DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio4" v-model="answer_step1.State_Covid19" value="Strongly Disagree">
                        <label for="">STRONGLY DISAGREE</label>
                      </div>
                      <!-- radio-box -->
                    </div><!-- radio-box-con -->
                  </div><!-- col-md-12 -->
                </div><!-- row -->
              </div><!-- container -->
            </div>
            <!-- bg-white -->
            <div class="bg-grey w-100 inner-section" id="q3">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <h3 class="secondary-blue-text mb-2">
                      3. Would you agree or disagree with the following
                      statements in relation to our Federal Liberal Team?
                    </h3>

                    <!-- radio box section-->
                    <p class="mb-2 font-weight-bold">
                      The Morrison Government is best able to manage and grow
                      the Australian economy.
                    </p>
                    <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio5" v-model="answer_step1.Fed_Grow_Economy" value="Strongly Agree">
                        <label for="">STRONGLY AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio5" v-model="answer_step1.Fed_Grow_Economy" value="Agree">
                        <label for="">AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio5" v-model="answer_step1.Fed_Grow_Economy" value="Neither">
                        <label for="">NEITHER AGREE OR DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio5" v-model="answer_step1.Fed_Grow_Economy" value="Disagree">
                        <label for="">DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio5" v-model="answer_step1.Fed_Grow_Economy" value="Strongly Disagree">
                        <label for="">STRONGLY DISAGREE</label>
                      </div>
                      <!-- radio-box -->
                    </div><!-- radio-box-con -->

                    <!-- radio box section-->
                    <p class="mb-2 font-weight-bold">
                      The Morrison Government has a clear plan for Australia and
                      is delivering on it.
                    </p>
                    <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio6" v-model="answer_step1.Fed_Deliver_Clearplan" value="Strongly Agree">
                        <label for="">STRONGLY AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio6" v-model="answer_step1.Fed_Deliver_Clearplan" value="Agree">
                        <label for="">AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio6" v-model="answer_step1.Fed_Deliver_Clearplan" value="Neither">
                        <label for="">NEITHER AGREE OR DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio6" v-model="answer_step1.Fed_Deliver_Clearplan" value="Disagree">
                        <label for="">DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio6" v-model="answer_step1.Fed_Deliver_Clearplan" value="Strongly Disagree">
                        <label for="">STRONGLY DISAGREE</label>
                      </div>
                      <!-- radio-box -->
                    </div><!-- radio-box-con -->

                    <!-- radio box section-->
                    <p class="mb-2 font-weight-bold">
                      The Morrison Government is concentrating on issues
                      important to you and your family
                    </p>
                    <div class="radio-box-con mb-4 d-flex justify-content-md-start justify-content-sm-center">
                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio7" v-model="answer_step1.Fed_Issues_Family" value="Strongly Agree">
                        <label for="">STRONGLY AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio7" v-model="answer_step1.Fed_Issues_Family" value="Agree">
                        <label for="">AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio7" v-model="answer_step1.Fed_Issues_Family" value="Neither">
                        <label for="">NEITHER AGREE OR DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio7" v-model="answer_step1.Fed_Issues_Family" value="Disagree">
                        <label for="">DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio7" v-model="answer_step1.Fed_Issues_Family" value="Strongly Disagree">
                        <label for="">STRONGLY DISAGREE</label>
                      </div>
                      <!-- radio-box -->
                    </div><!-- radio-box-con -->

                    <!-- radio box section-->
                    <p class="mb-2 font-weight-bold">
                      The Morrison Government has struck the right balance in
                      addressing the health and economic impacts
                      of the COVID-19 pandemic.
                    </p>
                    <div class="radio-box-con justify-content-md-start justify-content-sm-center">
                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio8" v-model="answer_step1.Fed_Covid19" value="Strongly Agree">
                        <label for="">STRONGLY AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio8" v-model="answer_step1.Fed_Covid19" value="Agree">
                        <label for="">AGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio8" v-model="answer_step1.Fed_Covid19" value="Neither">
                        <label for="">NEITHER AGREE OR DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio8" v-model="answer_step1.Fed_Covid19" value="Disagree">
                        <label for="">DISAGREE</label>
                      </div>
                      <!-- radio-box -->

                      <div class="radio-box">
                        <input class="input-radio" type="radio" name="radio8" v-model="answer_step1.Fed_Covid19" value="Strongly Disagree">
                        <label for="">STRONGLY DISAGREE</label>
                      </div>
                      <!-- radio-box -->
                    </div><!-- radio-box-con -->
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
                    <button class="btn btn-primary mr-md-2 mb-2" @click="handleSubmit(onSubmit)">
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
  props: {
    memberData: Object
  },
  data () {
    return {
      other_support: '',
      loading: '',
      name: '',
      answer_step1: {
        Support_Beliefs: false,
        Support_Leadership: false,
        Support_Future: false,
        Support_Concerned: false,
        Support_Advancement: false,
        Support_Other: false,
        Support_OtherDetails: '',
        State_Grow_Economy: '',
        State_Deliver_Clearplan: '',
        State_Issues_Family: '',
        State_Covid19: '',
        Fed_Covid19: '',
        Fed_Issues_Family: '',
        Fed_Grow_Economy: '',
        Fed_Deliver_Clearplan: ''
      },
      supports: [],
      nsw_supports: [
        {
          id: 'Support_Beliefs',
          text: 'I support the Liberal Party’s beliefs and values',
          checked: false,
          disabled: false
        },
        {
          id: 'Support_Leadership',
          text: "I support the Liberal Party's leadership in government",
          checked: false,
          disabled: false
        },
        {
          id: 'Support_Future',
          text: "I believe the Liberal Party's beliefs lead to a better future for the nation",
          disabled: false,
          checked: false
        },
        {
          id: 'Support_Concerned',
          text: 'l am concerned for the future under the Labor Party or other Party leadership',
          disabled: false,
          checked: false
        },
        {
          id: 'Support_Advancement',
          text: 'For personal or business advancement, opportunity, connections',
          disabled: false,
          checked: false
        },
        {
          id: 'Support_Other',
          text: 'Other',
          disabled: false,
          checked: false
        }
      ],
      result: null,
      id: '',
      ck: '',
      loadingSubmit: null,
      startDate: null,
      endDate: null,
      lastView: null
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
  methods: {
    inputChecker () {
      this.supports = this.nsw_supports.filter(support => support.checked)
      if (this.supports.length < 3) {
        this.nsw_supports.forEach((support) => {
          if (support.checked === false) { support.disabled = false }
        })
      }
      // disable empty checkboxes if at the limit...
      if (this.supports.length === 3) {
        this.nsw_supports.forEach((support) => {
          if (support.checked === false) { support.disabled = true }
        })
      }
      // check the other field is tick then show
      if (this.supports.some(support => support.text === 'Other')) {
        this.other_support = true
      } else {
        this.other_support = false
      }
    },
    async getMember () {
      try {
        const res = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetMemberDetails?id=' + this.id + '&ck=' + this.ck, {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        this.result = res.data
        // this.$store.commit('setMember', res.data)
      } catch (error) {
        console.log('error' + error)
          const tempData = {
          memberid: 23423,
          Prefix: 'Mr',
          LastName: 'Doe',
          FirstName: 'Jhon'
        }
        this.result = tempData
        // this.$store.commit('setMember', tempData)
      } finally {
        this.$store.commit('setLoading', false)
      }
    },
    async onSubmit () {
      try {
        const loader = this.$loading.show()
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 2,
          startDate: this.submitForm.startDate,
          lastView: this.startDate,
          endDate: this.submitForm.endDate
        }
        const UD_fields = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          Answers: this.answer_step1
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
        loader.hide()
        this.$store.commit('setCurrentPage', result.data.Answers.Currentpage)
        this.$store.commit('setAnswers', result.data.Answers)
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
        this.$store.commit('setProgress', 15)
      } catch (error) {
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
        this.$store.commit('setCurrentPage', 2)
        this.$store.commit('setProgress', 15)
      }
    },
    async getCurrentFields () {
      try {
        this.$store.commit('setCurrentPage', this.answers.Currentpage)
        this.nsw_supports.map( el => {
          if (el.id === 'Support_Beliefs') el.checked = this.answers.Support_Beliefs
          if (el.id === 'Support_Leadership') el.checked = this.answers.Support_Leadership
          if (el.id === 'Support_Future') el.checked = this.answers.Support_Future
          if (el.id === 'Support_Concerned') el.checked = this.answers.Support_Concerned
          if (el.id === 'Support_Advancement') el.checked = this.answers.Support_Advancement
          if (el.id === 'Support_Other') el.checked = this.answers.Support_Other
          if (el.id === 'Support_Other') this.other_support = this.answers.Support_Other
        })
        this.answer_step1.Support_Beliefs = this.answers.Support_Beliefs
        this.answer_step1.Support_Leadership = this.answers.Support_Leadership
        this.answer_step1.Support_Future = this.answers.Support_Future
        this.answer_step1.Support_Concerned = this.answers.Support_Concerned
        this.answer_step1.Support_Advancement = this.answers.Support_Advancement
        this.answer_step1.Support_Other = this.answers.Support_Other
        this.answer_step1.Support_OtherDetails = this.answers.Support_OtherDetails
        this.answer_step1.State_Grow_Economy = this.answers.State_Grow_Economy
        this.answer_step1.State_Deliver_Clearplan = this.answers.State_Deliver_Clearplan
        this.answer_step1.State_Issues_Family = this.answers.State_Issues_Family
        this.answer_step1.State_Covid19 = this.answers.State_Covid19
        this.answer_step1.Fed_Covid19 = this.answers.Fed_Covid19
        this.answer_step1.Fed_Issues_Family = this.answers.Fed_Issues_Family
        this.answer_step1.Fed_Grow_Economy = this.answers.Fed_Grow_Economy
        this.answer_step1.Fed_Deliver_Clearplan = this.answers.Fed_Deliver_Clearplan
      } catch (error) {
        console.log('error' + error)
        this.$store.commit('setCurrentPage', 1)
      }
    }
  },
  computed: {
    ...mapGetters({
      width: 'width',
      isLoading: 'loading',
      fullPage: 'fullPage',
      submitForm: 'submitForm',
      answers: 'answers',
      token: 'token'
    }),
    fullName () {
      return this.memberData.Prefix + ' ' + this.memberData.FirstName + ' ' + this.memberData.LastName
    }
  },
  watch: {
    nsw_supports: {
      deep: true,
      handler(item) {
        item.map( el => {
          if ('Support_Beliefs' === el.id) this.answer_step1.Support_Beliefs = el.checked
          if ('Support_Leadership' === el.id) this.answer_step1.Support_Leadership = el.checked
          if ('Support_Future' === el.id) this.answer_step1.Support_Future = el.checked
          if ('Support_Concerned' === el.id) this.answer_step1.Support_Concerned = el.checked
          if ('Support_Advancement' === el.id) this.answer_step1.Support_Advancement = el.checked
          if ('Support_Other' === el.id) this.answer_step1.Support_Other = el.checked
        })
      }
    }
  }
}
</script>
