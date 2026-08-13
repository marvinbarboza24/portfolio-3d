<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { previews } from "../../../content/projects/previews";
import { categoryOrder, projectCategories, projectIds } from "../../../content/projects";
import { locale } from "../../../i18n/store";
import PreviewCard from "../../projects/components/PreviewCard.vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { isFeatureEnabled } from "../../../utils/features";

import type { ProjectPreview } from "../../../content/types";
import type { ProjectCategory } from "../../../content/projects";

const loadedPreviews = ref<ProjectPreview[] | null>(null);

const emit = defineEmits<{
  (e: "loaded", previews: ProjectPreview[]): void;
}>();

const loadPreviews = async () => {
  if (!locale.value) return;
  const func = previews[locale.value as keyof typeof previews];
  if (!func) return;
  const module = await func();
  loadedPreviews.value = module.default;
  emit("loaded", module.default);
};

const groupedProjects = computed(() => {
  const bySlug = Object.fromEntries((loadedPreviews.value ?? []).map((preview) => [preview.slug, preview]));

  return categoryOrder
    .map((category) => ({
      category,
      items: projectIds
        .filter((id) => projectCategories[id] === category)
        .map((id) => bySlug[id])
        .filter((preview): preview is ProjectPreview => Boolean(preview)),
    }))
    .filter((group) => group.items.length > 0);
});

const categoryLabel = (category: ProjectCategory) => t(`projects-${category}`);

watch(locale, loadPreviews);

onMounted(loadPreviews);
</script>

<template>
  <div class="projects">
    <NotchSection class="projects-notch-start" />
    <NotchSection class="projects-notch-end" />
    <div class="grid">
      <div class="projects-title">
        <Banner class="projects-title-banner" :copy="t('selected')" size="sm" animated />
        <h2 class="projects-title-copy">{{ t("projects") }}</h2>
        <p class="projects-title-platforms">{{ t("projects-platforms") }}</p>
      </div>
    </div>
    <div class="grid" v-for="group in groupedProjects" :key="group.category">
      <div class="projects-group">
        <h3 class="projects-group-title">{{ categoryLabel(group.category) }}</h3>
        <div class="projects-cards">
          <PreviewCard v-for="preview in group.items" :key="preview.slug" :preview="preview" />
          <PreviewCard v-if="group.category === 'other' && isFeatureEnabled('startProject')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-400);
  min-height: calc(var(--lvh) * 100 + var(--radius-xxl));
  padding-top: 96px;
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  @include mixins.mq("lg") {
    gap: var(--space-xxxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    &-platforms {
      margin-top: var(--space-sm);
      font-size: var(--font-size-md);
      font-weight: 600;
      color: var(--color-text-300);
      max-width: 36em;
    }

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 8;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xl);
      }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-400);
      --icon-color: var(--color-beige-400);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }
  }

  &-group {
    grid-column: 1 / span 12;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    width: 100%;

    @include mixins.mq("lg") {
      grid-column: 3 / span 8;
    }

    &-title {
      font-size: var(--font-size-title-xs);
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--color-text-400);
    }
  }

  &-cards {
    max-width: 100%;
    width: 100%;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    @include mixins.mq("lg") {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @include mixins.mq("xl") {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
}
</style>
