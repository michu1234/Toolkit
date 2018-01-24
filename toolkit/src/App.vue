<template>
<div id="app" @click.self="showHideSearch=true">
  <div class="container">
    <p class="font-weight-bold pt-3 pb-4">{{title}}</p>
    <div class="col-md-12 search-bar pb-5">
      <ul class="list-unstyled d-flex pl-sm-4 pr-sm-4 ">
        <li class="d-flex align-self-center">Brand</li>
        <li class="ml-auto btn btn-secondary" @click="showHideSearch=!showHideSearch" v-if="showHideSearch">Search</li>
        <li class="ml-auto" v-else><input v-if="!showHideSearch" @blur="showHideSearch=!showHideSearch" v-model="searchTerm" class="form-control mr-sm-2 ml-2" type="text" placeholder="Search" autofocus></li>
      </ul>
    </div>
    <div class="jumbotron p-4">
      <div class="row">
        <div class="col-md-4">
          <transition name="fade">
            <ul v-if="category_1!=''" class="list-unstyled bg-white pl-4 pt-2 pb-3">
              <li class="font-weight-bold">{{items[0].category}}</li>
              <li class="pt-1 pb-1" v-for="(item, index) in category_1" :key="index">- <a href="#">{{item}}</a></li>
            </ul>
          </transition>
        </div>
        <div class="col-md-4">
          <transition name="fade">
            <ul v-if="category_2!=''" class="list-unstyled bg-white pl-4 pt-2 pb-3">
              <li class="font-weight-bold">{{items[1].category}}</li>
              <li class="pt-1 pb-1" v-for="(item, index) in category_2" :key="index">- <a href="#">{{item}}</a></li>
            </ul>
          </transition>
        </div>
        <div class="col-md-4">
          <transition name="fade">
            <ul v-if="category_3!=''" class="list-unstyled bg-white pl-4 pt-2 pb-3">
              <li class="font-weight-bold">{{items[2].category}}</li>
              <li class="pt-1 pb-1" v-for="(item, index) in category_3" :key="index">- <a href="#">{{item}}</a></li>
            </ul>
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <transition name="fade">
            <ul v-if="category_4!=''" class="list-unstyled bg-white pl-4 pt-2 pb-3">
              <li class="font-weight-bold">{{items[3].category}}</li>
              <li class="pt-1 pb-1" v-for="(item, index) in category_4" :key="index">- <a href="#">{{item}}</a></li>
            </ul>
          </transition>
        </div>
        <div class="col-md-4">
          <transition name="fade">
            <ul v-if="category_5!=''" class="list-unstyled bg-white pl-4 pt-2 pb-3">
              <li class="font-weight-bold">{{items[4].category}}</li>
              <li class="pt-1 pb-1" v-for="(item, index) in category_5" :key="index">- <a href="#">{{item}}</a></li>
            </ul>
          </transition>
        </div>
        <div class="col-md-4">
          <transition name="fade">
            <ul v-if="category_6!=''" class="list-unstyled bg-white pl-4 pt-2 pb-3">
              <li class="font-weight-bold">{{items[5].category}}</li>
              <li class="pt-1 pb-1" v-for="(item, index) in category_6" :key="index">- <a href="#">{{item}}</a></li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: 'Test task: "Toolkit"',
      showHideSearch: true,
      searchTerm: "",
      newItems: [],
      items: [{
        category: "test",
        links: [1, 2, 3]
      }]
    };
  },
  created() {
    fetch("http://localhost:3000").then(function(data) {
      return data.json();
    }).then(response => {
      this.items = response;
      console.log(this.items[0].category)
    }).catch(function(error){
      console.log(error);
      document.body.innerHTML = "Run server first!"
    })
  },
  computed: {
    category_1() {
      let term = this.searchTerm.toLowerCase();
      if (this.items[0].category.toLowerCase().match(term)) {
        return this.items[0].links;
      }
      for (let i = 0; i <= 8; i++) {
        return this.items[0].links.filter(function(data) {
          return data.toLowerCase().match(term);
        });
      }
    },
    category_2() {
      let term = this.searchTerm.toLowerCase();
      if (this.items[1].category.toLowerCase().match(term)) {
        return this.items[1].links;
      }
      for (let i = 0; i <= 6; i++) {
        return this.items[1].links.filter(function(data) {
          return data.toLowerCase().match(term);
        });
      }
    },
    category_3() {
      let term = this.searchTerm.toLowerCase();
      if (this.items[2].category.toLowerCase().match(term)) {
        return this.items[2].links;
      }
      for (let i = 0; i <= 6; i++) {
        return this.items[2].links.filter(function(data) {
          return data.toLowerCase().match(term);
        });
      }
    },
    category_4() {
      let term = this.searchTerm.toLowerCase();
      if (this.items[3].category.toLowerCase().match(term)) {
        return this.items[3].links;
      }
      for (let i = 0; i <= 6; i++) {
        return this.items[3].links.filter(function(data) {
          return data.toLowerCase().match(term);
        });
      }
    },
    category_5() {
      let term = this.searchTerm.toLowerCase();
      if (this.items[4].category.toLowerCase().match(term)) {
        return this.items[4].links;
      }
      for (let i = 0; i <= 6; i++) {
        return this.items[4].links.filter(function(data) {
          return data.toLowerCase().match(term);
        });
      }
    },
    category_6() {
      let term = this.searchTerm.toLowerCase();
      if (this.items[5].category.toLowerCase().match(term)) {
        return this.items[5].links;
      }
      for (let i = 0; i <= 6; i++) {
        return this.items[5].links.filter(function(data) {
          return data.toLowerCase().match(term);
        });
      }
    }
  }
};
</script>

<style>
a {
  color: #000000;
}

a:hover {
  text-decoration: none;
}

.btn-secondary {
  background: transparent;
  border: none;
  color: #000000;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #e9ecef;
  color: #000000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.search-bar {
  height: 40px;
}
</style>
