import { ref } from 'vue';
const activeClass = ref('text-[#543EE0] hover:text-opacity-50 border-gray-100');
const inactiveClass = ref(
  'border-gray-900 text-black text-opacity-50 hover:text-blue-700 hover:text-opacity-50 hover:text-gray-100'
);
export function useTailwindConfig() {
  return {
    activeClass,
    inactiveClass
  };
}
