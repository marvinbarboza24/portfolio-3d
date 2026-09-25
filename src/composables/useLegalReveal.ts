import { ref } from "vue";

/** Legal notice + copyright stay hidden until the language button is clicked. */
const legalVisible = ref(false);

export function useLegalReveal() {
  const revealLegal = () => {
    legalVisible.value = true;
  };

  const toggleLegal = () => {
    legalVisible.value = !legalVisible.value;
  };

  const hideLegal = () => {
    legalVisible.value = false;
  };

  return {
    legalVisible,
    revealLegal,
    toggleLegal,
    hideLegal,
  };
}
