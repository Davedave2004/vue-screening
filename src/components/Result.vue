
<template>
  <div class="result">
    <div class="head">
      <div class="profile-picture">
        <img :src="randomImg" />
        <div class="overlay">
          <button class="btn btn--edit">Edit</button>
          <button class="btn btn--view">View</button>
        </div>
      </div>
      <div class="profile-text">
        <p class="name">{{ result.name }}</p>
        <label class="sub-title">@{{ result.username }}</label>
        <q class="catchphrase">{{ result.company.catchPhrase }}</q>
      </div>
    </div>
    <div class="info">
      <ul class="fa-ul">
        <li>
          <span class="fa-li"><i class="far fa-envelope"></i></span
          >{{ result.email }}
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-map-marker-alt"></i></span
          >{{ fullAddress }}
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-phone-alt"></i></span
          >{{ result.phone }}
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-globe"></i></span
          >{{ result.website }}
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-briefcase"></i></span
          >{{ result.company.name }}
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-industry"></i></span
          >{{ capitalize(result.company.bs) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import faker from "faker";
import { capitalize } from "../helpers/stringHelpers";

export default {
  name: "Result",
  props: {
    result: Object,
  },
  computed: {
    randomImg() {
      return faker.image.imageUrl(200, 150, "business", true, true);
    },
    fullAddress() {
      return `${this.result.address.street}, ${this.result.address.suite}, ${this.result.address.city}, ${this.result.address.zipcode}, ${this.result.address.geo.lat}, ${this.result.address.geo.lng}`;
    },
  },
  methods: {
    capitalize,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 1rem;
  text-align: left;
}

.head {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}

.profile-text {
  width: 62%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-text > .name {
  font-weight: bold;
  font-size: 18px;
}

.profile-text > .sub-title {
  display: block;
  color: #909090;
  align-self: flex-start;
}

.profile-text > .catchphrase {
  color: #51C5FF;
  flex-basis: 64%;
  padding-top: 1rem;
  line-height: 138%;
  text-align: left;
}

.profile-picture {
  width: 38%;
  position: relative;
  height: auto;
  font-size: 18px;
  flex-shrink: 4;
  margin-left: 1rem;
}

.profile-picture > img {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  min-height: 116px;
  transition: 0.5s ease;
  border-radius: 8px;
}

.overlay {
  display: none; /* hide if not in mobile */
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  transition: all 0.5s ease;
  background: rgba(0, 0, 0, 0.27);
}

.btn {
  border-radius: 5px;
  font-size: 18px;
  padding: 10px;
  height: 40px;
  background: #FFFFFF;
  width: 4rem;
  margin: 0.5rem;
}

.btn--edit {
  color: #1575BF;
  border: 1px solid #D2D5D8;
}

.btn--view {
  color: #FFFFFF;
  font-size: 16px;
  border: hidden;
  background: #1575BF;
}

.fa-ul {
  margin-left: 1rem;
  margin-right: 1.5rem;
}

.fa-li {
  color: #015989;
  margin-bottom: 1rem;
}

.fa-ul li {
  margin-bottom: 1rem;
}

@media only screen and (min-width: 835px) {
  .result {
    padding: 0;
    line-height: 156%;
  }

  .head {
    flex-direction: column;
  }

  .profile-picture {
    width: 100%;
    margin-left: 0;
  }

  .profile-picture > img {
    height: 289px;
    border-radius: 8px 8px 0 0;
  }

  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-picture:hover .overlay {
    opacity: 1;
  }

  .profile-text {
    width: auto;
    margin: 1.5rem;
  }

  .profile-text > .name {
    font-size: 24px;
    line-height: 117%;
  }

  .info {
    margin: 0 2rem 1.5rem;
  }
}
</style>
