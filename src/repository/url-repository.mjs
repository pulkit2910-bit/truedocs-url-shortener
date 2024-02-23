const { Url } = require("../models/Url");
const { nanoid } = require("nanoid")
const { BASE_URL } = require("../config/index");

class UrlRepository {

    async generateShortUrl(originalUrl) {
        try {
            const result = await Url.findOne(originalUrl);
            if (result) {
                return originalUrl;
            }

            const urlId = nanoid(8);
            const baseUrl = BASE_URL;

            const newUrl = `${baseUrl}/${urlId}`;

            const url = await new Url.create({
                urlId : urlId,
                originalUrl : originalUrl,
                shortUrl : newUrl,
                date : new Date()
            })

            await Url.save();

            return url;

        } catch (error) {
            throw error;
        }
    }

}

module.exports = UrlRepository;