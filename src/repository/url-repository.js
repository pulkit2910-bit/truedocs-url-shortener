import Url from "../models/Url.js";
import { nanoid } from "nanoid";

class UrlRepository {

    async generateShortUrl(originalUrl) {
        try {
            const result = await Url.findOne({
                originalUrl: originalUrl
            });
            if (result) {
                return originalUrl;
            }

            const urlId = nanoid(6);
            const baseUrl = 'http://truedocs.ai';

            const newUrl = `${baseUrl}/${urlId}`;

            const url = await Url.create({
                urlId : urlId,
                originalUrl : originalUrl,
                shortUrl : newUrl,
                date : new Date()
            })

            return url;

        } catch (error) {
            throw error;
        }
    }

    async getOriginalUrl(urlId) {
        try {
            const url = await Url.findOne({
                urlId : urlId
            })
            if (url) {
                await Url.updateOne(
                { urlId : urlId },
                {
                    $inc : { counts : 1 }
                });

                return url.originalUrl;
            }

            return null;
        } catch (error) {
            throw error;
        }
    }

}

export default UrlRepository;