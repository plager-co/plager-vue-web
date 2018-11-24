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
                        <div class="count-name">서비스중</div>
                    </div>
                    <div class="col">
                        <button class="circle" @click="ShowRegisteredAd()">
                            {{ count_ads.count_registered_ads }}
                        </button>
                        <div class="count-name">계약중</div>
                    </div>
                    <div class="col">
                        <button class="circle"  @click="ShowCompletedAd()">
                            {{ count_ads.count_completed_ads }}
                        </button>
                        <div class="count-name">서비스완료</div>
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
                                <input type="text"  v-model="email">
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
                        <div class="input-set">
                            <div class='label'>거주국가</div>
                            <div class="select-wrap">
                                <div class="dropdown">
                                    <select name="country" id="country" v-model="country">
                                            <option value="KR">대한민국</option>
                                            <option value="GH">가나</option>
                                            <option value="GA">가봉</option>
                                            <option value="GY">가이아나</option>
                                            <option value="GM">감비아</option>
                                            <option value="GG">건지 섬</option>
                                            <option value="GP">과들루프</option>
                                            <option value="GT">과테말라</option>
                                            <option value="GU">괌</option>
                                            <option value="GD">그레나다</option>
                                            <option value="GR">그리스</option>
                                            <option value="GL">그린란드</option>
                                            <option value="GN">기니</option>
                                            <option value="GW">기니비사우</option>
                                            <option value="NA">나미비아</option>
                                            <option value="NR">나우루</option>
                                            <option value="NG">나이지리아</option>
                                            <option value="AQ">남극</option>
                                            <option value="SS">남수단</option>
                                            <option value="ZA">남아프리카 공화국</option>
                                            <option value="NL">네덜란드</option>
                                            <option value="AN">네덜란드령 안틸레스</option>
                                            <option value="NP">네팔</option>
                                            <option value="NO">노르웨이</option>
                                            <option value="NF">노퍽 섬</option>
                                            <option value="NC">누벨칼레도니</option>
                                            <option value="NZ">뉴질랜드</option>
                                            <option value="NU">니우에</option>
                                            <option value="NE">니제르</option>
                                            <option value="NI">니카라과</option>
                                            <option value="KR">대한민국</option>
                                            <option value="DK">덴마크</option>
                                            <option value="DO">도미니카 공화국</option>
                                            <option value="DM">도미니카 연방</option>
                                            <option value="DE">독일</option>
                                            <option value="TL">동티모르</option>
                                            <option value="LA">라오스</option>
                                            <option value="LR">라이베리아</option>
                                            <option value="LV">라트비아</option>
                                            <option value="RU">러시아</option>
                                            <option value="LB">레바논</option>
                                            <option value="LS">레소토</option>
                                            <option value="RE">레위니옹</option>
                                            <option value="RO">루마니아</option>
                                            <option value="LU">룩셈부르크</option>
                                            <option value="RW">르완다</option>
                                            <option value="LY">리비아</option>
                                            <option value="LT">리투아니아</option>
                                            <option value="LI">리히텐슈타인</option>
                                            <option value="MG">마다가스카르</option>
                                            <option value="MQ">마르티니크</option>
                                            <option value="MH">마셜 제도</option>
                                            <option value="YT">마요트</option>
                                            <option value="MO">마카오</option>
                                            <option value="MK">마케도니아 공화국</option>
                                            <option value="MW">말라위</option>
                                            <option value="MY">말레이시아</option>
                                            <option value="ML">말리</option>
                                            <option value="IM">맨 섬</option>
                                            <option value="MX">멕시코</option>
                                            <option value="MC">모나코</option>
                                            <option value="MA">모로코</option>
                                            <option value="MU">모리셔스</option>
                                            <option value="MR">모리타니</option>
                                            <option value="MZ">모잠비크</option>
                                            <option value="ME">몬테네그로</option>
                                            <option value="MS">몬트세랫</option>
                                            <option value="MD">몰도바</option>
                                            <option value="MV">몰디브</option>
                                            <option value="MT">몰타</option>
                                            <option value="MN">몽골</option>
                                            <option value="US">미국</option>
                                            <option value="UM">미국령 군소 제도</option>
                                            <option value="VI">미국령 버진아일랜드</option>
                                            <option value="MM">미얀마</option>
                                            <option value="FM">미크로네시아 연방</option>
                                            <option value="VU">바누아투</option>
                                            <option value="BH">바레인</option>
                                            <option value="BB">바베이도스</option>
                                            <option value="VA">바티칸 시국</option>
                                            <option value="BS">바하마</option>
                                            <option value="BD">방글라데시</option>
                                            <option value="BM">버뮤다</option>
                                            <option value="BJ">베냉</option>
                                            <option value="VE">베네수엘라</option>
                                            <option value="VN">베트남</option>
                                            <option value="BE">벨기에</option>
                                            <option value="BY">벨라루스</option>
                                            <option value="BZ">벨리즈</option>
                                            <option value="BA">보스니아 헤르체고비나</option>
                                            <option value="BW">보츠와나</option>
                                            <option value="BO">볼리비아</option>
                                            <option value="BI">부룬디</option>
                                            <option value="BF">부르키나파소</option>
                                            <option value="BV">부베 섬</option>
                                            <option value="BT">부탄</option>
                                            <option value="MP">북마리아나 제도</option>
                                            <option value="BG">불가리아</option>
                                            <option value="BR">브라질</option>
                                            <option value="BN">브루나이</option>
                                            <option value="WS">사모아</option>
                                            <option value="SA">사우디아라비아</option>
                                            <option value="GS">사우스조지아 사우스샌드위치 제도</option>
                                            <option value="SM">산마리노</option>
                                            <option value="ST">상투메 프린시페</option>
                                            <option value="PM">생피에르 미클롱</option>
                                            <option value="EH">서사하라</option>
                                            <option value="SN">세네갈</option>
                                            <option value="RS">세르비아</option>
                                            <option value="SC">세이셸</option>
                                            <option value="LC">세인트루시아</option>
                                            <option value="VC">세인트빈센트 그레나딘</option>
                                            <option value="KN">세인트키츠 네비스</option>
                                            <option value="SH">세인트헬레나</option>
                                            <option value="SO">소말리아</option>
                                            <option value="SB">솔로몬 제도</option>
                                            <option value="SD">수단</option>
                                            <option value="SR">수리남</option>
                                            <option value="LK">스리랑카</option>
                                            <option value="SJ">스발바르 얀마옌</option>
                                            <option value="SZ">스와질란드</option>
                                            <option value="SE">스웨덴</option>
                                            <option value="CH">스위스</option>
                                            <option value="ES">스페인</option>
                                            <option value="SK">슬로바키아</option>
                                            <option value="SI">슬로베니아</option>
                                            <option value="SY">시리아</option>
                                            <option value="SL">시에라리온</option>
                                            <option value="SG">싱가포르</option>
                                            <option value="AE">아랍에미리트</option>
                                            <option value="AW">아루바</option>
                                            <option value="AM">아르메니아</option>
                                            <option value="AR">아르헨티나</option>
                                            <option value="AS">아메리칸사모아</option>
                                            <option value="IS">아이슬란드</option>
                                            <option value="HT">아이티</option>
                                            <option value="IE">아일랜드</option>
                                            <option value="AZ">아제르바이잔</option>
                                            <option value="AF">아프가니스탄</option>
                                            <option value="AD">안도라</option>
                                            <option value="AL">알바니아</option>
                                            <option value="DZ">알제리</option>
                                            <option value="AO">앙골라</option>
                                            <option value="AG">앤티가 바부다</option>
                                            <option value="AI">앵귈라</option>
                                            <option value="ER">에리트레아</option>
                                            <option value="EE">에스토니아</option>
                                            <option value="EC">에콰도르</option>
                                            <option value="ET">에티오피아</option>
                                            <option value="SV">엘살바도르</option>
                                            <option value="GB">영국</option>
                                            <option value="VG">영국령 버진아일랜드</option>
                                            <option value="IO">영국령 인도양 지역</option>
                                            <option value="YE">예멘</option>
                                            <option value="OM">오만</option>
                                            <option value="AU">오스트레일리아</option>
                                            <option value="AT">오스트리아</option>
                                            <option value="HN">온두라스</option>
                                            <option value="AX">올란드 제도</option>
                                            <option value="WF">왈리스 퓌튀나</option>
                                            <option value="JO">요르단</option>
                                            <option value="UG">우간다</option>
                                            <option value="UY">우루과이</option>
                                            <option value="UZ">우즈베키스탄</option>
                                            <option value="UA">우크라이나</option>
                                            <option value="IQ">이라크</option>
                                            <option value="IR">이란</option>
                                            <option value="IL">이스라엘</option>
                                            <option value="EG">이집트</option>
                                            <option value="IT">이탈리아</option>
                                            <option value="IN">인도</option>
                                            <option value="ID">인도네시아</option>
                                            <option value="JP">일본</option>
                                            <option value="JM">자메이카</option>
                                            <option value="ZM">잠비아</option>
                                            <option value="JE">저지 섬</option>
                                            <option value="GQ">적도 기니</option>
                                            <option value="KP">조선민주주의인민공화국</option>
                                            <option value="GE">조지아</option>
                                            <option value="CF">중앙아프리카 공화국</option>
                                            <option value="TW">중화민국</option>
                                            <option value="CN">중화인민공화국</option>
                                            <option value="DJ">지부티</option>
                                            <option value="GI">지브롤터</option>
                                            <option value="ZW">짐바브웨</option>
                                            <option value="TD">차드</option>
                                            <option value="CZ">체코</option>
                                            <option value="CL">칠레</option>
                                            <option value="CM">카메룬</option>
                                            <option value="CV">카보베르데</option>
                                            <option value="KZ">카자흐스탄</option>
                                            <option value="QA">카타르</option>
                                            <option value="KH">캄보디아</option>
                                            <option value="CA">캐나다</option>
                                            <option value="KE">케냐</option>
                                            <option value="KY">케이맨 제도</option>
                                            <option value="KM">코모로</option>
                                            <option value="CR">코스타리카</option>
                                            <option value="CC">코코스 제도</option>
                                            <option value="CI">코트디부아르</option>
                                            <option value="CO">콜롬비아</option>
                                            <option value="CG">콩고 공화국</option>
                                            <option value="CD">콩고 민주 공화국</option>
                                            <option value="CU">쿠바</option>
                                            <option value="KW">쿠웨이트</option>
                                            <option value="CK">쿡 제도</option>
                                            <option value="HR">크로아티아</option>
                                            <option value="CX">크리스마스 섬</option>
                                            <option value="KG">키르기스스탄</option>
                                            <option value="KI">키리바시</option>
                                            <option value="CY">키프로스</option>
                                            <option value="TH">타이</option>
                                            <option value="TJ">타지키스탄</option>
                                            <option value="TZ">탄자니아</option>
                                            <option value="TC">터크스 케이커스 제도</option>
                                            <option value="TR">터키</option>
                                            <option value="TG">토고</option>
                                            <option value="TK">토켈라우</option>
                                            <option value="TO">통가</option>
                                            <option value="TM">투르크메니스탄</option>
                                            <option value="TV">투발루</option>
                                            <option value="TN">튀니지</option>
                                            <option value="TT">트리니다드 토바고</option>
                                            <option value="PA">파나마</option>
                                            <option value="PY">파라과이</option>
                                            <option value="PK">파키스탄</option>
                                            <option value="PG">파푸아 뉴기니</option>
                                            <option value="PW">팔라우</option>
                                            <option value="PS">팔레스타인</option>
                                            <option value="FO">페로 제도</option>
                                            <option value="PE">페루</option>
                                            <option value="PT">포르투갈</option>
                                            <option value="FK">포클랜드 제도</option>
                                            <option value="PL">폴란드</option>
                                            <option value="PR">푸에르토리코</option>
                                            <option value="FR">프랑스</option>
                                            <option value="GF">프랑스령 기아나</option>
                                            <option value="TF">프랑스령 남부와 남극 지역</option>
                                            <option value="PF">프랑스령 폴리네시아</option>
                                            <option value="FJ">피지</option>
                                            <option value="FI">핀란드</option>
                                            <option value="PH">필리핀</option>
                                            <option value="PN">핏케언 제도</option>
                                            <option value="HM">허드 맥도널드 제도</option>
                                            <option value="HU">헝가리</option>
                                            <option value="HK">홍콩</option>
                                        </select>
                                </div>
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
        this.country = this.$store.getters.country;
        this.gender = this.$store.getters.gender;
        this.contact = this.$store.getters.contact;
        this.picture_link = this.$store.getters.picture_link;
        var category = this.$store.getters.category;
        var categoryListNew = [];
        this.categoryList.forEach(function(val){
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
        });
        this.categoryList = categoryListNew;
        this.birth = this.$store.getters.birth;

        this.birth_year = this.birth.split('/')[0];
        this.birth_month = this.birth.split('/')[1];
        this.birth_date = this.birth.split('/')[2];

        console.log({
              name: this.name,
              birth: this.birth,
              birth_year: this.birth_year,
              birth_month: this.birth_month,
              birth_date: this.birth_date,
              categoryList: this.categoryList,
            categoryListNew: categoryListNew
          });
        },
    methods: {

        ShowRegisteredAd(){
            this.$store.commit('filterAdList','registered');
            this.$router.push('/influencer-ad-list');
        },
        ShowStartedAd(){
            this.$store.commit('filterAdList','started');
            this.$router.push('/influencer-ad-list');
        },
        ShowCompletedAd(){
            this.$store.commit('filterAdList','completed');
            this.$router.push('/influencer-ad-list');
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
