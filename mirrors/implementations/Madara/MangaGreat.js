if (typeof registerMangaObject === "function") {
    registerMangaObject({
        mirrorName: "Manga Great",
        mirrorIcon: "mangagreat.png",
        languages: "en",
        domains: ["mangagreat.com"],
        home: "https://mangagreat.com/",
        chapter_url: /^\/(manhwa|comic|manga|webtoon|manhua|series)\/.*\/.+$/g,
        canListFullMangas: false,
        abstract: "Madara",
        abstract_options: {
            search_url: "https://mangagreat.com/",
            chapter_list_ajax: true
        }
    })
}
