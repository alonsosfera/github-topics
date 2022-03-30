import "../styles/globals.sass"
import { NextUIProvider } from "@nextui-org/react"
import { Layout } from "../components"

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
