import {createServer, IncomingMessage, ServerResponse} from 'http'
import {parse} from 'url'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0' // Required for cPanel
const port = parseInt(process.env.PORT || '3000', 10) // cPanel assigns port dynamically

const app = next({dev, hostname, port})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer(async (req: IncomingMessage, res: ServerResponse) => {
        try {
            if (!req.url) {
                res.statusCode = 400
                res.end('Bad Request')
                return
            }

            const parsedUrl = parse(req.url, true)
            await handle(req, res, parsedUrl)
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    }).listen(port, hostname, () => {
        console.log(`> Ready on http://${hostname}:${port}`)
        console.log(`> Environment: ${dev ? 'development' : 'production'}`)
    })
})