import Http from "../utils/http";
const qs = require("qs")

const httpInstance = new Http();

const baseUrl = "http://localhost:1337";

const getTags = async (withArticles) => {
    if (!withArticles) {
        return await httpInstance.get(`${baseUrl}/api/tags`);
    }
    const query = qs.stringify(
        {
            populate: {
                articles: {
                    fields: ['title', 'is_top', 'type'],
                    populate: {
                        cover: {
                            fields: ['url']
                        }
                    }
                },
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/tags?${query}`);
}

const getArticles = async (tagId) => {
    if (!tagId) {
        return await httpInstance.get(`${baseUrl}/api/articles`);
    }
    const query = qs.stringify(
        {
            filters: {
                tag: {
                    id: {
                        $eq: tagId,
                    }
                },
            },
            populate: {
                tag: {
                    fields: ['id'],
                },
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/articles?${query}`);
}

module.exports = {
    getTags,
    getArticles
}