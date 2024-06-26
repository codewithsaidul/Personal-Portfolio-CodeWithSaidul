import Layout from '@/Layout/Layout'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>

            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>

            <div className='flex items-center lg:py-2'>
               Build With <span className='text-primary dark:text-primaryDark text-2xl  px-1'>&#9825;</span> &nbsp;<Link href='https://instagram.com/codewithsaidul' target='_blank' className='underline underline-offset-4' >CodeWithSaidul</Link>
            </div>

            <Link href='https://instagram.com/codewithsaidul' target='_blank' className='underline underline-offset-4' >Say Hello!</Link>
        </Layout>
    </footer>
  )
}

export default Footer