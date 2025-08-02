import { Client, dirname, load } from 'sunar'
import { env } from './env'

const components = ['commands', 'signals', 'autocompletes', 'buttons']

async function main() {
	const client = new Client({
		intents: []
	})

	await load(
		`${dirname(import.meta.url)}/{${components.join(',')}}/**/*.{js.ts}`
	)

	await client.login(env.DISCORD_BOT_TOKEN)
}

main().catch(console.error)
