import Link from 'next/link'
import Footer from './components/footer/Footer';
import Payment from './components/payment/Payment';
import Airline from './components/airline/Airline';
import Hotel from './components/hotels/Hotel';
import Destination from './components/pop-destination/Destination';
import Help from './components/help/Help';

import Icon from './components/icon-nav/Icon';

export default function Home() {
  return (
    <div>
      <Icon/>
      <main className='bg-gray-100 pl-4 pr-4 pt-4 h-80rem'>
      {/* section 1 */}
      <section className=''>
        <h1 className="text-xl font-bold">up to 15% is yours!</h1>
        <p className="mt-2 text-sm text-gray-400">just book a trip and explore the world</p>
        <div className='card'></div>
      </section>

      {/* section 2 */}
      <section className='flex flex-col gap-y-8 mt-6'>
        <Link href='/promo'>
          <h1 className="text-xl font-bold">Ongoing Promos</h1>
          <p className="mt-2 text-sm text-gray-400">Always save more with our special offers</p>
        </Link>
        <div className="card"></div>
      </section>

      {/* section 3 */}
      <section className='flex flex-col gap-y-8 mt-6'>
        <Link href='/promo'>
          <h1 className="text-xl font-bold">Lets Go! with Travel-App</h1>
          <p className="mt-2 text-sm text-gray-400">Always save more with our special offers</p>
        </Link>
        <div className="card"></div>
      </section>
      
      <Help/>
      <Payment/>
      <Airline/>
      <Hotel/>
      <Destination/>
    </main>
    {/* footer */}
    <Footer/>
    </div>
  )
}
