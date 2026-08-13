<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Vector3 } from "three";
import { camera } from "../three/core/camera";
import { sizes } from "../utils/sizes";
import gsap from "gsap";
import { sceneWeightsInOut } from "../animations/scenes";

const props = defineProps<{
  point: Vector3;
  pinned?: boolean;
}>();

const wrapperRef = ref<HTMLDivElement | null>(null);

let lastTransform = "";

const updatePosition = () => {
  if (!wrapperRef.value) return;
  if (sceneWeightsInOut.about.in === 0) return;
  if (sceneWeightsInOut.about.out === 1) return;

  const isLandscape = sizes.isLandscape;
  const { point, pinned } = props;
  const shouldProject = pinned || isLandscape;

  const screenPos = shouldProject ? camera.project(point) : { x: 0, y: 0 };
  const transform = shouldProject ? `translate(${screenPos.x}px, ${screenPos.y}px)` : `translate(0px, 0px)`;

  if (transform !== lastTransform) {
    wrapperRef.value.style.transform = transform;
    lastTransform = transform;
  }
};

onMounted(() => {
  gsap.ticker.add(updatePosition);
});

onBeforeUnmount(() => {
  gsap.ticker.remove(updatePosition);
});
</script>

<template>
  <div ref="wrapperRef" :class="['projected-element', { 'projected-element-pinned': pinned }]">
    <slot> </slot>
  </div>
</template>

<style scoped lang="scss">
.projected-element {
  width: 100%;
  height: 100%;

  &-pinned {
    width: 0;
    height: 0;
    position: relative;
  }

  @include mixins.landscape {
    width: 0;
    height: 0;
    position: relative;
  }
}
</style>
