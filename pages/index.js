import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import ArticleList from "../components/ArticleList";
export default function Home({posts}) {
  return (
      <div>
        <Head>
          <title> WebDev News</title>
          <meta name='keywords' content='web development, programming'/>
        </Head>
          <ArticleList articles={posts}>

          </ArticleList>

      </div>

  )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const data = await res.json()

    return {
        props: { posts: data }
    }
}
