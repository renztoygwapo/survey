<template>
  <section class="card-section form-page">
    <ValidationObserver ref="stepFive">
      <form class="w-full text-lg pb-10 ">
        <div class="bg-white w-100">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="mb-3 ">
                  ABOUT YOU
                </h2>
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-grey w-100 inner-section" id="q15">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  15. Are you:
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select one preference
                </h6>
                <div v-for="item in about_you" :key="item.value" class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="about_you_model"
                    :id="item.value"
                    :value="item.value"
                    v-model="answer_step5.Gender"
                  >
                  <label class="form-check-label" :for="item.value">{{ item.text }}</label>
                </div>
                <!-- custom check container -->
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-white w-100 inner-section" id="q16">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  16. What is your date of birth?
                </h3>
                <!-- <h6 class="border-bottom pb-3 mb-4">
                  Please enter one or both
                </h6> -->
                <!-- custom check container -->
                <div class="row">
                  <div class="col-md-2">
                        <div class="form-group">
                      <select v-model="answer_step5.DOB">
                      <option disabled="disabled" value="">Day</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                        </div>
                  </div>

                  <div class="col-md-2">
                        <div class="form-group">
                          <select v-model="answer_step5.DOB_month">
                            <option disabled="disabled" value="">Month</option>
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

                  <div class="col-md-2">
                        <div class="form-group">
                      <select v-model="answer_step5.DOB_year">
                      <option disabled="disabled" value="">Year</option>
                      <option value="1900">1900</option>
                      <option value="1901">1901</option>
                      <option value="1902">1902</option>
                      <option value="1903">1903</option>
                      <option value="1904">1904</option>
                      <option value="1905">1905</option>
                      <option value="1906">1906</option>
                      <option value="1907">1907</option>
                      <option value="1908">1908</option>
                      <option value="1909">1909</option>
                      <option value="1910">1910</option>
                      <option value="1911">1911</option>
                      <option value="1912">1912</option>
                      <option value="1913">1913</option>
                      <option value="1914">1914</option>
                      <option value="1915">1915</option>
                      <option value="1916">1916</option>
                      <option value="1917">1917</option>
                      <option value="1918">1918</option>
                      <option value="1919">1919</option>
                      <option value="1920">1920</option>
                      <option value="1921">1921</option>
                      <option value="1922">1922</option>
                      <option value="1923">1923</option>
                      <option value="1924">1924</option>
                      <option value="1925">1925</option>
                      <option value="1926">1926</option>
                      <option value="1927">1927</option>
                      <option value="1928">1928</option>
                      <option value="1929">1929</option>
                      <option value="1930">1930</option>
                      <option value="1931">1931</option>
                      <option value="1932">1932</option>
                      <option value="1933">1933</option>
                      <option value="1934">1934</option>
                      <option value="1935">1935</option>
                      <option value="1936">1936</option>
                      <option value="1937">1937</option>
                      <option value="1938">1938</option>
                      <option value="1939">1939</option>
                      <option value="1940">1940</option>
                      <option value="1941">1941</option>
                      <option value="1942">1942</option>
                      <option value="1943">1943</option>
                      <option value="1944">1944</option>
                      <option value="1945">1945</option>
                      <option value="1946">1946</option>
                      <option value="1947">1947</option>
                      <option value="1948">1948</option>
                      <option value="1949">1949</option>
                      <option value="1950">1950</option>
                      <option value="1951">1951</option>
                      <option value="1952">1952</option>
                      <option value="1953">1953</option>
                      <option value="1954">1954</option>
                      <option value="1955">1955</option>
                      <option value="1956">1956</option>
                      <option value="1957">1957</option>
                      <option value="1958">1958</option>
                      <option value="1959">1959</option>
                      <option value="1960">1960</option>
                      <option value="1961">1961</option>
                      <option value="1962">1962</option>
                      <option value="1963">1963</option>
                      <option value="1964">1964</option>
                      <option value="1965">1965</option>
                      <option value="1966">1966</option>
                      <option value="1967">1967</option>
                      <option value="1968">1968</option>
                      <option value="1969">1969</option>
                      <option value="1970">1970</option>
                      <option value="1971">1971</option>
                      <option value="1972">1972</option>
                      <option value="1973">1973</option>
                      <option value="1974">1974</option>
                      <option value="1975">1975</option>
                      <option value="1976">1976</option>
                      <option value="1977">1977</option>
                      <option value="1978">1978</option>
                      <option value="1979">1979</option>
                      <option value="1980">1980</option>
                      <option value="1981">1981</option>
                      <option value="1982">1982</option>
                      <option value="1983">1983</option>
                      <option value="1984">1984</option>
                      <option value="1985">1985</option>
                      <option value="1986">1986</option>
                      <option value="1987">1987</option>
                      <option value="1988">1988</option>
                      <option value="1989">1989</option>
                      <option value="1990">1990</option>
                      <option value="1991">1991</option>
                      <option value="1992">1992</option>
                      <option value="1993">1993</option>
                      <option value="1994">1994</option>
                      <option value="1995">1995</option>
                      <option value="1996">1996</option>
                      <option value="1997">1997</option>
                      <option value="1998">1998</option>
                      <option value="1999">1999</option>
                      <option value="2000">2000</option>
                      <option value="2001">2001</option>
                      <option value="2002">2002</option>
                      <option value="2003">2003</option>
                    </select>
                        </div>
                  </div>
                </div>
                <!-- custom check container -->
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-grey w-100 inner-section" id="q17">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  17. Which of the following best describes your relationship status
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select the option that most applies to you
                </h6>
                <!-- custom check container -->
                <div v-for="relation in relationship_status" :key="relation.value" class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="relation_status_model"
                    :id="relation.value"
                    :value="relation.value"
                    v-model="answer_step5.Relationship_Status"
                  >
                  <label class="form-check-label" :for="relation.value">{{ relation.text }}</label>
                </div>
                <!-- custom check container -->
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-white w-100 inner-section" id="q18">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  18. What is the composition of your family
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select the option that most applies to you
                </h6>
                <!-- custom check container -->
                <div v-for="family in family_composition" :key="family.value" class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="family_composition_model"
                    :id="family.value"
                    :value="family.value"
                    v-model="answer_step5.Family_Composition"
                  >
                  <label class="form-check-label" :for="family.value">{{ family.text }}</label>
                </div>
                <!-- custom check container -->
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>
        <div class="bg-grey w-100 inner-section" id="q19">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  19. Which of the following best describes your work status
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select the option that most applies to you
                </h6>
                <!-- custom check container -->
                <div v-for="work in work_status" :key="work.value" class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="work_status_model"
                    :id="work.value"
                    :value="work.value"
                    v-model="answer_step5.Work_Status"
                  >
                  <label class="form-check-label" :for="work.value">{{ work.text }}</label>
                </div>
                <!-- custom check container -->
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-white w-100 inner-section" id="q20">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  20. The NSW Liberal Party regularly holds corporate events with our State and Federal MPs
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please select the option that most applies to you
                </h6>
                <!-- custom check container -->
                <div v-for="hold in holds_corporate_events" :key="hold.value" class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="holds_corporate_events_model"
                    :id="hold.value"
                    :value="hold.value"
                    v-model="answer_step5.Corporate_Event_Interest"
                  >
                  <label class="form-check-label" :for="hold.value">{{ hold.text }}</label>
                </div>
                <!-- custom check container -->
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>

        <div class="bg-grey w-100 inner-section" id="q21">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  21. If you are interested in attending corporate events please provide us with you company name and your title
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  This information is not mandatory, however supplying it will help us to invite you to events that are of interest to you and your industry
                </h6>
                <!-- custom check container -->
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Company</label>
                      <input id="company" type="text" class="form-control" v-model="answer_step5.Corporate_Event_Company">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Title</label>
                      <input id="title" type="text" placeholder="" class="form-control" v-model="answer_step5.Corporate_Event_Title">
                    </div>
                  </div>
                </div>
                <!-- custom check container -->
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
      form: {
        two: ''
      },
      liberal_supporter: null,
      policies: [],
      about_you_model: [],
      about_you: [
        {
          value: 'Male',
          text: 'Male'
        },
        {
          value: 'Female',
          text: 'Female'
        },
        {
          value: 'Other',
          text: 'Other'
        },
        {
          value: 'Not to answer',
          text: 'Prefer not to answer'
        }
      ],
      relationship_status: [
        {
          value: 'Married/Relationship',
          text: 'Married/In a relationship'
        },
        {
          value: 'Single',
          text: 'Single'
        },
        {
          value: 'Widow/er',
          text: 'Widow/Widower'
        },
        {
          value: 'Other',
          text: 'Other'
        }
      ],
      family_composition: [
        {
          value: 'Children',
          text: 'Children'
        },
        {
          value: 'Grandchildren',
          text: 'Children and Grandchildren'
        },
        {
          value: 'No children',
          text: 'No Children'
        },
        {
          value: 'Dependant others',
          text: 'Dependant Others'
        }
      ],
      family_composition_model: '',
      work_status: [
        {
          value: 'Fulltime',
          text: 'Employed Full Time'
        },
        {
          value: 'Part time',
          text: 'Employed Part Time'
        },
        {
          value: 'Unemployed',
          text: 'Unepmloyed'
        },
        {
          value: 'Retired',
          text: 'Retired'
        },
        {
          value: 'Homeduties',
          text: 'Home Duties'
        }
      ],
      work_status_model: '',
      holds_corporate_events: [
        {
          value: 'State level',
          text: 'Yes, I am interested in attending corporate events at a State level'
        },
        {
          value: 'Federal level',
          text: 'Yes, I am interested in attending corporate events at a Federal level'
        },
        {
          value: 'Both',
          text: 'Yes, I am interested in attending corporate events at both a State and Federal level'
        },
        {
          value: 'Not Relevant',
          text: 'No, I am not interested as corporate events are not relevant to me'
        }
      ],
      holds_corporate_events_model: '',
      id: '',
      ck: '',
      startDate: null,
      loading: '',
      answer_step5: {
        Gender: '',
        DOB: '',
        DOB_year: '',
        DOB_month: '',
        Relationship_Status: '',
        Family_Composition: '',
        Work_Status: '',
        Corporate_Event_Interest: '',
        Corporate_Event_Company: '',
        Corporate_Event_Title: ''
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
        this.loading = this.$loading.show()
        const res = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetUDFields?id=' + this.id + '&ck=' + this.ck + '&surveyTableName=Survey_Supporter21', {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        this.$store.commit('setCurrentPage', res.data.Answers.Currentpage)
        this.answer_step5.Gender = res.data.Answers.Gender
        this.answer_step5.Relationship_Status = res.data.Answers.Relationship_Status
        this.answer_step5.Family_Composition = res.data.Answers.Family_Composition
        this.answer_step5.Work_Status = res.data.Answers.Work_Status
        this.answer_step5.Corporate_Event_Interest = res.data.Answers.Corporate_Event_Interest
        this.answer_step5.Corporate_Event_Company = res.data.Answers.Corporate_Event_Company
        this.answer_step5.Corporate_Event_Title = res.data.Answers.Corporate_Event_Title
        this.answer_step5.DOB = res.data.Answers.DOB
        this.answer_step5.DOB_month = res.data.Answers.DOB_month
        this.answer_step5.DOB_year = res.data.Answers.DOB_year
        this.$store.commit('setAnswers', res.data.Answers)
      } catch (error) {
        console.log('error' + error)
        this.$store.commit('setCurrentPage', 1)
      } finally {
        this.loading.hide()
      }
    },
    async onSubmit () {
      try {
        const isValid = await this.$refs.stepFive.validate()
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
          currentPage: 6,
          startDate: this.submitForm.startDate,
          lastView: this.startDate,
          endDate: this.submitForm.endDate
        }
        const UD_fields = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          Answers: this.answer_step5
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
    },
    async goBack () {
      try {
        this.loading = this.$loading.show()
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 4,
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
        this.$store.commit('setProgress', 45)
      } catch (error) {
        this.$store.commit('setProgress', 45)
        this.$store.commit('setCurrentPage', 4)
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
