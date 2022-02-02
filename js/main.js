const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos:[]
  }),
  methods:{
    addItem:function(event){
      // console.log("Click");
      if(this.newItem === "") return ;
      let todo = {
        item: this.newItem
      }
      this.todos.push(todo);
      this.newItem = ""
    }
  }
}).mount("#app")
