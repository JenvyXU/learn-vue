<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NavigationLink :url="link">Yout link is </NavigationLink>
    <CurrentUser>
      <template v-slot:="props">
        {{props.user.lastName}}
      </template>
    </CurrentUser>
    <transition appear @before-appear="beforeAppear" @after-appear="afterAppear">
      <TodoList>
        <template v-slot:todo="{todo}">
          <span v-if="todo.isConpleted">✅</span>
          <span v-else>❎</span>
          {{todo.text}}
        </template>
      </TodoList>    
    </transition>
    <div id="dynamic-component-demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <keep-alive>
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </keep-alive>
    </div>
    <p>自定义指令: v-focus</p>
    <input type="text" v-focus style="width:300px">
    <div class="pin" v-pin:[direction]="100">I am a pin</div>

    <p>插件自定义实例属性</p>
    <p>{{$myProperty}}</p>
    <div>
      <p>自定义过滤器</p>
      <p>{{ account | addUnit }}</p>
      <p>{{ account | addUnit | exchange('￥', 123)}}</p>
    </div>
    <ul>
      <li v-for="(item, index) in numArr"
        :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavigationLink from './components/NavigationLink';
import CurrentUser from './components/CurrentUser';
import TodoList from './components/TodoList';
import TabArchive from './components/TabArchive';
import TabPosts from './components/TabPosts';
import Vue from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavigationLink,
    CurrentUser,
    TodoList,
    TabArchive,
    TabPosts
  },
  data() {
    return {
      link: 'baidu.com',
      currentTab: "Posts",
      tabs: ["Posts", "Archive"],
      direction: 'right',
      account: 1000,
      numArr: [1,2,3,4,5,6]
    }
  },
  methods: {
    change() {
      this.currentCompont = TodoList
    },
    beforeAppear() {
      console.log('before appear')
    },
    afterAppear() {
      console.log('after appear')
    }
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  },
  created() {
    Vue.globalMethod()
    setTimeout(()=>{
      this.numArr.length = 20
      console.log('done')
    }, 1000)
  }
  
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.posts-tab {
  display: flex;
}
.posts-sidebar {
  max-width: 40vw;
  margin: 0;
  padding: 0 10px 0 0;
  list-style-type: none;
  border-right: 1px solid #ccc;
}
.posts-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.posts-sidebar li:hover {
  background: #eee;
}
.posts-sidebar li.selected {
  background: lightblue;
}
.selected-post-container {
  padding-left: 10px;
}
.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}
.v-appear-enter{
  color: #fff;
}
.v-appert-enter-active {
  transition: all 1s;
}
.v-appear-enter-to {
  opacity: .5;
}
.pin{
  background-color: red;
  color: #fff;
  width: 100px;
  padding: 8px;
}
</style>
