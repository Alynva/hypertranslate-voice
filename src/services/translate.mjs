import { request } from 'undici'

export const supportedLangsNames = [
    ["Africâner",["af"]],
    ["Albanês",["sq"]],
    ["Amárico",["am"]],
    ["Árabe",["ar"]],
    ["Armênio",["hy"]],
    ["Assamês",["as"]],
    ["Aymara",["ay"]],
    ["Azerbaijano",["az"]],
    ["Bambara",["bm"]],
    ["Basco",["eu"]],
    ["Bielorrusso",["be"]],
    ["Bengalês",["bn"]],
    ["Boiapuri",["bho"]],
    ["Bósnio",["bs"]],
    ["Búlgaro",["bg"]],
    ["Catalão",["ca"]],
    ["Cebuano",["ceb"]],
    ["Chinês (simplificado)",["zh-CN","zh"]],
    ["Chinês (tradicional)",["zh-TW"]],
    ["Córsico",["co"]],
    ["Croata",["hr"]],
    ["Tcheco",["cs"]],
    ["Coreano",["da"]],
    ["Divehi",["dv"]],
    ["Dogri",["doi"]],
    ["Holandês",["nl"]],
    ["Inglês",["en"]],
    ["Esperanto",["eo"]],
    ["Estoniano",["et"]],
    ["Ewe",["ee"]],
    ["Filipino (Tagalog)",["fil"]],
    ["Finlandês",["fi"]],
    ["Francês",["fr"]],
    ["Frísio",["fy"]],
    ["Galego",["gl"]],
    ["Georgiano",["ka"]],
    ["Alemão",["de"]],
    ["Grego",["el"]],
    ["Guarani",["gn"]],
    ["Gujarati",["gu"]],
    ["Crioulo haitiano",["ht"]],
    ["Hauçá",["ha"]],
    ["Havaiano",["haw"]],
    ["Hebraico",["he","iw"]],
    ["Hindi",["hi"]],
    ["Hmong",["hmn"]],
    ["Húngaro",["hu"]],
    ["Islandês",["is"]],
    ["Igbo",["ig"]],
    ["Ilocano",["ilo"]],
    ["Indonésio",["id"]],
    ["Irlandês",["ga"]],
    ["Italian",["it"]],
    ["Japonês",["ja"]],
    ["Javanês",["jv","jw"]],
    ["Canarês",["kn"]],
    ["Cazaque",["kk"]],
    ["Cmer",["km"]],
    ["Quiniaruanda",["rw"]],
    ["Concani",["gom"]],
    ["Coreano",["ko"]],
    ["Krio",["kri"]],
    ["Curdo",["ku"]],
    ["Curdo (Sorani)",["ckb"]],
    ["Quirguiz",["ky"]],
    ["Laosiano",["lo"]],
    ["Latim",["la"]],
    ["Letão",["lv"]],
    ["Lingala",["ln"]],
    ["Lituano",["lt"]],
    ["Luganda",["lg"]],
    ["Luxemburguês",["lb"]],
    ["Macedônio",["mk"]],
    ["Maithili",["mai"]],
    ["Malgaxe",["mg"]],
    ["Malaio",["ms"]],
    ["Malaiala",["ml"]],
    ["Maltês",["mt"]],
    ["Maori",["mi"]],
    ["Marata",["mr"]],
    ["Meiteilon (Manipuri)",["mni-Mtei"]],
    ["Mizo",["lus"]],
    ["Mongol",["mn"]],
    ["Mianmar (birmanês)",["my"]],
    ["Nepalês",["ne"]],
    ["Norueguês",["no"]],
    ["Nianja (Chichewa)",["ny"]],
    ["Oriá",["or"]],
    ["Oromo",["om"]],
    ["Pashto",["ps"]],
    ["Persa",["fa"]],
    ["Polonês",["pl"]],
    ["Português (Portugal, Brasil)",["pt"]],
    ["Punjabi",["pa"]],
    ["Quíchua",["qu"]],
    ["Romeno",["ro"]],
    ["Russo",["ru"]],
    ["Samoano",["sm"]],
    ["Sânscrito",["sa"]],
    ["Escocês gaélico",["gd"]],
    ["Sepedi",["nso"]],
    ["Sérvio",["sr"]],
    ["Sesoto",["st"]],
    ["Xona",["sn"]],
    ["Sindi",["sd"]],
    ["Sinhala (cingalês)",["si"]],
    ["Eslovaco",["sk"]],
    ["Esloveno",["sl"]],
    ["Somali",["so"]],
    ["Espanhol",["es"]],
    ["Sundanês",["su"]],
    ["Suaíli",["sw"]],
    ["Sueco",["sv"]],
    ["Tagalo (filipino)",["tl"]],
    ["Tajique",["tg"]],
    ["Tâmil",["ta"]],
    ["Tártaro",["tt"]],
    ["Telugu",["te"]],
    ["Tailandês",["th"]],
    ["Tigrínia",["ti"]],
    ["Tsonga",["ts"]],
    ["Turco",["tr"]],
    ["Turcomano",["tk"]],
    ["Twi (Akan)",["ak"]],
    ["Ucraniano",["uk"]],
    ["Urdu",["ur"]],
    ["Uyghur",["ug"]],
    ["Usbeque",["uz"]],
    ["Vietnamita",["vi"]],
    ["Galês",["cy"]],
    ["Xosa",["xh"]],
    ["Ídiche",["yi"]],
    ["Iorubá",["yo"]],
    ["Zulu",["zu"]]
]

/* export const supportedLangs = ["af", "sq", "am", "ar", "hy", "az", "eu", "bn", "bs", "bg", "ca", "ceb", "zh-CN", "zh-TW", "co", "hr", "cs", "da", "nl",
	"en", "eo", "et", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha", "haw", "iw", "hi", "hmn", "hu", "is", "id", "ga",
	"ja", "jw", "kn", "kk", "km", "ko", "ku", "lo", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mn", "ne", "no", "ny",
	"ps", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st", "sn", "sd", "si", "sk", "sl", "so", "es", "sw", "sv",
	"tl", "tg", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi", "cy", "xh", "yi", "yo", "zu"] */

export const supportedLangs = supportedLangsNames.reduce((prev, cur) => [...prev, ...cur[1]], [])

/**
 * @typedef Lang
 * @type {typeof supportedLangs[keyof typeof supportedLangs]}
 */



/**
 * @param {String} text
 * @param {Lang} sourceLang
 * @param {Lang} targetLang
 * @return {Promise<[String, Lang]>}
 */
export default async function translate(text, sourceLang, targetLang) {
	checkLang(sourceLang)
	checkLang(targetLang)

	let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(text)}`

	const [result, lang] = await request(url)
		.then(r => r.body.json())
		.then(response => {
			const data = response[0]
			let result = ''

			for (let line = 0; line < data.length; line++) {
				result += data[line][0]
			}

			return [result, response[2]]
		})

	return [result, lang]
}

/** @param {Lang} lang */
function checkLang(lang) {
	if (!supportedLangs.includes(lang) && lang != "auto")
		throw new Error("Invalid lang used: "+lang)
}