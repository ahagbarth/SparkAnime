import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag';

import graphqlClient from '../utils/graphql';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    newMostPopularAnimeOfThisSeason: []
  },
  mutations: {
    NEW_MOST_POPULAR_ANIME_SEASON(state, value){
      state.newMostPopularAnimeOfThisSeason = value
    }
  },
  actions: {
    async newMostPopularAnimeOfThisSeason({ commit }) {
      const response = await graphqlClient.query({

        query: gql`{
          Page(perPage:5){
            media(type:ANIME, sort:POPULARITY_DESC){
              id
              title {
                english
              
              }
              bannerImage
            }
            }
          }
        
        `
      });
      // Trigger the `setBookList` mutation
      // which is defined above.
      commit('NEW_MOST_POPULAR_ANIME_SEASON', response.data);
    },

  },
  modules: {
  },
  getters:{
    newMostPopularAnimeOfThisSeason: state => state.newMostPopularAnimeOfThisSeason.Page
  }
})
