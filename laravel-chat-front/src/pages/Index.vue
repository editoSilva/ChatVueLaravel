<template>
  <q-page class="flex flex-center">
    <div class="row">
       <div class="col-12">
        <LoginCard>
        </LoginCard>
      </div>
    </div>
  </q-page>
</template>

<script>
import LoginCard from "components/LoginCard";
export default {
  name: 'PageIndex',
  components: {LoginCard},
};
</script>
