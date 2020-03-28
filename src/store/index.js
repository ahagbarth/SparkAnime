import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag';
import graphqlClient from '../utils/graphql';

Vue.use(Vuex)


export default new Vuex.Store({

  state: {
    newMostPopularAnimeOfThisSeason: [{title:'', coverImage:''}],
    carouselAnime: [{}],
    recentlyUpdated: [{}],
    selectedAnime:""
  },
  mutations: {
    NEW_MOST_POPULAR_ANIME_SEASON(state, value){
      state.newMostPopularAnimeOfThisSeason = value
    },
    CAROUSEL_ANIME(state, value){
      state.carouselAnime = value
    },
    RECENTLY_UPDATED(state, value){
      state.recentlyUpdated = value
    },
    SELECTED_ANIME(state, value){
      state.selectedAnime = value
    }
  },
  actions: {
    async carouselAnime({ commit }) {
     
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
      commit('CAROUSEL_ANIME', response.data);
    },
    async newMostPopularAnimeOfThisSeason({ commit }, {perPage, season, seasonYear}) {
      // const season = "WINTER";
      const response = await graphqlClient.query({
        query: gql`
        query getMostPopularAnimeThisSeason($perPage: Int,  $seasonYear: Int) {
          Page(perPage: $perPage){
            media(type:ANIME, season:${season}, seasonYear:$seasonYear, sort:POPULARITY_DESC){
              id
              title {
                romaji
                english
              } 
              coverImage {
                extraLarge
                large
                medium
                color
              }
              genres
              description
            }
            }
          }
        
        `,  
          variables:{
            perPage:perPage,      
            seasonYear: seasonYear
            
          }
      });
     
      commit('NEW_MOST_POPULAR_ANIME_SEASON', response.data);
    },
    async recentlyUpdated({ commit }, {perPage}) {
      const response = await graphqlClient.query({
        query: gql`
        query test($perPage: Int!) {
          Page(perPage: $perPage){
            media(type:ANIME ,status:RELEASING, sort:UPDATED_AT_DESC){
              id
              status
              description
              updatedAt
              genres
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              } 
            }
            }
          }
        
        `,  
          variables:{
            perPage:perPage,                  
          }
      });
     
      commit('RECENTLY_UPDATED', response.data);
    },
    selectedAnime(context, value){
      context.commit('SELECTED_ANIME', value)
    }
  },
  modules: {
  },
  getters:{
    newMostPopularAnimeOfThisSeason: state => state.newMostPopularAnimeOfThisSeason.Page,
    carouselAnime: state => state.carouselAnime.Page,
    recentlyUpdated: state => state.recentlyUpdated.Page,
    selectedAnime: state => state.selectedAnime
  }
})
