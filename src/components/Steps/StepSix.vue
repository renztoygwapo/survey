<template>
  <section class="card-section form-page">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="w-full text-lg pb-10 ">
        <div class="bg-white w-100 inner-section" id="q22">
          <div class="container">
            <div class="row" v-if="member">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  22. We would like to stay in touch with you and keep you updated
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  Please confirm or update your details below
                </h6>
                <!-- custom check container -->
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Email</label>
                      <input id="email" type="text" class="form-control" placeholder="Email Address" v-model="answer_step6.Email">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Mobile Phone</label>
                      <input id="mobile_phone" type="text" class="form-control" placeholder="Mobile Phone" v-model="answer_step6.Mobile">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Home Phone</label>
                      <input id="home_phone" type="text" class="form-control" placeholder="Home Phone" v-model="answer_step6.HomeNumber">
                    </div>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-md-6">
                    <h3 class="secondary-blue-text mb-2">
                      Electoral Roll Address
                    </h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Street and unit No.</label>
                      <input id="street_unit" v-model="answer_step6.ElectoralAddress.StreetNumber" type="text" class="form-control" placeholder="Street and unit No">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Street Name</label>
                      <input id="street_name" v-model="answer_step6.ElectoralAddress.Street" type="text" class="form-control" placeholder="Street Name">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Street type</label> <select id="applicant1_postaladdress_street_type" v-model="answer_step6.ElectoralAddress.StreetType">
                        <option value="">
                          Please Select
                        </option>
                        <option v-for="item in street_types" :value="item.CODE" :key="item.CODE">
                          {{ item.CODE }}
                        </option>
                      </select>
                      <!---->
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Suburb</label>
                      <input id="suburb" v-model="answer_step6.ElectoralAddress.Suburb" type="text" class="form-control" placeholder="Suburb">
                    </div>
                  </div>
                  <div class="col-md-4">
                        <div class="form-group">
                          <label>State</label>
                            <select v-model="answer_step6.ElectoralAddress.State" id="applicant2_postaladdress_state">
                            <option value="">
                              Select State
                            </option> <option value="ACT">
                              ACT
                            </option> <option value="NSW">
                              NSW
                            </option> <option value="NT">
                              NT
                            </option> <option value="QLD">
                              QLD
                            </option> <option value="SA">
                              SA
                            </option> <option value="TAS">
                              TAS
                            </option> <option value="VIC">
                              VIC
                            </option> <option value="WA">
                              WA
                            </option>
                          </select>
                          <!---->
                        </div>
                      </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Postcode</label>
                      <input id="postcode" v-model="answer_step6.ElectoralAddress.Postcode" type="text" class="form-control" placeholder="Postcode">
                    </div>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-md-12">
                    <h3 class="secondary-blue-text mb-2">
                      Your Postal Address Details
                    </h3>
                    <h3 class="txtcap" />
                    <div class="checkbox">
                      <label>
                        <input id="same_postaladdress1" v-model="answer_step6.is_same_postal" type="checkbox">
                        Please tick this box if your postal address same as electoral roll details as above.
                      </label>
                    </div> <label>Postal Address</label>
                    <hr>
                    <h5>Postal Address</h5>
                    <div class="checkbox">
                      <label><input id="applicant1_chkuse_pobox" type="checkbox">
                        My postal address is a PO Box address
                      </label>
                    </div>
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group">
                          <label>Unit No and/or Street No</label>
                          <input id="applicant1_postaladdress_street_number" v-model="answer_step6.PostalAddress.StreetNumber" maxlength="40" type="text" class="form-control" :disabled="answer_step6.is_same_postal">
                          <!---->
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Street name</label> <input id="applicant1_postaladdress_street_name" v-model="answer_step6.PostalAddress.Street" type="text" class="form-control" :disabled="answer_step6.is_same_postal">
                          <!---->
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label>Street type</label> <select id="applicant1_postaladdress_street_type" v-model="answer_step6.PostalAddress.StreetType" :disabled="answer_step6.is_same_postal">
                            <option value="">
                              Please Select
                            </option> <option value="None">
                              None
                            </option> <option value="Access">
                              Access
                            </option><option value="Alley">
                              Alley
                            </option><option value="Avenue">
                              Avenue
                            </option><option value="Avenue East">
                              Avenue East
                            </option><option value="Avenue North">
                              Avenue North
                            </option><option value="Avenue South">
                              Avenue South
                            </option><option value="Avenue West">
                              Avenue West
                            </option><option value="Bay">
                              Bay
                            </option><option value="Bend">
                              Bend
                            </option><option value="Boulevarde">
                              Boulevarde
                            </option><option value="Brace">
                              Brace
                            </option><option value="Brae">
                              Brae
                            </option><option value="Brett">
                              Brett
                            </option><option value="Causeway">
                              Causeway
                            </option><option value="Chase">
                              Chase
                            </option><option value="Circle">
                              Circle
                            </option><option value="Circlet">
                              Circlet
                            </option><option value="Circuit">
                              Circuit
                            </option><option value="Close">
                              Close
                            </option><option value="Cmmn">
                              Cmmn
                            </option><option value="Corner">
                              Corner
                            </option><option value="Court">
                              Court
                            </option><option value="Court North">
                              Court North
                            </option><option value="Court South">
                              Court South
                            </option><option value="Cove">
                              Cove
                            </option><option value="Crescent">
                              Crescent
                            </option><option value="Crescent East">
                              Crescent East
                            </option><option value="Crescent North">
                              Crescent North
                            </option><option value="Crescent South">
                              Crescent South
                            </option><option value="Crest">
                              Crest
                            </option><option value="Cross">
                              Cross
                            </option><option value="Crossing">
                              Crossing
                            </option><option value="Deviation">
                              Deviation
                            </option><option value="Downs">
                              Downs
                            </option><option value="Drive">
                              Drive
                            </option><option value="Drive East">
                              Drive East
                            </option><option value="Drive North">
                              Drive North
                            </option><option value="Drive South">
                              Drive South
                            </option><option value="Drive West">
                              Drive West
                            </option><option value="End">
                              End
                            </option><option value="Esplanade">
                              Esplanade
                            </option><option value="Esplanade South">
                              Esplanade South
                            </option><option value="Estate">
                              Estate
                            </option><option value="Fawy">
                              Fawy
                            </option><option value="Garden">
                              Garden
                            </option><option value="Gardens">
                              Gardens
                            </option><option value="Gate">
                              Gate
                            </option><option value="Glade">
                              Glade
                            </option><option value="Glen">
                              Glen
                            </option><option value="Grange">
                              Grange
                            </option><option value="Green">
                              Green
                            </option><option value="Grove">
                              Grove
                            </option><option value="Heights">
                              Heights
                            </option><option value="Highway">
                              Highway
                            </option><option value="Highway East">
                              Highway East
                            </option><option value="Highway North">
                              Highway North
                            </option><option value="Highway South">
                              Highway South
                            </option><option value="Highway West">
                              Highway West
                            </option><option value="Hill">
                              Hill
                            </option><option value="Inlet">
                              Inlet
                            </option><option value="Island">
                              Island
                            </option><option value="Key">
                              Key
                            </option><option value="Knoll">
                              Knoll
                            </option><option value="Lane">
                              Lane
                            </option><option value="Lane East">
                              Lane East
                            </option><option value="Lane North">
                              Lane North
                            </option><option value="Lane South">
                              Lane South
                            </option><option value="Lane West">
                              Lane West
                            </option><option value="Link">
                              Link
                            </option><option value="Lookout">
                              Lookout
                            </option><option value="Loop">
                              Loop
                            </option><option value="Mall">
                              Mall
                            </option><option value="Mart">
                              Mart
                            </option><option value="Mew">
                              Mew
                            </option><option value="Mews">
                              Mews
                            </option><option value="Nook">
                              Nook
                            </option><option value="Oval">
                              Oval
                            </option><option value="Parade">
                              Parade
                            </option><option value="Parade East">
                              Parade East
                            </option><option value="Parade North">
                              Parade North
                            </option><option value="Parade South">
                              Parade South
                            </option><option value="Parade West">
                              Parade West
                            </option><option value="Park">
                              Park
                            </option><option value="Parkway">
                              Parkway
                            </option><option value="Pass">
                              Pass
                            </option><option value="Path">
                              Path
                            </option><option value="Pathway">
                              Pathway
                            </option><option value="Peninsula">
                              Peninsula
                            </option><option value="Place">
                              Place
                            </option><option value="Plaza">
                              Plaza
                            </option><option value="Pocket">
                              Pocket
                            </option><option value="Point">
                              Point
                            </option><option value="Port">
                              Port
                            </option><option value="Promenade">
                              Promenade
                            </option><option value="Quadrant">
                              Quadrant
                            </option><option value="Range">
                              Range
                            </option><option value="Reach">
                              Reach
                            </option><option value="Reserve">
                              Reserve
                            </option><option value="Retreat">
                              Retreat
                            </option><option value="Ridge">
                              Ridge
                            </option><option value="Ring">
                              Ring
                            </option><option value="Rise">
                              Rise
                            </option><option value="Road">
                              Road
                            </option><option value="Road East">
                              Road East
                            </option><option value="Road Extended">
                              Road Extended
                            </option><option value="Road North">
                              Road North
                            </option><option value="Road South">
                              Road South
                            </option><option value="Road West">
                              Road West
                            </option><option value="Route">
                              Route
                            </option><option value="Route N">
                              Route N
                            </option><option value="Route S">
                              Route S
                            </option><option value="Row">
                              Row
                            </option><option value="Rowe">
                              Rowe
                            </option><option value="Run">
                              Run
                            </option><option value="Skyline">
                              Skyline
                            </option><option value="Spur">
                              Spur
                            </option><option value="Square">
                              Square
                            </option><option value="Steps">
                              Steps
                            </option><option value="Straight">
                              Straight
                            </option><option value="Street">
                              Street
                            </option><option value="Street East">
                              Street East
                            </option><option value="Street North">
                              Street North
                            </option><option value="Street South">
                              Street South
                            </option><option value="Street West">
                              Street West
                            </option><option value="Strip">
                              Strip
                            </option><option value="Strt">
                              Strt
                            </option><option value="Subway">
                              Subway
                            </option><option value="Terrace">
                              Terrace
                            </option><option value="Terrace North">
                              Terrace North
                            </option><option value="Tor">
                              Tor
                            </option><option value="Track">
                              Track
                            </option><option value="Trail">
                              Trail
                            </option><option value="View">
                              View
                            </option><option value="Views">
                              Views
                            </option><option value="Walk">
                              Walk
                            </option><option value="Walkway">
                              Walkway
                            </option><option value="Way">
                              Way
                            </option><option value="Way East">
                              Way East
                            </option><option value="Way North">
                              Way North
                            </option><option value="Way South">
                              Way South
                            </option><option value="Ways">
                              Ways
                            </option><option value="Weg">
                              Weg
                            </option>
                          </select>
                          <!---->
                        </div>
                      </div>
                    </div>
                    <!---->
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Suburb</label>
                          <input id="applicant1_postaladdress_suburb" v-model="answer_step6.PostalAddress.Suburb" type="text" class="form-control" :disabled="answer_step6.is_same_postal">
                          <!---->
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>State</label>
                            <select v-model="answer_step6.PostalAddress.State" id="applicant2_postaladdress_state" :disabled="answer_step6.is_same_postal">
                            <option value="">
                              Select State
                            </option> <option value="ACT">
                              ACT
                            </option> <option value="NSW">
                              NSW
                            </option> <option value="NT">
                              NT
                            </option> <option value="QLD">
                              QLD
                            </option> <option value="SA">
                              SA
                            </option> <option value="TAS">
                              TAS
                            </option> <option value="VIC">
                              VIC
                            </option> <option value="WA">
                              WA
                            </option>
                          </select>
                          <!---->
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Postcode</label>
                          <input id="applicant1_postaladdress_post_code" type="text" v-model="answer_step6.PostalAddress.Postcode" class="form-control" :disabled="answer_step6.is_same_postal">
                          <!---->
                        </div>
                      </div>
                    </div>
                    <!---->
                    <!---->
                    <!---->
                    <hr>
                    <!---->
                  </div>
                </div>
                <!-- custom check container -->
              </div><!-- col-md-12 -->
            </div><!-- row -->
          </div><!-- container -->
        </div>
        <div class="bg-grey w-100 inner-section" id="q23">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="secondary-blue-text mb-2">
                  23. We believe
                </h3>
                <h6 class="border-bottom pb-3 mb-4">
                  A key reason for our success is our foundational principles of individual freedom, free enterprise and equality of opportunity,
                  which are still relevant today as they were in 1945
                </h6>
                <div class="checkbox">
                  <div>
                    <input id="individual_freedom" v-model="answer_step6.Confirm_Mission" type="checkbox" value="">
                    <label for="individual_freedom" class="col-form-label">I am Liberal because I believe in individual freedom and free enterprise</label>
                  </div>
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
                <h4 class="pt-2">
                  Your Progress
                </h4>
                <Progress :width="width" />
                <button class="btn btn-primary mr-md-2 mb-2" @click.prevent="goBack">
                  <i
                    class="fa fa-angle-left ml-2"
                  /> Back
                </button>
                <button class="btn btn-primary mr-md-2 mb-2" @click.prevent="handleSubmit(onSubmit)">
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
export default {
  components: {
    Progress
  },
  data () {
    return {
      form: {
        street_name: '',
        street_type: '',
        street_no: '',
        suburb: '',
        state: '',
        post_code: '',
        po: {
          street_name: '',
          street_type: '',
          street_no: '',
          suburb: '',
          state: '',
          post_code: ''
        }
      },
      individual_freedom: null,
      policies: [],
      about_you_model: [],
      about_you: [
        {
          id: 1,
          text: 'Male'
        },
        {
          id: 2,
          text: 'Female'
        },
        {
          id: 4,
          text: 'Other'
        },
        {
          id: 3,
          text: 'Prefer not to answer'
        }
      ],
      relationship_status: [
        {
          id: 1,
          text: 'Married/In a relationship'
        },
        {
          id: 2,
          text: 'Single'
        },
        {
          id: 3,
          text: 'Widow/Widower'
        },
        {
          id: 4,
          text: 'Other'
        }
      ],
      family_composition: [
        {
          id: 1,
          text: 'Children'
        },
        {
          id: 2,
          text: 'Children and Grandchildren'
        },
        {
          id: 3,
          text: 'No Children'
        },
        {
          id: 4,
          text: 'Dependant Others'
        }
      ],
      family_composition_model: '',
      work_status: [
        {
          id: 1,
          text: 'Employed Full Time'
        },
        {
          id: 2,
          text: 'Employed Part Time'
        },
        {
          id: 3,
          text: 'Unepmloyed'
        },
        {
          id: 4,
          text: 'Retired'
        },
        {
          id: 5,
          text: 'Home Duties'
        }
      ],
      work_status_model: '',
      holds_corporate_events: [
        {
          id: 1,
          text: 'Yes, I am interested in attending corporate events at a State level'
        },
        {
          id: 2,
          text: 'Yes, I am interested in attending corporate events at a Federal level'
        },
        {
          id: 3,
          text: 'Yes, I am interested in attending both State and Federal level'
        },
        {
          id: 4,
          text: 'No, I am not interested as corporate events are not relevant to me'
        }
      ],
      holds_corporate_events_model: '',
      postal_address_electoral: '',
      po_box_address: '',
      id: '',
      ck: '',
      loading: '',
      loadingSubmit: false,
      answer_step6: {
        is_same_postal: false,
        Confirm_Mission: false,
        Email: '',
        Mobile: '',
        HomeNumber: '',
        ElectoralAddress: {
          StreetNumber: '', 
          Street: '', 
          StreetType: '', 
          Suburb: '', 
          State: '', 
          Postcode: ''
        },
        PostalAddress: {
          StreetNumber: '', 
          Street: '', 
          StreetType: '', 
          Suburb: '', 
          State: '', 
          Postcode: ''
        }
      }
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.ck = this.$route.query.ck
    this.getCurrentFields()
    this.getMember()
    window.scrollTo({
      top: 10,
      behavior: 'smooth'
    })
  },
  computed: {
    ...mapGetters({
      width: 'width',
      street_types: 'street_types',
      submitForm: 'submitForm',
      member: 'member',
      token: 'token',
      answers: 'answers'
    })
  },
  watch: {
    answer_step6: {
      deep: true,
      handler () {
        if (this.answer_step6.is_same_postal) {
          this.answer_step6.PostalAddress.StreetNumber = this.answer_step6.ElectoralAddress.StreetNumber
          this.answer_step6.PostalAddress.Street = this.answer_step6.ElectoralAddress.Street
          this.answer_step6.PostalAddress.StreetType = this.answer_step6.ElectoralAddress.StreetType
          this.answer_step6.PostalAddress.State = this.answer_step6.ElectoralAddress.State
          this.answer_step6.PostalAddress.Suburb = this.answer_step6.ElectoralAddress.Suburb
          this.answer_step6.PostalAddress.Postcode = this.answer_step6.ElectoralAddress.Postcode
        }
      }
    }
  },
  methods: {
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
        if (this.member) this.answer_step6.ElectoralAddress.StreetNumber = this.member.StreetNumber
        if (this.member) this.answer_step6.ElectoralAddress.Street = this.member.Street
        if (this.member) this.answer_step6.ElectoralAddress.StreetType = this.member.StreetType
        if (this.member) this.answer_step6.ElectoralAddress.Suburb = this.member.Suburb
        if (this.member) this.answer_step6.ElectoralAddress.State = this.member.State
        if (this.member) this.answer_step6.ElectoralAddress.Postcode = this.member.Postcode
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
    async getCurrentFields() {
      try {
        this.loading = this.$loading.show()
        const res = await axios.get('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/GetUDFields?id=' + this.id + '&ck=' + this.ck + '&surveyTableName=Survey_Supporter21', {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        this.$store.commit('setCurrentPage', res.data.Answers.Currentpage)
        if (this.member) this.answer_step6.Email = this.member.Email
        if (this.member) this.answer_step6.Mobile = this.member.Mobile
        if (this.member) this.answer_step6.HomeNumber = this.member.HomeNumber
        this.answer_step6.Confirm_Mission = res.data.Answers.Confirm_Mission
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
        this.loadingSubmit = this.$loading.show()
        const address = {
          FirstName: this.member.FirstName,
          LastName: this.member.LastName,
          StreetNumber: this.answer_step6.ElectoralAddress.StreetNumber,
          Street: this.answer_step6.ElectoralAddress.Street,
          Postcode: this.answer_step6.ElectoralAddress.Postcode,
          Suburb: this.answer_step6.ElectoralAddress.Suburb,
          DateOfBirthDay: this.answers.DOB,
          DateOfBirthMonth: this.answers.DOB_month,
          DateOfBirthYear: this.answers.DOB_year
        }
        const postAddress = await axios.post('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/PostValidateAddress', address, {headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        if(postAddress.data.Message === 'Address can not be validated') {
          throw new Error(postAddress.data.Message)
        }
        const memberPayloads = {
          memberid: this.member.memberid,
          Prefix: this.member.Prefix, 
          FirstName: this.member.FirstName,
          MiddleName: this.member.MiddleName, 
          LastName: this.member.LastName,
          DateOfBirthDay: this.answers.DOB,
          DateOfBirthMonth: this.answers.DOB_month,
          DateOfBirthYear: this.answers.DOB_year,
          Email: this.member.Email,
          Mobile: this.member.Mobile,
          HomeNumber: this.member.HomeNumber, 
          ElectoralAddress: {
            StreetNumber: this.answer_step6.ElectoralAddress.StreetNumber,
            Street: this.answer_step6.ElectoralAddress.Street, 
            StreetType: this.answer_step6.ElectoralAddress.StreetType,
            Suburb: this.answer_step6.ElectoralAddress.Suburb,
            State: this.answer_step6.ElectoralAddress.State,
            Postcode: this.answer_step6.ElectoralAddress.Postcode,
          },
          PostalAddress: {
            StreetNumber: this.answer_step6.PostalAddress.StreetNumber,
            Street: this.answer_step6.PostalAddress.Street,
            StreetType: this.answer_step6.PostalAddress.StreetType,
            Suburb: this.answer_step6.PostalAddress.Suburb,
            State: this.answer_step6.PostalAddress.State,
            Postcode: this.answer_step6.PostalAddress.Postcode
          }
        }
        const postMember = await axios.post('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/PostMemberDetails', memberPayloads, {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
        })
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 7,
          startDate: this.submitForm.startDate,
          lastView: this.submitForm.lastView,
          endDate: this.submitForm.endDate
        }
        const UD_fields = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          Answers: this.answer_step6
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
        this.$store.commit('setProgress', 90)
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
        this.loadingSubmit.hide()
      }
    },
    async goBack () {
      try {
        this.loading = this.$loading.show()
        const payload = {
          memberid: this.id,
          surveyid: this.submitForm.surveyid,
          status: this.submitForm.status,
          currentPage: 5,
          startDate: this.submitForm.startDate,
          lastView: this.submitForm.lastView,
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
        this.$store.commit('setProgress', 60)
      } catch (error) {
        this.$store.commit('setProgress', 60)
        this.$store.commit('setCurrentPage', 5)
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
