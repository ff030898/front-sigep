import { Providers } from './providers'
import { fonts } from './fonts'

export const metadata = {
  title: 'Guiari RH',
  description: 'Guiari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>

  )
}
