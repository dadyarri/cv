import {NextApiRequest, NextApiResponse} from 'next'
import puppeteer from 'puppeteer'

async function handler (req: NextApiRequest, res: NextApiResponse) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://cv.dadyarri.ru/')
  await page.emulateMediaType('print')

  const pdfBuffer = await page.pdf({ format: 'A4'})

  res.send(pdfBuffer)

  await browser.close()
}

export default handler;