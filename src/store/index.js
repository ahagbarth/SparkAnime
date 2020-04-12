import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag';
import graphqlClient from '../utils/graphql';

Vue.use(Vuex)


export default new Vuex.Store({

  state: {
    selectedAnimeId:"",
    newMostPopularAnimeOfThisSeason: [{title:'', coverImage:''}],
    carouselAnime: [{}],
    recentlyUpdated: [{}],
    selectedAnime:[{}],
    mostPopularOfAllTime:[{}]
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
    SELECTED_ANIME_ID(state, value){
      state.selectedAnimeId = value
    },
    SELECTED_ANIME(state, value){
      state.selectedAnime = value
    },
    MOST_POPULAR_OF_ALL_TIME(state, value){
      state.mostPopularOfAllTime = value
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
    selectedAnimeId(context, value){
      context.commit('SELECTED_ANIME_ID', value)
    },
    async selectedAnime({ commit }, id) {
      const response = await graphqlClient.query({
        query: gql`
        query selectedAnime($id: Int!) {
          Media(id: $id) {
            seasonYear
            title {
              romaji
              english
              native
              userPreferred
            }
            nextAiringEpisode {
              id
              airingAt
              timeUntilAiring
            }
            description
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            status
            trailer {
              id
            }
            coverImage {
              extraLarge
              large
              medium
              color
            }
            bannerImage
            updatedAt
            genres
            averageScore
            averageScore
            trending
            popularity
            studios {
              edges {
                id
                node {
                  name
                }
              }
            }
            externalLinks {
              site
            }
            streamingEpisodes {
              title
              thumbnail
              url
              site
            }
            recommendations {
              edges {
                node {
                  id
                }
              }
            }
            siteUrl
            season
            episodes
            favourites
          }
          }
        
        `,  
          variables:{
            id:id                  
          }
      })
     
      commit('SELECTED_ANIME', response.data);
    },
    async mostPopularOfAllTime ({ commit }, {perPage}) {
      const response = await graphqlClient.query({
        query: gql`
        query mostPopularOfAllTime($perPage: Int!) {
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
     
      commit('MOST_POPULAR_OF_ALL_TIME', response.data);
    },


  },
  modules: {
  },
  getters:{
    newMostPopularAnimeOfThisSeason: state => state.newMostPopularAnimeOfThisSeason.Page,
    carouselAnime: state => state.carouselAnime.Page,
    recentlyUpdated: state => state.recentlyUpdated.Page,
    selectedAnimeId: state => state.selectedAnimeId,
    selectedAnime: state => state.selectedAnime,
    mostPopularOfAllTime: state => state.mostPopularOfAllTime
  }
})
