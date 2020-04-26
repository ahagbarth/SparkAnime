import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag';
import graphqlClient from '../utils/graphql';

Vue.use(Vuex)


export default new Vuex.Store({

  state: {
    ////////// ANIME //////////////
    selectedAnimeId:"",
    newMostPopularAnimeOfThisSeason: [{title:'', coverImage:''}],
    carouselAnime: [{}],
    recentlyUpdated: [{}],
    selectedAnime:[{}],
    mostPopularOfAllTime:[{}],
    highestRatedAnimeOfAllTime:[{}],

    ///////////MANGA //////////////
    carouselManga: [{}],
    selectedMangaId:"",
    newMostPopularMangaOfThisSeason: [{}],
    recentlyUpdatedManga: [{}],
    selectedManga:[{}],
    mostPopularMangaOfAllTime:[{}],
    highestRatedMangaOfAllTime:[{}],

    ///////// SEARCH /////////////////
    searchedResult: [{}],

  },
  mutations: {
    ////////// ANIME //////////////
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
    },
    HIGHEST_RATED_ANIME_OF_ALL_TIME(state, value){
      state.highestRatedAnimeOfAllTime = value
    },
    ///////////MANGA //////////////
    NEW_MOST_POPULAR_MANGA_SEASON(state, value){
      state.newMostPopularMangaOfThisSeason = value
    },
    CAROUSEL_MANGA(state, value){
      state.carouselManga = value
    },
    RECENTLY_UPDATED_MANGA(state, value){
      state.recentlyUpdatedManga = value
    },
    SELECTED_MANGA_ID(state, value){
      state.selectedMangaId = value
    },
    SELECTED_MANGA(state, value){
      state.selectedManga = value
    },
    MOST_POPULAR_MANGA_OF_ALL_TIME(state, value){
      state.mostPopularMangaOfAllTime = value
    },
    HIGHEST_RATED_MANGA_OF_ALL_TIME(state, value){
      state.highestRatedMangaOfAllTime = value
    },
    //////////SEARCH ////////////////
    SEARCHED_RESULT(state, value){
      state.searchedResult = value
    },
  },
  actions: {
    ////////////ANIME ///////////
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
    async newMostPopularAnimeOfThisSeason({ commit }, {perPage, season, seasonYear, sort, status, genres, tags}) {
      const sortOrNot = sort ? `sort:${sort},` : '';
      const statusOrNot = status ? `status:${status},` : '';
      const genresOrNot = genres ? `genre:"${genres}",` : '';
      const tagsOrNot = tags ? `tag:"${tags}",` : '';
      // const season = "WINTER";
      const response = await graphqlClient.query({
        query: gql`
        query getMostPopularAnimeThisSeason($perPage: Int,  $seasonYear: Int) {
          Page(perPage: $perPage){
            media(type:ANIME, season:${season}, isAdult:false, seasonYear:$seasonYear, ${sortOrNot} ${statusOrNot} ${genresOrNot} ${tagsOrNot}){
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
            media(type:ANIME ,status:RELEASING, sort:UPDATED_AT_DESC, isAdult:false){
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
            streamingEpisodes {
              title
              thumbnail
              url
              site
            }

            siteUrl
            season
            episodes
            favourites
            recommendations(perPage:4, sort:RATING_DESC){
              edges {
                node {
                  id
                  rating
          
                  mediaRecommendation {
                    id
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
            }
            relations {
              edges {
                id
                relationType
                node{
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    
                  }
                }
              }
            }
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
            media(type:ANIME , sort:POPULARITY_DESC, isAdult:false){
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
    async highestRatedAnimeOfAllTime ({ commit }, {perPage}) {
      const response = await graphqlClient.query({
        query: gql`
        query highestRatedAnimeOfAllTime($perPage: Int!) {
          Page(perPage: $perPage){
            media(type:ANIME , sort:SCORE_DESC, isAdult:false){
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
     
      commit('HIGHEST_RATED_ANIME_OF_ALL_TIME', response.data);
    },
    ////////////MANGA//////////////
    async carouselManga({ commit }) {
     
      const response = await graphqlClient.query({

        query: gql`{
          Page(perPage:5){
            media(type:MANGA, sort:POPULARITY_DESC){
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
      commit('CAROUSEL_MANGA', response.data);
    },
    async newMostPopularMangaOfThisSeason({ commit }, {perPage, seasonYear}) {
      const response = await graphqlClient.query({
        query: gql`
        query getMostPopularMangaThisSeason($perPage: Int,  $seasonYear: Int) {
          Page(perPage: $perPage){
            media(type:MANGA, seasonYear:$seasonYear, sort:POPULARITY_DESC, isAdult:false){
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
     
      commit('NEW_MOST_POPULAR_MANGA_SEASON', response.data);
    },
    async recentlyUpdatedManga({ commit }, {perPage}) {
      const response = await graphqlClient.query({
        query: gql`
        query test($perPage: Int!) {
          Page(perPage: $perPage){
            media(type:MANGA ,status:RELEASING, sort:UPDATED_AT_DESC, isAdult:false){
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
     
      commit('RECENTLY_UPDATED_MANGA', response.data);
    },
    selectedMangaId(context, value){
      context.commit('SELECTED_MANGA_ID', value)
    },
    async selectedManga({ commit }, id) {
      const response = await graphqlClient.query({
        query: gql`
        query selectedManga($id: Int!) {
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
            streamingEpisodes {
              title
              thumbnail
              url
              site
            }

            siteUrl
            season
            episodes
            favourites
            recommendations(perPage:4, sort:RATING_DESC){
              edges {
                node {
                  id
                  rating
          
                  mediaRecommendation {
                    id
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
            }
            relations {
              edges {
                id
                relationType
                node{
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage {
                    extraLarge
                    
                  }
                }
              }
            }
          }
          }
        
        `,  
          variables:{
            id:id                  
          }
      })
     
      commit('SELECTED_MANGA', response.data);
    },
    async mostPopularMangaOfAllTime ({ commit }, {perPage}) {
      const response = await graphqlClient.query({
        query: gql`
        query mostPopularMangaOfAllTime($perPage: Int!) {
          Page(perPage: $perPage){
            media(type:MANGA , sort:POPULARITY_DESC, isAdult:false){
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
     
      commit('MOST_POPULAR_MANGA_OF_ALL_TIME', response.data);
    },
    async highestRatedMangaOfAllTime ({ commit }, {perPage}) {
      const response = await graphqlClient.query({
        query: gql`
        query highestRatedMangaOfAllTime($perPage: Int!) {
          Page(perPage: $perPage){
            media(type:MANGA , sort:SCORE_DESC, isAdult:false){
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
     
      commit('HIGHEST_RATED_MANGA_OF_ALL_TIME', response.data);
    },
    ///////////// SEARCH ///////////////////

    async searchedResult({ commit }, {perPage, searchQuery}) {
      console.log(searchQuery)
      const response = await graphqlClient.query({
        query: gql`
        query searchedResult($perPage: Int!) {
          Page(perPage: $perPage){
            media(search:"${searchQuery}"){
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
     
      commit('SEARCHED_RESULT', response.data);
    },


  },
  modules: {
  },
  getters:{
    /////////////ANIME /////////////
    newMostPopularAnimeOfThisSeason: state => state.newMostPopularAnimeOfThisSeason.Page,
    carouselAnime: state => state.carouselAnime.Page,
    recentlyUpdated: state => state.recentlyUpdated.Page,
    selectedAnimeId: state => state.selectedAnimeId,
    selectedAnime: state => state.selectedAnime,
    mostPopularOfAllTime: state => state.mostPopularOfAllTime.Page,
    highestRatedAnimeOfAllTime: state => state.highestRatedAnimeOfAllTime.Page,
    /////////////MANGA //////////////////
    carouselManga: state => state.carouselManga.Page,
    newMostPopularMangaOfThisSeason: state => state.newMostPopularMangaOfThisSeason.Page,
    recentlyUpdatedManga: state => state.recentlyUpdatedManga.Page,
    selectedMangaId: state => state.selectedMangaId,
    selectedManga: state => state.selectedManga,
    mostPopularMangaOfAllTime: state => state.mostPopularMangaOfAllTime.Page,
    highestRatedMangaOfAllTime: state => state.highestRatedMangaOfAllTime.Page,
    ////////////////SEARCH /////////////////
    searchedResult: state => state.searchedResult.Page,

  }
})
