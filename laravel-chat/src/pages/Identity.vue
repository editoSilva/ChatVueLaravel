<template>
  <q-page class="flex flex-center">
    <div class="container-fluid">
      <div class="q-pa-md row justify-center fill-width">
        <div class="col-12">
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['hey, how are you?']"
            stamp="7 minutes ago"
            sent
            size="6"
            bg-color="amber-7"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['doing fine, how r you?']"
            stamp="4 minutes ago"
            size="6"
            text-color="white"
            bg-color="primary"
          />
        </div>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-card>
          <q-editor v-model="editor" min-height="5rem" />
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
  export default {
    name: 'Identity',
    data () {
      return {
        editor: 'What you see is <b>what</b> you get.'
      }
    }
  };
</script>
