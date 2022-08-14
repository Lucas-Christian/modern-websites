import Head from 'next/head'
import Layout from '../components/layout'

export default function Index({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Modern Websites · Home</title>
        <meta name="description" content="Some description" />
      </Head>
      <section>
        <div>
          <h1>Hellooooooooooo World!</h1>
        </div>
      </section>
    </Layout>
  )
}