<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Vector3 } from "three";
import { camera } from "../three/core/camera";
import { sizes } from "../utils/sizes";
import { threeSizes } from "../three/utils/sizes";
import gsap from "gsap";
import { sceneWeightsInOut } from "../animations/scenes";

const props = defineProps<{
  point: Vector3;
  portraitPoint?: Vector3;
  pinned?: boolean;
}>();

const wrapperRef = ref<HTMLDivElement | null>(null);

let lastTransform = "";

const updatePosition = () => {
  if (!wrapperRef.value) return;
  if (sceneWeightsInOut.about.in === 0) return;
  if (sceneWeightsInOut.about.out === 1) return;

  const isLandscape = sizes.isLandscape;
  const { point, portraitPoint, pinned } = props;
  const shouldProject = pinned || isLandscape;
  const activePoint = !isLandscape && portraitPoint ? portraitPoint : point;

  const screenPos = shouldProject ? camera.project(activePoint) : { x: 0, y: 0 };
  let x = screenPos.x;
  let y = screenPos.y;

  // Keep the portrait nameplate on-screen (header + overflow:hidden on the sticky intro).
  if (shouldProject && !isLandscape && threeSizes.width > 0 && threeSizes.height > 0) {
    const halfW = threeSizes.width * 0.5;
    const halfH = threeSizes.height * 0.5;
    x = Math.min(halfW - 88, Math.max(-halfW + 88, x));
    // The plate sits above this point, so keep enough room under the header.
    y = Math.min(halfH * 0.15, Math.max(-halfH + 156, y));
  }

  const transform = shouldProject ? `translate(${x}px, ${y}px)` : `translate(0px, 0px)`;

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
