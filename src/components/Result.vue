<template>
    <div class="result">
      <div class="head">
        <div class="profile-picture">
          <img src="https://s3-alpha-sig.figma.com/img/0395/4a2f/83be541c7b3bfd8c11d51bb7c0b89f60?Expires=1629676800&Signature=LNCHzR3FUeOB-cNKacZrhvmtfWyzGq7aQaqQ4VZE6bxnjrd8ykjIwIurI8cgOmu677BaD1kdRvrAPwJqdt80as9typE3SU2yvDdjqY82JxsSHiJA0AqTmPTJehHXLFoz1Moxkj4CSYNwt91CWZj85sJWLxGoX2Q3jrahtGEWvC3V0Jmc6-9408o0bS3TjOoJUa40jkqthm6PQQLepV21XrpFNXE3oBJn6tJ8Dl88lZG9PCcU4V2au~6t29Esb373j2x2QMlSlS5hl-05azADTI89lLxoxokjt77tRBIY1MQz2tZhrA0onqic0mE8VqvL7pFS0VKVFu~fQbXb740Itw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          <div class="overlay">
            <button class="btn btn--edit">Edit</button>
            <button class="btn btn--view">View</button>
          </div>
        </div>
        <div>
          <p>{{result.name}}</p>
          <label class="sub-title">{{result.username}}</label>
          <q>{{result.company.catchPhrase}}</q>
        </div>
      </div>
      <div class="info">
        <ul>
          <li>{{result.email}}</li>
          <li>{{fullAddress}}</li>
          <li>{{result.phone}}</li>
          <li>{{result.website}}</li>
          <li>{{result.company.name}}</li>
          <li>{{result.company.bs}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    result: Object,
  },
  computed: {
    fullAddress() {
      return `${this.result.address.street}, ${this.result.address.suite}, ${this.result.address.city}, ${this.result.address.zipcode}, ${this.result.address.geo.lat}, ${this.result.address.geo.lng}`;
    }
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .result {
    margin: 0.5rem auto;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 1rem;
    text-align: left;
  }

  .head {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .profile-picture {
    position: relative;
    width: 100%;
    height: auto;
  }

  .profile-picture > img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
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
    transition: all .5s ease;
    background: rgba(0, 0, 0, 0.27);
  }

  .btn {
    border-radius: 5px;
    font-size: 18px;
    padding: 16px 10px;
    background: #FFFFFF;
  }

  .btn--edit {
    color: #1575BF;
    border: 1px solid #D2D5D8;
  }

  .btn--view {
    color: #FFFFFF;
    border: hidden;
    background: #1575BF;
  }

  .sub-title {
    display: block;
    color: #909090;
  }
  
  q {
    color: #51C5FF;
  }

  @media only screen and (min-width: 768px) {
    .head {
      flex-direction: column;
    }
    .head > img {
      border-radius: 8px;
    }

    .overlay {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .profile-picture:hover .overlay {
      opacity: 1;
    }
  }
  

</style>




