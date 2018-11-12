
<template>
    <div class='viewer'>
        <div class="section first gray">
            <div class="container">                
                <h2>SIM 서비스 진행 광고주</h2>
                <div class="sponsor-list web">
                    <div class='card-wrap' v-for='(item, i) in influList' :key='i'>
                            <div class="card sponsor" :class='{selected: item.isSelected}' >
                                <div class="profile-wrap" >
                                    <div class="profile-img"></div>
                                </div>
                                <div class="term-val">@abcde</div>
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
                                                <td>700개</td>
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
                                                <td class='bold'>동영상 수</td>
                                                <td>300개</td>
                                            </tr>
					    <tr>
                                                <td class='bold'>동영상 재생</td>
                                                <td>3499재생</td>
                                            </tr>
                                            <tr>
                                                <td class='bold'>광고주계정 인바운드</td>
                                                <td>0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="bill">
                                        <div class="cell">
                                            <div class="msg">총 12,000,000원 모델료 중</div>
                                            <div class="price">지급완료 6회 <br class='for-mobile'> 6,000,000원</div>
                                            <div class="price">대기 6회 <br class='for-mobile'> 6,000,000원</div>
                                            <div class="tax">3.3% 소득세 제외</div>
                                        </div>
                                    </div>
                                    <!-- <div class="price">1회 예상 광고비 {{item.price}}원</div> -->
                                </div>
                            </div>
                            <!-- <button class="blue">성과 보기</button> -->
                    </div>
                </div>
                    
                <carousel

                    :loop='false'
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
                    class='sponsor-list'
                >
                    <slide v-for='(item, i) in influList' :key='i'>
                        <div class="card-wrap">
                            <div class="card sponsor" :class='{selected: item.isSelected}' >
                                <div class="profile-wrap" >
                                    <div class="profile-img"></div>
                                </div>
                                <div class="term-val">@abcde</div>
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
                                                <td>700개</td>
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
                                                <td class='bold'>동영상 수</td>
                                                <td>300개</td>
                                            </tr>
					    <tr>
                                                <td class='bold'>동영상 재생</td>
                                                <td>3499</td>
                                            </tr>
                                            <tr>
                                                <td class='bold'>광고주계정 인바운드</td>
                                                <td>0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="bill">
                                        <div class="cell">
                                            <div class="msg">총 12,000,000원 모델료 중</div>
                                            <div class="price">지급완료 6회 <br class='for-mobile'> 6,000,000원</div>
                                            <div class="price">대기 6회 <br class='for-mobile'> 6,000,000원</div>
                                            <div class="tax">3.3% 소득세 제외</div>
                                        </div>
                                    </div>
                                    <!-- <div class="price">1회 예상 광고비 {{item.price}}원</div> -->
                                </div>
                            </div>
                            <!-- <button class="blue">성과 보기</button> -->
                        </div>
                    </slide>
                </carousel>
                <div class="card full">
                    <p>2018년 현재 총 지급 모델료 : <br class="for-mobile"> 4,000,000원 - 136,000원(3.3%) =  <b>3,868,000원</b></p>
                    <p>지급대기 모델료 : <br class="for-mobile">1,000,000원 - 33,000원(3.3%) =  <b>67,000원</b></p>
                </div>
		<button class="blue" @click='$router.push("/influencer-score")'>내 영향력 확인</button>
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
                    follower: '2k',
                    defaultMonth: 3,
                    msg: "1개월 계약",
                    state: "계약",
                    isSelected: true
                },
                {
                    img: '/',
                    isRed: false,
                    termValue: "2018. 03. 03 ~ 2018. 05. 05",
                    follower: '2k',
                    defaultMonth: 3,
                    msg: "12개월 계약마감",
                    state: "계약마감",
                    isSelected: true
                }
            ]
        }
    },
    methods: {
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
    margin-bottom: 72px;
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
    box-sizing: border-box;
}

.card.full {
    width: 100%;
    padding: 25px 44px;/* 2018년 현재 총 지급 모델료 :: */
    font-family: AppleSDGothicNeo-Light;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    line-height: 45px;
    text-align: center;
}

.card.full p {
    padding: 0;
    margin: 0;
}

.card.full b.green {
    color: #00BD7E;
    font-weight: 600;
}
.card.full b.red {
    color: #D0021B;
    font-weight: 600;
}

.btn {width: 100%; text-align: right;}

.btn button {
    width: 166px; 
    height: 50px;
    /* Bg Copy 2: */
    background: #092056;
    border-radius: 30px;
    /* 전체 성과보기: */
    font-family: AppleSDGothicNeo-Bold;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.26px;
    text-align: center;
}

.sponsor-list {
    width: 100%;
    font-size: 0;
    margin-bottom: 8px;
}

.sponsor-list.web {
    display: block
}

.sponsor-list {
    display: none;
}


.sponsor-list .card-wrap {
    display: inline-block;
    width: calc((100% - 80px)/3);
    padding-right: 40px;
    margin-bottom: 0;
}

.sponsor-list .card-wrap:nth-child(3n) {
    padding-right: 0;
}

.sponsor-list .card-wrap:nth-child(n+4) {
    padding-top: 70px;
    border-top: 1px solid #979797;
}

.sponsor-list .card-wrap .card.sponsor {
    width: 100%;
    margin-right: 40px;
    margin-bottom: 29px;
    position: relative;
    padding: 43px 10px 26px;
    box-sizing: border-box;
}


.card-wrap:nth-child(n+3) {
}



.card.sponsor .profile-img {
    width: 179px;
    height: 179px;
    background-color: #f5f5f5;
    border-radius: 50%;
    margin-bottom: 33px;
}
.card.sponsor .profile-wrap {
    content: '';
    display: block;
    width: 194px; 
    height: 194px;
    margin: auto;
    padding: 7.5px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 17px;
}

.card.sponsor .term-val {/* 2018. 03. 03 ~ 2018. copy 2: */
    font-family: AppleSDGothicNeo-Regular;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 22px;
    padding-bottom: 17px;
}
.card.sponsor .term-val:nth-child(3) { padding-bottom: 12px;}

.card.sponsor .state-msg {/* 2018. 03. 03 ~ 2018. copy 2: */
    font-family: AppleSDGothicNeo-semibold;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 22px;
    margin-bottom: 29px;
}

.card.sponsor .times-count {
    /* 0/18회 copy 2: */
    font-family: AppleSDGothicNeo-Bold;
    font-size: 28px;
    color: #242E38;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    margin-bottom: 15px;
}

.card.sponsor .state-msg.green{ color: #2EBD41;}
.card.sponsor .state-msg.blue{ color: #30ACD9;}
.card.sponsor .state-msg.red{ color: #E95350;}


.card.sponsor .sns-data {
    width: 100%;
    font-size: 0;
}

.card.sponsor .sns-data .half {
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
.card.sponsor .sns-data .half:first-child {
    text-align: right;
}
.input-wrap {
    width: 100%;
    font-family: AppleSDGothicNeo-Regular;
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

.card.sponsor button {
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

.sns-data table {
}

.sns-data table tbody tr td {
    word-break: keep-all;
    width: 50%;
    font-family: AppleSDGothicNeo-Regular;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    text-align: right;
}

.sns-data table {
    margin: 0 5%;
    padding-bottom: 10px;
    margin-bottom: 26px;
    border-bottom: 1px solid #C4C4C4;
}

.sns-data table tbody tr td.bold {
    font-family: AppleSDGothicNeo-SemiBold;
    text-align: left;
}
.sns-data table {
    border-spacing: 8px;
}

.bill {
    width: 100%;
    font-size: 1rem;
    height: 66px;
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
    font-family: AppleSDGothicNeo-Regular;
    font-size: 18px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 15px;
}

.bill .cell .price {
    /* 3,000,000원 copy 2: */
    white-space: nowrap;
    font-family: AppleSDGothicNeo-Bold;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    text-align: right;
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
    /* 내 영향력 확인 : */
    font-family: AppleSDGothicNeo-Medium;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
}

button.blue {
    background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
}

/* button.red {
    background-image: linear-gradient(-225deg, #FA2B56 0%, #F91C3D 100%);
} */

.tax {
    /* 3.3% 소득세 제외 copy: */
    font-family: AppleSDGothicNeo-Regular;
    font-size: 14px;
    color: #6E6E6E;
    letter-spacing: 0;
    text-align: center;
}



@media screen and (max-width: 640px) {
    
    h2 { font-size: 2rem; line-height: 2.4rem; margin-bottom: 3.2rem;}

    .section.first .container { width: 100vw; padding: 3.4rem 1rem 3.3rem; box-sizing: border-box;}

    .btn button {font-size: 1rem; width: 8.1rem; height: 2.4rem; margin-bottom: 1.2rem;}

    .sponsor-list .card-wrap { width: calc(50% - .5rem); width: 15rem; padding: 0 0 1.2rem 0; }
    .sponsor-list .card-wrap:nth-child(3n){ margin-right: 1rem;}
    .sponsor-list .card-wrap:nth-child(2n){ margin-right: 0;}
    .sponsor-list .card-wrap:nth-child(n+4) {border-top: 0; padding-top: 0;}

    .sponsor-list .card-wrap .card.sponsor {padding: 1.7rem 0 .9rem; margin-bottom: 1.1rem;}
    
    .card-wrap.hide {display: none;}
    .card.sponsor .profile-wrap ._id { font-size: 1rem; line-height: 1; margin: 0;}
    .card.sponsor .profile-wrap { width: 11rem; height: 11rem; padding: .5rem; margin-bottom: 1.2rem;}
    .card.sponsor .profile-img {width: 10rem; height: 10rem; margin-bottom: 0;}

    .card.sponsor .term-val { font-size: 1rem; line-height: 1.2rem; margin-bottom: .3rem; padding-bottom: 0;}
    .card.sponsor .state-msg { font-size: 1.4rem; line-height: 1.7rem; margin-bottom: .7rem;}
    .card.sponsor .times-count { font-size: 1.4rem; line-height: 1.7rem; margin-bottom: 1.3rem; margin-bottom: 0;}

    .sns-data table { padding-bottom: 0; border-spacing: 0.5rem; margin: 0 0 .9rem; }
    .sns-data table tbody tr td { font-size: 1.2rem;}

    .bill .cell .msg { font-size: 1rem; line-height: 1.2rem; margin-bottom: .9rem; white-space: nowrap } 
    .bill .cell .price { font-size: 1.4rem; line-height: 1.7rem; text-align: center; margin-bottom: .3rem;}
    .bill {height: 4.9rem;}

    button { height: 3rem; font-size: 1.2rem; }
    button.blue { margin-bottom: 0; }

    .carousel-btn-wrap {margin-bottom: 3rem;}
    .carousel-btn-wrap .carousel-btn { width: 1rem; height: 1rem; background-color: #BFBFBF; border-radius: 50%; display: inline-block; margin-right: 1rem;}
    .carousel-btn-wrap .carousel-btn.selected { background-color: #FA2B56;}
    .carousel-btn-wrap .carousel-btn:last-child {margin-right: 0;}

    .tax {font-size: .8rem; margin-top: .6rem;}

    .card.full { padding: 1.9rem 2rem; font-size: 1.2rem; line-height: 1.5rem;}
    .card.full p:first-child {margin-bottom: 1.5rem;}

    .sponsor-list {margin-bottom: 2.2rem; width: calc(100vw - 2rem); margin-left: 0; margin-right: 0;}

    .sponsor-list { display: block; }
    .sponsor-list.web { display: none; }

    .VueCarousel-wrapper { width: calc(100vw - 2rem) !important; }
}


</style>
