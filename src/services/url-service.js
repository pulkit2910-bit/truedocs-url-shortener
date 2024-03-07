import { UrlRepository } from "../repository/index.js";

class UrlService {

    constructor() {
        this.urlRepository = new UrlRepository();
    }

    async generateShortUrl(originalUrl) {
        try {
            const result = await this.urlRepository.generateShortUrl(originalUrl);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getOriginalUrl(urlId) {
        try {
            const result = await this.urlRepository.getOriginalUrl(urlId);
            return result;
        } catch (error) {
            throw error;
        }
    }

}

export default UrlService;