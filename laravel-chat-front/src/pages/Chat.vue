<template>
  <q-page class="flex flex-center">
    <div class="container-fluid">
      <div class="q-pa-md row justify-center fill-width">
        <div class="col-12">
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="[]"
            sent
            size="6"
            bg-color="amber-7"
          />
          <div v-for="message in messages" :key="message.id" >
          <q-chat-message
            :name="message.username"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
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
      console.log('roooooota');
      console.log(this.$route);
      channel.bind('App\\Events\\SendMessage', function(res) {
        self.messages.push(res.data);
      });

    },
    data () {
      return {
        editor: 'Digite a sua mensagem <b>AQUI</b>',
        messages: [],
      }
    },
    methods:{
      async sendMessage(){
          await Axios.post('http://127.0.0.1:8080/api/send-message', {
            message: this.editor,
            id: Date.now(),
            username: 'Hugão',
            user_id: Date.now(),
          }).then((res) => {

          });
      }
    }
  };
</script>
