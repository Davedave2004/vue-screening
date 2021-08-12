<template>
  <header></header>

  <section class="search">
    <div class="search-area">
      <i>Q</i> <!-- TODO: Search Icon -->
      <input type="text" placeholder="Find customers" v-model.trim="searchText" />
    </div>
    <div class="sort-area">
      <select v-model="sortOption">
        <option :value="null" disabled hidden>Filter by Name (A-Z)</option>
        <option v-for="option in sortOptions" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </section>

  <section class="results">
    <h2 v-if="!results.length" class="js-no-result-msg">No customer(s) found with the search criteria.</h2>
    <Result v-else v-for="result in results" :key="result.id" :result="result"/>
  </section>

</template>

<script>
import Result from "./components/Result.vue";

export default {
  name: "App",
  components: {
    Result,
  },
  data() {
    return {
      results: [],
      searchText: '',
      sortOption: null,
      sortOptions: [
        { value: 1, text: 'Name (A-Z)' },
        { value: 2, text: 'Name (Z-A)' },
      ]
    }
  },
  mounted() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.results = data;
      });
  },
  watch: {
    searchText(newSearchText) {
      fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          const searchData = (newSearchText.length) ? 
            data.filter(result => result.name.search(new RegExp(newSearchText,"i")) !== -1)
            :data;

          if (this.sortOption === 2) {
            searchData.sort(function(a, b) {
              if(a.name > b.name) { return -1; }
              if(a.name < b.name) { return 1; }
              return 0;
            })
          }
          this.results = searchData;
        });
    },
    sortOption(newSortOption) {
      if (newSortOption === 2) {
        this.results.sort(function(a, b) {
          if(a.name > b.name) { return -1; }
          if(a.name < b.name) { return 1; }
          return 0;
        })
      } else {
        if (newSortOption) {
          this.results.sort(function(a, b) {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
          })
        }
      }
    }
  },  
};


</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    width: 100%;
    min-height: 100vh;
    background: #F2F5FA;
    font-family: Rubik;
    font-size: 16px;
  }

  header {
    width: 100%;
    height: 91px;

    background: #FFFFFF;
    box-shadow: 9px 6px 24px -2px rgba(0, 0, 0, 0.06);
  }

  section.search {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sort-area {
    align-self: flex-end;
  }

  .results {
    display: flex;
    flex-direction: column;
    margin: auto 1rem;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 768px) {


    section.search {
      flex-direction: row;
      justify-content: space-between;
    }

    .results {
      flex-direction: row;
    }
  }
</style>
