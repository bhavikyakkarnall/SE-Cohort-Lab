import secret from "../../secret";
import cors from 'cors';

const key = new secret();

export default class GamesService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getGame() {
        let response = await fetch(this.baseUrl + key);
        let games = await response.json();
        return games;
    }
}