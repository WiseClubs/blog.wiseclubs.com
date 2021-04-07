import Head from 'next/head'
import Layout from '../../components/layout'
import dynamic from 'next/dynamic'
// import { Button } from 'element-react/next';
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

// https://github.com/ElemeFE/element-react/issues/797
// https://github.com/ElemeFE/element-react/issues/888
const Button = dynamic(() => import('element-react/dist/npm/es6/src/button'))

export default function Post({ postData }) {
  return (
    <Layout>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={`${utilStyles.lightText} my-4`}>
          <Date dateString={postData.date} />
          <Button type="primary">Hello</Button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}