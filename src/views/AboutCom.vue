<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ user.name }}, {{ user.getUserName }}, {{ user.wallet }}
    <br>
    <h5>storeToRefs(param)</h5>
    {{ name }}, {{ getUserName }}, {{ wallet }}
    <button type="button" @click="updateName">click</button>
    <button type="button" @click="updateData">updateData</button>
    <button type="button" @click="reset">reset</button>
  </div>
</template>

<script>
// import { mapActions, mapState } from 'pinia';
import userStore from '@/stores/user';
import { storeToRefs } from 'pinia';

// export default {
//   computed: {
//     ...mapState(userStore, ['name', 'getUserName', 'wallet']),
//   },
//   methods: {
//     ...mapActions(userStore, ['updateName']),
//   },
// };
export default {
  setup() {
    const user = userStore();
    // reactive 1
    // user.name = '漂亮阿姨';

    const { name, wallet, getUserName } = storeToRefs(user);
    // ref 2
    // name.value = '漂亮阿姨';
    console.log(name);
    const { updateName } = user;
    // action 3

    function updateData() {
      // $patch 4
      user.$patch({
        name: '漂亮阿姨',
        wallet: 1000,
      });
    }
    function reset() {
      user.$reset();
    }

    return {
      user, name, wallet, getUserName, updateName, updateData, reset,
    };
  },
};
</script>
