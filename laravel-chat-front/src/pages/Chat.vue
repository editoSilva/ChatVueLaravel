<template>
  <q-page class="flex flex-center">
    <div class="container-fluid">
      <div class="q-pa-md row justify-center fill-width">
        <div class="col-12">

          <div v-for="message in messages" :key="message.id" >
          <q-chat-message
            name="Eu"
            v-if="message.user_id == user_id"
            :avatar="message.picture"
            :text="[message.message]"
            sent
            size="10"
            bg-color="amber-7"
          />

          <q-chat-message
            v-if="message.user_id != user_id"
            :name="message.username"
            :avatar="message.picture"
            :text="[message.message]"
            size="10"
            text-color="white"
            bg-color="primary"
          />
          </div>
        </div>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-card>
          <q-editor v-model="editor" min-height="5rem" />
          <q-btn @click="sendMessage" class="full-width" icon-right="send" color="primary" label="Enviar mensagem"></q-btn>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.fill-width{
  width:70vw;
}
</style>
<script>
  import Axios from 'axios';


  export default {
    name: 'Identity',
    mounted() {
      let pusher = new Pusher('2237746a80eba78b502c',{
        cluster: 'us2'
      });

      let channel = pusher.subscribe('chat');
      let presenceChannel = pusher.subscribe('presence-onlineUsers');

      let self = this;
      channel.bind('App\\Events\\SendMessage', function(res) {
        self.messages.push(res.data);
        res.data.filter(function(e){
          console.log(e);
        })
      });

    },
    data () {
      return {
        editor: 'Digite a sua mensagem <b>AQUI</b>',
        messages: [],
        yourMessages: [],
        username: this.$route.params.name,
        user_id: this.$route.params.user_id,
        picture: this.$route.params.picture,
      }
    },
    methods:{
      async sendMessage(){
          await Axios.post('http://127.0.0.1:8080/api/send-message', {
            message: this.editor,
            id: Date.now(),
            username: this.username,
            user_id: this.user_id,
            picture: this.picture,
          }).then((res) => { });
      }
    }
  };
</script>
