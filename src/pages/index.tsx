import Image from 'next/image'
import { HomeContainer, Product } from '../../styles/pages/home'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,89</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,89</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
