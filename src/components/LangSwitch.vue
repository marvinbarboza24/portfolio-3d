<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";
import { useLegalReveal } from "../composables/useLegalReveal";

const { revealLegal } = useLegalReveal();

const handleLangSwitch = () => {
  changeLocale(locale.value === "tl" ? "en" : "tl");
  // Legal notice + © only appear after the language button is clicked
  revealLegal();
};
</script>

<template>
  <Button
    variant="border"
    size="sm"
    @click="handleLangSwitch"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    >{{ locale === "tl" ? "EN" : "TL" }}</Button
  >
</template>
