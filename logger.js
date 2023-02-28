const logInfo = (givenRequest) => {
    console.log(
        `Request origin: ${givenRequest.get("origin")} Request url: ${
            givenRequest.urlOrigin
        } Request method: ${givenRequest.method}`
    );
};
module.exports = logInfo;
