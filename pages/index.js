import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
// import Script from 'next/script';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Welcome to my blog!</p>
        <p>
          This is a sample website - you’ll be building a site like this on our{' '}
          <a href="https://nextjs.org/learn" className={utilStyles.link}>
            Next.js tutorial
          </a>
          .
        </p>
      </section>

      {/* posts below */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`} className={utilStyles.link}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
