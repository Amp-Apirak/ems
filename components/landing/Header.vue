<script setup lang="ts">
import headerItems from "./headerItems";
import { useDisplay } from "vuetify";

const drawer = ref(false); // กำหนดตัวแปร drawer เพื่อใช้ควบคุมการเปิด-ปิดของเมนูแบบ drawer
const innerW = window.innerWidth; // ตรวจสอบความกว้างของหน้าจอ
const { mdAndUp, mdAndDown } = useDisplay(); // ใช้ useDisplay เพื่อกำหนดขนาดหน้าจอ md และการแสดงผลที่ต่างกัน

// หากขนาดหน้าจอมากกว่า 950px ให้ปิด drawer
onMounted(() => {
  if (innerW > 950) {
    drawer.value = false;
  }
});

// กำหนดตัวแปร headerMenu เพื่อเก็บรายการเมนูจาก headerItems
const headerMenu = ref(headerItems);
</script>

<template>
  <div>
    <v-app-bar app color="blue accent-4" dark elevation="0" class="custom-app-bar">
      <!-- ไอคอนสำหรับเปิด-ปิดเมนูแบบ drawer บนหน้าจอขนาดเล็ก -->
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-block d-sm-none"
      ></v-app-bar-nav-icon>
      <!-- ลิงก์ไปยังหน้าแรกสำหรับหน้าจอขนาดใหญ่ พร้อมชื่อเว็บไซต์ -->
      <NuxtLink to="/" class="d-block d-lg-none brand ml-8">
        Health Point
      </NuxtLink>

      <v-container>
        <v-row class="align-center">
          <!-- คอลัมน์สำหรับแสดงโลโก้และชื่อเว็บไซต์ -->
          <v-col class="d-none d-lg-flex align-center justify-center" sm="12" md="12" lg="4">
            <v-toolbar-title class="d-flex align-center justify-center">
              <NuxtLink to="/" class="d-flex brand align-center">
                <img
                  src="/assets/images/7.png"
                  alt="NuxtPress Logo"
                  class="logo"
                />
                Health Point
              </NuxtLink>
            </v-toolbar-title>
          </v-col>

          <!-- คอลัมน์สำหรับแสดงเมนู -->
          <v-col class="d-none d-lg-flex align-center justify-center" sm="12" md="12" lg="8">
            <v-btn
              class="menu"
              v-for="(item, i) in headerMenu"
              :to="item.to"
              :key="i"
              >{{ item.title }}</v-btn
            >

             <!-- ไอคอนสำหรับค้นหา -->
            <v-btn class="menu" icon><v-icon>mdi-magnify</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- เมนูแบบ drawer สำหรับหน้าจอขนาดเล็ก -->
    <v-navigation-drawer
      left
      elevation="10"
      app
      :temporary="mdAndUp"
      v-model="drawer"
      expand-on-hover
      width="250"
      class="mt-5 d-sm-none"
    >
      <!-- ลิสต์ของรายการเมนู -->
      <v-list>
        <v-list-item
          v-for="(item, i) in headerMenu"
          :to="item.to"
          class="mb-1"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
/* CSS สำหรับ custom-app-bar, brand, menu, logo, v-toolbar-title และ v-row.align-center จะอยู่ในไฟล์ SCSS ภายนอก */
</style>
