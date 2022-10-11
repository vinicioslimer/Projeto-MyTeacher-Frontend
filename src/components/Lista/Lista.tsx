import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style";

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {
    return (
       <div>
        {props.professores.length > 0 ? (
             <ListaStyled>
             {props.professores.map(professor => (
                  <ItemLista key={professor.id}>
                  <Foto src={professor.foto}></Foto>
                  <Informacoes>
                      <Nome>{professor.nome}</Nome>
                      <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por Hora</Valor>
                      <Descricao>{FormatadorService.limitarTexto(professor.descricao, 200)}</Descricao>
                      <Button sx={{ width: '70%' }} >Assinar Aula</Button>
                  </Informacoes>
              </ItemLista>
             ))}
                        
         </ListaStyled>
        ) : (
            <ListaVazia>Nenhum item encontrado</ListaVazia>
        )}
       </div>
    )
}

export default Lista;
