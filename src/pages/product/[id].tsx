import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,79</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          repellat porro culpa nemo ea quisquam vitae a natus quae laborum
          earum, voluptas nisi! Illum quisquam dolores eaque excepturi
          consectetur repellendus.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
