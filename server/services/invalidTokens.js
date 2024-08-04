const invalidAccessTokens = [];

const invalidateAccessToken = (token) => {
    if (!invalidAccessTokens.includes(token)) {
        invalidAccessTokens.push(token);
    }
};
module.exports = invalidateAccessToken;
