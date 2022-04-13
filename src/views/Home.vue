<template>
  <div>
    <Dashboard />
    <div>
      <p v-for="person in data" :key="person.id">
        {{ person.name }}
        <button @click="updateAll(person.id, person.completed)">
          {{ person.completed ? 'Voltar' : 'Encerrar' }}
        </button>
        <button @click="deleteAll(person.id)">deletar</button>
      </p>
    </div>
    <!-- {{ $store }} -->
    <button @click="postAll()">ADICIONAR</button>
    <!-- <button @click="showget()">hello</button> -->
    <Dext />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dashboard from '@/components/Dashboard/index.vue'
import Dext from '@/components/Dext/index.vue'
import request from '@/services/axiosConnection'
// import { useStore } from '@/store'
// import { Store } from 'vuex'
// import { store } from '@/store/index'

export default defineComponent({
  name: 'Home',
  components: { Dashboard, Dext },
  data() {
    return {
      data: [
        {
          id: 0,
          name: '',
          completed: false,
        },
      ],
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    async getAll() {
      // const StoreTask = store.addTataTasks
      const data = await request.get('status')
      this.data = data
      // StoreTask()
      // this.$s
      // this.
    },
    async postAll() {
      const dataObject = {
        name: 'Task',
        completed: false,
      }
      const data = await request.post_or_patch('status', 'post', dataObject)

      console.log(data)
      this.getAll()
    },
    async updateAll(id: number, complet: boolean) {
      const info = {
        url: `status/${id}`,
        data: { completed: !complet },
      }

      const data = await request.post_or_patch(info.url, 'patch', info.data)

      console.log(data)

      this.getAll()
    },

    async deleteAll(id: number) {
      const data = await request.deleteOne(`status/${id}`)
      console.log(data)
      this.getAll()
    },

    showget() {
      // const store = useStore()
      // console.log(store.state.count)
      // console.log(store.state.dataTasks)
      // this.$s]this
    },
  },
})
</script>
