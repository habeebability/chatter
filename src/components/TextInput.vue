<template>
  <div>
    <input
      :placeholder="placeholder"
      :maxlength="max"
      class="w-full bg-white text-gray-800 border text-sm border-[#eff0eb] rounded-lg p-3 placeholder-gray-500 focus:outline-none"
      :class="[
          {'border-gray-900': isFocused},
      {'border-red-500': error}
      ]"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :type="inputType"
      v-model="inputComputed"
      autocomplete="off"
    />

    <span class="text-red-500 text-[14px] font-semibold">{{ error }}</span>
  </div>
</template>
  
  <script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
const emit = defineEmits(['update:input']);
const props = defineProps(['input', 'placeholder', 'max', 'inputType', 'error']);

const { input, placeholder, max, inputType, error } = toRefs(props);
let isFocused = ref(false);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val)
});
</script>
  