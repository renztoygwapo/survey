<template>
  <section class="card-section form-page">
    <ValidationObserver ref="stepSix" tag="form">
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
                      <ValidationProvider name="other" rules="required_address" v-slot="{ errors }">
                        <label>Street and unit No.</label>
                        <input
                          id="street_unit"
                          v-model="answer_step6.ElectoralAddress.StreetNumber"
                          type="text"
                          class="form-control"
                          :style="errors[0] ? 'border-color: #ff0000' : ''"
                          placeholder="Street and unit No"
                        >
                        <p class="error">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <ValidationProvider name="street_name" rules="required_address" v-slot="{ errors }">
                        <label>Street Name</label>
                        <input
                          id="street_name"
                          v-model="answer_step6.ElectoralAddress.Street"
                          type="text" class="form-control"
                          :style="errors[0] ? 'border-color: #ff0000' : ''"
                          placeholder="Street Name"
                        >
                        <p class="error">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <ValidationProvider name="applicant1_postaladdress_street_type" rules="required_address" v-slot="{ errors }">
                          <label>Street type</label>
                          <select
                            id="applicant1_postaladdress_street_type"
                            v-model="answer_step6.ElectoralAddress.StreetType"
                            :style="errors[0] ? 'border-color: #ff0000' : ''"
                            >
                          <option value="">
                            Please Select
                          </option>
                          <option v-for="item in street_types" :value="item.CODE" :key="item.CODE">
                            {{ item.CODE }}
                          </option>
                        </select>
                        <p class="error">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <ValidationProvider name="suburb" rules="required_address" v-slot="{ errors }">
                        <label>Suburb</label>
                        <input
                          id="suburb"
                          v-model="answer_step6.ElectoralAddress.Suburb"
                          type="text"
                          class="form-control"
                          placeholder="Suburb"
                          :style="errors[0] ? 'border-color: #ff0000' : ''"
                          >
                        <p class="error">{{ errors[0] }}</p>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="col-md-4">
                      <ValidationProvider name="applicant2_postaladdress_state" rules="required_address" v-slot="{ errors }">
                        <div class="form-group">
                          <label>State</label>
                            <select
                              v-model="answer_step6.ElectoralAddress.State"
                              id="applicant2_postaladdress_state"
                              :style="errors[0] ? 'border-color: #ff0000' : ''"
                            >
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
                          <p class="error">{{ errors[0] }}</p>
                        </div>
                      </ValidationProvider>
                      </div>
                  <div class="col-md-4">
                      <ValidationProvider name="postcode" rules="required_address" v-slot="{ errors }">
                      <div class="form-group">
                        <label>Postcode</label>
                        <input
                          id="postcode"
                          v-model="answer_step6.ElectoralAddress.Postcode" 
                          type="text" class="form-control"
                          :style="errors[0] ? 'border-color: #ff0000' : ''"
                          placeholder="Postcode"
                        >
                        <p class="error">{{ errors[0] }}</p>
                      </div>
                      </ValidationProvider>
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
                    </div>
                    <hr>
                    <h5>Postal Address</h5>
                    <div class="checkbox">
                      <label><input id="applicant1_chkuse_pobox" type="checkbox">
                        My postal address is a PO Box address
                      </label>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                      <ValidationProvider name="address_line_1" rules="required_address" v-slot="{ errors }">
                        <div class="form-group">
                          <label>Address Line 1</label>
                          <input
                            id="address_line_1"
                            v-model="answer_step6.PostalAddress.AddressLine1"
                            maxlength="40"
                            type="text"
                            class="form-control"
                            :style="errors[0] ? 'border-color: #ff0000' : ''"
                            :disabled="answer_step6.is_same_postal"
                            >
                          <p class="error">{{ errors[0] }}</p>
                        </div>
                      </ValidationProvider>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Address Line 2</label>
                          <input
                            id="address_line_2"
                            v-model="answer_step6.PostalAddress.AddressLine2"
                            maxlength="40"
                            type="text"
                            class="form-control"
                            >
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Address Line 3</label>
                          <input
                            id="address_line_3"
                            v-model="answer_step6.PostalAddress.AddressLine3"
                            maxlength="40"
                            type="text"
                            class="form-control"
                            >
                        </div>
                      </div>
                    </div>
                    <!---->
                    <div class="row">
                      <div class="col-md-4">
                      <ValidationProvider name="applicant1_postaladdress_suburb" rules="required_address" v-slot="{ errors }">
                        <div class="form-group">
                          <label>Suburb</label>
                          <input
                            id="applicant1_postaladdress_suburb"
                            v-model="answer_step6.PostalAddress.Suburb"
                            type="text"
                            class="form-control"
                            :style="errors[0] ? 'border-color: #ff0000' : ''"
                            :disabled="answer_step6.is_same_postal"
                            >
                          <p class="error">{{ errors[0] }}</p>
                        </div>
                      </ValidationProvider>
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
                      <ValidationProvider name="applicant1_postaladdress_post_code" rules="required_address" v-slot="{ errors }">
                        <div class="form-group">
                          <label>Postcode</label>
                          <input
                          id="applicant1_postaladdress_post_code"
                          type="text" v-model="answer_step6.PostalAddress.Postcode"
                          class="form-control"
                          :style="errors[0] ? 'border-color: #ff0000' : ''"
                          :disabled="answer_step6.is_same_postal"
                          >
                          <p class="error">{{ errors[0] }}</p>
                        </div>
                      </ValidationProvider>
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
      startDate: null,
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
          AddressLine1: '', 
          AddressLine2: '', 
          AddressLine3: '', 
          Suburb: '', 
          State: '', 
          Postcode: ''
        }
      },
      street_types_mapper: [
        {
            Abbreviation: "ACCS",
            street_type: "Access"
        },
        {
            Abbreviation: "ALLY",
            street_type: "Alley"
        },
        {
            Abbreviation: "ALWY",
            street_type: "Alleyway"
        },
        {
            Abbreviation: "AMBL",
            street_type: "Amble"
        },
        {
            Abbreviation: "APP",
            street_type: "Approach"
        },
        {
            Abbreviation: "ARC",
            street_type: "Arcade"
        },
        {
            Abbreviation: "ARTL",
            street_type: "Arterial"
        },
        {
            Abbreviation: "ARTY",
            street_type: "Artery"
        },
        {
            Abbreviation: "AV",
            street_type: "Avenue"
        },
        {
            Abbreviation: "AV E",
            street_type: "Avenue East"
        },
        {
            Abbreviation: "AV N",
            street_type: "Avenue North"
        },
        {
            Abbreviation: "AV S",
            street_type: "Avenue South"
        },
        {
            Abbreviation: "AV W",
            street_type: "Avenue West"
        },
        {
            Abbreviation: "BA",
            street_type: "Banan"
        },
        {
            Abbreviation: "BAY",
            street_type: "Bay"
        },
        {
            Abbreviation: "BEND",
            street_type: "Bend"
        },
        {
            Abbreviation: "BWLK",
            street_type: "Boardwalk"
        },
        {
            Abbreviation: "BVD",
            street_type: "Boulevarde"
        },
        {
            Abbreviation: "BR",
            street_type: "Brace"
        },
        {
            Abbreviation: "BRT",
            street_type: "Brett"
        },
        {
            Abbreviation: "BRAE",
            street_type: "Brae"
        },
        {
            Abbreviation: "BRK",
            street_type: "Break"
        },
        {
            Abbreviation: "BROW",
            street_type: "Brow"
        },
        {
            Abbreviation: "BYPA",
            street_type: "Bypass"
        },
        {
            Abbreviation: "BYWY",
            street_type: "Byway"
        },
        {
            Abbreviation: "CSWY",
            street_type: "Causeway"
        },
        {
            Abbreviation: "CTR",
            street_type: "Centre"
        },
        {
            Abbreviation: "CH",
            street_type: "Chase"
        },
        {
            Abbreviation: "CIR",
            street_type: "Circle"
        },
        {
            Abbreviation: "CLT",
            street_type: "Circlet"
        },
        {
            Abbreviation: "CCT",
            street_type: "Circuit"
        },
        {
            Abbreviation: "CRCS",
            street_type: "Circus"
        },
        {
            Abbreviation: "CL",
            street_type: "Close"
        },
        {
            Abbreviation: "CMMN",
            street_type: "Common"
        },
        {
            Abbreviation: "CON",
            street_type: "Concourse"
        },
        {
            Abbreviation: "CPS",
            street_type: "Copse"
        },
        {
            Abbreviation: "CNR",
            street_type: "Corner"
        },
        {
            Abbreviation: "CT N",
            street_type: "Court North"
        },
        {
            Abbreviation: "CT S",
            street_type: "Court South"
        },
        {
            Abbreviation: "CT",
            street_type: "Court"
        },
        {
            Abbreviation: "CTYD",
            street_type: "Courtyard"
        },
        {
            Abbreviation: "COVE",
            street_type: "Cove"
        },
        {
            Abbreviation: "CR S",
            street_type: "Crescent South"
        },
        {
            Abbreviation: "CR N",
            street_type: "Crescent North"
        },
        {
            Abbreviation: "CR E",
            street_type: "Crescent East"
        },
        {
            Abbreviation: "CR W",
            street_type: "Crescent West"
        },
        {
            Abbreviation: "CR",
            street_type: "Crescent"
        },
        {
            Abbreviation: "CRST",
            street_type: "Crest"
        },
        {
            Abbreviation: "CRSS",
            street_type: "Cross"
        },
        {
            Abbreviation: "CSRG",
            street_type: "Crossing"
        },
        {
            Abbreviation: "CSAC",
            street_type: "Cul-de-sac"
        },
        {
            Abbreviation: "CUTT",
            street_type: "Cutting"
        },
        {
            Abbreviation: "DALE",
            street_type: "Dale"
        },
        {
            Abbreviation: "DEVN",
            street_type: "Deviation"
        },
        {
            Abbreviation: "DIP",
            street_type: "Dip"
        },
        {
            Abbreviation: "DWNS",
            street_type: "Downs"
        },
        {
            Abbreviation: "DR N",
            street_type: "Drive North"
        },
        {
            Abbreviation: "DR S",
            street_type: "Drive South"
        },
        {
            Abbreviation: "DR E",
            street_type: "Drive East"
        },
        {
            Abbreviation: "DR W",
            street_type: "Drive West"
        },
        {
            Abbreviation: "DR",
            street_type: "Drive"
        },
        {
            Abbreviation: "DVWY",
            street_type: "Driveway"
        },
        {
            Abbreviation: "EDGE",
            street_type: "Edge"
        },
        {
            Abbreviation: "ELB",
            street_type: "Elbow"
        },
        {
            Abbreviation: "END",
            street_type: "End"
        },
        {
            Abbreviation: "ENT",
            street_type: "Entrance"
        },
        {
            Abbreviation: "ESP N",
            street_type: "Esplanade North"
        },
        {
            Abbreviation: "ESP S",
            street_type: "Esplanade South"
        },
        {
            Abbreviation: "ESP",
            street_type: "Esplanade"
        },
        {
            Abbreviation: "EST",
            street_type: "Estate"
        },
        {
            Abbreviation: "EXP",
            street_type: "Expressway"
        },
        {
            Abbreviation: "FAWY",
            street_type: "Fairway"
        },
        {
            Abbreviation: "FOLW",
            street_type: "Follow"
        },
        {
            Abbreviation: "FTWY",
            street_type: "Footway"
        },
        {
            Abbreviation: "FORM",
            street_type: "Formation"
        },
        {
            Abbreviation: "FWY",
            street_type: "Freeway"
        },
        {
            Abbreviation: "FRTG",
            street_type: "Frontage"
        },
        {
            Abbreviation: "GAP",
            street_type: "Gap"
        },
        {
            Abbreviation: "GDN",
            street_type: "Garden"
        },
        {
            Abbreviation: "GDNS",
            street_type: "Gardens"
        },
        {
            Abbreviation: "GTE",
            street_type: "Gate"
        },
        {
            Abbreviation: "GLDE",
            street_type: "Glade"
        },
        {
            Abbreviation: "GLEN",
            street_type: "Glen"
        },
        {
            Abbreviation: "GRA",
            street_type: "Grange"
        },
        {
            Abbreviation: "GRN",
            street_type: "Green"
        },
        {
            Abbreviation: "GR",
            street_type: "Grove"
        },
        {
            Abbreviation: "HTS",
            street_type: "Heights"
        },
        {
            Abbreviation: "HIRD",
            street_type: "Highroad"
        },
        {
            Abbreviation: "HWY N",
            street_type: "Highway North"
        },
        {
            Abbreviation: "HWY S",
            street_type: "Highway South"
        },
        {
            Abbreviation: "HWY E",
            street_type: "Highway East"
        },
        {
            Abbreviation: "HWY W",
            street_type: "Highway West"
        },
        {
            Abbreviation: "HWY",
            street_type: "Highway"
        },
        {
            Abbreviation: "HILL",
            street_type: "Hill"
        },
        {
            Abbreviation: "INLT",
            street_type: "Inlet"
        },
        {
            Abbreviation: "ISL",
            street_type: "Island"
        },
        {
            Abbreviation: "INTG",
            street_type: "Interchange"
        },
        {
            Abbreviation: "JNC",
            street_type: "Junction"
        },
        {
            Abbreviation: "KEY",
            street_type: "Key"
        },
        {
            Abbreviation: "KNL",
            street_type: "Knoll"
        },
        {
            Abbreviation: "LANE N",
            street_type: "Lane North"
        },
        {
            Abbreviation: "LANE S",
            street_type: "Lane South"
        },
        {
            Abbreviation: "LANE E",
            street_type: "Lane East"
        },
        {
            Abbreviation: "LANE W",
            street_type: "Lane West"
        },
        {
            Abbreviation: "LANE",
            street_type: "Lane"
        },
        {
            Abbreviation: "LNWY",
            street_type: "Laneway"
        },
        {
            Abbreviation: "LINE",
            street_type: "Line"
        },
        {
            Abbreviation: "LINK",
            street_type: "Link"
        },
        {
            Abbreviation: "LKT",
            street_type: "Lookout"
        },
        {
            Abbreviation: "LOOP",
            street_type: "Loop"
        },
        {
            Abbreviation: "MALL",
            street_type: "Mall"
        },
        {
            Abbreviation: "MNDR",
            street_type: "Meander"
        },
        {
            Abbreviation: "MEW",
            street_type: "Mew"
        },
        {
            Abbreviation: "MEWS",
            street_type: "Mews"
        },
        {
            Abbreviation: "MTWY",
            street_type: "Motorway"
        },
        {
            Abbreviation: "NOOK",
            street_type: "Nook"
        },
        {
            Abbreviation: "OTLK",
            street_type: "Outlook"
        },
        {
            Abbreviation: "OVL",
            street_type: "Oval"
        },
        {
            Abbreviation: "PDE N",
            street_type: "Parade North"
        },
        {
            Abbreviation: "PDE S",
            street_type: "Parade South"
        },
        {
            Abbreviation: "PDE E",
            street_type: "Parade East"
        },
        {
            Abbreviation: "PDE W",
            street_type: "Parade West"
        },
        {
            Abbreviation: "PDE",
            street_type: "Parade"
        },
        {
            Abbreviation: "PARK",
            street_type: "Park"
        },
        {
            Abbreviation: "PWY",
            street_type: "Parkway"
        },
        {
            Abbreviation: "PASS",
            street_type: "Pass"
        },
        {
            Abbreviation: "PSGE",
            street_type: "Passage"
        },
        {
            Abbreviation: "PATH",
            street_type: "Path"
        },
        {
            Abbreviation: "PWAY",
            street_type: "Pathway"
        },
        {
            Abbreviation: "PENN",
            street_type: "Penninsula"
        },
        {
            Abbreviation: "PIAZ",
            street_type: "Piazza"
        },
        {
            Abbreviation: "PL",
            street_type: "Place"
        },
        {
            Abbreviation: "PLZA",
            street_type: "Plaza"
        },
        {
            Abbreviation: "PKT",
            street_type: "Pocket"
        },
        {
            Abbreviation: "PNT",
            street_type: "Point"
        },
        {
            Abbreviation: "PORT",
            street_type: "Port"
        },
        {
            Abbreviation: "PROM",
            street_type: "Promenade"
        },
        {
            Abbreviation: "QDRT",
            street_type: "Quadrant"
        },
        {
            Abbreviation: "QYS",
            street_type: "Quays"
        },
        {
            Abbreviation: "RMBL",
            street_type: "Ramble"
        },
        {
            Abbreviation: "RNGE",
            street_type: "Range"
        },
        {
            Abbreviation: "RCH",
            street_type: "Reach"
        },
        {
            Abbreviation: "REST",
            street_type: "Reserve"
        },
        {
            Abbreviation: "REST",
            street_type: "Rest"
        },
        {
            Abbreviation: "RTT",
            street_type: "Retreat"
        },
        {
            Abbreviation: "RDGE",
            street_type: "Ridge"
        },
        {
            Abbreviation: "RING",
            street_type: "Ring"
        },
        {
            Abbreviation: "RISE",
            street_type: "Rise"
        },
        {
            Abbreviation: "RD E",
            street_type: "Road East"
        },
        {
            Abbreviation: "RD EXT",
            street_type: "Road Extended"
        },
        {
            Abbreviation: "RD N",
            street_type: "Road North"
        },
        {
            Abbreviation: "RD S",
            street_type: "Road South"
        },
        {
            Abbreviation: "RD W",
            street_type: "Road West"
        },
        {
            Abbreviation: "RD",
            street_type: "Road"
        },
        {
            Abbreviation: "RTY",
            street_type: "Rotary"
        },
        {
            Abbreviation: "RTE N",
            street_type: "Route North"
        },
        {
            Abbreviation: "RTE S",
            street_type: "Route South"
        },
        {
            Abbreviation: "RTE",
            street_type: "Route"
        },
        {
            Abbreviation: "ROW",
            street_type: "Row"
        },
        {
            Abbreviation: "RUN",
            street_type: "Run"
        },
        {
            Abbreviation: "RUE",
            street_type: "Rue"
        },
        {
            Abbreviation: "SVWY",
            street_type: "Serviceway"
        },
        {
            Abbreviation: "SHUN",
            street_type: "Shunt"
        },
        {
            Abbreviation: "SKY",
            street_type: "Skyline"
        },
        {
            Abbreviation: "SPUR",
            street_type: "Spur"
        },
        {
            Abbreviation: "SQ",
            street_type: "Square"
        },
        {
            Abbreviation: "STPS",
            street_type: "Steps"
        },
        {
            Abbreviation: "STRT",
            street_type: "Straight"
        },
        {
            Abbreviation: "ST N",
            street_type: "Street North"
        },
        {
            Abbreviation: "ST S",
            street_type: "Street South"
        },
        {
            Abbreviation: "ST E",
            street_type: "Street East"
        },
        {
            Abbreviation: "ST W",
            street_type: "Street West"
        },
        {
            Abbreviation: "ST",
            street_type: "Street"
        },
        {
            Abbreviation: "STRP",
            street_type: "Strip"
        },
        {
            Abbreviation: "SBWY",
            street_type: "Subway"
        },
        {
            Abbreviation: "TARN",
            street_type: "Tarn"
        },
        {
            Abbreviation: "TCE N",
            street_type: "Terrace North"
        },
        {
            Abbreviation: "TCE",
            street_type: "Terrace"
        },
        {
            Abbreviation: "THFR",
            street_type: "Thoroughfare"
        },
        {
            Abbreviation: "TLWY",
            street_type: "Tollway"
        },
        {
            Abbreviation: "TOP",
            street_type: "Top"
        },
        {
            Abbreviation: "TOR",
            street_type: "Tor"
        },
        {
            Abbreviation: "TRK",
            street_type: "Track"
        },
        {
            Abbreviation: "TRL",
            street_type: "Trail"
        },
        {
            Abbreviation: "TURN",
            street_type: "Turn"
        },
        {
            Abbreviation: "UPAS",
            street_type: "Underpass"
        },
        {
            Abbreviation: "VALE",
            street_type: "Vale"
        },
        {
            Abbreviation: "VIAD",
            street_type: "Viaduct"
        },
        {
            Abbreviation: "VIEW",
            street_type: "View"
        },
        {
            Abbreviation: "VIEWS",
            street_type: "Views"
        },
        {
            Abbreviation: "VSTA",
            street_type: "Vista"
        },
        {
            Abbreviation: "WALK",
            street_type: "Walk"
        },
        {
            Abbreviation: "WKWY",
            street_type: "Walkway"
        },
        {
            Abbreviation: "WAY N",
            street_type: "Way North"
        },
        {
            Abbreviation: "WAY S",
            street_type: "Way South"
        },
        {
            Abbreviation: "WAY",
            street_type: "Way"
        },
        {
            Abbreviation: "WAYS",
            street_type: "Ways"
        },
        {
            Abbreviation: "WEG",
            street_type: "Weg"
        },
        {
            Abbreviation: "WHRF",
            street_type: "Wharf"
        },
        {
            Abbreviation: "WYND",
            street_type: "Wynd"
        }
    ]
    }
  },
  async mounted () {
    this.id = this.$route.query.id
    this.ck = this.$route.query.ck
    this.startDate = moment().format('MM-DD-YYYY h:mm')
    await this.getCurrentFields()
    await this.getMember()
    await this.getStreetTypeMapper()
    this.startDate = moment().format('MM-DD-YYYY h:mm')
    // error finder
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
          this.answer_step6.PostalAddress.AddressLine1 = this.answer_step6.ElectoralAddress.StreetNumber + ' ' + this.answer_step6.ElectoralAddress.Street + ' ' + this.answer_step6.ElectoralAddress.StreetType
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
        // postal address auto populated
        if (this.member) this.answer_step6.PostalAddress.AddressLine1 = this.member.PostalAddress.AddressLine1
        if (this.member) this.answer_step6.PostalAddress.AddressLine2 = this.member.PostalAddress.AddressLine2
        if (this.member) this.answer_step6.PostalAddress.AddressLine3 = this.member.PostalAddress.AddressLine3
        if (this.member) this.answer_step6.PostalAddress.Postcode = this.member.PostalAddress.Postcode
        if (this.member) this.answer_step6.PostalAddress.State = this.member.PostalAddress.State
        if (this.member) this.answer_step6.PostalAddress.Suburb = this.member.PostalAddress.Suburb
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
        const isValid = await this.$refs.stepSix.validate()
        if(!isValid) {
          const el = document.querySelector('.error')
          el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' })
          return false
        }
        this.loadingSubmit = this.$loading.show()
        // const address = {
        //   FirstName: this.member.FirstName,
        //   LastName: this.member.LastName,
        //   StreetNumber: this.answer_step6.ElectoralAddress.StreetNumber,
        //   Street: this.answer_step6.ElectoralAddress.Street,
        //   Postcode: this.answer_step6.ElectoralAddress.Postcode,
        //   Suburb: this.answer_step6.ElectoralAddress.Suburb,
        //   DateOfBirthDay: this.answers.DOB,
        //   DateOfBirthMonth: this.answers.DOB_month,
        //   DateOfBirthYear: this.answers.DOB_year
        // }
        // const postAddress = await axios.post('http://dev.nsw.liberal.org.au/LPNSWAPI/SurveyLookup/PostValidateAddress', address, {headers: {
        //   Authorization: 'Bearer ' + this.token
        // }
        // })
        // if(postAddress.data.Message === 'Address can not be validated') {
        //   throw new Error(postAddress.data.Message)
        // }
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
            AddressLine1: this.answer_step6.PostalAddress.AddressLine1,
            AddressLine2: this.answer_step6.PostalAddress.AddressLine2,
            AddressLine3: this.answer_step6.PostalAddress.AddressLine3,
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
          lastView: this.startDate,
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
    },
    getStreetTypeMapper () {
      const st = this.street_types_mapper.find( el => {
        return el.Abbreviation === this.member.ElectoralAddress.StreetType.toUpperCase()
      })
      this.answer_step6.ElectoralAddress.StreetType = st.street_type
    }
  }
}
</script>
