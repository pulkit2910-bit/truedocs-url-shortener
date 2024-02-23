const { UrlRepository } = require("../repository/index");

const urlRepository = new UrlRepository();

const generateShortUrl = async (req, res) => {
    try {
        const originalUrl = req.body.url;

        const result = await urlRepository.generateShortUrl(originalUrl);

        if (result === originalUrl) {
            return res.status(403).json({
                data : result,
                success : false,
                message : "Url already exists",
                err : {}
            })
        }

        return res.status(201).json({
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
    }
}

module.exports = {
    generateShortUrl
}