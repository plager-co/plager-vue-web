<template>
  <div class="viewer">
      <div class="section start gray">
          <div class="container">
            <div class="card">
                <div class="count-wrap">
                    <div class="col">
                        <button class="circle" disabled>
                            12
                        </button>
                        <div class="count-name">서비스중</div>
                    </div>
                    <div class="col">
                        <button class="circle" disabled>
                            3
                        </button>
                        <div class="count-name">계약중</div>
                    </div>
                    <div class="col">
                        <button class="circle" disabled>
                            15
                        </button>
                        <div class="count-name">서비스완료</div>
                    </div>
                </div>
            </div>
            <h1>마이페이지</h1> 
	    <h3>상세 정보가 정확하게 기입되어야 원활한 서비스를 받으실 수 있습니다.</h3>
            <div class="card user">
                <div class="profile">
                    <div class="profile-img"></div>
                    <div class="edit">프로필 사진 수정</div>
                </div>
                <div class="cols">
                    <div class="half">
                        <div class="input-set">
                            <div class='label'>*법인(개인)사업자명</div>
                            <div class="input-wrap">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*사업자번호</div>
                            <div class="input-wrap">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*사업종목</div>
                            <div class="input-wrap">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*담당자명</div>
                            <div class="input-wrap">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*세금계산서 발행 이메일</div>
                            <div class="input-wrap">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*담당자 연락처</div>
                            <div class="input-wrap">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>자사 홈페이지 URL</div>
                            <div class="input-wrap">
                                <input type="text">
                            </div>
                        </div>
                    </div>
                    <div class="half">
                        <div class="input-set">
                            <div class='label'>이메일</div>
                            <div class="input-wrap">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*비밀번호</div>
                            <div class="input-wrap">
                                <input type="password">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>연락처</div>
                            <div class="input-wrap">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>*사업자등록증</div>
                            <div class="input-wrap btn">
                                <input type="text">
                                <button></button>
                            </div>
                        </div>
                        <div class="input-set">
                            <div class='label'>SNS 계정 ID</div>
                            <div class="input-wrap sns instagram" >
                                <input type="text" placeholder='인스타그램 계정'>
                            </div>
                            <div class="input-wrap sns facebook" >
                                <input type="text" placeholder='페이스북 계정'>
                            </div>
                            <div class="input-wrap sns etc" >
                                <input type="text" placeholder='기타 sns 계정'>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="edit-button" @click='completeJoin' style="margin-left: 30px; margin-right: 30px;">입력확인</button>
		<button class="delete-button" style="padding-left: 6px; margin-top: 30px;">탈퇴</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

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
        position: absolute;
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
