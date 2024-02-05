import translate, { supportedLangs } from '../services/translate.mjs'

/**
 * @param {String} text
 * @param {import('./translate.js').Lang} begin_lang
 * @param {import('./translate.js').Lang} end_lang
 * @param {Number} jumps
 */
export default async function* hypertranslate(text, begin_lang, end_lang, jumps) {
	if (isNaN(jumps) || jumps < 1)
		throw new Error("Invalid jumps: " + jumps)
	
	const [_, lang] = await translate(text, begin_lang, end_lang)

	if (lang) {
		if (begin_lang === 'auto') begin_lang = lang
		if (end_lang === 'auto') end_lang = lang
	}
	
	let currentText = text,
		currentSource = begin_lang

	console.time('hypertranslate_'+text)
	console.log('Processing:', { text, begin_lang, end_lang, jumps })

	for (let progress = 0; progress < jumps; progress++) {
		console.log((progress / jumps * 100).toFixed(2)+"%")

		const langNumber = Math.floor(Math.random() * (supportedLangs.length + 1))
		const nextTarget = (progress < jumps - 1 ? supportedLangs[langNumber] : end_lang) || end_lang

		const newTranslation = await translate(currentText, currentSource, nextTarget)
		const stage = { original: currentText, source: newTranslation[1], target: nextTarget, translated: newTranslation[0] }

		yield stage

		currentText = newTranslation[0]
		currentSource = nextTarget
	}

	console.log('Finished.')
	console.timeEnd('hypertranslate_'+text)
}