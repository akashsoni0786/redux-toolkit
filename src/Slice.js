import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  game: [
    {
      rotate: false,
      id: "111",
      match: "111",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNZg1jcN9vbQMLED6sUPXAR9f7bidtoyfMg&usqp=CAU",
    },
    {
      rotate: false,
      id: "222",
      match: "222",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3YAfczidYzm7iTUvvxShmIfJ0JwT554ZLg&usqp=CAU",
    },

    {
      rotate: false,
      id: "333",
      match: "333",
      img: "https://i.pinimg.com/736x/8d/c3/e2/8dc3e2cd442257d9e450b4b74b7f91ac.jpg",
    },

    {
      rotate: false,
      id: "444",
      match: "444",
      img: "https://rukminim1.flixcart.com/image/416/416/kph8h3k0/poster/e/w/4/large-adorable-cat-poster-cute-kittens-poster-cat-poster-funny-original-imag3p7tcxuzhpn2.jpeg?q=70",
    },

    {
      rotate: false,
      id: "555",
      match: "555",
      img: "https://cdn2.sharechat.com/CuteRabbit.._11a4c6a6_1643787742842_sc_exp_cmprsd_75.jpg",
    },

    {
      rotate: false,
      id: "666",
      match: "666",
      img: "https://i.etsystatic.com/16945464/r/il/94aaec/2962199690/il_fullxfull.2962199690_l54p.jpg",
    },
    {
      rotate: false,
      id: "777",
      match: "777",
      img: "https://media.istockphoto.com/photos/cute-white-pet-rat-portrait-with-black-background-picture-id1052049312?k=20&m=1052049312&s=612x612&w=0&h=8GO5bqsuyXAilYBEikGSHAJry_9DRTra0JKPhOGBPUc=",
    },

    {
      rotate: false,
      id: "888",
      match: "888",
      img: "https://i.pinimg.com/736x/f8/4b/c8/f84bc8b2cdce3f06ee9a5c9610d0f54a.jpg",
    },
    {
      rotate: false,
      id: "999",
      match: "111",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNZg1jcN9vbQMLED6sUPXAR9f7bidtoyfMg&usqp=CAU",
    },
    {
      rotate: false,
      id: "1000",
      match: "222",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3YAfczidYzm7iTUvvxShmIfJ0JwT554ZLg&usqp=CAU",
    },

    {
      rotate: false,
      id: "2000",
      match: "333",
      img: "https://i.pinimg.com/736x/8d/c3/e2/8dc3e2cd442257d9e450b4b74b7f91ac.jpg",
    },

    {
      rotate: false,
      id: "3000",
      match: "444",
      img: "https://rukminim1.flixcart.com/image/416/416/kph8h3k0/poster/e/w/4/large-adorable-cat-poster-cute-kittens-poster-cat-poster-funny-original-imag3p7tcxuzhpn2.jpeg?q=70",
    },

    {
      rotate: false,
      id: "4000",
      match: "555",
      img: "https://cdn2.sharechat.com/CuteRabbit.._11a4c6a6_1643787742842_sc_exp_cmprsd_75.jpg",
    },

    {
      rotate: false,
      id: "5000",
      match: "666",
      img: "https://i.etsystatic.com/16945464/r/il/94aaec/2962199690/il_fullxfull.2962199690_l54p.jpg",
    },
    {
      rotate: false,
      id: "6000",
      match: "777",
      img: "https://media.istockphoto.com/photos/cute-white-pet-rat-portrait-with-black-background-picture-id1052049312?k=20&m=1052049312&s=612x612&w=0&h=8GO5bqsuyXAilYBEikGSHAJry_9DRTra0JKPhOGBPUc=",
    },

    {
      rotate: false,
      id: "7000",
      match: "888",
      img: "https://i.pinimg.com/736x/f8/4b/c8/f84bc8b2cdce3f06ee9a5c9610d0f54a.jpg",
    },
  ],
  value: 0,
  amount: 1,
};

export const gameSlice = createSlice({
  name: "memorygatempme",
  initialState,
  reducers: {
    changeRotate: (state, actions) => {
      const temp = state.game.map((i) =>
        actions.payload.id === i.id ? { ...i, rotate: true } : i
      );
      return {
        ...state,
        game: temp,
      };
    },

    matching: (state, actions) => {
      const temp2 = state.game.map((i) =>
        actions.payload.s1.id === i.id
          ? {
              ...i,
              img: "https://image.shutterstock.com/image-vector/check-mark-icon-tick-symbol-260nw-1938875785.jpg",
              match:"match"
            }
          : i
      );
      const temp3 = temp2.map((i) =>
        actions.payload.s2.id === i.id
          ? {
              ...i,
              img: "https://image.shutterstock.com/image-vector/check-mark-icon-tick-symbol-260nw-1938875785.jpg",
              match:"match"
            }
          : i
      );
      return {
        ...state,
        game: temp3,
      };
    },

    notmatching: (state, actions) => {
      const temp2 = state.game.map((i) =>
        actions.payload.s1.id === i.id
          ? { ...i, rotate: false } 
          : i
      );
      const temp3 = temp2.map((i) =>
        actions.payload.s2.id === i.id
          ? { ...i, rotate: false } 
          : i
      );
      return {
        ...state,
        game: temp3,
      };
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeRotate, matching, notmatching } = gameSlice.actions;

export default gameSlice.reducer; // gameReducer  in Store.js
