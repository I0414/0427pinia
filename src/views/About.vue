<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ name }}, {{ getUserName }}, {{ wallet }}
    <br>
    <button type="button" @click="updateName">click</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import userStore from '@/stores/user';

export default {
  computed: {
    ...mapState(userStore, ['name', 'getUserName', 'wallet']),
  },
  methods: {
    ...mapActions(userStore, ['updateName']),
  },
};
</script>
