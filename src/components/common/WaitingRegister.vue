<template>
    <div class="dim" v-if='$store.state.isCompletePopup'>
        <div class="cell" @click.self='closeSelf'>
            <div class="complete-popup">
                <div class="close-wrap">
                    <img src="../../assets/cross.svg" alt="" @click='closeSelf'>
                </div>
                <div class="complete-wrap">
                    <img src="../../assets/complete.svg" alt="">
                </div>
                <h1>{{$store.state.completeMsg || '광고주'}} 등록 <br class="for-mobile">대기중입니다.</h1>
                <button class="next" @click='closeSelf'>확 인</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeSelf: function(){
            this.$store.commit('closeCompletePopup')
            this.$router.push('/login')
        }
    }

};
</script>

<style scoped>
h1 {
  margin-bottom: 64px;
}

p {
  font-size: 16px;
  color: #000000;
  text-align: center;
  line-height: 27px;
  margin-bottom: 49px;
}

.dim {
  position: fixed;
  display: table;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
}

.dim .cell {
  display: table-cell;
  vertical-align: middle;
}

.complete-popup {
  margin: auto;
  width: 965px;
  background: #ffffff;
  border-radius: 5px;
  padding: 60px 50px 44px;
}

.close-wrap {
    width: 100%;
    text-align: right;
}
.close-wrap img {
    width: 33px;
    height: 33px;
    margin-bottom: 53px;
}

.complete-wrap {
    width: 100%;
    margin-bottom: 79px;
}

.complete-wrap img {
    width: 131px;
    height: 125px;
}

button {
  width: 325px;
  height: 67px;
  font-size: 24px;
  color: #092056;
  letter-spacing: 0;
  text-align: center;
}

button.next {
  background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
  border-radius: 5px;
  color: #ffffff;
}

@media screen and (max-width: 640px) {
    .complete-popup { width: calc(100% - 3rem); box-sizing: border-box; padding: 1.7rem 1.4rem 6rem; margin-top: 4.2rem;}
    .close-wrap img { width: 1.5rem; height: 1.5rem; }
    .complete-wrap img { width: 5.2rem; height: 5rem; }
    .complete-wrap { margin-bottom: 2.7rem;}
    h1 { font-size: 2.4rem; line-height: 3.7rem; margin-bottom: 2.3rem;}
    button { width: 20.2rem; height: 4rem; font-size: 1.2rem;}
    .dim .cell { display: block;}
}
</style>
