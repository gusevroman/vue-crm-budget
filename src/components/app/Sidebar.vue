<template>
  <div>
    <template v-if="!blackSchema" :class="{ open: value }">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <router-link v-for="link in links" :key="link.url" tag="li" :to="link.url">
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <a href="#">{{ link.title }}</a>
            </el-menu-item>
          </router-link>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </template>

    <template v-if="blackSchema">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            :to="link.url"
            :exact="link.exact"
          >
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <a href="#">{{ link.title }}</a>
            </el-menu-item>
          </router-link>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Settings</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </template>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      blackSchema: false,
      links: [
        { title: 'Main', url: '/', exact: true },
        { title: 'History', url: '/history' },
        { title: 'Planning', url: '/planning' },
        { title: 'New Record', url: '/record' },
        { title: 'Categories', url: '/categories' },
        { title: 'Settings', url: '/settings' },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
