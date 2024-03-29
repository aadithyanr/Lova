import '../styles/style.scss'
import Link from 'next/link'
import ProgressSidebar from '../components/progressSidebar'
import { fetch } from '../components/helpers'

const Welcome = props => {
  return (
    <div className='wrapper'>
      <ProgressSidebar tab='' config={props.config} />
      <div className='container container-vc'>
        <img style={{ width: '120px' }} src='/static/icon.png' />
        <h1>Welcome to Lova</h1>
        <Link href='/account-provider-setup'>
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  )
}

Welcome.getInitialProps = async () => {
  return { config: await fetch(`http://${process.env.HOST}:${process.env.PORT}/config`) }
}

export default Welcome
