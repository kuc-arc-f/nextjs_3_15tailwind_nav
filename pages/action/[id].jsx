import Head from 'next/head'
import React from 'react'
//import Link from 'next/link';
import Layout from '../../components/layout'
//
function Page({props}) {
console.log(props.id)
  return (
    <div className="bg-gray-100">
      <Layout>
      <div className="container mx-auto px-5 pb-5 bg-white">
      <Head><title key="title">{}</title></Head>
      <div>
      <h1 className="text-5xl font-bold my-2 text-center">Action {props.id}
        </h1>
      </div>
      </div>
    </Layout>
    </div>
  )
}
Page.getInitialProps = async context => {
  const id = context.query.id
//console.log(context.query)
  return {
    props: { id: id },
  }
};
export default  Page;

