<template>
  <div>
    <template v-if="!blackSchema">
      <el-menu class="el-menu-app" padding="10px" mode="horizontal">
        <el-menu-item>
          <el-button
            class="el-icon-menu"
            type="primary"
            size="mini"
            circle
            plain
            @click.prevent="$emit('click')"
          >
          </el-button>
        </el-menu-item>
        <el-menu-item
          ><router-link class-active="active" to="/"
            ><el-button
              class="el-icon-search"
              circle
              plain
              type="info"
              size="mini"
            ></el-button></router-link
        ></el-menu-item>
        <el-menu-item
          ><router-link key="/record" to="/record"
            ><el-button
              class="el-icon-plus"
              circle
              plain
              type="warning"
              size="mini"
            ></el-button></router-link
        ></el-menu-item>
        <el-menu-item
          ><router-link class-active="active" to="/expense"
            ><el-button
              class="el-icon-s-data"
              circle
              plain
              type="primary"
              size="mini"
            ></el-button></router-link
        ></el-menu-item>
        <el-menu-item
          ><router-link class-active="active" to="/history"
            ><el-button
              class="el-icon-s-order"
              circle
              plain
              type="primary"
              size="mini"
            ></el-button></router-link
        ></el-menu-item>
        <el-menu-item
          ><router-link class-active="active" to="/categories"
            ><el-button
              class="el-icon-document-copy"
              circle
              plain
              type="primary"
              size="mini"
            ></el-button></router-link
        ></el-menu-item>

        <el-submenu index="1">
          <template slot="title">{{ name }}</template>
          <template slot="title"> ${{ bill }}</template>
          <el-menu-item index="1-1"><i class="el-icon-setting"></i></el-menu-item>
          <el-menu-item index="1-2"
            ><router-link to="/profile"
              ><i class="el-icon-user"> ${{ bill }}</i></router-link
            ></el-menu-item
          >
          <el-menu-item index="1-3">
            <el-button plain type="danger" size="mini" @click.prevent="logout">EXIT</el-button>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="line"></div>
    </template>

    <template v-if="blackSchema" class="menu-item">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
      </el-menu>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    blackSchema: false,
  }),
  computed: {
    name() {
      return this.$store.getters.info.login;
    },
    bill() {
      return this.$store.getters.info.bill;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login?message=logout');
    },
  },
};
</script>

<style scoped>
.el-menu-app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.el-menu-item {
  padding: 0 5px 0 5px;
}
</style>
