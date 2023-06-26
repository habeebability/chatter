<template>
    <main class="h-[80vh]">
        <div class="p-5 border border-gray-200 h-full w-full">
            <div class="flex justify-end lg:max-w-4xl">
                <button class="bg-[#543EE0] text-white px-3 py-2 rounded-md">Publish</button>
            </div>
            <div class="lg:p-10">
                <div v-if="!selectMedia" class="flex items-center space-x-4">
                    <div @click="selectMedia = !selectMedia"
                        class="w-16 h-16 rounded-full border border-gray-400 flex justify-center items-center p-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-full h-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>

                    <div class="flex flex-col space-y-4">
                        <h2 class="text-5xl font-extrabold text-gray-400">Title</h2>
                        <span class="text-3xl font-semibold text-gray-300">Write a post.......</span>
                    </div>
                </div>
                <div v-else class="flex items-center space-x-4 divide-x-2">
                    <div @click="selectMedia = !selectMedia"
                        class="w-16 h-16 rounded-full border border-gray-400 flex justify-center items-center p-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div class="px-5">
                        <div class="flex space-x-4">
                            <div
                                class="w-16 h-16 rounded-full border border-[#543EE0] flex justify-center items-center p-5 cursor-pointer">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 18C1.45 18 0.979002 17.804 0.587002 17.412C0.195002 17.02 -0.000664969 16.5493 1.69779e-06 16V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H16C16.55 1.69779e-06 17.021 0.196002 17.413 0.588002C17.805 0.980002 18.0007 1.45067 18 2V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H2ZM2 16H16V2H2V16ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
                                        fill="#543EE0" />
                                </svg>
                            </div>
                            <div
                                class="w-16 h-16 rounded-full border border-[#543EE0] flex justify-center items-center p-5 cursor-pointer mx-5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15 8V16H5V8H15ZM16 6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7V17C3 17.2652 3.10536 17.5196 3.29289 17.7071C3.48043 17.8946 3.73478 18 4 18H16C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.73478 16.8946 6.48043 16.7071 6.29289C16.5196 6.10536 16.2652 6 16 6Z"
                                        fill="#543EE0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label class="relative">
                    <input ref="fileInput" type="file" accept="image/*, video/*" class="hidden"
                        @change="handleFileUpload" />
                    <button @click="openFileInput" class="bg-gray-200 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </label>
                <div v-if="previewUrl">
                    <div v-if="isImage">
                        <img :src="previewUrl" alt="Preview" />
                    </div>
                    <div v-else-if="isVideo">
                        <video controls>
                            <source :src="previewUrl" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

        </div>

    </main>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const selectMedia = ref(false);
const previewUrl = ref('');
const isImage = ref(false);
const isVideo = ref(false);
const fileInputRef: Ref<HTMLInputElement | null> = ref(null);


const handleFileUpload = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            previewUrl.value = reader.result as string;
        };
        reader.readAsDataURL(file);

        const fileType = file.type.split('/')[0];
        isImage.value = fileType === 'image';
        isVideo.value = fileType === 'video';
    }
};

const openFileInput = () => {
    fileInputRef.value?.click();
}


</script>

<style scoped></style>
