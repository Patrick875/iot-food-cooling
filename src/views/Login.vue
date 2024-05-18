<template>
  <div class="w-full min-h-[100vh] flex flex-col justify-center items-center">
    <transition name="loginForm">
      <form @submit.prevent="handleLogin" class="w-full md:w-1/3 bg-blue-50 p-6 min-h-[70vh]">
        <div class="w-1/2 mx-auto mb-4 h-22">
          <img src="./../assets/Logo.jpeg" class="rounded-[8px] w-full object-cover" />
        </div>
        <p class="my-4 font-bold text-center">Login</p>
        <div class="my-2">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="username">Email</label>
          <input
            class="w-full px-3 py-1 bg-white border-none focus:outline-none focus:ring-0 focus:border-none"
            id="email"
            type="email"
            v-model="email"
            placeholder="janedoe@example.com"
          />
        </div>
        <div class="my-2">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
          <input
            class="w-full px-3 py-1 bg-white border-none focus:outline-none focus:ring-0 focus:border-none"
            id="password"
            type="password"
            v-model="password"
            placeholder="******************"
          />
        </div>
        <button
          type="submit"
          :disabled="loading"
          class="w-full cursor-pointer mt-4 p-2 font-semibold rounded-[6px] bg-orange-800 text-white"
        >
          {{ loading ? '....Loading' : 'Login' }}
        </button>
        <!-- <a href="/reset-password" class="block my-4 text-center text-sky-900"> Reset Password</a> -->
      </form>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './../store/auth'; // Adjust the path

const email = ref('');
const password = ref('');
const loading = ref(false);
const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  loading.value = true;
  try {
    await authStore.login({ email: email.value, password: password.value });
    // Redirect to home page or handle successful login
    router.push('/dashboard');
  } catch (error) {
    console.error('Login failed:', error);
    // Handle login error (e.g., show an error message)
    router.push('/');
  } finally {
    loading.value = false;
  }
};
</script>

<style>
    .loginForm-enter-from {
      opacity: 0.3;
      transform: translateY(-200px);
    }

    .loginForm-enter-to {
      opacity: 1;
      transform: translateY(0);
    }

    .loginForm-enter-active {
      transition: all 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Adjust duration and easing */
      /* Add a background color for testing purposes */
      background-color: #f0f0f0;
    }
</style>
