<template>
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
                                    <input type="text" placeholder='@인스타그램 아이디'>
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>이름</div>
                                <div class="input-wrap">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>연락처</div>
                                <div class="input-wrap">
                                    <input type="text">
                                </div>
                            </div>
                        </div>
                        <div class='half'>
                            <div class="input-set birth">
                                <div class='label'>생년월일</div>
                                <div class="select-wrap">
                                    <div class="dropdown">
                                        <select name="year" id="">
                                            <option v-for='i in 100' :value="1940 + i" :key='i' :selected="1940 + i === 1990">{{1940 + i}}</option>
                                        </select>
                                    </div>
                                    <div class="dropdown">
                                        <select name="month" id="">
                                            <option v-for='i in 12' :value="i" :key='i'>{{i}}</option>
                                        </select>
                                    </div>
                                    <div class="dropdown">
                                        <select name="date" id="">
                                            <option v-for='i in 31' :value="i" :key='i'>{{i}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>성별</div>
                                <div class="select-wrap">
                                    <div class="dropdown">
                                        <select name="gender" id="">
                                            <option value="male">여자</option>
                                            <option value="female">남자</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="input-set">
                                <div class='label'>거주국가</div>
                                <div class="select-wrap">
                                    <div class="dropdown">
                                        <select name="contry" id="">
                                            <option value="KR">가나</option>
                                            <option value="JP">가봉</option>
					    <option value="US">가이아나</option>
					    <option value="CH">감비아</option>
					    <option value="UK">프랑스</option>
					    <option value="DE">과테말라</option>
					    <option value="FR">미국(괌)</option>
					    <option value="DK">그레나다</option>
					    <option value="jp">그루지야</option>
					    <option value="jp">그리스</option>
					    <option value="jp">덴마크(그린란드)</option>
					    <option value="jp">기니비소</option>
					    <option value="jp">기니</option>
					    <option value="jp">나미비아</option>
					    <option value="jp">나이지리아</option>
					    <option value="jp">남아프리카공화국</option>
					    <option value="jp">네덜란드</option>
					    <option value="jp">네덜란드(네덜란드령앤틸리스)</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
					    <option value="jp">일본</option>
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
                        <button @click='completeJoin'>가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
  methods: {
    completeJoin() {
      this.$store.commit("openCompletePopup", "인플루언서");
    }
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
