import Head from 'next/head'
import LiNextLinknk from 'next/Link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return <>
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <NextLink href="/">
          <a>Back to home</a>
        </NextLink>
      </h2>
    </Layout>
  </>
}