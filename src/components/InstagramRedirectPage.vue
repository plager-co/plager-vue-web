<template>
  <div class="viewer">
  </div>
</template>

<script>
export default {
     components: {},
    computed: {

    },

    data(){
        return {

        }
    },
    created: function(){
         console.log('redirected');

    },
    methods: {


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
  /*background-image: url("../assets/dropdownArrow.svg");*/
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
  /*appearance: none;*/
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
