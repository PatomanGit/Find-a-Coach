<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const saveData = (data) => {
      store.dispatch('coaches/registerCoach', data);
      router.replace('/coaches');
    };

    return {
      saveData,
    };
  },
};
</script>
