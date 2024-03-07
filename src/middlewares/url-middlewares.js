import { clientErrorCodes } from "../utils/error-codes.js";

function validateUrl(req, res, next) {
    const originalUrl = req.body.url;
    if (!originalUrl) {
        return res.status(clientErrorCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            message : "No url found",
            err : {},
        });
    }

    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i');

    const result = urlPattern.test(originalUrl);

    if (!result) {
        return res.status(clientErrorCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            message : "Invalid original url",
            err : {},
        });
    }

    next();
}

export {
    validateUrl
}
