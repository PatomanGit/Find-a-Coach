<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink" v-if="!showContactButton"
            >Contact</base-button
          >
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  props: ['id'],
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const selectedCoach = ref(null);

    selectedCoach.value = store.getters['coaches/coaches'].find(
      (coach) => coach.id === props.id
    );

    const fullName = computed(() => {
      return selectedCoach.value.firstName + ' ' + selectedCoach.value.lastName;
    });
    const areas = computed(() => {
      return selectedCoach.value.areas;
    });
    const rate = computed(() => {
      return selectedCoach.value.hourlyRate;
    });
    const description = computed(() => {
      return selectedCoach.value.description;
    });

    const contactLink = computed(() => {
      return '/coaches/' + props.id + '/contact';
    });

    const showContactButton = computed(() => {
      return route.path === '/coaches/' + props.id + '/contact';
    });

    return {
      selectedCoach,
      fullName,
      areas,
      rate,
      description,
      contactLink,
      showContactButton,
    };
  },
};
</script>
