import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/layout'

export default function Index({ preview }) {
  const { t } = useTranslation()
  const website_title = `${t('common:modern_websites')} · ${t('common:about')}`
  return (
    <Layout preview={preview}>
      <Head>
        <title>{website_title}</title>
        <meta name="description" content="Some other description" />
      </Head>
      <section>
        <div>
          <h1>{t('about:hello')}</h1>
        </div>
      </section>
    </Layout>
  )
}
