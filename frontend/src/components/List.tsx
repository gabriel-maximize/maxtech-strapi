import Image from "next/image";

import styles from "./styles.module.sass"

export function List({data}: any) {
  return (
    <li className={styles.list}>
      <Image
        className={styles.thumb}
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.attributes.Thumb.data.attributes.url}`}
        alt=""
        width={100}
        height={100}
      />
      <span>{data.attributes.Nome}</span>
      <span>{data.attributes.Descricao}</span>
    </li>
  )
}