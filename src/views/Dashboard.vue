<template>
    <main class="p-5 border border-gray-200">
        <div class="header max-w-3xl mx-auto">
            <div class="flex flex-wrap items-end justify-between mb-12">
                <div class="title">
                    <p class="mb-4 text-xl font-bold text-gray-800">
                        FEED
                    </p>
                    <p class=" font-light text-gray-400">
                        Explore different content you’d love </p>
                </div>
                <div class="text-end my-2 lg:m-0">
                    <button @click="createPost"
                        class="flex-shrink-0 px-4 py-3 text-base font-semibold text-white bg-[#543EE0] rounded-lg shadow-md hover:bg-opacity-50 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-purple-200"
                        type="submit">
                        Post a content
                    </button>
                </div>
            </div>


            <!-- <div class="flex justify-between card border border-gray-200 p-3 rounded-lg">
                <div v-for="(tab, index) in tabs" :key="index" :class="{
                    'border-b-4 border-purple-500': activeTab === tab,
                    'text-gray-500 hover:text-gray-700 cursor-pointer': activeTab !== tab
                }" >
                    <p class="">

                        {{ tab }}
                    </p>
                </div>
            </div> -->


            <div class="border border-gray-200 rounded-lg">

                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                    <ul class="flex flex-wrap -mb-px">

                        <li @click="activeTab = tab" v-for="(tab, index) in tabs" :key="index" class="">
                            <span class="inline-block p-4 border-b-2  rounded-t-lg active " :class="{
                                'text-purple-600 border-purple-600': activeTab === tab,
                                'text-gray-500 hover:text-gray-700 cursor-pointer': activeTab !== tab
                            }" aria-current="page">
                                {{ tab }}
                            </span>
                        </li>

                        <!-- <li class="mr-2">
                            <a href="#"
                                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                                Live
                            </a>
                        </li> -->
                    </ul>
                </div>
            </div>


            <div class="border border-gray-200 my-1 rounded-lg">
                <div class="flex items-start space-x-4 p-4">
                    <div class="">
                        <img src="../assets/images/avatar-for-you.png" alt="person" class="w-12 h-12 rounded-full" />
                    </div>
                    <div class="">
                        <div class="font-bold text-sm">Grace Ikpang</div>
                        <div class="my-2">
                            <span class="text-sm text-gray-400">Product designer</span>
                            <span class="mx-2 text-sm text-gray-400">May 25th, 2023</span>
                        </div>
                    </div>


                </div>
                <div class=" px-4">
                    <h3 class="text-xl">Starting out as a Product designer</h3>
                    <span class="flex items-center">
                        <span><svg width="18" height="18" viewBox="0 0 22 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.75 0.773438H15.3875C14.2367 0.773438 13.1117 1.10391 12.1437 1.72734L11 2.46094L9.85625 1.72734C8.88924 1.10403 7.76299 0.772823 6.6125 0.773438H1.25C0.835156 0.773438 0.5 1.10859 0.5 1.52344V14.8359C0.5 15.2508 0.835156 15.5859 1.25 15.5859H6.6125C7.76328 15.5859 8.88828 15.9164 9.85625 16.5398L10.8969 17.2102C10.9273 17.2289 10.9625 17.2406 10.9977 17.2406C11.0328 17.2406 11.068 17.2313 11.0984 17.2102L12.1391 16.5398C13.1094 15.9164 14.2367 15.5859 15.3875 15.5859H20.75C21.1648 15.5859 21.5 15.2508 21.5 14.8359V1.52344C21.5 1.10859 21.1648 0.773438 20.75 0.773438ZM6.6125 13.8984H2.1875V2.46094H6.6125C7.44219 2.46094 8.24844 2.69766 8.94453 3.14531L10.0883 3.87891L10.25 3.98438V14.8125C9.13437 14.2125 7.8875 13.8984 6.6125 13.8984ZM19.8125 13.8984H15.3875C14.1125 13.8984 12.8656 14.2125 11.75 14.8125V3.98438L11.9117 3.87891L13.0555 3.14531C13.7516 2.69766 14.5578 2.46094 15.3875 2.46094H19.8125V13.8984ZM8.30234 5.46094H3.94766C3.85625 5.46094 3.78125 5.54063 3.78125 5.63672V6.69141C3.78125 6.7875 3.85625 6.86719 3.94766 6.86719H8.3C8.39141 6.86719 8.46641 6.7875 8.46641 6.69141V5.63672C8.46875 5.54063 8.39375 5.46094 8.30234 5.46094ZM13.5312 5.63672V6.69141C13.5312 6.7875 13.6062 6.86719 13.6977 6.86719H18.05C18.1414 6.86719 18.2164 6.7875 18.2164 6.69141V5.63672C18.2164 5.54063 18.1414 5.46094 18.05 5.46094H13.6977C13.6062 5.46094 13.5312 5.54063 13.5312 5.63672ZM8.30234 8.74219H3.94766C3.85625 8.74219 3.78125 8.82188 3.78125 8.91797V9.97266C3.78125 10.0688 3.85625 10.1484 3.94766 10.1484H8.3C8.39141 10.1484 8.46641 10.0688 8.46641 9.97266V8.91797C8.46875 8.82188 8.39375 8.74219 8.30234 8.74219ZM18.0523 8.74219H13.6977C13.6062 8.74219 13.5312 8.82188 13.5312 8.91797V9.97266C13.5312 10.0688 13.6062 10.1484 13.6977 10.1484H18.05C18.1414 10.1484 18.2164 10.0688 18.2164 9.97266V8.91797C18.2188 8.82188 18.1438 8.74219 18.0523 8.74219Z"
                                    fill="gray" />
                            </svg>
                        </span>
                        <span class="mx-3 text-gray-400">10 mins read</span>
                    </span>

                    <p class="my-2 text-[#626262]">Embarking on a journey as a product designer can be an exhilarating and
                        fulfilling
                        experience. As a
                        profession that bridges the realms of art, technology, and problem-solving, product design offers an
                        opportunity to shape the way people interact with the world around them.</p>
                </div>


                <div class=" h-48 bg-[#9c9b9b] rounded-lg m-4"></div>
                <div class="flex justify-between m-4">
                    <div class="flex items-center">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.4297 9.86719C12.8883 9.86719 12.4688 10.2867 12.4688 10.8047C12.4688 11.3227 12.8883 11.7422 13.4297 11.7422C13.9242 11.7422 14.3438 11.3227 14.3438 10.8047C14.3438 10.2867 13.9242 9.86719 13.4297 9.86719ZM6.86719 9.86719C6.32578 9.86719 5.90625 10.2867 5.90625 10.8047C5.90625 11.3227 6.32578 11.7422 6.86719 11.7422C7.36172 11.7422 7.78125 11.3227 7.78125 10.8047C7.78125 10.2867 7.36172 9.86719 6.86719 9.86719Z"
                                    fill="black" />
                                <path
                                    d="M20.9528 8.08601C19.8255 6.53913 18.2505 5.50554 16.5231 5.03913V5.04148C16.1223 4.59617 15.67 4.18601 15.1637 3.82038C11.327 1.03132 5.94109 1.8821 3.14031 5.71882C0.883281 8.83601 0.979375 13.029 3.28094 16.0079L3.29969 19.1157C3.29969 19.1907 3.31141 19.2657 3.33484 19.336C3.45906 19.7321 3.88094 19.9501 4.27469 19.8259L7.24187 18.8907C8.02703 19.1696 8.83797 19.329 9.64422 19.3735L9.6325 19.3829C11.7208 20.904 14.4583 21.361 16.9684 20.5313L19.9473 21.5016C20.0223 21.5251 20.0997 21.5391 20.1794 21.5391C20.5942 21.5391 20.9294 21.204 20.9294 20.7891V17.6485C22.9942 14.8454 23.0481 10.9712 20.9528 8.08601ZM7.57 17.2266L7.28875 17.1094L4.96844 17.836L4.945 15.3985L4.7575 15.1876C2.77469 12.7688 2.64344 9.28367 4.49969 6.72663C6.75906 3.6282 11.0903 2.94382 14.1794 5.17976C17.2778 7.4321 17.9645 11.7563 15.7262 14.836C13.8489 17.4118 10.488 18.3634 7.57 17.2266ZM19.4059 16.8282L19.2184 17.0626L19.2419 19.5001L16.945 18.7266L16.6637 18.8438C15.3512 19.3313 13.952 19.3712 12.6559 19.0079L12.6512 19.0055C14.3833 18.4735 15.9536 17.3954 17.0856 15.8438C18.8762 13.3759 19.1669 10.2751 18.1262 7.63132L18.1403 7.6407C18.6794 8.02742 19.1739 8.51023 19.5934 9.09382C21.295 11.4282 21.1989 14.6063 19.4059 16.8282Z"
                                    fill="black" />
                                <path
                                    d="M10.1484 9.86719C9.60703 9.86719 9.1875 10.2867 9.1875 10.8047C9.1875 11.3227 9.60703 11.7422 10.1484 11.7422C10.643 11.7422 11.0625 11.3227 11.0625 10.8047C11.0625 10.2867 10.643 9.86719 10.1484 9.86719Z"
                                    fill="black" />
                            </svg>

                        </span>
                        <span class="mx-2 text-gray-400">200</span>
                    </div>
                    <div class="flex items-center">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 20.9999L10.55 19.6999C8.86667 18.1832 7.475 16.8749 6.375 15.7749C5.275 14.6749 4.4 13.6872 3.75 12.8119C3.1 11.9372 2.646 11.1332 2.388 10.3999C2.13 9.66657 2.00067 8.91657 2 8.1499C2 6.58324 2.525 5.2749 3.575 4.2249C4.625 3.1749 5.93333 2.6499 7.5 2.6499C8.36667 2.6499 9.19167 2.83324 9.975 3.1999C10.7583 3.56657 11.4333 4.08324 12 4.7499C12.5667 4.08324 13.2417 3.56657 14.025 3.1999C14.8083 2.83324 15.6333 2.6499 16.5 2.6499C18.0667 2.6499 19.375 3.1749 20.425 4.2249C21.475 5.2749 22 6.58324 22 8.1499C22 8.91657 21.8707 9.66657 21.612 10.3999C21.3533 11.1332 20.8993 11.9372 20.25 12.8119C19.6 13.6872 18.725 14.6749 17.625 15.7749C16.525 16.8749 15.1333 18.1832 13.45 19.6999L12 20.9999ZM12 18.2999C13.6 16.8666 14.9167 15.6372 15.95 14.6119C16.9833 13.5866 17.8 12.6952 18.4 11.9379C19 11.1792 19.4167 10.5039 19.65 9.9119C19.8833 9.3199 20 8.73257 20 8.1499C20 7.1499 19.6667 6.31657 19 5.6499C18.3333 4.98324 17.5 4.6499 16.5 4.6499C15.7167 4.6499 14.9917 4.87057 14.325 5.3119C13.6583 5.75324 13.2 6.3159 12.95 6.9999H11.05C10.8 6.31657 10.3417 5.7539 9.675 5.3119C9.00833 4.8699 8.28333 4.64924 7.5 4.6499C6.5 4.6499 5.66667 4.98324 5 5.6499C4.33333 6.31657 4 7.1499 4 8.1499C4 8.73324 4.11667 9.3209 4.35 9.9129C4.58333 10.5049 5 11.1799 5.6 11.9379C6.2 12.6959 7.01667 13.5876 8.05 14.6129C9.08333 15.6382 10.4 16.8672 12 18.2999Z"
                                    fill="black" />
                            </svg>


                        </span>
                        <span class="mx-2 text-gray-400">310</span>
                    </div>
                    <div class="flex items-center">
                        <span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
                                    fill="black" />
                                <path d="M4 9H6V14H4V9ZM12 4H14V14H12V4ZM8 11H10V14H8V11ZM8 7H10V9H8V7Z" fill="black" />
                            </svg>



                        </span>
                        <span class="mx-2 text-gray-400">2980</span>
                    </div>

                </div>
            </div>


        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const tabs = ref(['For you', 'Featured', 'Recent']);
const activeTab = ref('For you');

const createPost = () => {
    console.log('create post');
    router.push('/create-post');
};

</script>

<style scoped></style>