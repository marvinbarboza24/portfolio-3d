<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    &-unity {
      background-color: #222c37;
      color: white;
    }

    &-blender {
      background-color: #ea7600;
      color: white;
    }

    &-mixamo {
      background-color: #ed1c24;
      color: white;
    }

    &-quest {
      background-color: #1c2b33;
      color: white;
    }

    &-sketchfab {
      background-color: #1caad9;
      color: white;
    }

    &-android {
      background-color: #3ddc84;
      color: #073042;
    }

    &-ar {
      background-color: #7c3aed;
      color: white;
    }

    &-vr {
      background-color: #0f766e;
      color: white;
    }

    &-web {
      background-color: #0284c7;
      color: white;
    }

    &-pc {
      background-color: #334155;
      color: white;
    }

    &-mobile {
      background-color: #059669;
      color: white;
    }
  }
}
</style>
