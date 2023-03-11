<template>
  <van-sticky :offset-top="0"> <van-nav-bar title="消息" /></van-sticky>
  <div style="margin-bottom: 60px">
    <van-pull-refresh style="height: 100%" v-model="loading" @refresh="onRefresh">
      <van-divider />
      <van-tag type="primary" size="large" v-if="msgs.length === 0">下拉刷新</van-tag>
      <van-list>
        <van-cell v-for="msg in msgs" :key="msg.id" :title="msg.id" :label="msg.text">
          <template #title>
            <span style="text-align: right">{{ msg.text }}</span>
          </template>
          <template #value>
            <van-image
              width="50"
              height="50"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            />
          </template>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { showToast } from "vant";
import "vant/es/toast/style";
export default {
  name: "MsgView",
  data() {
    return {
      count: 0,
      loading: false,
      msgs: [],
    };
  },
  methods: {
    onRefresh() {
      this.loading = true;
      setTimeout(() => {
        this.count++;
        this.msgs.push({ id: this.count, text: "TEXT" });
        showToast("刷新成功");
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
