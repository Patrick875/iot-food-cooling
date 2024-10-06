<template>
  <transition name="dashboard">
      <div class="bg-[rgb(255,255,255,0.94)] font-Nunito min-h-[100vh] min-w-[100vw] flex flex-col items-center justify-center">
    <p class="font-bold text-warning">SMART BUFFET BASED ON IOT</p>
 
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    style="width:300px;height:150px;"
    fill='#5da9ff'
    v-if="checked"
    data-name="Layer 7" 
      viewBox="0 0 64 80" x="0px" y="0px">
      <path d="M58.344,38.474a5.031,5.031,0,0,0-5.008-4.489H49.477V32.306a2.6,2.6,0,0,0-2.747-2.381V25.88a1,1,0,0,0-1-1H40.406a1,1,0,0,0,0,2H44.73v4.042a1,1,0,0,0,1,1H46.7c.472,0,.773.252.773.384v1.679H20.8a1,1,0,0,0,0,2H53.336a3.033,3.033,0,0,1,3.019,2.707l.5,4.571-18.034.067a6.9,6.9,0,0,0-.941-2.608,1,1,0,0,0-1.705,1.047,4.9,4.9,0,1,1-3.742-2.315L31.48,42.6a1,1,0,0,0,.667,1.247,1.016,1.016,0,0,0,.291.043,1,1,0,0,0,.957-.71l1.272-4.2A1,1,0,0,0,34,37.73a6.9,6.9,0,0,0-4,13.207,6.933,6.933,0,0,0,2.009.3,6.826,6.826,0,0,0,6.809-5.907l18.256-.068.643,5.883a1.387,1.387,0,0,1-1.378,1.537H7.661a1.387,1.387,0,0,1-1.378-1.537l.636-5.816,14.018-.07a1,1,0,0,0-.005-2h0l-13.789.069.507-4.635a3.033,3.033,0,0,1,3.019-2.708h4.859a1,1,0,0,0,1-1V32.306c0-.132.3-.384.773-.384H41.145a1,1,0,0,0,0-2H33V25.88a1,1,0,1,0-2,0v4.042H19.27V26.88h4.324a1,1,0,0,0,0-2H18.27a1,1,0,0,0-1,1v4.045a2.6,2.6,0,0,0-2.747,2.381v1.679H10.664a5.032,5.032,0,0,0-5.008,4.49L4.3,50.928a3.388,3.388,0,0,0,3.366,3.754H9.15v1.563a2.168,2.168,0,0,0,2.166,2.165h.923a2.169,2.169,0,0,0,1.837-1.026l1.659-2.7h32.53l1.659,2.7a2.169,2.169,0,0,0,1.837,1.026h.923a2.168,2.168,0,0,0,2.166-2.165V54.682h1.489a3.388,3.388,0,0,0,3.366-3.754ZM12.371,56.337a.154.154,0,0,1-.132.073h-.923a.166.166,0,0,1-.166-.165V54.682h2.237Zm40.479-.092a.166.166,0,0,1-.166.165h-.923a.154.154,0,0,1-.132-.073l-1.016-1.655H52.85Z"/><path d="M38.154,12.434a6.444,6.444,0,0,0-2.355.559C35.336,10.9,34.231,7.6,31.7,5.821a1.285,1.285,0,0,0-1.976.717,12.111,12.111,0,0,1-2.4,4.655,9.752,9.752,0,0,0-2.3,3.958,6.172,6.172,0,0,0,.531,5.111c.986,1.494,2.791,2.436,5.363,2.8a5.148,5.148,0,0,0,.726.051h.025a7.811,7.811,0,0,0,4.563-1.462,5.553,5.553,0,0,0,2.122-4.039c.2-2.528.617-3.3.739-3.479a1.076,1.076,0,0,0,.07-1.141A1.218,1.218,0,0,0,38.154,12.434Zm-1.8,5.023a3.549,3.549,0,0,1-1.333,2.6,5.9,5.9,0,0,1-3.372,1.06,2.814,2.814,0,0,1-.457-.032c-1.98-.28-3.317-.926-3.973-1.921a4.206,4.206,0,0,1-.27-3.488,7.82,7.82,0,0,1,1.857-3.143,13.462,13.462,0,0,0,2.513-4.414c2.013,2.044,2.618,5.523,2.762,6.633a1.12,1.12,0,0,0,2.049.468,1.382,1.382,0,0,1,.612-.457A17.608,17.608,0,0,0,36.354,17.457Z"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg"
    style="width:300px;height:150px;"
    fill='#7B2D26'
    v-if="!checked"
    viewBox="0 0 32 40" x="0px" y="0px">
    <g data-name="Gas Stove">
      <path d="M28,11.821H25.912l-1.93-2.8A.5.5,0,0,0,23.57,8.8H20.216a.5.5,0,0,0-.5.5v1.509a.5.5,0,0,0,.5.5h1.271v.509H17.42V9.306a.5.5,0,0,0-.5-.5H15.08a.5.5,0,0,0-.5.5v2.515H10.513v-.509h1.271a.5.5,0,0,0,.5-.5V9.3a.5.5,0,0,0-.5-.5H8.43a.5.5,0,0,0-.412.216l-1.93,2.8H4a2.5,2.5,0,0,0-2.5,2.5v5.61a1.5,1.5,0,0,0,1.5,1.5h.5V22.7a.5.5,0,0,0,.5.5H6.8a.5.5,0,0,0,.5-.5V21.431H24.7V22.7a.5.5,0,0,0,.5.5H28a.5.5,0,0,0,.5-.5V21.431H29a1.5,1.5,0,0,0,1.5-1.5v-5.61A2.5,2.5,0,0,0,28,11.821Zm-6.013-1.509H20.716V9.8h2.592l1.39,2.018H22.487V10.812A.5.5,0,0,0,21.987,10.312ZM15.58,9.806h.84v2.015h-.84Zm-6.888,0h2.592v.509H10.013a.5.5,0,0,0-.5.5v1.009H7.3ZM6.3,22.2H4.5v-.766H6.3Zm21.2,0H25.7v-.766h1.8Zm2-2.266a.5.5,0,0,1-.5.5H3a.5.5,0,0,1-.5-.5v-5.61a1.5,1.5,0,0,1,1.5-1.5H15.056a.06.06,0,0,0,.048,0H16.9a.06.06,0,0,0,.048,0H28a1.5,1.5,0,0,1,1.5,1.5ZM16,13.712a2.914,2.914,0,1,0,2.914,2.914A2.917,2.917,0,0,0,16,13.712Zm0,4.828a1.91,1.91,0,0,1-.5-3.754v1.84a.5.5,0,1,0,1,0v-1.84A1.91,1.91,0,0,1,16,18.54Zm-3.856-1.914a.5.5,0,0,1-.5.5H5.949a.5.5,0,0,1,0-1h5.7A.5.5,0,0,1,12.144,16.626Zm14.407,0a.5.5,0,0,1-.5.5H20.356a.5.5,0,0,1,0-1h5.695A.5.5,0,0,1,26.551,16.626Z"/>
    </g>
      
    </svg>

      <div class="form-check form-switch">
        
          <input  class="form-check-input" disabled="true"  type="checkbox" role="switch" id="flexSwitchCheckChecked" :checked="checked">
        
      </div>
  
      <p class="block font-bold ">Status: <span :class="checked ? 'text-danger' :'text-primary '">{{ checked ?"ON":"OFF" }}</span>  </p>
    <p class="text-lg ">Current Temperature : {{ lastTemp }} C</p>

    <div class='flex justify-center mt-6'>
      <button @click="logout()" class="w-full rounded-[4px] px-4 p-2 text-white bg-black">Logout</button>
    </div>
  </div>
  </transition>
  
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from 'vue';
import io from 'socket.io-client';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';


interface Temp{
  potId: string,
	value:number,
}

const authStore = useAuthStore();
const router = useRouter();

const temp = ref<Temp|undefined>();
const socket = io('http://0.0.0.0:8080');
const checked= ref<boolean>(false)
const lastTemp=ref<number>(0);

const logout= ()=>{
  authStore.logout();
  router.push('/')

}

// Listen for 'new-temperature' event from the server
socket.on('new-temperature', (data) => {
 
    temp.value=data;
    lastTemp.value = temp && temp.value !=undefined ? temp.value.value :0;
    // console.log('last-temp', lastTemp);
    if (lastTemp.value > 20 && lastTemp.value <= 40) {
      checked.value = true;
    } else {
      checked.value = false;
    }
  
});
onMounted(() => {
    console.log('Socket.IO connected');
    
});

onBeforeUnmount(() => {
    socket.disconnect();
});


</script>


<style>
.dashboard-enter-from{
  opacity:0;
  z-index:-1;
  transform:scale(0.5)
}
.dashboard-enter-to{
  opacity:1;
  z-index:1;
  transform:scale(1)
}
.dashboard-enter-active{
  transition: all 1.6s ease-in;
}
</style>
