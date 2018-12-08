<template>
    <form
         id="influencer-join"
      @submit.prevent
      novalidate="true"
    >
    <div class='viewer'>
        <div class="section first">
            <div class="container">
                <div class="cell">
                    <div class="title">We can do anything,<br class="for-mobile"> We can be anyone</div>
                    <div class="desc">
                        누구나 인플루언서가 될 수 있습니다.<br>
이제부터 플래거와 함께 인플루언서라는<br class="for-mobile"> 직업으로 활동해보세요.
                    </div>
                </div>
            </div>
        </div>
        <div class="section gray">
            <div class="container">
                <h1>인플루언서 등록</h1>
                <h2>인플루언서 활동을 위해 아래 기본정보가 반드시 필요합니다.</h2>
                <div class="card">
                    <div class="input-wrap">
                        <div class='half'>
                            <div class="input-set btn">
                                <div class='label'>SNS 계정</div>
                                <div class="input-wrap sns">
                                    <input id="instagram" type="text" placeholder='@인스타그램 아이디' v-model="instagram">
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>패스워드</div>
                                <div class="input-wrap">
                                    <input id="password" type="password" placeholder="**********" v-model="password">
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>이름</div>
                                <div class="input-wrap">
                                    <input id="name" type="text" v-model="name">
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>연락처</div>
                                <div class="input-wrap">
                                    <input id="contact" type="text" v-model="contact">
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>거주국가</div>
                                <div class="select-wrap">
                                    <div class="dropdown">
                                        <select name="country" id="country" v-model="country">
                                            <option value="South Korea">대한민국</option>
                                            <option value="Ghana">가나</option>
                                            <option value="Gabon">가봉</option>
                                            <option value="Guyana">가이아나</option>
                                            <option value="Gambia">감비아</option>
                                            <option value="Guernsey">건지 섬</option>
                                            <option value="Guadeloupe">과들루프</option>
                                            <option value="Guatemala">과테말라</option>
                                            <option value="Guam">괌</option>
                                            <option value="Grenada">그레나다</option>
                                            <option value="Greece">그리스</option>
                                            <option value="Greenland">그린란드</option>
                                            <option value="Guinea">기니</option>
                                            <option value="Guinea-Bissau">기니비사우</option>
                                            <option value="Namibia">나미비아</option>
                                            <option value="Nauru">나우루</option>
                                            <option value="Nigeria">나이지리아</option>
                                            <option value="Antarctica">남극</option>
                                            <option value="South Sudan">남수단</option>
                                            <option value="Republic of South Africa">남아프리카 공화국</option>
                                            <option value="Netherlands">네덜란드</option>
                                            <option value="Netherlands Antilles">네덜란드령 안틸레스</option>
                                            <option value="Nepal">네팔</option>
                                            <option value="Norway">노르웨이</option>
                                            <option value="Norfolk Island">노퍽 섬</option>
                                            <option value="Novel Caledoni">누벨칼레도니</option>
                                            <option value="New Zealand">뉴질랜드</option>
                                            <option value="Niue">니우에</option>
                                            <option value="Niger">니제르</option>
                                            <option value="Nicaragua">니카라과</option>
                                            <option value="South Korea">대한민국</option>
                                            <option value="Denmark">덴마크</option>
                                            <option value="Dominican Republic">도미니카 공화국</option>
                                            <option value="Commonwealth of Dominica">도미니카 연방</option>
                                            <option value="Germany">독일</option>
                                            <option value="East Timor">동티모르</option>
                                            <option value="Laos">라오스</option>
                                            <option value="Liberia">라이베리아</option>
                                            <option value="Latvia">라트비아</option>
                                            <option value="Russia">러시아</option>
                                            <option value="Lebanon">레바논</option>
                                            <option value="Lesotho">레소토</option>
                                            <option value="Reunion">레위니옹</option>
                                            <option value="Romania">루마니아</option>
                                            <option value="Luxembourg">룩셈부르크</option>
                                            <option value="Rwanda">르완다</option>
                                            <option value="Libya">리비아</option>
                                            <option value="Lithuania">리투아니아</option>
                                            <option value="Liechtenstein">리히텐슈타인</option>
                                            <option value="Madagascar">마다가스카르</option>
                                            <option value="Martinique">마르티니크</option>
                                            <option value="Marshall Islands">마셜 제도</option>
                                            <option value="Mayotte">마요트</option>
                                            <option value="Macau">마카오</option>
                                            <option value="Republic of Macedonia">마케도니아 공화국</option>
                                            <option value="Malawi">말라위</option>
                                            <option value="Malaysia">말레이시아</option>
                                            <option value="Mali">말리</option>
                                            <option value="Isle of Man">맨 섬</option>
                                            <option value="Mexico">멕시코</option>
                                            <option value="Monaco">모나코</option>
                                            <option value="Morocco">모로코</option>
                                            <option value="Mauritius">모리셔스</option>
                                            <option value="Mauritania">모리타니</option>
                                            <option value="Mozambique">모잠비크</option>
                                            <option value="Montenegro">몬테네그로</option>
                                            <option value="Montserrat">몬트세랫</option>
                                            <option value="Moldova">몰도바</option>
                                            <option value="Maldive Islands">몰디브</option>
                                            <option value="Malta">몰타</option>
                                            <option value="Mongolia">몽골</option>
                                            <option value="United States">미국</option>
                                            <option value="US territory islands">미국령 군소 제도</option>
                                            <option value="US Virgin Islands">미국령 버진아일랜드</option>
                                            <option value="Myanmar">미얀마</option>
                                            <option value="Federated States of Micronesia">미크로네시아 연방</option>
                                            <option value="Vanuatu">바누아투</option>
                                            <option value="Bahrain">바레인</option>
                                            <option value="Barbados">바베이도스</option>
                                            <option value="Vatican City State">바티칸 시국</option>
                                            <option value="Bahamas">바하마</option>
                                            <option value="Bangladesh">방글라데시</option>
                                            <option value="Bermuda shorts">버뮤다</option>
                                            <option value="Benin">베냉</option>
                                            <option value="Venezuela">베네수엘라</option>
                                            <option value="Vietnam">베트남</option>
                                            <option value="Belgium">벨기에</option>
                                            <option value="Belarus">벨라루스</option>
                                            <option value="Belize">벨리즈</option>
                                            <option value="Bosnia and Herzegovina">보스니아 헤르체고비나</option>
                                            <option value="Botswana">보츠와나</option>
                                            <option value="Bolivia">볼리비아</option>
                                            <option value="Burundi">부룬디</option>
                                            <option value="Burkina Faso">부르키나파소</option>
                                            <option value="Bouve Island">부베 섬</option>
                                            <option value="butane">부탄</option>
                                            <option value="Northern Mariana Islands">북마리아나 제도</option>
                                            <option value="Bulgaria">불가리아</option>
                                            <option value="Brazil">브라질</option>
                                            <option value="Brunei">브루나이</option>
                                            <option value="Samoa">사모아</option>
                                            <option value="Saudi Arabia">사우디아라비아</option>
                                            <option value="South Georgia South Sandwich Islands">사우스조지아 사우스샌드위치 제도</option>
                                            <option value="San Marino">산마리노</option>
                                            <option value="Sao Tome and Principe">상투메 프린시페</option>
                                            <option value="Saint Pierre and Miquelon">생피에르 미클롱</option>
                                            <option value="Narrative">서사하라</option>
                                            <option value="Senegal">세네갈</option>
                                            <option value="Serbia">세르비아</option>
                                            <option value="Seychelles">세이셸</option>
                                            <option value="Saint Lucia">세인트루시아</option>
                                            <option value="Saint Vincent and the Grenadines">세인트빈센트 그레나딘</option>
                                            <option value="Saint Kitts and Nevis">세인트키츠 네비스</option>
                                            <option value="Saint Helena">세인트헬레나</option>
                                            <option value="Somalia">소말리아</option>
                                            <option value="Solomon Islands">솔로몬 제도</option>
                                            <option value="Sudan">수단</option>
                                            <option value="surname">수리남</option>
                                            <option value="Sri Lanka">스리랑카</option>
                                            <option value="Svalbard Jan Mayen">스발바르 얀마옌</option>
                                            <option value="Swaziland">스와질란드</option>
                                            <option value="Sweden">스웨덴</option>
                                            <option value="Swiss">스위스</option>
                                            <option value="Spain">스페인</option>
                                            <option value="Slovakia">슬로바키아</option>
                                            <option value="Slovenian">슬로베니아</option>
                                            <option value="Syria">시리아</option>
                                            <option value="Sierra Leone">시에라리온</option>
                                            <option value="Singapore">싱가포르</option>
                                            <option value="United Arab Emirates">아랍에미리트</option>
                                            <option value="Aruba">아루바</option>
                                            <option value="Armenia">아르메니아</option>
                                            <option value="Argentina">아르헨티나</option>
                                            <option value="American Samoa">아메리칸사모아</option>
                                            <option value="Iceland">아이슬란드</option>
                                            <option value="Haiti">아이티</option>
                                            <option value="Ireland">아일랜드</option>
                                            <option value="Azerbaijan">아제르바이잔</option>
                                            <option value="Afghanistan">아프가니스탄</option>
                                            <option value="Andorra">안도라</option>
                                            <option value="Albania">알바니아</option>
                                            <option value="Algeria">알제리</option>
                                            <option value="Angola">앙골라</option>
                                            <option value="Antigua Babuda">앤티가 바부다</option>
                                            <option value="Anguilla">앵귈라</option>
                                            <option value="Eritrea">에리트레아</option>
                                            <option value="Estonia">에스토니아</option>
                                            <option value="Ecuador">에콰도르</option>
                                            <option value="Ethiopia">에티오피아</option>
                                            <option value="El Salvador">엘살바도르</option>
                                            <option value="England">영국</option>
                                            <option value="British Virgin Islands">영국령 버진아일랜드</option>
                                            <option value="British Indian Ocean Territory">영국령 인도양 지역</option>
                                            <option value="Yemen">예멘</option>
                                            <option value="Oman">오만</option>
                                            <option value="Australia">오스트레일리아</option>
                                            <option value="Austria">오스트리아</option>
                                            <option value="Honduras">온두라스</option>
                                            <option value="Aland Islands">올란드 제도</option>
                                            <option value="Wallis Puthina">왈리스 퓌튀나</option>
                                            <option value="Jordan">요르단</option>
                                            <option value="Uganda">우간다</option>
                                            <option value="Uruguay">우루과이</option>
                                            <option value="Uzbekistan">우즈베키스탄</option>
                                            <option value="Ukraine">우크라이나</option>
                                            <option value="Iraq">이라크</option>
                                            <option value="Iran">이란</option>
                                            <option value="Israel">이스라엘</option>
                                            <option value="Egypt">이집트</option>
                                            <option value="Italy">이탈리아</option>
                                            <option value="India">인도</option>
                                            <option value="Indonesia">인도네시아</option>
                                            <option value="Japan">일본</option>
                                            <option value="Jamaica">자메이카</option>
                                            <option value="Zambia">잠비아</option>
                                            <option value="Jersey">저지 섬</option>
                                            <option value="Equatorial Guinea">적도 기니</option>
                                            <option value="North Korea">조선민주주의인민공화국</option>
                                            <option value="Georgia">조지아</option>
                                            <option value="Central African Republic">중앙아프리카 공화국</option>
                                            <option value="Republic of China">중화민국</option>
                                            <option value="China">중화인민공화국</option>
                                            <option value="Djibouti">지부티</option>
                                            <option value="Gibraltar">지브롤터</option>
                                            <option value="Zimbabwe">짐바브웨</option>
                                            <option value="Chad">차드</option>
                                            <option value="Czech Republic">체코</option>
                                            <option value="Chile">칠레</option>
                                            <option value="Cameroon">카메룬</option>
                                            <option value="Cape Verde">카보베르데</option>
                                            <option value="Kazakhstan">카자흐스탄</option>
                                            <option value="Qatar">카타르</option>
                                            <option value="Cambodia">캄보디아</option>
                                            <option value="Canada">캐나다</option>
                                            <option value="Kenya">케냐</option>
                                            <option value="Cayman Islands">케이맨 제도</option>
                                            <option value="Comoros">코모로</option>
                                            <option value="Costa Rica">코스타리카</option>
                                            <option value="Cocos Islands">코코스 제도</option>
                                            <option value="Ivory Coast">코트디부아르</option>
                                            <option value="Columbia">콜롬비아</option>
                                            <option value="Republic of the Congo">콩고 공화국</option>
                                            <option value="Democratic Republic of the Congo">콩고 민주 공화국</option>
                                            <option value="Cuba">쿠바</option>
                                            <option value="Kuwait">쿠웨이트</option>
                                            <option value="Cook Islands">쿡 제도</option>
                                            <option value="Croatia">크로아티아</option>
                                            <option value="Christmas island">크리스마스 섬</option>
                                            <option value="Kyrgyzstan">키르기스스탄</option>
                                            <option value="Kiribati">키리바시</option>
                                            <option value="Cyprus">키프로스</option>
                                            <option value="Thailand">태국</option>
                                            <option value="Tajikistan">타지키스탄</option>
                                            <option value="Tanzania">탄자니아</option>
                                            <option value="Turks and Caicos Islands">터크스 케이커스 제도</option>
                                            <option value="Turkey">터키</option>
                                            <option value="Togo">토고</option>
                                            <option value="Tokelau">토켈라우</option>
                                            <option value="Tonga">통가</option>
                                            <option value="Turkmenistan">투르크메니스탄</option>
                                            <option value="Tuvalu">투발루</option>
                                            <option value="Tunisia">튀니지</option>
                                            <option value="Trinidad and Tobago">트리니다드 토바고</option>
                                            <option value="Panama">파나마</option>
                                            <option value="Paraguay">파라과이</option>
                                            <option value="Pakistan">파키스탄</option>
                                            <option value="Papua New Guinea">파푸아 뉴기니</option>
                                            <option value="Palau">팔라우</option>
                                            <option value="Palestine">팔레스타인</option>
                                            <option value="Faroe Islands">페로 제도</option>
                                            <option value="Peru">페루</option>
                                            <option value="Portugal">포르투갈</option>
                                            <option value="Falkland Islands">포클랜드 제도</option>
                                            <option value="Poland">폴란드</option>
                                            <option value="Puerto Rico">푸에르토리코</option>
                                            <option value="France">프랑스</option>
                                            <option value="French Guiana">프랑스령 기아나</option>
                                            <option value="French Southern and Antarctic regions">프랑스령 남부와 남극 지역</option>
                                            <option value="French Polynesia">프랑스령 폴리네시아</option>
                                            <option value="Fiji">피지</option>
                                            <option value="Finland">핀란드</option>
                                            <option value="Philippines">필리핀</option>
                                            <option value="Pitcairn Islands">핏케언 제도</option>
                                            <option value="Heard McDonald Islands">허드 맥도널드 제도</option>
                                            <option value="Hungary">헝가리</option>
                                            <option value="Hong Kong">홍콩</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='half'>
                            <div class="input-set">
                                <div class='label'>이메일</div>
                                <div class="input-wrap">
                                    <input id="email" type="text" v-model="email">
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>패스워드 확인</div>
                                <div class="input-wrap">
                                    <input id="password2" type="password" placeholder="**********" v-model="password2">
                                </div>
                            </div>
                            <div class="input-set birth">
                                <div class='label'>생년월일</div>
                                <div class="select-wrap">
                                    <div class="dropdown">
                                        <select name="year" id="year" v-model="birth_year">
                                            <option v-for='i in 100' :value="1940 + i" :key='i' :selected="1940 + i === 1990">{{1940 + i}}</option>
                                        </select>
                                    </div>
                                    <div class="dropdown">
                                        <select name="month" id="month" v-model="birth_month">
                                            <option v-for='i in 12' :value="i" :key='i'>{{i}}</option>
                                        </select>
                                    </div>
                                    <div class="dropdown">
                                        <select name="date" id="date" v-model="birth_date">
                                            <option v-for='i in 31' :value="i" :key='i'>{{i}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>성별</div>
                                <div class="select-wrap">
                                    <div class="dropdown">
                                        <select name="gender" id="gender"  v-model="gender">
                                            <option value="male">여자</option>
                                            <option value="female">남자</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="input-set">
                            <div id="category" class="label">관심분야</div>
                            <div class="category-wrap">
                                <div class="item" :class='{selected: item.isSelected}' @click='item.isSelected ? item.isSelected = false : (categoryCount < 2 ? item.isSelected = !item.isSelected :"")' :value='i' v-for='(item, i) in categoryList' :key='i'>{{item.value}}</div>
                                <span>*2가지 분야 중복선택 가능합니다.</span>
                            </div>
                        </div>
                        <div class="input-set">
                                <input type="checkbox" name="keep" id="keep-register" v-model="keep_register">
                                <label id="keep-register-label" for="keep-register" style="font-size:15px;">
                                    <span class='checkbox'></span>
                                    <a href="/policy" target="_blank">이용약관</a>과 <a href="/private-policy" target="_blank">개인정보처리방침</a>에 동의합니다.
                                </label>
                            </div>
                        <p v-if="errors.length" style="   font-size: 15px; color: red;">
                          <span >{{ errors[0] }}<br></span>
                      </p>
                        <button @click='completeJoin'>가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
</template>

<script>
export default {
    computed: {
      categoryCount(){
          const val = this.categoryList.filter( x => x.isSelected == true)
          return val.length
      }
    },
  data() {
    return {
        errors: [],
        email: null,
        keep_register: false,
        instagram: null,
        password: null,
        password2: null,
        contact: null,
        country: null,
        gender: null,
        name: null,
        instagram_client_id: null,
        picture_link: null,
        birth_year: null,
        birth_month: null,
        birth_date: null,
        birth: null,
        instagram_account:{},
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
      ]
    };
  },
    async created(){

        console.log("instagram_code");
        console.log(this.$store.getters.instagram_code);

        await this.$store.dispatch('fetchInstagramAccount', this.$store.getters.instagram_code);

        this.instagram_account = this.$store.getters.instagram_account;
        this.instagram = this.instagram_account.user.username;
        this.name = this.instagram_account.user.full_name;
        this.picture_link = this.instagram_account.user.profile_picture;
        this.instagram_client_id = this.$store.getters.instagram_client_id;
        console.log('this.instagram_client_id');
        console.log(this.instagram_client_id);
    },
  methods: {
    async completeJoin() {
      // this.$store.commit("openCompletePopup", "인플루언서");
          this.errors = [];

          document.getElementById('email').style.border='2px solid red';

          if (!this.email) {
            this.errors.push('이메일 주소를 입력해주세요.');
          } else if (!this.validEmail(this.email)) {
            this.errors.push('유효한 이메일 주소를 입력해주세요.');
          }
          else {
              await this.checkEmail();

              if (!this.$store.getters.isValidEmail){
              this.errors.push('중복된 이메일입니다.');
                } else {
              document.getElementById('email').style.border='1px solid #d9dee8';
              }
          }

          if (!this.birth_date || !this.birth_month || !this.birth_year) {
            this.errors.push('생년월일을 입력해주세요.');
          document.getElementById('year').style.border='2px solid red';
          document.getElementById('month').style.border='2px solid red';
          document.getElementById('date').style.border='2px solid red';

          } else {
            this.birth = '' + this.birth_year + "/" + this.birth_month + "/" + this.birth_date

          document.getElementById('year').style.border='1px solid #d9dee8';
          document.getElementById('month').style.border='1px solid #d9dee8';
          document.getElementById('date').style.border='1px solid #d9dee8';
          }

          if (!this.country) {
            this.errors.push('거주 국가를 입력해주세요.');
            document.getElementById('country').style.border='2px solid red';
          } else {
              document.getElementById('country').style.border='1px solid #d9dee8';
          }

          if (!this.name) {
            this.errors.push('성함을 입력해주세요.');
            document.getElementById('name').style.border='2px solid red';
          } else {
              document.getElementById('name').style.border='1px solid #d9dee8';
          }
          if (!this.gender) {
            this.errors.push('성별을 입력해주세요.');
            document.getElementById('gender').style.border='2px solid red';
          } else {
              document.getElementById('gender').style.border='1px solid #d9dee8';
          }
          if (!this.contact) {
            this.errors.push('연락처를 입력해주세요.');
            document.getElementById('contact').style.border='2px solid red';
          } else {
              document.getElementById('contact').style.border='1px solid #d9dee8';
          }

          if (!this.instagram) {
            this.errors.push('인스타그램 아이디를 입력해주세요.');
            document.getElementById('instagram').style.border='2px solid red';
          } else {
              document.getElementById('instagram').style.border='1px solid #d9dee8';
          }

          var categorySelectedList = [];

          this.categoryList.forEach(function(val){
              if (val.isSelected) {
                  categorySelectedList.push(val.value);
              }
          });
          this.category = categorySelectedList.join();

            if (typeof this.category !== 'undefined' && this.category.length > 0) {

            document.getElementById('category').style.border='1px solid #d9dee8';
          } else {
            this.errors.push('카테고리를 선택해주세요.');
            document.getElementById('category').style.border='2px solid red';
          }

          if (!this.password) {
            this.errors.push('비밀번호를 입력해주세요.');
            document.getElementById('password').style.border='2px solid red';
          } else {
              document.getElementById('password').style.border='1px solid #d9dee8';
          }

          if (!this.password2) {
            this.errors.push('일치 확인용 비밀번호를 입력해주세요.');
            document.getElementById('password2').style.border='2px solid red';
          } else {
              document.getElementById('password2').style.border='1px solid #d9dee8';
          }

          if (this.password !== this.password2) {
            this.errors.push('비밀번호를 일치하게 작성해주세요.');
            document.getElementById('password').style.border='2px solid red';
            document.getElementById('password2').style.border='2px solid red';
          }

          if (!this.keep_register) {
            this.errors.push('약관 확인후 동의시 동의 버튼을 눌러주세요.');
            document.getElementById('keep-register-label').style.color='red';
          } else {
              document.getElementById('keep-register-label').style.color='black';
          }


          if (!this.errors.length) {
              this.register();
          }
    },
    register () {
          this.$store.dispatch('registerInfluencer', {
              email: this.email,
              password: this.password,
              instagram: this.instagram,
              country: this.country,
              gender: this.gender,
              contact: this.contact,
              category: this.category,
              birth: this.birth,
              name: this.name,
              instagram_client_id: this.instagram_client_id,
              picture_link: this.picture_link,
              user_type: 'influencer',
          })
        },
    async checkEmail () {
        this.$store.commit('isNormalEmailInit', this.email)
        this.$store.commit('hasEmail', this.email)
      await this.$store.dispatch('checkEmailNoPopup', this.email)
    },
      validEmail: function (email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        },
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 12px;
}

h2 {
  font-size: 22px;
  color: #000000;
  text-align: center;
  line-height: 42px;
  font-weight: 500;
}

.section.first {
  height: 528px;
  background: url("../assets/influencerJoinTop.png") 50% 50% no-repeat;
  background-size: cover;
    margin-top:131px;
}

.section.first .container {
  width: 100%;
  display: table;
}

.section.first .container .cell {
  display: table-cell;
  vertical-align: middle;
}

.section.gray .container {
  padding-top: 59px;
}

.card {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #ffffff;
  padding: 69px 172px 74px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 58px;
}

.card .input-wrap {
  font-size: 0;
  width: 100%;
}

.card .input-wrap > .half {
  display: inline-block;
  width: calc(50% - 18px);
  min-height: 30px;
  vertical-align: top;
  box-sizing: border-box;
}
.card .input-wrap > .half:first-child {
  margin-right: 36px;
}

.cell .title {
  font-size: 57px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 12px;
}
.cell .desc {
  font-size: 22px;
  color: #ffffff;
  text-align: center;
  line-height: 42px;
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
  width: calc((100% - 35px)/6);
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
  font-size: 12px;
  color: #a5adba;
  letter-spacing: 0;
  position: relative;
  top: 8px;
}
.card button {
  width: 382px;
  height: 60px;
  background-image: linear-gradient(-45deg, #123075 0%, #fa2b56 100%);
  border-radius: 5px;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  margin-top: 20px;
}

@media screen and (max-width: 640px) {
  .section.first {
    height: 16.9rem;
  }
  .cell .title {
    font-size: 2rem;
    line-height: 2rem;
  }
  .cell .desc {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  .section.gray .container {
    padding-top: 2.5rem;
  }
  h1 {
    font-size: 2.4rem;
    line-height: 1;
    margin-bottom: 0.7rem;
  }
  h2 {
    font-size: 1.2rem;
    line-height: 1.9rem;
    margin-bottom: 0.8rem;
  }
  .card {
    width: auto;
    padding: 0;
    margin: 0 0 1.8rem;
    background-color: transparent;
    box-shadow: none;
  }
  .card .input-wrap {
    padding: 0 3rem;
    box-sizing: border-box;
  }
  .card .input-wrap > .half {
    width: 100%;
  }
  .input-set .input-wrap {
    padding: 0;
  }
  .category-wrap .item {
    width: calc((100% - 1rem)/3);
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
  .category-wrap .item:nth-child(3n) {
    margin-right: 0;
  }

  .card button {
    width: 20.2rem;
    height: 4rem;
    font-size: 1.2rem;
    margin-top: 0.1rem;
  }
  .category-wrap {
    text-align: right;
  }
}
</style>
