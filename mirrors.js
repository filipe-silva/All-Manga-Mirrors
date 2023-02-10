const mirrorsPath = [
    "mirrors\\implementations\\Abstracts\\ComiCake.js",
    "mirrors\\implementations\\Abstracts\\FoolSlide.js",
    "mirrors\\implementations\\Abstracts\\FunMangaAbs.js",
    "mirrors\\implementations\\Abstracts\\GenkanAbs.js",
    "mirrors\\implementations\\Abstracts\\Madara.js",
    "mirrors\\implementations\\Abstracts\\MangakakalotAbs.js",
    "mirrors\\implementations\\Abstracts\\MangastreamAbs.js",
    "mirrors\\implementations\\Abstracts\\MangaStream_1_1_4Abs.js",
    "mirrors\\implementations\\Abstracts\\MyMangaReaderCMS.js",
    "mirrors\\implementations\\Abstracts\\NextJs.js",
    "mirrors\\implementations\\Abstracts\\ReadMangaAbs.js",
    "mirrors\\implementations\\Disabled\\Aloalivn.js",
    "mirrors\\implementations\\Disabled\\ArangScans.js",
    "mirrors\\implementations\\Disabled\\Bacamanga.js",
    "mirrors\\implementations\\Disabled\\BangAqua.js",
    "mirrors\\implementations\\Disabled\\CatManga.js",
    "mirrors\\implementations\\Disabled\\DokiReader.js",
    "mirrors\\implementations\\Disabled\\Dokusha.js",
    "mirrors\\implementations\\Disabled\\EasyGoing.js",
    "mirrors\\implementations\\Disabled\\EdelgardeScans.js",
    "mirrors\\implementations\\Disabled\\Elpsykongroo.js",
    "mirrors\\implementations\\Disabled\\FosScans.js",
    "mirrors\\implementations\\Disabled\\GekkouScans.js",
    "mirrors\\implementations\\Disabled\\GlitchyComics.js",
    "mirrors\\implementations\\Disabled\\HatigarmScans.js",
    "mirrors\\implementations\\Disabled\\HelveticaScans.js",
    "mirrors\\implementations\\Disabled\\HeroManhua.js",
    "mirrors\\implementations\\Disabled\\ItaScan.js",
    "mirrors\\implementations\\Disabled\\JaiminisBox.js",
    "mirrors\\implementations\\Disabled\\KKJScans.js",
    "mirrors\\implementations\\Disabled\\Komikgo.js",
    "mirrors\\implementations\\Disabled\\Komikgue.js",
    "mirrors\\implementations\\Disabled\\Komikindo.js",
    "mirrors\\implementations\\Disabled\\LoveHeaven.js",
    "mirrors\\implementations\\Disabled\\Mangachan.js",
    "mirrors\\implementations\\Disabled\\MangaDex.js",
    "mirrors\\implementations\\Disabled\\MangaHost.js",
    "mirrors\\implementations\\Disabled\\MangaichiScans.js",
    "mirrors\\implementations\\Disabled\\mangalib.js",
    "mirrors\\implementations\\Disabled\\mangapanda.js",
    "mirrors\\implementations\\Disabled\\MangaReader.js",
    "mirrors\\implementations\\Disabled\\MangaRock.js",
    "mirrors\\implementations\\Disabled\\Mangashiro.js",
    "mirrors\\implementations\\Disabled\\MangaStream.js",
    "mirrors\\implementations\\Disabled\\MangaTurf.js",
    "mirrors\\implementations\\Disabled\\MangaTurk.js",
    "mirrors\\implementations\\Disabled\\MangazukiInfo.js",
    "mirrors\\implementations\\Disabled\\MartialScans.js",
    "mirrors\\implementations\\Disabled\\MethodScans.js",
    "mirrors\\implementations\\Disabled\\NaniScans.js",
    "mirrors\\implementations\\Disabled\\Neumanga.js",
    "mirrors\\implementations\\Disabled\\NinjaScans.js",
    "mirrors\\implementations\\Disabled\\OTScans.js",
    "mirrors\\implementations\\Disabled\\Pecintakomik.js",
    "mirrors\\implementations\\Disabled\\PhoenixSerenade.js",
    "mirrors\\implementations\\Disabled\\PMScans.js",
    "mirrors\\implementations\\Disabled\\ProjectTimeScans.js",
    "mirrors\\implementations\\Disabled\\RoseliaScans.js",
    "mirrors\\implementations\\Disabled\\SamManga.js",
    "mirrors\\implementations\\Disabled\\SecretScans.js",
    "mirrors\\implementations\\Disabled\\SocialWeebs.js",
    "mirrors\\implementations\\Disabled\\SorcererWeekly.js",
    "mirrors\\implementations\\Disabled\\Taptaptaptaptap.js",
    "mirrors\\implementations\\Disabled\\TwistedHelScans.js",
    "mirrors\\implementations\\Disabled\\VanguardScans.js",
    "mirrors\\implementations\\Disabled\\WorldThree.js",
    "mirrors\\implementations\\Disabled\\Yomanga.js",
    "mirrors\\implementations\\FoolSlide\\CatScans.js",
    "mirrors\\implementations\\FoolSlide\\DeathTollScans.js",
    "mirrors\\implementations\\FoolSlide\\EvilFlowers.js",
    "mirrors\\implementations\\FoolSlide\\HastaReader.js",
    "mirrors\\implementations\\FoolSlide\\KangaryuTeam.js",
    "mirrors\\implementations\\FoolSlide\\KireiCake.js",
    "mirrors\\implementations\\FoolSlide\\KonekoScantrad.js",
    "mirrors\\implementations\\FoolSlide\\LeCercleDuScan.js",
    "mirrors\\implementations\\FoolSlide\\LetItGoScans.js",
    "mirrors\\implementations\\FoolSlide\\SilentSkyScans.js",
    "mirrors\\implementations\\FoolSlide\\Vortex.js",
    "mirrors\\implementations\\FunManga\\FunManga.js",
    "mirrors\\implementations\\FunManga\\MangaInn.js",
    "mirrors\\implementations\\FunManga\\ReadMangaToday.js",
    "mirrors\\implementations\\Genkan\\LynxScans.js",
    "mirrors\\implementations\\Genkan\\NoNames.js",
    "mirrors\\implementations\\Genkan\\SenseScans.js",
    "mirrors\\implementations\\Madara\\247Manga.js",
    "mirrors\\implementations\\Madara\\AquaManga.js",
    "mirrors\\implementations\\Madara\\AstralLibrary.js",
    "mirrors\\implementations\\Madara\\ChibiManga.js",
    "mirrors\\implementations\\Madara\\ComicDom.js",
    "mirrors\\implementations\\Madara\\ComicKiba.js",
    "mirrors\\implementations\\Madara\\DisasterScans.js",
    "mirrors\\implementations\\Madara\\DragonTea.js",
    "mirrors\\implementations\\Madara\\GDScans.js",
    "mirrors\\implementations\\Madara\\Hiperdex.js",
    "mirrors\\implementations\\Madara\\HunlightScans.js",
    "mirrors\\implementations\\Madara\\ImmortalUpdates.js",
    "mirrors\\implementations\\Madara\\ImperfectComics.js",
    "mirrors\\implementations\\Madara\\IsekaiScans.js",
    "mirrors\\implementations\\Madara\\KunManga.js",
    "mirrors\\implementations\\Madara\\LevelerScans.js",
    "mirrors\\implementations\\Madara\\LeviatanScans.js",
    "mirrors\\implementations\\Madara\\LeviatanScans_ES.js",
    "mirrors\\implementations\\Madara\\LHTranslations.js",
    "mirrors\\implementations\\Madara\\LilyManga.js",
    "mirrors\\implementations\\Madara\\Manga1st.js",
    "mirrors\\implementations\\Madara\\Manga1stOnline.js",
    "mirrors\\implementations\\Madara\\Manga347.js",
    "mirrors\\implementations\\Madara\\MangaBob.js",
    "mirrors\\implementations\\Madara\\MangaCultivator.js",
    "mirrors\\implementations\\Madara\\MangaDods.js",
    "mirrors\\implementations\\Madara\\MangaGreat.js",
    "mirrors\\implementations\\Madara\\MangaKomi.js",
    "mirrors\\implementations\\Madara\\MangaSushi.js",
    "mirrors\\implementations\\Madara\\MangaSy.js",
    "mirrors\\implementations\\Madara\\MangaTx.js",
    "mirrors\\implementations\\Madara\\Mangazuki_me.js",
    "mirrors\\implementations\\Madara\\ManhuaFast.js",
    "mirrors\\implementations\\Madara\\ManhuaPlus.js",
    "mirrors\\implementations\\Madara\\Manhuas.js",
    "mirrors\\implementations\\Madara\\Manhuaus.js",
    "mirrors\\implementations\\Madara\\ManhwaClub.js",
    "mirrors\\implementations\\Madara\\Manytoon.js",
    "mirrors\\implementations\\Madara\\MixedManga.js",
    "mirrors\\implementations\\Madara\\MMScans.js",
    "mirrors\\implementations\\Madara\\NightComic.js",
    "mirrors\\implementations\\Madara\\RandomTranslations.js",
    "mirrors\\implementations\\Madara\\ReadManhua.js",
    "mirrors\\implementations\\Madara\\ResetScans.js",
    "mirrors\\implementations\\Madara\\RuyaManga.js",
    "mirrors\\implementations\\Madara\\S2Manga.js",
    "mirrors\\implementations\\Madara\\Sawamics.js",
    "mirrors\\implementations\\Madara\\SetsuScans.js",
    "mirrors\\implementations\\Madara\\ShoujoHearts.js",
    "mirrors\\implementations\\Madara\\SKScans.js",
    "mirrors\\implementations\\Madara\\Toonily.js",
    "mirrors\\implementations\\Madara\\Toonily_net.js",
    "mirrors\\implementations\\Madara\\TopManhua.js",
    "mirrors\\implementations\\Madara\\TritiniaScans.js",
    "mirrors\\implementations\\Madara\\TwilightScans.js",
    "mirrors\\implementations\\Madara\\UltManga.js",
    "mirrors\\implementations\\Madara\\UnemployedScans.js",
    "mirrors\\implementations\\Madara\\WebtoonXyz.js",
    "mirrors\\implementations\\Madara\\ZinManga.js",
    "mirrors\\implementations\\MangaKakalot\\Mangakakalot.js",
    "mirrors\\implementations\\MangaKakalot\\Manganelo.js",
    "mirrors\\implementations\\MangaStream\\AlphaScans.js",
    "mirrors\\implementations\\MangaStream\\AsuraScans.js",
    "mirrors\\implementations\\MangaStream\\FlameScans.js",
    "mirrors\\implementations\\MangaStream\\Kiryuu.js",
    "mirrors\\implementations\\MangaStream\\Komikav.js",
    "mirrors\\implementations\\MangaStream\\Komikcast.js",
    "mirrors\\implementations\\MangaStream\\komikstation.js",
    "mirrors\\implementations\\MangaStream\\Komiku.js",
    "mirrors\\implementations\\MangaStream\\LuminousScans.js",
    "mirrors\\implementations\\MangaStream\\Ngomik.js",
    "mirrors\\implementations\\MangaStream\\VoidScans.js",
    "mirrors\\implementations\\MangaStream\\Westmanga.js",
    "mirrors\\implementations\\MangaStream_1_1_4\\AzureManga.js",
    "mirrors\\implementations\\MangaStream_1_1_4\\Manhwax.js",
    "mirrors\\implementations\\MangaStream_1_1_4\\NonStopScans.js",
    "mirrors\\implementations\\MangaStream_1_1_4\\RealmScans.js",
    "mirrors\\implementations\\MyMangaReaderCMS\\FallenAngels.js",
    "mirrors\\implementations\\MyMangaReaderCMS\\Komikid.js",
    "mirrors\\implementations\\MyMangaReaderCMS\\Mangazuki.js",
    "mirrors\\implementations\\MyMangaReaderCMS\\ScanFR.js",
    "mirrors\\implementations\\MyMangaReaderCMS\\WhiteCloudPavilion.js",
    "mirrors\\implementations\\ReadManga\\MintManga.js",
    "mirrors\\implementations\\ReadManga\\ReadManga.js",
    "mirrors\\implementations\\AsuraScansTR.js",
    "mirrors\\implementations\\Batoto-fake.js",
    "mirrors\\implementations\\Dm5.js",
    "mirrors\\implementations\\DynastyScans.js",
    "mirrors\\implementations\\EarlyManga.js",
    "mirrors\\implementations\\GuFengMH8.js",
    "mirrors\\implementations\\Komga.js",
    "mirrors\\implementations\\LignicaScans.js",
    "mirrors\\implementations\\Manga4Life.js",
    "mirrors\\implementations\\MangaAlArab.js",
    "mirrors\\implementations\\Mangadex-V5.js",
    "mirrors\\implementations\\MangaFast.js",
    "mirrors\\implementations\\MangaFox.js",
    "mirrors\\implementations\\MangaFreak.js",
    "mirrors\\implementations\\MangaHasu.js",
    "mirrors\\implementations\\MangaHere.js",
    "mirrors\\implementations\\MangaHub.js",
    "mirrors\\implementations\\MangaKatana.js",
    "mirrors\\implementations\\MangaKawii.js",
    "mirrors\\implementations\\MangaLlama.js",
    "mirrors\\implementations\\MangaPill.js",
    "mirrors\\implementations\\MangaSee.js",
    "mirrors\\implementations\\Manwha18.com.js",
    "mirrors\\implementations\\Manwha18.net.js",
    "mirrors\\implementations\\MerakiScans.js",
    "mirrors\\implementations\\Niceoppai.js",
    "mirrors\\implementations\\ReadComicOnline.js",
    "mirrors\\implementations\\ReadM.js",
    "mirrors\\implementations\\ReaperScans.js",
    "mirrors\\implementations\\SadScans.js",
    "mirrors\\implementations\\ScanTrad.js",
    "mirrors\\implementations\\ScantradUnion.js",
    "mirrors\\implementations\\SeriManga.js",
    "mirrors\\implementations\\SubManga.js",
    "mirrors\\implementations\\Tachidesk.js",
    "mirrors\\implementations\\unionleitor.js",
    "mirrors\\implementations\\WebToon.js",
    "mirrors\\implementations\\ZaHardTop.js",
    "mirrors\\implementations\\ZeroScans.js",
    "mirrors.js"
];