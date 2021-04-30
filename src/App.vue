<template>
  <main>
      <StepOne v-if="step === 0" v-bind:member-data="result" />
      <StepOne v-if="step === 1" v-bind:member-data="result" />
      <StepTwo v-else-if="step === 2" />
      <StepThree v-else-if="step === 3" />
      <StepFour v-else-if="step === 4" />
      <StepFive v-else-if="step === 5" />
      <StepSix v-else-if="step === 6" />
      <StepSeven v-else-if="step === 7" />
      <Thankyou v-else-if="step === 8" />
  </main>
</template>

<script>
import StepOne from './components/Steps/StepOne.vue'
import StepTwo from './components/Steps/StepTwo.vue'
import StepThree from './components/Steps/StepThree.vue'
import StepFour from './components/Steps/StepFour.vue'
import StepFive from './components/Steps/StepFive.vue'
import StepSix from './components/Steps/StepSix.vue'
import StepSeven from './components/Steps/StepSeven.vue'
import Thankyou from './components/Steps/thank-you.vue'
import { mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    StepSix,
    StepSeven,
    Thankyou,
    Loading
  },
  data () {
    return {
      width: 10,
      result: null,
      currentStep: 1,
      id: '',
      ck: '',
      color: '#07aeeb',
      loading: null
    }
  },
  computed: {
    ...mapGetters({
      step: 'step',
      isLoading: 'loading',
      fullPage: 'fullPage',
      member: 'member',
      fields: 'fields',
      token: 'token'
    })
  },
  async mounted () {
    this.loading = this.$loading.show()
    this.id = this.$route.query.id
    this.ck = this.$route.query.ck
    await this.getToken()
    await this.getMember()
    await this.getStreetTypes()
    await this.getFields()
    if(this.step) {
      this.$store.commit('setLoading', false)
    }
    // progress bar re-initiate
    this.progressBarWidth()
  },
  methods: {
    async getToken () {
      try {
        this.$store.commit('setLoading', true)
        const res = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetJwtToken?id=' + this.id + '&ck=' + this.ck)
        this.$store.commit('setToken', res.data.data)
      } catch (error) {
        console.log('error' + error)
      }
    },
    async getMember () {
      try {
        this.$store.commit('setLoading', true)
        const res = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetMemberDetails?id=' + this.id + '&ck=' + this.ck, {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        this.result = res.data 
        this.$store.commit('setMember', res.data)
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
      }
    },
    next () {
      this.step++
      this.width += 10
    },
    back () {
      this.step--
      this.width -= 10
    },
    async getStreetTypes () {
      try {
        this.$store.commit('setLoading', true)
        const res = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/Lookup/street_types')
        this.$store.commit('setStreetTypes', res.data)
      } catch (error) {
        console.log('error' + error)
      }
    },
    async getFields () {
      try {
        this.$store.commit('setLoading', true)
        const res = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetUDFields?id=' + this.id + '&ck=' + this.ck + '&surveyTableName=Survey_Supporter21', {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        this.$store.commit('setCurrentPage', (res.data.Answers.Currentpage === 0 ) ? 1 : res.data.Answers.Currentpage)
        this.$store.commit('setAnswers', res.data.Answers)
      } catch (error) {
        console.log('error' + error)
        this.$store.commit('setCurrentPage', 1)
      } finally {
        this.loading.hide()
      }
    },
    progressBarWidth () {
      const payload = (this.step - 1) * 15
      this.$store.commit('setProgress', payload)
    }
  }
}
</script>
