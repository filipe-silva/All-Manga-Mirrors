if (typeof registerMangaObject === "function") {
    registerMangaObject({
        mirrorName: "ManhuaPlus",
        mirrorIcon: "manhuaplus.png",
        languages: "en",
        domains: ["manhuaplus.com"],
        home: "https://manhuaplus.com/",
        chapter_url: /^\/(manhwa|comic|manga|webtoon|manhua|series)\/.*\/.+$/g,
        canListFullMangas: false,
        abstract: "Madara",
        abstract_options: {
            search_url: "https://manhuaplus.com/",
            search_a_sel: "div.post-title > h3 > a",
            chapter_list_ajax: true,
            isekai_chapter_url: true
        }
    })
}
