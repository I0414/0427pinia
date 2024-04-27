import axios from 'axios';
import { defineStore } from 'pinia';
import statusStore from './statusStore';

const status = statusStore();

export default defineStore('porductStore', {
  state: () => ({
    cart: {},
  }),
  actions: {
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(url, { data: cart }).then((response) => {
        // this.$httpMessageState(response, '加入購物車');
        console.log(response);
        status.loadingItem = '';
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      status.isLoading = true;
      axios.get(url).then((response) => {
        this.cart = response.data.data;
        console.log(response);
        status.isLoading = false;
      });
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      status.isLoading = true;
      status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      axios.put(url, { data: cart }).then((response) => {
        console.log(response);
        this.getCart();
        status.loadingItem = '';
        status.isLoading = false;
      });
    },
    removeCartItem(id) {
      status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      status.isLoading = true;
      axios.delete(url).then((response) => {
        console.log(response);
        // this.$httpMessageState(response, '移除購物車品項');
        status.loadingItem = '';
        this.getCart();
        status.isLoading = false;
      });
    },
  },
});
