import Head from 'next/head'
import Layout from '../components/layout'

export default function Index({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Modern Websites · About</title>
        <meta name="description" content="Some other description" />
      </Head>
      <section>
        <div>
          <h1>Hello World!</h1>
        </div>
      </section>
    </Layout>
  )
}