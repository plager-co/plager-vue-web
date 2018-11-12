
<template>
    <div class='viewer'>
        <div class="section first gray">
            <div class="container">                
                <h2>SIM 서비스 진행 인플루언서</h2>
                <div class="btn">
                    <button @click='$router.push("/sponsor-result")'>전체 성과보기</button>
                </div>
                <div class="influ-list web">
                    <div class="card-wrap" v-for='(item, i) in influList' :key='i'>
                        <div class="card influ" :class='{selected: item.isSelected}'>
                            <div class="profile-wrap" >
                                <div class="profile-img"></div>
                            </div>
                            <div class="_id">@abcde</div>
                            <div class="term-val">{{item.termValue}}</div>
                            <div class="state-msg"
                                :class="{
                                    green: item.state === '계약대기',
                                    blue: item.state === '계약',
                                    red: item.state === '계약마감'
                                }"
                                >{{item.msg}}</div>
                            <div class="times-count">0/18회</div>
                            <div class="sns-data">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class='bold'>노출</td>
                                            <td>총 8회</td>
                                        </tr>
                                        <tr>
                                            <td class='bold'>도달</td>
                                            <td>총 10회</td>
                                        </tr>
                                        <tr>
                                            <td class='bold'>좋아요</td>
                                            <td>430개</td>
                                        </tr>
                                        <tr>
                                            <td class='bold'>댓글</td>
                                            <td>230개</td>
                                        </tr>
                                        <tr>
                                            <td class='bold'>저장</td>
                                            <td>120개</td>
                                        </tr>
                                        <tr>
                                            <td class='bold'>동영상</td>
                                            <td>300개</td>
                                        </tr>
					 <tr>
                                            <td class='bold'>동영상 재생</td>
                                            <td>100,000,000,000회</td>
                                        </tr>
                                        <tr>
                                            <td class='bold'>광고주계정 인바운드</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td class='bold'>중복팔로워</td>
                                            <td>230명</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="bill" :class='{red: item.isRed}'>
                                    <div class="cell">
                                        <div class="msg" v-if='item.bottomMsg'>{{item.bottomMsg}}</div>
                                        <div class="price">결제금액 <br class="for-mobile"> 300,000,000원</div>
                                    </div>
                                </div>
                                <!-- <div class="price">1회 예상 광고비 {{item.price}}원</div> -->
                            </div>
                        </div>
                        <button class="blue"@click='$router.push("/sponsor-result")'>성과보기</button>
                        <button class="red" @click='$router.push("/sponsor-payment")'>결제하기</button>
                    </div>
                </div>
                <carousel
                    :loop='true'
                    :autoplay='false'
                    :perPage='2'
                    :scrollPerPage='true'
                    :autoplayHoverPause='true'
                    :paginationEnabled='true'
                    :navigationEnabled='false'
                    paginationActiveColor='#FA2B56'
                    paginationColor='#bfbfbf'
                    paginationPadding=6
                    tag='div' 
                    class='influ-list'
                >
                    <slide v-for='(item, i) in influList' :key='i'>
                        <div class="card-wrap">
                            <div class="card influ" :class='{selected: item.isSelected}' >
                                <div class="profile-wrap" >
                                    <div class="profile-img"></div>
                                </div>
                                <div class="_id">@abcde</div>
                                <div class="term-val">{{item.termValue}}</div>
                                <div class="state-msg"
                                    :class="{
                                        green: item.state === '계약대기',
                                        blue: item.state === '계약',
                                        red: item.state === '계약마감'
                                    }"
                                    >{{item.msg}}</div>
                                <div class="times-count">0/18회</div>
                                <div class="sns-data">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td class='bold'>노출</td>
                                                <td>총 8회</td>
                                            </tr>
                                            <tr>
                                                <td class='bold'>도달</td>
                                                <td>총 10회</td>
                                            </tr>
                                            <tr>
                                                <td class='bold'>좋아요</td>
                                                <td>430개</td>
                                            </tr>
                                            <tr>
                                                <td class='bold'>댓글</td>
                                                <td>230개</td>
                                            </tr>
                                            <tr>
                                                <td class='bold'>저장</td>
                                                <td>120개</td>
                                            </tr>
                                            <tr>
                                                <td class='bold'>동영상</td>
                                                <td>300개</td>
                                            </tr>
					       <tr>
                                                <td class='bold'>동영상 재생</td>
                                                <td>100,000,499</td>
                                            </tr>
                                            <tr>
                                                <td class='bold'>광고주계정 인바운드</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td class='bold'>중복팔로워</td>
                                                <td>230명</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="bill" :class='{red: item.isRed}'>
                                        <div class="cell">
                                            <div class="msg" v-if='item.bottomMsg'>{{item.bottomMsg}}</div>
                                            <div class="price">결제금액 <br class="for-mobile"> 3,000,000원</div>
                                        </div>
                                    </div>
                                    <!-- <div class="price">1회 예상 광고비 {{item.price}}원</div> -->
                                </div>
                            </div>
                            <button class="blue" @click='$router.push("/sponsor-result")'>성과보기</button>
                            <button class="red" @click='$router.push("/sponsor-payment")' >결제하기</button>
                        </div>
                    </slide>
                </carousel>
                    
                    <!-- <div class="carousel-btn-wrap">
                        <div class="carousel-btn" 
                            v-for='i in 3' 
                            :value='i * 2'
                            :key='i' 
                            @click='carouselBtnClick'
                            :class='{selected: i * 2 === carouselNum}'
                        ></div>
                    </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            carouselNum: 2,
            influList: [
                {
                    img: '/',
                    isRed: false,
                    termValue: "2018. 03. 03 ~ 2018. 05. 05",
                    bottomMsg: "",
                    follower: '2k',
                    defaultMonth: 3,
                    msg: "3개월 계약대기",
                    state: "계약대기",
                    isSelected: true
                },
                {
                    img: '/',
                    isRed: true,
                    termValue: "2018. 03. 03 ~ 2018. 05. 05",
                    bottomMsg: "지급대기모델료",
                    follower: '2k',
                    defaultMonth: 3,
                    msg: "1개월 계약",
                    state: "계약",
                    isSelected: false
                },
                {
                    img: '/',
                    isRed: false,
                    termValue: "2018. 03. 03 ~ 2018. 05. 05",
                    bottomMsg: "총 3개월 중 1개월 결제완료",
                    follower: '2k',
                    defaultMonth: 3,
                    msg: "3개월 계약마감",
                    state: "계약마감",
                    isSelected: true
                },
                {
                    img: '/',
                    isRed: false,
                    termValue: "2018. 03. 03 ~ 2018. 05. 05",
                    bottomMsg: "",
                    follower: '2k',
                    defaultMonth: 3,
                    msg: "3개월 계약대기",
                    state: "계약대기",
                    isSelected: true
                },
                {
                    img: '/',
                    isRed: true,
                    termValue: "2018. 03. 03 ~ 2018. 05. 05",
                    bottomMsg: "지급대기모델료",
                    follower: '2k',
                    defaultMonth: 3,
                    msg: "1개월 계약",
                    state: "계약",
                    isSelected: false
                },
                {
                    img: '/',
                    isRed: false,
                    termValue: "2018. 03. 03 ~ 2018. 05. 05",
                    bottomMsg: "총 3개월 중 1개월 결제완료",
                    follower: '2k',
                    defaultMonth: 3,
                    msg: "3개월 마감",
                    state: "계약마감",
                    isSelected: true
                },
            ]
        }
    },
    methods: {
        completeJoin(){
            this.$store.commit('openCompletePopup', '인플루언서 가입이 완료되었습니다.')
        },
        followerClick(){},
        carouselBtnClick(e){
            this.carouselNum = Number(e.currentTarget.getAttribute('value'))
        }
    }
};
</script>

<style scoped>


h2 {/* 인플루언서 미리보기: */
    margin: 0 0 26px;
    font-size: 42px;
    color: #000000;
    text-align: center;
}

h3 {/* 희망하시는 인플루언서를 선택하시면 관: */
font-size: 20px;
color: #000000;
text-align: center;
line-height: 42px;
margin: 0 0 63px;
font-weight: 400;
}

.section.first .container {
    padding-top: 77px;
    padding-bottom: 64px;
    width: 100%;
}

.card {/* Rectangle 48: */
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1)
}

.btn {width: 100%; text-align: right;}

.btn button {
    width: 166px; 
    height: 50px;
    white-space: nowrap;
    /* Bg Copy 2: */
    background: #092056;
    border-radius: 30px;
    /* 전체 성과보기: */
    font-weight: Bold;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.26px;
    text-align: center;
    margin-bottom: 31px;
}

.influ-list {
    width: 100%;
    font-size: 0;
}

.influ-list.web {
    display: block
}

.influ-list {
    display: none;
}

.influ-list .card-wrap {
    display: inline-block;
    width: calc((100% - 80px)/3);
    padding-right: 40px;
    padding-bottom: 70px;
    margin-bottom: 0;
}

.influ-list .card-wrap:nth-child(3n) {
    padding-right: 0;
}

.influ-list .card-wrap:nth-child(n+4) {
    padding-top: 70px;
    border-top: 1px solid #979797;
}

.influ-list .card-wrap .card.influ {
    width: 100%;
    margin-right: 40px;
    margin-bottom: 29px;
    position: relative;
    padding: 33px 10px 0;
    box-sizing: border-box;
}


.card.influ .profile-img {
    width: 179px;
    height: 179px;
    background-color: #f5f5f5;
    border-radius: 50%;
}
.card.influ .profile-wrap {
    content: '';
    display: block;
    width: 194px; 
    height: 194px;
    margin: auto;
    padding: 7.5px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 12px;
}

/* .card.influ .profile-wrap.recommend {
    background: url('../assets/influ-recommend.svg') 50% 50% no-repeat;
    background-size: cover;
} */

.card.influ ._id {
    width: 100%;
    font-weight: 400;
    font-size: 22px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 22px;
    margin-bottom: 24px;
}

.card.influ .term-val {/* 2018. 03. 03 ~ 2018. copy 2: */
    font-weight: 400;
    font-size: 22px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 20px;
    padding-bottom: 12px;
}

.card.influ .state-msg {/* 2018. 03. 03 ~ 2018. copy 2: */
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 22px;
    margin-bottom: 29px;
}

.card.influ .times-count {
    /* 0/18회 copy 2: */
    font-weight: Bold;
    font-size: 28px;
    color: #242E38;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    margin-bottom: 15px;
}

.card.influ .state-msg.green{ color: #2EBD41;}
.card.influ .state-msg.blue{ color: #30ACD9;}
.card.influ .state-msg.red{ color: #E95350;}


.card.influ .sns-data {
    width: 100%;
    font-size: 0;
}

.card.influ .sns-data .half {
    display: inline-block;
    width: 50%;
    padding: 7px;
    box-sizing: border-box;
    font-size: 22px;
    color: #000000;
    letter-spacing: 0;
    line-height: 35px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 14px;
}
.card.influ .sns-data .half:first-child {
    text-align: right;
}
.input-wrap {
    width: 100%;
    font-weight: normal;
    font-size: 22px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 35px;
    margin-bottom: 24px;
}

.input-wrap input {
    margin-right: 6px;
    background: #FFFFFF;
    border: 1px solid #DFE3E9;
    border-radius: 4px;
    font-size: 20px;
    color: #002257;
    text-align: center;
    line-height: 22px;
    width: 35px;
    height: 36px;
}

.card.influ button {
    /* Bg: */
    border: 1px solid #092056;
    border-radius: 5px;
    /* 선택 하기: */
    font-size: 16px;
    color: #092056;
    letter-spacing: 0;
    font-weight: 400;
    text-align: center;
    padding: 16px 0;
    width: 270px;
}

.sns-data table tbody tr td {
    word-break: keep-all;
    width: 50%;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    text-align: right;
}

.sns-data table {
    margin: 0 5%;
    padding-bottom: 20px;
    border-spacing: 10px;
    border-bottom: 1px solid #C4C4C4;
}

.sns-data table tbody tr td.bold {
    font-weight: 500;
    text-align: left;
}

.bill {
    width: 100%;
    font-size: 1rem;
    height: 127px;
    display: table;
    width: calc(100% - 50px);
    margin: 0 auto;
}

.bill .cell {
    width: 100%;
    height: 66px;
    display: table-cell;
    vertical-align: middle;
}

.bill .cell .msg {
/* 총 18회 중 8회 결제완료: */
    font-weight: normal;
    font-size: 18px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 15px;
}

.bill .cell .price {
    /* 3,000,000원 copy 2: */
    font-weight: Bold;
    font-size: 25px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 0;
}


.bill.red .cell .msg,
.bill.red .cell .price {
    color: #E95350;
}

button {
    width: 100%;
    height: 60px;
    /* Bg: */
    border-radius: 5px;
    border: none;
    /* 성과 보기: */
    font-weight: Medium;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
}

button.blue {
    background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
    margin-bottom: 13px;
}

button.red {
    background-image: linear-gradient(-225deg, #FA2B56 0%, #F91C3D 100%);
}


@media screen and (max-width: 640px) {
    
    h2 { font-size: 2rem; line-height: 2.4rem; margin-bottom: 2.2rem;}

    .section.first .container { width: 100vw; padding: 2.3rem 0rem 1rem; box-sizing: border-box;}

    .btn button {font-size: 1rem; width: 8.5rem; height: 2.4rem; margin-bottom: 1.2rem; margin-right: 1.5rem;}
    
    .influ-list {margin-bottom: 2.2rem; width: calc(100vw - 2rem); margin-left: auto; margin-right: auto;}
    .influ-list .card-wrap {  width: 15.5rem; padding: 0; margin-bottom: 1.2rem;}
    .influ-list .card-wrap:nth-child(3n){ margin-right: 1rem;}
    .influ-list .card-wrap:nth-child(2n){ margin-right: 0;}
    .influ-list .card-wrap:nth-child(n+4) {border-top: 0; padding-top: 0;}
    .influ-list .card-wrap .card.influ {padding: 3.4rem 0 .9rem; margin-bottom: 1.1rem;}


    .influ-list { display: block; }
    .influ-list.web { display: none; }
    
    .card-wrap.hide {display: none;}
    .card.influ ._id { font-size: 1rem; line-height: 1; margin: 0;}
    .card.influ .profile-wrap { width: 11rem; height: 11rem; padding: .5rem; margin-bottom: 1rem;}
    .card.influ .profile-img {width: 10rem; height: 10rem; margin-bottom: 0;}

    .card.influ .term-val { font-size: 1rem; line-height: 1.2rem; margin-bottom: .3rem; margin-top: .9rem; padding-bottom: 0;}
    .card.influ .state-msg { font-size: 1.4rem; line-height: 1.7rem; margin-bottom: .7rem;}
    .card.influ .times-count { font-size: 1.4rem; line-height: 1.7rem; margin-bottom: .3rem;}

    .sns-data table { padding-bottom: 0; border-spacing: 0.8rem; margin: 0; }
    .sns-data table tbody tr td { font-size: 1.2rem;}

    .bill { width: 100%; margin-top: .9rem;}
    .bill .cell .msg { font-size: 1rem; line-height: 1.2rem; margin-bottom: .3rem;} 
    .bill .cell .price { font-size: 1.4rem; line-height: 1.7rem;}
    .bill {height: 4.9rem;}

    button { height: 3rem; font-size: 1.2rem; }
    button.blue { margin-bottom: .8rem; }


    /* .carousel-btn-wrap {margin-bottom: 3rem;}
    .carousel-btn-wrap .carousel-btn { width: 1rem; height: 1rem; background-color: #BFBFBF; border-radius: 50%; display: inline-block; margin-right: 1rem;}
    .carousel-btn-wrap .carousel-btn.selected { background-color: #FA2B56;}
    .carousel-btn-wrap .carousel-btn:last-child {margin-right: 0;} */

    /* .VueCarousel-slide:nth-child(2n) { padding-right: 1rem; box-sizing: border-box;}
    .VueCarousel-slide:nth-child(2n-1) { padding-left: 1rem; box-sizing: border-box;} */


}


</style>
