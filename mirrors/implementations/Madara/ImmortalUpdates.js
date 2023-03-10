if (typeof registerMangaObject === "function") {
    registerMangaObject({
        mirrorName: "Immortal Updates",
        mirrorIcon: "immortalupdates.png",
        languages: "en",
        domains: ["immortalupdates.com"],
        home: "https://immortalupdates.com/",
        chapter_url: /^\/(manhwa|comic|manga|webtoon|manhua|series)\/.*\/.+$/g,
        canListFullMangas: false,
        abstract: "Madara",
        abstract_options: {
            search_url: "https://immortalupdates.com/",
            chapter_list_ajax: true,
            isekai_chapter_url: true
        }
    })
}
