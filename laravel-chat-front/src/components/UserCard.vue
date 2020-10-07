<template>
  <q-item>
    <q-item-section avatar>
      <q-avatar>
        <img src="https://source.unsplash.com/400x400/?profile">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>Usuário</q-item-label>
      <q-item-label caption>
        Online
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
  export default {
    name: 'UserCard',
    mounted() {

    },
    props: {
    },
  };
</script>
