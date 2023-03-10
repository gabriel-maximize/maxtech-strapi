import { List } from "@/components/List"
import { api } from "../lib/api"

export async function getServerSideProps() {
  const response = await api.get('/depoimentos?populate=*')
  const data = response.data.data

  return {
    props: {
      data
    }
  }
}

interface DataProps {
  data: {
    attributes: {
      Nome: string
      Descricao: string
      Thumb: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
  } []
}

export default function Home(props: DataProps) {
  return (
    <ul>
      {
        props.data.map((data) => (
          <List key={data.attributes.Nome} data={data} />
        ))
      }
    </ul>
  )
}
