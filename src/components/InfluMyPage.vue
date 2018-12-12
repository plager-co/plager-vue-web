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
            <div class="card user">
                <div class="profile">
                    <img class="profile-img" v-bind:src="picture_link">
                    <div class="edit" style="font-size: 15px; color: blue;">
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
                    <div class="username">@{{ instagram }}</div>
                </div>
                <div class="cols">
                    <div class="half">
                        <div class="input-set btn">
                            <div class='label'>SNS 계정</div>
                            <div class="input-wrap sns">
                                <input type="text" placeholder='@best_influencer' v-model="instagram">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>이름</div>
                            <div class="input-wrap">
                                <input type="text"  v-model=name>
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>패스워드</div>
                            <div class="input-wrap">
                                <input type="password" v-model="password">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>패스워드 확인</div>
                            <div class="input-wrap">
                                <input type="password" v-model="password2">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>연락처</div>
                            <div class="input-wrap">
                                <input type="text" v-model="contact">
                            </div>
                        </div>
                    </div>
                    <div class="half">
                        <div class="input-set" style="font-size: 15px;">
                            <div class='label'>이메일</div>
                            <div class="input-wrap">
                                {{email}}
                            </div>
                        </div>
                        <div class="input-set birth">
                            <div class='label'>생년월일</div>
                            <div class="select-wrap">
                                <div class="dropdown">
                                    <select name="year" id="birth-year" v-model="birth_year">
                                        <option v-for='i in 100' :value="1940 + i" :key='i' :selected="1940 + i === birth_year" >{{1940 + i}}</option>
                                    </select>
                                </div>
                                <div class="dropdown">
                                    <select name="month" id="birth-month" v-model="birth_month">
                                        <option v-for='i in 12' :value="i" :key='i'>{{i}}</option>
                                    </select>
                                </div>
                                <div class="dropdown">
                                    <select name="date" id="birth-date" v-model="birth_date">
                                        <option v-for='i in 31' :value="i" :key='i'>{{i}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>성별</div>
                            <div class="select-wrap">
                                <div class="dropdown">
                                    <select name="gender" id="gender" v-model="gender">
                                        <option value="male">남자</option>
                                        <option value="female">여자</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="input-set" style="font-size: 15px;">
                            <div class='label'>거주국가</div>
                            <div class="input-wrap">
                                {{country}}
                            </div>
                        </div>
                    </div>
                    <div class="input-set">
                        <div class="label">관심분야</div>
                        <div class="category-wrap">
                            <div class="item" :class='{selected: item.isSelected}' @click='item.isSelected ? item.isSelected = false : (categoryCount < 2 ? item.isSelected = !item.isSelected :"")' :value='i' v-for='(item, i) in categoryList' :key='i'>{{item.value}}</div>
                            <span>*2가지 분야 중복선택 가능합니다.</span>
                        </div>
                    </div>
                </div>
                <button class="edit-button" @click="completeJoin()">수정하기</button>
		<button class="delete-button" style="padding-left: 6px; margin-top: 30px; " @click="deleteUser()">탈퇴</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import AlertBase from './AlertBase'
export default {
     components: {AlertBase},
    computed: {
      categoryCount(){
          const val = this.categoryList.filter( x => x.isSelected == true)
          return val.length
      }
    },

    data(){
        return {
        categoryList: [
            {
            value: "뷰티",
            isSelected: false
            },
            {
            value: "패션",
            isSelected: false
            },
            {
            value: "유아용품",
            isSelected: false
            },
            {
            value: "식음료",
            isSelected: false
            },
            {
            value: "스포츠",
            isSelected: false
            },
            {
            value: "전자기기",
            isSelected: false
            },
            {
            value: "자동차",
            isSelected: false
            },
            {
            value: "홈인테리어",
            isSelected: false
            },
            {
            value: "기타",
            isSelected: false
            }
        ],
            email: '',
          instagram: '',
          country: '',
          gender: '',
          contact: '',
          category: '',
          birth: '',
          birth_month: '',
          birth_year: '',
          birth_date: '',
          name: '',
          picture_link: '',
           file: '',
        password: null,
        password2: null,
        count_ads: {
          count_started_ads: 0,
          count_registered_ads: 0,
          count_completed_ads: 0,
      },
        }
    },
    created: async function(){
        await this.$store.dispatch('fetchCountInfluencerAds', this.$store.getters.user_id);
        this.count_ads = this.$store.getters.count_ads;
        await this.$store.commit('closeAlertPopup');
        this.name = this.$store.getters.name;
        this.email = this.$store.getters.email;
        this.instagram = this.$store.getters.instagram;
        await this.$store.dispatch('fetchCountryName', this.$store.getters.country);
        this.country = this.$store.getters.country;
        this.gender = this.$store.getters.gender;
        this.contact = this.$store.getters.contact;
        this.picture_link = this.$store.getters.picture_link;
        var category = this.$store.getters.category;
        var categoryListNew = [];
        this.categoryList.forEach(function(val){
            if(category){
                if(category.indexOf(val.value) > -1){
                    categoryListNew.push(
                        {
                        value: val.value,
                        isSelected: true
                        },
                    )
                } else {
                    categoryListNew.push(
                        {
                        value: val.value,
                        isSelected: false
                        },
                    )
                }
            }

        });
        this.categoryList = categoryListNew;
        this.birth = this.$store.getters.birth;

        this.birth_year = this.birth.split('/')[0];
        this.birth_month = this.birth.split('/')[1];
        this.birth_date = this.birth.split('/')[2];

        console.log({
              name: this.name,
              birth: this.birth,
              country: this.country,
              birth_year: this.birth_year,
              birth_month: this.birth_month,
              birth_date: this.birth_date,
              categoryList: this.categoryList,
            categoryListNew: categoryListNew
          });
        },
    methods: {

        ShowRegisteredAd(){
            if(this.count_ads.count_started_ads > 0) {
                this.$store.commit('filterAdList', 'registered');
                this.$router.push('/influencer-sim');
            }
        },
        ShowStartedAd(){
            if(this.count_ads.count_registered_ads > 0) {
                this.$store.commit('filterAdList', 'started');
                this.$router.push('/influencer-sim');
            }
        },
        ShowCompletedAd(){
          if(this.count_ads.count_completed_ads > 0) {
              this.$store.commit('filterAdList', 'completed');
              this.$router.push('/influencer-sim');
          }
        },

        deleteUser(){
            this.$store.dispatch('deleteUser');
        },
        async handleFileUpload (){
            this.file = this.$refs.file.files[0];
              let formData = new FormData();
            formData.append('file', this.file);
          await this.$store.dispatch('pictureUpdate', formData);
          this.picture_link = this.$store.getters.picture_link;

          },
        completeJoin(){
              this.errors = [];

              var has_password_change = false;


          if (this.password !== this.password2) {
            this.errors.push('비밀번호를 일치하게 작성해주세요.');
          }

          if (this.password && this.password === this.password2) {
            has_password_change = true;
          }

          if (!this.birth_date || !this.birth_month || !this.birth_year) {
            this.errors.push('생년월일을 입력해주세요.');
          } else {
            this.birth = '' + this.birth_year + "/" + this.birth_month + "/" + this.birth_date
          }
          if (!this.country) {
            this.errors.push('거주 국가를 입력해주세요.');
          }

          if (!this.name) {
            this.errors.push('성함을 입력해주세요.');
          }
          if (!this.gender) {
            this.errors.push('성별을 입력해주세요.');
          }
          if (!this.contact) {
            this.errors.push('연락처를 입력해주세요.');
          }

          if (!this.instagram) {
            this.errors.push('인스타그램 아이디를 입력해주세요.');
          }

          var categorySelectedList = [];

          this.categoryList.forEach(function(val){
              if (val.isSelected) {
                  categorySelectedList.push(val.value);
              }
          });
          this.category = categorySelectedList.join();

            if (typeof this.category !== 'undefined' && this.category.length > 0) {
          } else {
            this.errors.push('카테고리를 선택해주세요.');
          }

          console.log({
              birth: this.birth,
              category: this.category,
              country: this.country,
              name: this.name,
              gender: this.gender,
              contact: this.contact,
              instagram: this.instagram,
               id: this.$store.getters.user_id

          });

          if (!this.errors.length) {
              this.register(has_password_change);
          }

        },
        register (has_password_change) {

           var userData =  {
              birth: this.birth,
              country: this.country,
             category: this.category,
              name: this.name,
              gender: this.gender,
              contact: this.contact,
              instagram: this.instagram,
               id: this.$store.getters.user_id

          };
            if(has_password_change){
                userData['password'] = this.password;
            }
          this.$store.dispatch('userUpdate', userData)
        },
    }
};
</script>

<style scoped>
h1 {
  text-align: left;
  margin-bottom: 50px;
}

.container {
  padding-top: 104px;
}

.card {
  width: 100%;
  padding: 42px 70px 32px;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 64px;
  box-sizing: border-box;
}

.card.user {
  padding: 56px 34px 31px 34px;
  font-size: 0;
  margin-bottom: 80px;
}
.card.user .profile {
  vertical-align: top;
  display: inline-block;
  width: 224px;
  padding-right: 45px;
  box-sizing: border-box;
}

.card.user .profile .profile-img {
  width: 179px;
  height: 179px;
  border-radius: 50%;
  background: #ddd;
  margin-bottom: 18px;
}

.card.user .profile .username {
  font-weight: 700;
  font-size: 22px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  line-height: 22px;
}

.card.user .cols {
  width: 100%;
  vertical-align: top;
  display: inline-block;
  width: calc(100% - 258px);
  font-size: 0;
  margin-bottom: 43px;
  padding-right: 52px;
  box-sizing: border-box;
}

.card.user .cols .half {
  display: inline-block;
  width: calc(50% - 15px);
  margin-right: 30px;
  vertical-align: top;
}

.card.user .cols .half:nth-child(2) {
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
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #dfe3e9;
  font-weight: 700;
  font-size: 50px;
  color: #000000;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  margin-bottom: 27px;
}
.count-wrap .col .count-name {
  font-weight: 400;
  font-size: 20px;
  color: #2a2a2a;
  letter-spacing: 2px;
  text-align: center;
}
.col:before {
  position: absolute;
  top: 59px;
  content: "";
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
  width: calc((100% - 23px)/3);
}

.input-set .dropdown:last-child {
  margin-right: 0;
}
.input-set .dropdown select {
  appearance: none;
}

.input-set .input-wrap.sns {
  position: relative;
}

.input-set .input-wrap.sns input[type="text"] {
  padding-left: 53px;
}

.input-set .input-wrap.sns::before {
  content: "";
  display: block;
  position: absolute;

  width: 42px;
  height: 36px;
  background: url("../assets/input-sns-instagram.svg");
}

.category-wrap {
  width: 100%;
  font-size: 0;
  text-align: left;
  margin-bottom: 28px;
}

.category-wrap .item {
  display: inline-block;
  width: calc((100% - 36px)/6);
  margin-right: 7px;
  background: #ffffff;
  border: 1px solid #d9dee8;
  border-radius: 4px;
  font-size: 14px;
  color: #092056;
  letter-spacing: 2.55px;
  text-align: center;
  padding: 7px 0;
  box-sizing: border-box;
  margin-bottom: 14px;
}

.category-wrap .item:nth-child(6n) {
  margin-right: 0;
}
.category-wrap .item:nth-child(n + 7) {
  margin-bottom: 0;
}
.category-wrap .item.selected {
  background: #092056;
  color: white;
  border: none;
}

.category-wrap span {
  font-size: 15px;
  color: #a5adba;
  letter-spacing: 0;
  position: relative;
  top: 8px;
}

.card button{
    width: 300px;
    height: 60px;
    background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
    border-radius: 5px;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    margin-left: 30px;
}

delete-button {
        background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
        border-radius: 5px;
        font-family: AppleSDGothicNeo-Medium;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center; 
        width: 300px;
        height: 60px;
	
    }

@media screen and (max-width: 640px) {

    h1 { font-size: 2rem; margin-left: 2rem; margin-bottom: 1.4rem;}

    .container {padding: 1.1rem 1.5rem 1.5rem; box-sizing: border-box;}
    .card { padding: 1.5rem .7rem; margin-bottom: 2.3rem;}

    .count-wrap .col .circle { width: 6rem; height: 6rem; font-size: 2.4rem; margin-bottom: 1.2rem; padding: 0;}
    .count-wrap .col .count-name { font-size: 1.2rem; letter-spacing: .12rem;}
    .col:before {top: 3rem;}

    .card.user { padding: 2rem 1.5rem 2.2rem; box-sizing: border-box; margin-bottom: 1.8rem;}
    .card.user .profile {display: block; width: 100%; text-align: center; margin-bottom: 1rem; padding-right: 0;}
    .card.user .profile .profile-img {display: inline-block;}
    .card.user .cols {width: 100%; padding-right: 0; margin-bottom: 2rem;}
    .card.user .cols .half {width: 100%; display: block;}


    .edit-button {width: 20.2rem; height: 4rem; font-size: 1.2rem; border: 0;}


    .category-wrap .item {width: calc((100% - 1rem)/3); margin-right: .5rem; font-size: 1.2rem; margin-bottom: .6rem}
    .category-wrap .item:nth-child(3n) {margin-right: 0;}

    .card button { width: 20.2rem; height: 4rem; font-size: 1.2rem;}
    .category-wrap {text-align: right}

    .card.user .profile .profile-img { width: 6rem; height: 6rem; margin-bottom: .9rem;}
    .card.user .profile .username { font-size: 1.2rem;}

}

</style>
