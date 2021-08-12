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
      <div class="profile-text">
        <p class="name">{{result.name}}</p>
        <label class="sub-title">@{{result.username}}</label>
        <q class="catchphrase">{{result.company.catchPhrase}}</q>
      </div>
    </div>
    <div class="info">
      <ul class="fa-ul">
        <li><span class="fa-li"><i class="far fa-envelope"></i></span>{{result.email}}</li>
        <li><span class="fa-li"><i class="fas fa-map-marker-alt"></i></span>{{fullAddress}}</li>
        <li><span class="fa-li"><i class="fas fa-phone-alt"></i></span>{{result.phone}}</li>
        <li><span class="fa-li"><i class="fas fa-globe"></i></span>{{result.website}}</li>
        <li><span class="fa-li"><i class="fas fa-briefcase"></i></span>{{result.company.name}}</li>
        <li><span class="fa-li"><i class="fas fa-industry"></i></span>{{result.company.bs}}</li>
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
    padding-top: 0.5rem;
    line-height: 18px;
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
    padding: 10px;
    height: 40px;
    background: #FFFFFF;
    width: 4rem;
    margin: 5px;
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
  
  .fa-ul {
    margin-left: 1rem;
  }

  .fa-li {
    color: #015989;
  }

  .fa-ul li:not(:last-child) { 
    margin-bottom: 1rem;  
  }

  @media only screen and (min-width: 768px) {
    .result {
      padding: 0;
    }

    .head {
      flex-direction: column;
    }

    .profile-picture {
      width: 100%;
      margin-left: 0;
    }

    .profile-picture > img {
      object-fit: fill;
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

    .info {
      margin: 0 2rem 1rem;
    }
  }
</style>
