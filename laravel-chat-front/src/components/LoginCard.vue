<template>
  <q-card class="login-card custom-padding">
    <q-card-section>
      <div class="text-center">
        <q-icon class="mb-0 pb-0" name="thumb_up" style="color: purple; font-size: 4.4em;" />
        <h6 class="mb-0 mt-0">Seja muito bem-vindo ao</h6>
        <h5 class="mt-0">Laravel Chat</h5>
      </div>
      <label>Digite seu nome para começar a conversar</label>
      <q-input outlined v-model="username" label="Insira o seu nome aqui!" />
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="accent"
        size="10px"
        skip-hijack
      />
      <div class="row justify-center">
        <q-btn @click="login" class="q-mt-md" color="primary" icon-right="send" label="Acessar" />
      </div>
    </q-card-section>
  </q-card>
</template>
<style scoped>
  .mt-0{
    margin-top:0px!important;
  }
  .mb-0{
    margin-bottom:0px!important;
  }
  .custom-padding{
    padding: 0% 10% 10% 10%;
  }
  @media screen and (max-width: 560px) {
    .login-card{
      width:80vw;
    }
  }
  @media screen and (min-width: 560px) {
    .login-card{
      width:30vw;
    }
  }


</style>
<script>
  export default {
    name: 'LoginCard',
    props: {
    },
    mounted() {
      this.setRandomPicture();
    },
    methods:{
      login(){
        const bar = this.$refs.bar
        bar.start()
        this.timer = setTimeout(() => {
          if (this.$refs.bar) {
            this.$refs.bar.stop()
          }
        }, Math.random() * 3000 + 1000)
      },
      setRandomPicture(){
        let randomNum = Math.floor(Math.random() * 10);
        this.picture = `https://randomuser.me/api/portraits/men/${randomNum}.jpg`
      }
    },
    data () {
      return {
        username: '',
        user_id: Date.now(),
        picture: ''
      }
    }
  };
</script>
