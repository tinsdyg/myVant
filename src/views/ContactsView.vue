<template>
  <van-sticky :offset-top="0">
    <van-nav-bar title="联系人" border>
      <template #right>
        <van-icon name="plus" size="18" />
      </template>
    </van-nav-bar>
  </van-sticky>
  <van-search></van-search>

  <van-tabs animated>
    <van-tab title="好友">
      <van-pull-refresh
        style="margin-top: 10px; margin-bottom: 60px"
        v-model="loading"
        @refresh="onRefresh"
      >
        <van-cell v-for="item in list" :key="item">
          <template #title>
            <span style="text-align: right">
              {{ item }}
            </span>
          </template>
        </van-cell>
      </van-pull-refresh>
    </van-tab>
    <van-tab title="群组">
      <van-pull-refresh
        style="margin-top: 10px; margin-bottom: 60px"
        v-model="loading"
        @refresh="onRefresh"
      >
        <van-cell v-for="item in list" :key="item">
          <template #title>
            <span style="text-align: right">
              {{ item }}
            </span>
          </template>
        </van-cell>
      </van-pull-refresh>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  name: "contactsView",
  data() {
    return {
      loading: false,
      list: ["A", "B", "C"],
    };
  },
  methods: {
    onRefresh() {
      this.loading = true;
      setTimeout(() => {
        this.list.push("X");
        this.loading = false;
      }, 500);
    },
  },
};
</script>
