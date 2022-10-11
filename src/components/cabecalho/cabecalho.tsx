import { CabecalhoContainer, Logo } from "./cabecalho.style";

const Cabecalho = () => {
    return ( 
    <CabecalhoContainer>
       <div>
        <Logo src="/images/myteacher.png" />
       </div>
       <p>Encontre o melhor professor!</p>
    </CabecalhoContainer>
    )
}

export default Cabecalho;