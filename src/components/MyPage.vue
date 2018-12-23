<template>
  <div class="viewer">
      <alert-base></alert-base>

      <div class="section start gray">
          <div class="container">
            <div class="card">
                <div class="count-wrap">
                    <div class="col">
                        <button class="circle"  @click="ShowStartedAd()">
                            {{ count_ads.count_started_ads }}
                        </button>
                        <div class="count-name">서비스 진행중</div>
                    </div>
                    <div class="col">
                        <button class="circle" @click="ShowRegisteredAd()">
                            {{ count_ads.count_registered_ads }}
                        </button>
                        <div class="count-name">서비스 대기중</div>
                    </div>
                    <div class="col">
                        <button class="circle"  @click="ShowCompletedAd()">
                            {{ count_ads.count_completed_ads }}
                        </button>
                        <div class="count-name">서비스 완료</div>
                    </div>
                </div>
            </div>
            <h1>마이페이지</h1> 
	    <h3>상세 정보가 정확하게 기입되어야 원활한 서비스를 받으실 수 있습니다.</h3>
            <div class="card user">
                <div class="profile">
                    <img id="picture_link" class="profile-img" v-bind:src="picture_link">
                     <div class="edit">
                        <label for='file' class="file-select">
                        <!-- We can't use a normal button element here, as it would become the target of the label. -->
                        <div class="select-button">
                          <!-- Display the filename if a file has been selected. -->
                          <span>프로필 사진 수정</span>
                        </div>
                        <!-- Now, the file input that we hide. -->
                        <input style="display: none;" type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                      </label>
                    </div>
                </div>
                <div class="cols">
                    <div class="half">
                        <div class="input-set">
                            <div class='label'>*법인(개인)사업자명</div>
                            <div class="input-wrap">
                                <input id="company_name" type="text" v-model="company_name">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*사업자번호</div>
                            <div class="input-wrap">
                                <input id="company_number" type="text" v-model="company_number">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*사업종목</div>
                            <div class="input-wrap">
                                <input id="company_category" type="text" v-model="company_category">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*담당자명</div>
                            <div class="input-wrap">
                                <input id="officer_name" type="text" v-model="officer_name">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*세금계산서 발행 이메일</div>
                            <div class="input-wrap">
                                <input id="tax_email" type="text" v-model="tax_email">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*담당자 연락처</div>
                            <div class="input-wrap">
                                <input id="contact" type="text" v-model="contact">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>자사 홈페이지 URL</div>
                            <div class="input-wrap">
                                <input id="company_website" type="text" v-model="company_website">
                            </div>
                        </div>
                    </div>
                    <div class="half">
                        <div class="input-set">
                            <div class='label'>이메일</div>
                            <div class="input-wrap">
                                <input id="email" type="text" v-model="email" disabled>
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>비밀번호 수정</div>
                            <div class="input-wrap">
                                <input id="password" type="password" v-model="password">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>비밀번호 수정 확인</div>
                            <div class="input-wrap">
                                <input id="password2" type="text" v-model="password2">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*사업자 등록증(1MB 이하)</div>
                            <div class="input-wrap btn">

                                <button id="document_link" class="select-button">
                                    <label class="select-button file-select" for="document-file">

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  </label>

                                </button>

                                <!-- We can't use a normal button element here, as it would become the target of the label. -->
                                <div class="select-button">
                                  <!-- Display the filename if a file has been selected. -->
                                    <h6 style="font-size: 12px;"><label v-if="!document_link" class="select-button file-select" for="document-file"><u style="color: navy;">사업자등록증을 업로드 해주세요</u></label><a v-if="document_link" v-bind:href="document_link" target="_blank">사업자 등록 완료</a></h6>
                                </div>
                                <!-- Now, the file input that we hide. -->
                                <input style="display: none;" type="file" id="document-file" ref="document_file" v-on:change="handleDocumentFileUpload()"/>
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>SNS 계정 ID</div>
                            <div class="input-wrap sns instagram" >
                                <input id="instagram" type="text" placeholder='인스타그램 계정' v-model="instagram">
                            </div>
                            <div class="input-wrap sns facebook" >
                                <input id="facebook" type="text" placeholder='페이스북 계정' v-model="facebook">
                            </div>
                            <div class="input-wrap sns etc" >
                                <input id="social" type="text" placeholder='기타 sns 계정' v-model="social">
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="card user" v-if="errors.length">-->
                    <!--<div class="cols">-->
                        <!--<div class="half">-->
                            <!--<div class="input-set">-->
                              <!--<div style="color:red;" class="label" v-for="error in errors">{{ error }}<br></div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->

                <button class="edit-button" @click='completeJoin' style="margin-left: 30px; margin-right: 30px;">입력확인</button>
		<button class="delete-button" style="padding-left: 6px; margin-top: 30px;" @click="deleteUser()">탈퇴</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import AlertBase from './AlertBase'
export default {

    components: {AlertBase},
    data() {
      return {  errors: [],
          count_ads: {
              count_started_ads: 0,
              count_registered_ads: 0,
              count_completed_ads: 0,
          },
        company_name: null,
        company_category: null,
        officer_name: null,
        tax_email: null,
        contact: null,
        company_website: null,
        instagram: null,
        facebook: null,
        social: null,
        email: null,
        company_number: null,
        password: null,
        password2: null,
      picture_link: null,
      document_link: null,
           file: '',
           document_file: '',
        movie: null }
    },
     created: async function(){
        await this.$store.dispatch('fetchCountAds', this.$store.getters.user_id);
        this.count_ads = this.$store.getters.count_ads;

        this.company_name = this.$store.getters.company_name;
        this.company_category = this.$store.getters.company_category;
        this.officer_name = this.$store.getters.officer_name;
        this.tax_email = this.$store.getters.tax_email;
        this.contact = this.$store.getters.contact;
        this.company_website = this.$store.getters.company_website;
        this.instagram = this.$store.getters.instagram;
        this.facebook = this.$store.getters.facebook;
        this.social = this.$store.getters.social;
        this.email = this.$store.getters.email;
        this.company_number = this.$store.getters.company_number;
        this.picture_link = this.$store.getters.picture_link;
        this.document_link = this.$store.getters.document_link;


              this.errors = [];

              var has_password_change = false;

            document.getElementById('password').style.border='1px solid #d9dee8';
            document.getElementById('password2').style.border='1px solid #d9dee8';
            document.getElementById('company_name').style.border='1px solid #d9dee8';
            document.getElementById('company_category').style.border='1px solid #d9dee8';
            document.getElementById('company_number').style.border='1px solid #d9dee8';
            document.getElementById('officer_name').style.border='1px solid #d9dee8';
            document.getElementById('tax_email').style.border='1px solid #d9dee8';
            document.getElementById('contact').style.border='1px solid #d9dee8';
            document.getElementById('picture_link').style.border='1px solid #d9dee8';
            document.getElementById('document_link').style.border='1px solid #d9dee8';

          if (this.password !== this.password2) {
            this.errors.push('비밀번호를 일치하게 작성해주세요.');
            document.getElementById('password').style.border='2px solid red';
            document.getElementById('password2').style.border='2px solid red';
          }

          if (this.password && this.password === this.password2) {
            has_password_change = true;
          }

          if (!this.company_name) {
            this.errors.push('사업자명을 입력해주세요.');
            document.getElementById('company_name').style.border='2px solid red';
          }

          if (!this.company_category) {
            this.errors.push('사업 종목을 입력해주세요.');
            document.getElementById('company_category').style.border='2px solid red';
          }

          if (!this.company_number) {
            this.errors.push('사업자 번호를 입력해주세요.');
            document.getElementById('company_number').style.border='2px solid red';
          }

          if (!this.officer_name) {
            this.errors.push('담당자명을 입력해주세요.');
            document.getElementById('officer_name').style.border='2px solid red';
          }

          if (!this.tax_email) {
            this.errors.push('세금계산서 발행 이메일을 입력해주세요.');
            document.getElementById('tax_email').style.border='2px solid red';
          }

          if (!this.contact) {
            this.errors.push('담당자 연락처를 입력해주세요.');
            document.getElementById('contact').style.border='2px solid red';
          }

          if (!this.picture_link) {
            document.getElementById('picture_link').style.border='2px solid red';
          }

          if (!this.document_link) {
            document.getElementById('document_link').style.border='2px solid red';
          }
        },
    methods: {
          async handleFileUpload (){
            this.file = this.$refs.file.files[0];
              let formData = new FormData();
            formData.append('file', this.file);
          await this.$store.dispatch('pictureUpdate', formData);
          this.picture_link = this.$store.getters.picture_link;

          },
        async handleDocumentFileUpload (){
            this.document_file = this.$refs.document_file.files[0];
              let formData = new FormData();
            formData.append('document_file', this.document_file);
          await this.$store.dispatch('documentUpdate', formData);
          this.document_link = this.$store.getters.document_link;

          },
        completeJoin(){
              this.errors = [];

              var has_password_change = false;

            document.getElementById('password').style.border='1px solid #d9dee8';
            document.getElementById('password2').style.border='1px solid #d9dee8';
            document.getElementById('company_name').style.border='1px solid #d9dee8';
            document.getElementById('company_category').style.border='1px solid #d9dee8';
            document.getElementById('company_number').style.border='1px solid #d9dee8';
            document.getElementById('officer_name').style.border='1px solid #d9dee8';
            document.getElementById('tax_email').style.border='1px solid #d9dee8';
            document.getElementById('contact').style.border='1px solid #d9dee8';
            document.getElementById('picture_link').style.border='1px solid #d9dee8';
            document.getElementById('document_link').style.border='1px solid #d9dee8';

          if (this.password !== this.password2) {
            this.errors.push('비밀번호를 일치하게 작성해주세요.');
            document.getElementById('password').style.border='2px solid red';
            document.getElementById('password2').style.border='2px solid red';
          }

          if (this.password && this.password === this.password2) {
            has_password_change = true;
          }

          if (!this.company_name) {
            this.errors.push('사업자명을 입력해주세요.');
            document.getElementById('company_name').style.border='2px solid red';
          }

          if (!this.company_category) {
            this.errors.push('사업 종목을 입력해주세요.');
            document.getElementById('company_category').style.border='2px solid red';
          }

          if (!this.company_number) {
            this.errors.push('사업자 번호를 입력해주세요.');
            document.getElementById('company_number').style.border='2px solid red';
          }

          if (!this.officer_name) {
            this.errors.push('담당자명을 입력해주세요.');
            document.getElementById('officer_name').style.border='2px solid red';
          }

          if (!this.tax_email) {
            this.errors.push('세금계산서 발행 이메일을 입력해주세요.');
            document.getElementById('tax_email').style.border='2px solid red';
          }

          if (!this.contact) {
            this.errors.push('담당자 연락처를 입력해주세요.');
            document.getElementById('contact').style.border='2px solid red';
          }

          if (!this.picture_link) {
            document.getElementById('picture_link').style.border='2px solid red';
          }

          if (!this.document_link) {
            document.getElementById('document_link').style.border='2px solid red';
          }

          // if (!this.document_link) {
          //   this.errors.push('사업자 등록증을 업로드한 뒤 링크로 첨부해주세요.');
          // }

          if (!this.errors.length) {
              this.register(has_password_change);
          }

        },
        register (has_password_change) {

           var userData =  {
              company_name: this.company_name,
              company_category: this.company_category,
              officer_name: this.officer_name,
              tax_email: this.tax_email,
              contact: this.contact,
              company_website: this.company_website,
              document_link: this.document_link,
              instagram: this.instagram,
              facebook: this.facebook,
              social: this.social,
              company_number: this.company_number,
               id: this.$store.getters.user_id

          }
            if(has_password_change){
                userData['password'] = this.password;
            }
          this.$store.commit('setUserDataMyPage', userData)
          this.$store.dispatch('userUpdate', userData)
        },
        checkEmail () {
            this.$store.commit('hasEmail', this.email);
          this.$store.dispatch('checkEmail', this.email);
        },
        ShowRegisteredAd(){
          if(this.count_ads.count_registered_ads > 0){
            this.$store.commit('filterAdList','registered');
            this.$router.push('/sponsor-sim');
          }

        },
        ShowStartedAd(){
            if(this.count_ads.count_started_ads > 0) {
                this.$store.commit('filterAdList', 'started');
                this.$router.push('/sponsor-sim');
            }
        },
        ShowCompletedAd(){
          if(this.count_ads.count_completed_ads > 0) {
              this.$store.commit('filterAdList', 'completed');
              this.$router.push('/sponsor-sim');
          }
        },
        checkCompanyNumber () {
            this.$store.commit('hasCompanyNumber', this.company_number);
          this.$store.dispatch('checkCompanyNumber', this.company_number);
        },
        validEmail: function (email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        },
        validCompanyNumber: function (company_number) {
          var re = /^(?!0+$)[\-0-9]{10,12}$/;
          return re.test(company_number);
        },
        deleteUser(){
            this.$store.dispatch('deleteUser');
        },
    }
}
</script>

<style scoped>

    h1 { 
        text-align: left;
        margin-bottom: 0px;
    }
    h3 { 
        text-align: center;
	margin-bottom: 5px;
    }
    .container {
        padding-top: 104px;
    }

    .card { 
        width: 100%;
        padding: 42px 70px 32px;
        /* Rectangle 48: */
        background: #FFFFFF;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);
        border-radius: 5px;
        margin-bottom: 64px;
        box-sizing: border-box;
    }

    .card.user {
        padding: 70px 134px 60px 70px;
        font-size: 0;
    }
    .card.user .profile {
        vertical-align: top;
        display: inline-block;
        width: 100px;
        margin-right: 45px;
    }

    .card.user .profile .profile-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #ddd;
        margin-bottom: 18px;
    }

    .card.user .profile .edit {
        width: 100%;
        /* 프로필사진 수정: */
        font-weight: 400;
        font-size: 12px;
        color: #0064FF;
        text-align: center;
    }

    .card.user .cols {
        width: 100%;
        vertical-align: top;
        display: inline-block;
        width: calc(100% - 145px);
        font-size: 0;
        margin-bottom: 23px;
    }

    .card.user .cols .half {
        display: inline-block;
        width: calc(50% - 15px);
        margin-right: 30px;
        vertical-align: top;
    }

    .card.user .cols .half:last-child {
        margin-right: 0;
    }

    .count-wrap {
        width: 100%;
        font-size: 0;
    }
    .count-wrap .col {
        display: inline-block;
        width: 33.3333%;
        text-align: center;
        position: relative;
    }
    .count-wrap .col .circle {
        background-image: none;
        display: inline-block;
        width: 120px; 
        height: 120px;
        border-radius: 50%;
        background-color: #ffffff;
        border: 2px solid #DFE3E9;
        font-family: AppleSDGothicNeo-Bold;
        font-size: 50px;
        color: #000000;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        margin-bottom: 27px;
    }
    .count-wrap .col .count-name {
        /* 서비스 계약중: */
        font-weight: 400;
        font-size: 20px;
        color: #2A2A2A;
        letter-spacing: 2px;
        text-align: center;
    }
    .col:before {
        position: absolute;
        top: 59px;
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: #dfe3e9;
    }



    /* input */

    .input-set {
    width: 100%;
    margin: auto;
    text-align: left;
    margin-bottom: 14px;
    }
    .input-set .input-wrap {
    position: relative;
    }

    .input-set .label {
    text-align: left;
    color: #002257;
    margin-bottom: 7px;
    box-sizing: border-box;
    font-size: 13px;
    color: #97a3b4;
    line-height: 22px;
    }
    .input-set input[type="text"],
    .input-set select,
    .input-set input[type="password"] {
    background-color: #ffffff;
    border: 1px solid #d9dee8;
    border-radius: 4px;
    height: 36px;
    padding-left: 15px;
    font-size: 13px;
    color: #002257;
    line-height: 22px;
    width: 100%;
    box-sizing: border-box;
    }

    .input-set .select-wrap {
    font-size: 0;
    }
    .input-set .select-wrap .dropdown:after {
    content: "";
    position: absolute;
    right: 12px;
    top: 15px;
    width: 16px;
    height: 10px;
    display: block;
    background-image: url("../assets/dropdownArrow.svg");
    }

    .input-set .select-wrap .dropdown {
    display: inline-block;
    width: 100%;
    margin-right: 11px;
    position: relative;
    }

    .input-set.birth .select-wrap .dropdown {
    width: calc((100% - 22px)/3);
    }

    .input-set .dropdown:last-child {
    margin-right: 0;
    }
    .input-set .dropdown select {
    appearance: none;
    }

    .input-set .input-wrap.sns {
        position: relative;
        margin-bottom: 10px
    }

    .input-set .input-wrap.sns input[type=text] {
        padding-left: 53px;
    }

    .input-set .input-wrap.sns::before {
        content: '';
        display: block;
        position: absolute;
        
        width: 42px;
        height: 36px;
        
    }

    .input-set .input-wrap.btn {
        position: relative;
    }

    .input-set .input-wrap.btn button {
        right: 0;
        width: 42px;
        height: 36px;
        background: url("../assets/input-file-button.svg");
        background-position: 100%;
        border: 0;
        border-radius: 0;
    }

    .input-set .input-wrap.sns.instagram::before {
        background: url("../assets/input-sns-instagram.svg");
    }
    .input-set .input-wrap.sns.facebook::before {
        background: url("../assets/input-sns-facebook.svg");   
    }
    .input-set .input-wrap.sns.etc::before {
        background: url("../assets/input-sns-etc.svg");
    }

    .edit-button {
        background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
        border-radius: 5px;
        font-family: AppleSDGothicNeo-Medium;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center; 
        width: 323px;
        height: 60px;
    }
    .delete-button {
        background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
        border-radius: 5px;
        font-family: AppleSDGothicNeo-Medium;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center; 
        width: 323px;
        height: 60px;
    }

@media screen and (max-width: 640px) {

    h1 { font-size: 2rem; margin-left: 1rem; margin-bottom: 1.4rem;}
    h3 { font-size: 1.5rem; margin-left: 1rem; margin-bottom: 1.4rem;}
    .container {padding: 1.1rem 1.5rem 1.5rem; box-sizing: border-box;}
    .card { padding: 1.5rem .7rem; margin-bottom: 2.3rem;}

    .count-wrap .col .circle { width: 6rem; height: 6rem; font-size: 2.4rem; padding: 0; margin-bottom: 1.2rem;}
    .count-wrap .col .count-name { font-size: 1.2rem; letter-spacing: .12rem;}
    .col:before {top: 3rem;}

    .card.user { padding: 2rem .5rem 1rem; box-sizing: border-box;}
    .card.user .profile {display: block; width: 100%; text-align: center; margin-bottom: 2.4rem;}
    .card.user .profile .profile-img {display: inline-block;}
    .card.user .cols {width: 100%;}
    .card.user .cols .half {width: 100%; display: block;}


    .edit-button {width: 20.2rem; height: 4rem; font-size: 1.2rem;}
    .delete-button {width: 20.2rem; height: 4rem; font-size: 1.2rem;}

}

</style>
