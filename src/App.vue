<template>
  <header></header>

  <section class="search">
    <div class="search-area">
      <i class="fas fa-search"></i>
      <input
        type="text"
        placeholder="Find customers"
        v-model.trim="searchText"
      />
    </div>
    <div class="sort-area">
      <select v-model="sortOption">
        <option :value="null" disabled hidden>Filter by Name (A-Z)</option>
        <option
          v-for="option in sortOptions"
          :value="option.value"
          :key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
  </section>

  <section class="results">
    <Result v-for="result in results" :key="result.id" :result="result" />
  </section>

  <h2 v-if="!results.length" class="js-no-result-msg">
    No customer(s) found with the search criteria.
  </h2>
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
      searchText: "",
      sortOption: null,
      sortOptions: [
        { value: 1, text: "Name (A-Z)" },
        { value: 2, text: "Name (Z-A)" },
      ],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Network response not `ok`");
        return response.json();
      })
      .then((data) => {
        this.results = data;
      });
  },
  watch: {
    searchText(newSearchText) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          const searchData = newSearchText.length
            ? data.filter(
                (result) =>
                  result.name.search(new RegExp(newSearchText, "i")) !== -1
              )
            : data;

          if (this.sortOption === 2) {
            searchData.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
          }
          this.results = searchData;
        });
    },
    sortOption(newSortOption) {
      if (newSortOption === 2) {
        this.results.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      } else {
        if (newSortOption) {
          this.results.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        }
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#app {
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: #F2F5FA;
  font-family: "Rubik";
  font-size: 13px;
  color: #202223;
}

header {
  width: 100%;
  height: 65px;

  background: #FFFFFF;
  box-shadow: 9px 6px 24px -2px rgba(0, 0, 0, 0.06);
}

section.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  margin: auto 1.5rem;
}

.search-area {
  width: 100%;
  height: 50px;
  min-width: 333px;
  background: #FFFFFF;
  border-radius: 8px;
  margin: 1.5rem auto;
  padding: 1rem 1.5rem;
}

.search-area input {
  border: none;
  margin-left: 0.5rem;
}

.search-area ::placeholder {
  color: #202223;
  opacity: 1;
}

.sort-area {
  min-width: 200px;
  border-radius: 4px;
  background: #FFFFFF;
  height: 50px;
  text-align: center;
  margin: 1rem 0;
  align-self: flex-end;
}

.sort-area select {
  margin: 1rem 0;
  border: none;
  font-size: 16px;
  width: auto;
}

.results {
  display: grid;
  margin: auto 1.5rem;
  overflow-y: scroll;
  max-height: 69vh;

  scrollbar-width: none;
  -ms-overflow-style: none;
}

.results::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.js-no-result-msg {
  width: 100%;
  text-align: center;
}

@media only screen and (min-width: 768px) {
  #app {
    font-size: 16px;
  }

  header {
    height: 91px;
  }

  section.search {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 3.5rem 8rem;
  }

  .search-area {
    width: 40%;
    margin: 0;
  }

  .sort-area {
    width: 15%;
    align-self: center;
  }

  .results {
    grid-template-columns: repeat(4, minmax(363px, 1fr));
    /* grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) ); */
    gap: 2rem 2.5rem;

    margin: 0 8rem;

    overflow-y: none;
    max-height: unset;
  }
}
</style>
