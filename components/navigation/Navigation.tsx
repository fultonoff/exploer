
import Link from 'next/link'
import PaddingContainer from '../layout/padding-container'

const Navigation = () => {
  return (
    <PaddingContainer>

    <div className='flex justify-between py-6 items-center'>
      <Link href='/'>Explorer</Link>
      <nav>
        <ul>
            <li><Link href='/cities'>Cities</Link></li>
            <li><Link href='/experiences'>Experiences</Link></li>
        </ul>
      </nav>
    </div>

    </PaddingContainer>
  )
}

export default Navigation
