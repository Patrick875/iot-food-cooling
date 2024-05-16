<template>
  <div class="w-full min-h-[100vh] flex flex-col justify-center items-center">
    <form class="w-1/3 bg-slate-100 p-6 h-[70vh]">
      <div class=" h-22 w-1/2  mx-auto mb-4">
        <img src="./../assets/Logo.jpeg" class="rounded-[8px] w-full object-cover" />
      </div>
      <p class="text-center font-bold my-4">Login</p>
      <div class="my-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          v-model="username"
          placeholder="Username"
        />
      </div>
      <div class="my-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          v-model="password"
          placeholder="******************"
        />
      </div>
      <button class="w-full p-3 font-semibold rounded-[6px] bg-purple-900 text-white">Login</button>
      <a href="/reset-password" class="text-sky-900 block my-4 text-center"> Reset Password</a>
    </form>
  </div>
</template>

<script setup lan="ts">
import {ref} from 'vue'
const username= ref('username');
const password= ref('password');


</script>
<style >

</style>