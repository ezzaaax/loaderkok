import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain')
  const luaPath = path.join(process.cwd(), 'loader.lua')
  const luaScript = fs.readFileSync(luaPath, 'utf8')
  res.send(luaScript)
}
