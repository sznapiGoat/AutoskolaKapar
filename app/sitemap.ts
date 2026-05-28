import { MetadataRoute } from "next"

const base = "https://www.autoskolakapar.cz"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    "",
    "/kurzy",
    "/kurzy/skupina-b",
    "/kurzy/skupina-be",
    "/kurzy/motocykly",
    "/kurzy/skupina-c",
    "/kurzy/skupina-t",
    "/cenik",
    "/terminy",
    "/sluzby",
    "/sluzby/kondicni-jizdy",
    "/sluzby/l17",
    "/sluzby/vraceni-ridicaku",
    "/sluzby/zdravotni-prukazy",
    "/studijni-materialy",
    "/online-prihlaska",
    "/kontakt",
    "/podminky",
    "/ochrana-osobnich-udaju",
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
  }))
}
