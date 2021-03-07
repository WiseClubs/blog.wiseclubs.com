import Head from 'next/head'
import NextLink from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

// import useSWR from 'swr'

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm a senior frontend developer, specialized in high-performance web applications. In the last 6+ years, I've worked in various domains be it the fastest growing health tech startup like HealthTap or giant e-commerce like Snapdeal. I've experience working with smart and diverse teams. Javascript is my forte, I'm proficient in most of the cutting-edge technologies like React/Redux & Node.
        </p>
        <p className='bg-gray-300 p-2 rounded mt-2 text-gray-500 text-xs'>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <NextLink href={`/posts/${id}`}>
                <a>{title}</a>
              </NextLink>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
