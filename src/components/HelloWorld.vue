<template>
  <div class="hello">
    <h1>Convert, browse and clear cached images and files.</h1>
    <p class="info">
      <b>Images you see online are never deleted immediately, unless you delete them of course.</b>
      <br>Most desktop apps have a cache directory, not all provide the tools to clear it. CacheMonkey not only lets you purge cache files, but browse and filter through them too.
    </p>
    <h3>Download for Windows and Mac</h3>

    <ul class="download-buttons">
      <li>
        <a @click="showmessage = true" :href="windows">
          <div class="download-button">
            <fa class="icon" :icon="['fab','windows']"/>
          </div>
        </a>
      </li>
      <li>
        <a :href="mac">
          <div class="download-button">
            <fa class="icon" :size="30" :icon="['fab','apple']"/>
          </div>
        </a>
      </li>
    </ul>
    <div class="info-message" v-if="showmessage">
      <h3>Please note:</h3>
      <p>If Windows defender pops up to warn you that the program is from an unidentified developer, I wouldn't worry. Just click "More Info", then "Install Anyway". We're still waiting for the code signature certififcate to be approved. Our code is open source on Github, if you want to verifiy it's all safe!</p>
    </div>
    <ul>
      <li>
        <a href="http://twitter.com/jamiepine" target="_blank">Twitter</a>
      </li>
      <li>
        <a href="http://youtube.com/jamiepine" target="_blank">YouTube</a>
      </li>
      <li>
        <a href="http://youtube.com/jamiepinelive" target="_blank">Twitch</a>
      </li>
      <li>
        <a href="https://github.com/jamiepine" target="_blank">Github</a>
      </li>
    </ul>
    <img width="1000px" src="../assets/img.jpg">
    <img width="1000px" src="../assets/img1.jpg">
    <img width="1000px" src="../assets/img2.jpg">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  mounted() {
    axios
      .get(
        "https://api.github.com/repos/jamiepine/cache-monkey/releases/latest"
      )
      .then(response => {
        this.windows = response.data.assets.filter(
          asset => asset.content_type == "application/x-msdownload"
        )[0].browser_download_url;
        this.mac = response.data.assets.filter(
          asset =>
            asset.content_type == "application/octet-stream" &&
            asset.name.includes(".dmg")
        )[0].browser_download_url;
      })
      .catch(error => {
        this.windows =
          "https://github.com/jamiepine/cache-monkey/releases/latest";
        this.mac = "https://github.com/jamiepine/cache-monkey/releases/latest";
      });
  },
  data() {
    return {
      windows: "",
      mac: "",
      showmessage: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b47439;
}
.info-message {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #36863a;
  max-width: 760px;
  margin: auto;
  background: #50b364;
  color: #fff;
  margin-bottom: 20px;
}
.download-buttons {
  margin-bottom: 30px;
}
.download-button {
  padding: 24px 33px;
  border-radius: 20px;
  color: #5f5f5f;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.096);
  transition: 200ms;
  cursor: pointer;
  .icon {
    font-size: 40px;
  }
  &:hover {
    color: #1d1d1d;
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.096);
  }
}
.info {
  max-width: 700px;
  margin: auto;
}
</style>
