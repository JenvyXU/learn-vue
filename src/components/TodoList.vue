<template>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <slot name="todo" v-bind:todo="todo"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  data(){
    return {
      filteredTodos: [
        {
          id: 0,
          isConpleted: true,
          text: '早起'
        },
        {
          id: 1,
          isConpleted: false,
          text: '吃早餐'
        },
        {
          id: 2,
          isConpleted: true,
          text: '午睡'
        }
      ]
    }
  }
}
</script>

<style>

</style>