import Http from "../utils/http";

const qs = require("qs")

const httpInstance = new Http();

const baseUrl = "http://localhost:1337";

const getHome = async () => {
    const query = qs.stringify(
        {
            populate: {
                banner: {
                    populate: {
                        banner_items: {
                            populate: {
                                image: {
                                    fields: ["url"],
                                }
                            }
                        },
                        school_logo: {
                            fields: ["url"]
                        }
                    }
                },
                navs: {
                    populate: {
                        image: {
                            fields: ["url"],
                        }
                    },
                    sort: ['sort_index:asc'],
                },
                notices: '*'
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/home-page?${query}`);
}

const getTags = async (withArticles) => {
    if (!withArticles) {
        return await httpInstance.get(`${baseUrl}/api/tags`);
    }
    const query = qs.stringify(
        {
            populate: {
                articles: {
                    fields: ['title', 'is_top', 'type', 'is_jump'],
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

const getArticles = async ({tagId, page, pageSize}) => {
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
            pagination: {
                page: page ? page : 0,
                pageSize: pageSize ? pageSize : 10,
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/articles?${query}`);
}

const getArticle = async (id) => {
    return await httpInstance.get(`${baseUrl}/api/articles/${id}`);
    // if (!tagId) {
    //     return await httpInstance.get(`${baseUrl}/api/articles`);
    // }
    // const query = qs.stringify(
    //     {
    //         filters: {
    //             id: {
    //                 $eq: tagId,
    //             },
    //         },
    //         populate: {
    //             tag: {
    //                 fields: ['id'],
    //             },
    //         },
    //     },
    //     {
    //         encodeValuesOnly: true, // prettify URL
    //     }
    // );
    // return await httpInstance.get(`${baseUrl}/api/articles?${query}`);
}

const getFaculties = async ({page, pageSize}) => {
    const query = qs.stringify(
        {
            pagination: {
                page: page,
                pageSize: pageSize,
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/faculties?${query}`);
}

const getFaculty = async ({id}) => {
    const query = qs.stringify(
        {
            populate: {
                faculty_majors: {
                    fields: ['name', 'intro_type', 'intro_text'],
                    filter: {
                        is_del: {
                            $eq: 0,
                        }
                    }
                },
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/faculties/${id}?${query}`);
}

const getCollegeIntroduction = async () => {
    return await httpInstance.get(`${baseUrl}/api/college-introduction`);
}

const getSceneries = async ({page, pageSize}) => {
    const query = qs.stringify(
        {
            pagination: {
                page: page,
                pageSize: pageSize,
            },
            sort: ['sort:asc'],
            populate: {
                image: {
                    fields: ['url']
                },
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/sceneries?${query}`);
}

const getContactConfigs = async () => {
    const query = qs.stringify(
        {

        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/api/contact-configs?${query}`);
}

const getBottoms = async () => {
    const query = qs.stringify(
        {
            sort: ['sort:asc'],
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    return await httpInstance.get(`${baseUrl}/miniapp/bottom?${query}`);
}

module.exports = {
    baseUrl,
    getTags,
    getArticles,
    getFaculties,
    getFaculty,
    getCollegeIntroduction,
    getArticle,
    getSceneries,
    getHome,
    getContactConfigs,
    getBottoms
}