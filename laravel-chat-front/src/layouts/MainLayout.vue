<template>
  <q-layout :class="!$route.meta.hideDrawer ? 'bg-login-gradient' : '' " view="lHh Lpr lFf">
  <div v-if="$route.meta.hideDrawer">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Laravel Chat
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Usuários Online
        </q-item-label>
      </q-list>
      <UserCard></UserCard>
    </q-drawer>
  </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style scoped>
  .bg-login-gradient {
    background: linear-gradient(57deg, #8f0067, #0019c0, #8f0067);
    background-size: 600% 600%;

    -webkit-animation: loginBackground 30s ease infinite;
    -moz-animation: loginBackground 30s ease infinite;
    animation: loginBackground 30s ease infinite;
  }

  @-webkit-keyframes loginBackground {
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
  }
  @-moz-keyframes loginBackground {
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
  }
  @keyframes loginBackground {
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
  }
</style>
<script>
import UserCard from "components/UserCard";
export default {
  name: 'MainLayout',
  components: { UserCard },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
