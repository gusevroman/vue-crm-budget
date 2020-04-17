import router from '../../router';
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
          ><router-link class-active="active" to="/planning"
            ><el-button
              class="el-icon-goods"
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
              class="el-icon-s-data"
              circle
              plain
              type="primary"
              size="mini"
            ></el-button></router-link
        ></el-menu-item>
        <el-menu-item
          ><router-link class-active="active" to="/profile" exact
            ><el-button
              class="el-icon-user"
              circle
              plain
              type="primary"
              size="mini"
            ></el-button></router-link
        ></el-menu-item>

        <el-submenu>
          <template slot="title"><i class="el-icon-more-outline"></i></template>
          <el-menu-item><i class="el-icon-setting"></i></el-menu-item>
          <el-menu-item index="2-2"
            ><router-link to="/profile"><i class="el-icon-user"></i> </router-link
          ></el-menu-item>
          <el-menu-item index="2-2"
            ><router-link to="/profile"
              ><el-button
                class="el-icon-exit"
                plain
                type="danger"
                size="mini"
                @click.prevent="logout"
                >EXIT</el-button
              ></router-link
            ></el-menu-item
          >

          <el-submenu index="2-4">
            <template slot="title">item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
      <div class="line"></div>
    </template>

    <template v-if="blackSchema" class="menu-item">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item
        >
      </el-menu>
    </template>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeIndex: '1',
    blackSchema: false,
  }),
  methods: {
    logout() {
      this.$router.push('/login?message=logout');
    },
  },
};
</script>

<style scoped>
.el-menu-item {
  padding: 10px;
}
</style>
