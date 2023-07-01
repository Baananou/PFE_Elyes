import ButtonDisplay from '@/components/ButtonDisplay'
import AlertDisplay from '@/components/AlertDisplay'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className='flex justify-between items-center px-80 py-20'>
        <div className=' flex flex-col gap-3'>
          <ButtonDisplay keyParam='START' />
          <ButtonDisplay keyParam='STOP' />
          <ButtonDisplay keyParam='CHARGE' />
          <ButtonDisplay keyParam='DECHARGE' />
        </div>
        <div className='flex flex-col gap-6'>
        <div className='flex gap-20'>
            <AlertDisplay keyParam='POS41' />
            <AlertDisplay keyParam='POS42' />
          </div>
          <div className='flex gap-20'>
            <AlertDisplay keyParam='POS31' />
            <AlertDisplay keyParam='POS32' />
          </div>
          <div className='flex gap-20'>
            <AlertDisplay keyParam='POS21' />
            <AlertDisplay keyParam='POS22' />
          </div>
          <div className='flex gap-20'>
            <AlertDisplay keyParam='POS11' />
            <AlertDisplay keyParam='POS12' />
          </div>
          
          
          
        </div>
      </section>
    </Layout>
  )
}
