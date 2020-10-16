<template>
  <a :href="url">
    <slot>qq.com</slot>
  </a>
</template>

<script>
export default {
  name: 'NavigationLink',
  props: ['url']

}
</script>

<style>

</style>