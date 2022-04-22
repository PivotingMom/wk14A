import { defineStore } from "pinia";
import axios from 'axios';
export const useJokeStore = defineStore({
  id: "joke",
  state: () => {
    //jokes: []
  },
  actions: {
    generateJoke() {
      axios.get("https://geek-jokes.sameerkumar.website/api?format=json")
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
    }
  }
})