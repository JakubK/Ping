<template>
  <div class="about">
    <div class="about__content">
      <template v-for="(item, index) in items">
        <div class="section about__section">
          <div class="section__left">
            <h1>{{ item.title[currentLang] }}</h1>
            <img :src="item.image"/>
          </div>
          <br/>
          <div class="section__right">
            <div class="section__symbol">
              <img src="data:image/png;base64,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"/>
            </div>
            <template v-for="(content, cIndex) in item.content[currentLang]">
              <template v-if="content.type === 'paragraph'">
                <br v-if="cIndex > 0"/>
                <p>{{ content.text }}</p>
                <br/>
              </template>
              <ul v-if="content.type === 'list-item'">
                <li>{{ content.text }}</li>
              </ul>
            </template>
          </div>
        </div>
        <div class="clearfix" v-if="index < items.length - 1"></div>
      </template>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { client } from '~/apollo/client';
import { mapGetters } from 'vuex';
import getAboutItems from '~/graphql/getAboutItems.gql';
import HoverLink from '~/components/HoverLink.vue';

export default Vue.extend({
  name: 'About',
  data() {
    return {
      items: []
    }
  },
  components: {
    HoverLink,
  },
  computed: {
    ...mapGetters([
      'lang'
    ]),
    currentLang() {
      return this.lang.substring(0,2)
    }
  },
  async asyncData() {
    const { data } = await client.query({query: getAboutItems});
    const items = data.allAboutitems.edges.map(edge => {
      const title = edge.node.title[0];
      const content = edge.node.content[0];
      const image = edge.node.image.url;

      return {
        title,
        image,
        content
      }
    })

    return {
      items
    }
  }

});

</script>

<style src="./about.css" scoped/>
