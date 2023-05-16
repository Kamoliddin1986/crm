<script setup>
import {ref, reactive} from "vue";
import { useRouter } from "vue-router";
import {useAuth} from '../../service/auth/index';
import {toast} from 'vue3-toastify'

const router = useRouter();

const user = reactive({
  login: '',
  password: ''
});


const useLogin = () => {
  const sendUser = {
    login: user.login,
    password: user.password
  };
// console.log("Use>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", sendUser);
  useAuth(sendUser).then((res) => {
    console.log('LOCAL>>>>>',res.data.role_id);
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('role_id', res.data.role_id)
    localStorage.setItem('employee_page_number', 1)
    router.push({name: "dashboard"});
    toast.success("logged in")
  }).catch(() => {
    toast.error('error')
  })
}

</script>

<template>
  
  <div class="dv">

    <form @submit.prevent="useLogin">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Login</label>
        <input v-model="user.login" type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="login..." required>
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input v-model="user.password" type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
      </div>
      
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    </form>
  </div>

</template>

<style scoped lang="scss">

.dv{
  width: 60%;
  margin: 150px auto;
}
</style>
