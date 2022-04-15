<template>
  <div>
    <p v-for="d in $store.state.tasks" :key="d.id">{{ d }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  data() {
    return {
      // data: useStore().state.tasks,
    }
  },
  mounted() {
    this.pageRedirect()
  },
  methods: {
    pageRedirect() {
      const store = useStore()
      if (store.state.tasks[0].id === 0) {
        this.$router.push('/')
      }
    },
  },
  // setup(props, { expose }) {
  //   const store = useStore()
  //   const asd = async () => {
  //     const res = await req.get('status')
  //     store.commit('addTask', res)
  //     console.log({ state: store.state.tasks })
  //   }
  //   expose({ asd })
  // onMounted(() => {
  //   this.getAll()
  // })
  // },
  // mounted() {
  //   this.getAll()
  // },
})
</script>

<style scoped></style>
