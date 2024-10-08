import { createSlice } from '@reduxjs/toolkit'
import { flowers } from '../data/flowers';

const initialState = {
  recommend:[],
  flowers:[],
  isModalOpen: false,
  selectedFlower: null
}

export const flowersSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers: {
    setRecommend(state,action){
      const category = action.payload
      if(category && category.toLowerCase() !== 'all'){
        state.recommend = state.flowers.filter((flower)=>flower.category.toLowerCase() === category.toLowerCase()).slice(0,10)
      } else {
        state.recommend = state.flowers.slice(0,10)
      }
    },
    setFlowers(state){
      state.flowers = flowers
    },
    openModal(state,action){
      state.isModalOpen = true
      const flower = state.flowers.find(flower=>flower.id === action.payload)
      state.selectedFlower = flower || null

    },
    closeModal(state){
      state.isModalOpen=false
      state.selectedFlower = null
    }
  },
})

export const { setRecommend,setFlowers,openModal,closeModal } = flowersSlice.actions;
export default flowersSlice.reducer;