import UrlService from "../services/url-service.js";
import { clientErrorCodes, successCodes } from "../utils/error-codes.js";

const urlService = new UrlService();

const generateShortUrl = async (req, res) => {
    try {
        const originalUrl = req.body.url;

        const result = await urlService.generateShortUrl(originalUrl);

        if (result === originalUrl) {
            return res.status(clientErrorCodes.ALREADY_EXISTS).json({
                data : result,
                success : false,
                message : "Url already exists",
                err : {}
            })
        }

        return res.status(successCodes.CREATED).json({
            data : result,
            success : true,
            message : "Successfully created short url",
            err : {}
        })

    } catch (error) {
        res.status(500).json({
            data : {},
            success : false,
            message : "Internal server error",
            err : error
        })
        throw error;
    }
}

const getOriginalUrl = async (req, res) => {
    try {
        const urlId = req.params.urlId;
        const result = await urlService.getOriginalUrl(urlId);

        if (result) {
            return res.status(successCodes.CREATED).json({
                data : result,
                success : true,
                message : "Successfully fetched original url",
                err : {}
            })
        }

        return res.status(clientErrorCodes.NOT_FOUND).json({
            data : {},
            success : true,
            message : "Original url not found",
            err : {}
        })

    } catch (error) {
        res.status(500).json({
            data : {},
            success : false,
            message : "Internal server error",
            err : error
        })
        throw error;
    }
}

export {
    generateShortUrl,
    getOriginalUrl
}