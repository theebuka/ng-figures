// Requests every external URL referenced by the site's content and reports failures.
// Usage: node scripts/check-links.mjs
import { readdirSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = resolve(root, 'src/data')
const files = readdirSync(dataDir, { recursive: true })
  .filter((f) => /\.(ts|json)$/.test(f))
  .map((f) => resolve(dataDir, f))

const urls = new Set()
for (const file of files)
  // Brackets are allowed inside a URL when they come in pairs, as in Wikipedia titles.
  for (const [url] of readFileSync(file, 'utf8').matchAll(/https?:\/\/(?:[^\s'"`<>()]|\([^\s'"`<>()]*\))+/g)) urls.add(url)

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'

async function check(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html,*/*' }, redirect: 'follow', signal: AbortSignal.timeout(25_000) })
    return res.status
  } catch (err) {
    return err.name === 'TimeoutError' ? 'timeout' : 'error'
  }
}

let broken = 0
let blocked = 0
for (const url of [...urls].sort()) {
  const status = await check(url)
  // Some publishers refuse scripted requests outright; those need a look in a browser.
  const verdict = status === 200 ? 'ok     ' : status === 403 || status === 429 ? 'blocked' : 'BROKEN '
  if (verdict.startsWith('BROKEN')) broken++
  if (verdict.startsWith('blocked')) blocked++
  console.log(`${verdict} ${status}  ${url}`)
  await new Promise((r) => setTimeout(r, 250))
}

console.log(`\n${urls.size} links: ${broken} broken, ${blocked} blocked by the host (check those by hand).`)
process.exit(broken ? 1 : 0)
