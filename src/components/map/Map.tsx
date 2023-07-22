import styles from "./Map.module.css";
import Image from "next/image";
import { getImageName } from "@/common/util";

interface MapProps {
  name: string
}

export default function Map(props: MapProps) {
  const { name } = props;

  return (
    <>
      <Image
        className={styles.image}
        width={140}
        height={140}
        alt={`${name} icon`}
        src={`/images/maps/${getImageName(name)}.png`} />
      <h3>{name}</h3>
    </>
  )
}