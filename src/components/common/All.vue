<template>
  <div class='viewer'>
      <div class="section empty gray">
          <div class="container">
              <ul class='all'>
                  <li v-for='(val, i) in router' :key='i' @click='$router.push(val)'>
                      {{val}}
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data: function() {
    return {
        router: [
            "/",
            "/login",

            '/mypage',
            '/sponsor-filter',
            '/sponsor-payment',
            '/sponsor-payment2',
            '/sponsor-payment3',
            '/sponsor-payment4',
            '/sponsor-sim',
            '/sponsor-list',
            '/sponsor-result',

            '/influencer-complete',
            '/influencer-join',
            '/influencer-list',
            '/influencer-score',
            '/influencer-my-score',
            '/influencer-my-page',

            '/no-ad',
            '/sponsor-no-ad',
            '/private-policy',
            '/404',
        ]
    }
}
}
</script>

<style>
a {
    text-decoration: unset;
    color: unset;
}
.container ul.all {
    padding: 0;
}

.container ul.all li {
    width: 100%;
    background-color: #ffffff;
    list-style: none;
    padding: 20px;
    text-align: left;
    font-size: 20px;
    margin-bottom: 2px;
}
</style>
