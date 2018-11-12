
<template>
    <div class='viewer'>
        <div class="section first gray">
            <div class="container">
                <h2>인플루언서 미리보기</h2>
                <h3>희망하시는 인플루언서를 선택하시면 관리자가 <br class="for-mobile"> 선택된 인플루언서에 대해 자세히 안내해드립니다.<br>
                    (광고비용은 인플루언서의 활동에 따라 매일 달라집니다.)</h3>
                <div class="card everage">
                    전체 평균 영향력지수는 <b>4.52%</b> 입니다.
                </div>
                <div class="checkbox-wrap">
                    <input type="checkbox" name="keep" id="keep">
                    <label for="keep">
                        <span class='checkbox'></span>
                        <b>전체 선택</b>
                    </label>
                </div>
                <div class="influ-list web">
                    <div class="card-wrap">
                        <div class="card influ" v-for='(item, i) in influList' :key='i'>
                        <div class="profile-wrap" :class='{recommend: item.recommend}'>
                            <div class="profile-img"></div>
                        </div>
			<div class="impact-val_1">최근 3개월</div>
                        <div class="impact-val">영향력지수 {{item.impactValue}}%</div>
                        <div class="sns-data">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>팔로워</td>
                                        <td>2k</td>
                                    </tr>
                                    <tr>
                                        <td>게시물 수</td>
                                        <td>300</td>
                                    </tr>
                                    <tr>
                                        <td>좋아요 수</td>
                                        <td>600</td>
                                    </tr>
                                    <tr>
                                        <td>댓글 수</td>
                                        <td>40</td>
                                    </tr>
				    <tr>
                                        <td>동영상 수</td>
                                        <td>40</td>
                                    </tr>
				    <tr>
                                        <td>동영상 재생 수</td>
                                        <td>40</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="price">1회 예상 광고비 150,000,000원</div>
                            <div class="input-wrap">
                                <input type="text"> 개월
                            </div>
                            <button>{{item.isSelected ? "선택 됨": "선택하기"}}</button>
                        </div>
                    </div>
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
                    class='influ-list'
                >
                    <slide v-for='(item, i) in influList' :key='i'>
                    <div class="card influ">
                        <div class="profile-wrap" :class='{recommend: item.recommend}'>
                            <div class="profile-img"></div>
                        </div>
                        <div class="impact-val">최근 3개월</div>
			<div class="impact-val">영향력지수 {{item.impactValue}}%</div>
                        <div class="sns-data">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>팔로워</td>
                                        <td>2k</td>
                                    </tr>
                                    <tr>
                                        <td>게시물 수</td>
                                        <td>300</td>
                                    </tr>
                                    <tr>
                                        <td>좋아요 수</td>
                                        <td>600</td>
                                    </tr>
                                    <tr>
                                        <td>댓글 수</td>
                                        <td>40</td>
                                    </tr>
				     <tr>
                                        <td>동영상 수</td>
                                        <td>40</td>
                                    </tr>
				     <tr>
                                        <td>동영상 재생 수</td>
                                        <td>40,000,000</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="price">1회 예상 광고비 150,000,000원</div>
                            <div class="input-wrap">
                                <input type="text"> 개월
                            </div>
                            <button>{{item.isSelected ? "선택 됨": "선택하기"}}</button>
                        </div>
                    </div>
                    </slide>
                </carousel>
                </div>
                <button class='red' @click='$router.push("/influencer-complete")'>SIM 서비스 요청하기</button>
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
                    impactValue: 4.67,
                    follower: '2k',
                    write: 300,
                    likeEver: 600,
                    replyEver: 40,
                    price: 150000,
                    defaultMonth: 3,
                    recommend: false,
                    isSelected: true
                },
                {
                    img: '/',
                    impactValue: 4.67,
                    follower: '2k',
                    write: 300,
                    likeEver: 600,
                    replyEver: 40,
                    price: 150000,
                    defaultMonth: 3,
                    recommend: true,
                    isSelected: false
                },
                {
                    img: '/',
                    impactValue: 4.67,
                    follower: '2k',
                    write: 300,
                    likeEver: 600,
                    replyEver: 40,
                    price: 150000,
                    defaultMonth: 3,
                    recommend: true,
                    isSelected: true
                },
                {
                    img: '/',
                    impactValue: 4.67,
                    follower: '2k',
                    write: 300,
                    likeEver: 600,
                    replyEver: 40,
                    price: 150000,
                    defaultMonth: 3,
                    recommend: false,
                    isSelected: true
                },
                {
                    img: '/',
                    impactValue: 4.67,
                    follower: '2k',
                    write: 300,
                    likeEver: 600,
                    replyEver: 40,
                    price: 150000,
                    defaultMonth: 3,
                    recommend: false,
                    isSelected: false
                },
                {
                    img: '/',
                    impactValue: 4.67,
                    follower: '2k',
                    write: 300,
                    likeEver: 600,
                    replyEver: 40,
                    price: 150000,
                    defaultMonth: 3,
                    recommend: true,
                    isSelected: true
                },
            ]
        }
    },
    methods: {
        carouselBtnClick(e){
            this.carouselNum = Number(e.currentTarget.getAttribute('value'))
        },
        completeJoin(){
            this.$store.commit('openCompletePopup', '인플루언서 가입이 완료되었습니다.')
        },
        followerClick(){}
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
  width: 100%;
}

.card {/* Rectangle 48: */
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1)
}
.card.everage {
    max-width: 1002px;
    width: 100%;
    font-size: 30px;
    color: #000000;
    letter-spacing: 4.78px;
    text-align: center;
    line-height: 42px;
    margin: auto;
    padding: 52px 0 51px;
    margin-bottom: 84px;
}

.card.everage b {
    background: #00BD7E;
    border-radius: 100px;
    font-size: 30px;
    color: #FFFFFF;
    letter-spacing: 4.78px;
    text-align: center;
    line-height: 42px;
    padding: 9px 24px;
}

.checkbox-wrap {
    text-align: right;
    width: 100%;
    margin-bottom: 36px;
}

label b {
    font-size: 24px;
    color: #092056;
    letter-spacing: 0;
    text-align: center;
    position: relative;
    top: 1px;
    margin-left: 6px;
}

.influ-list {
    width: 100%;
    font-size: 0;
    margin-bottom: 34px;
}

.influ-list.web {
    display: block
}

.influ-list {
    display: none;
}

.influ-list .card.influ {
    display: inline-block;
    width: calc((100% - 80px)/3);
    margin-right: 40px;
    margin-bottom: 24px;
    position: relative;
    padding: 55px 10px 34px;
    box-sizing: border-box;
}

.influ-list .card.influ:nth-child(3n) {
    margin-right: 0;
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
    margin-bottom: 25px;
}

.card.influ .profile-wrap.recommend {
    background: url('../assets/influ-recommend.svg') 50% 50% no-repeat;
    background-size: cover;
}

.card.influ .profile-wrap.recommend:before {
    position: absolute;
    left: 0;
    bottom: calc(100% + 10px);
    content: '플래거 추천';
    font-size: 16px;
    color: #E95350;
    letter-spacing: 0;
    text-align: center;
    width: 100%;
}

.card.influ .impact-val {/* 영향력지수 4.67%: */
    font-size: 28px;
    color: #092056;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    margin-bottom: 15px;
    font-weight: 600;
}
.card.influ .impact-val_1 {/* 최근 3개월: */
    font-size: 25px;
    color: #092056;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    margin-bottom: 15px;
    font-weight: 600;
}

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
.card.influ .price {
    font-size: 22px;
    font-weight: 600;
    color: #242E38;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    margin-bottom: 16px;
}
.input-wrap {
    width: 100%;
    font-weight: 400;
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
    color: #092056;
    border: 1px solid #092056;
    background-color: #ffffff;
    border-radius: 5px;
    font-size: 16px;
    letter-spacing: 0;
    font-weight: 400;
    text-align: center;
    width: 95%;
    background-image: none;
}

.card.influ.selected button {
    /* Bg: *//* Bg: */
    background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
    border: 1px solid linear-gradient(-45deg, #123075 0%, #092056 100%);
    color: #FFFFFF;
}

button.red {
    /* Bg: */
    background: #F91C3D;
    border-radius: 5px;
    /* SIM 서비스 요청하기: */
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    width: 382px;
    height: 60px;
    border: 0;
    margin-bottom: 99px;
}


.card.influ .sns-data {
    width: 100%;
    font-size: 0;
}

.sns-data table tbody tr td {
    word-break: keep-all;
    width: 50%;
    font-weight: 400;
    font-size: 22px;
    color: #000000;
    letter-spacing: 0;
    text-align: right;
}

.sns-data table {
    margin: 0 5%;
    padding-bottom: 20px;
    border-spacing: 13px;
    width: 100%;
}

.sns-data table tbody tr td:first-child {
    text-align: left;
}

@media screen and (max-width: 640px) {

    .section.first .container { width: 100vw; padding-top: 2.3rem; padding-left: 1rem; padding-right: 1rem; box-sizing: border-box;}

    h2 { font-size: 2rem; line-height: 2.4rem; margin-bottom: .7rem;}
    h3 { font-size: 1.2rem; line-height: 1.9rem; margin-bottom: 1.4rem;}
    .card.everage { font-size: 1.2rem; line-height: 1; margin: 0 2.5rem; width: calc(100% - 5rem); letter-spacing: normal; padding: 2.1rem 0 2rem;}
    .card.everage b {font-size: 1.6rem; line-height: 1rem; letter-spacing: .255rem; padding: .4rem 1rem;}
    .influ-list { width: calc(100% - 3rem); margin: auto;}
    .influ-list .card.influ { width: 16rem; margin-right: 0;}

    .influ-list { display: block; }
    .influ-list.web { display: none; }
    /* .influ-list .card.influ:nth-child(3n) { width: calc(50% - .5rem); margin-right: 1rem; padding: 2.9rem 0 1.3rem;}
    .influ-list .card.influ:nth-child(2n) { margin-right: 0;} */

    .checkbox-wrap { padding: 2rem 1.5rem; margin: 0; box-sizing: border-box;}

    .card.influ .profile-wrap { width: 11rem; height: 11rem; padding: .5rem; margin-bottom: .5rem;}
    .card.influ .profile-img {width: 10rem; height: 10rem; }
    .card.influ button {width: 12.6rem; height: 3rem; font-size: 1.2rem; padding: 0;}

    .carousel-btn-wrap {margin-bottom: 3rem;}
    .carousel-btn-wrap .carousel-btn { width: 1rem; height: 1rem; background-color: #BFBFBF; border-radius: 50%; display: inline-block; margin-right: 1rem;}
    .carousel-btn-wrap .carousel-btn.selected { background-color: #FA2B56;}
    .carousel-btn-wrap .carousel-btn:last-child {margin-right: 0;}
    button.red { width: 20.2rem; height: 4rem; font-size: 1.2rem; margin-bottom: 3.8rem;}
    label b { font-size: 1rem;}

    .sns-data table { padding-bottom: 0; border-spacing: 1rem; margin: 0;}
    .sns-data table tbody tr td { font-size: 1.2rem;}

    .card.influ .profile-wrap.recommend:before { font-size: 1rem; bottom: calc(100% + .7rem)}
    .card.influ .impact-val { font-size: 1.4rem; line-height: 2; margin-bottom: .4rem;}

    .card.influ .price { font-size: 1.4rem; line-height: 2; margin-bottom: .4rem;}
    .input-wrap { font-size: 1.4rem; line-height: 2; margin-bottom: .4rem;}


    .influ-list {margin-bottom: 2.2rem; width: calc(100vw - 2rem); margin-left: 0; margin-right: 0;}
    .VueCarousel-wrapper { width: calc(100vw - 2rem) !important; }

}

</style>
