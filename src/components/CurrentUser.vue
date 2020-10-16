<template>
<span>
  <slot :user="user">{{user.firstName}}</slot>
</span>
  
</template>

<script>
export default {
  name: "CurrentUser",
  data() {
    return {
      user: {
        firstName: 'hello',
        lastName: 'world'
      }
    }
  }


}
</script>

<style>

</style>