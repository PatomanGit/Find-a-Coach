import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Patrick',
          lastName: 'Sprenger',
          areas: ['frontend'],
          description:
            "Hi I'm Patrick. Nice to meet you!",
          hourlyRate: 30
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};
