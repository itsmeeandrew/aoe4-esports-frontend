import styles from "./Map.module.css";
import Image from "next/image";
import { getImageName } from "@/common/util";

interface MapProps {
  name: string,
  size: number
}

export default function Map(props: MapProps) {
  const { name, size } = props;

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        width={size}
        height={size}
        alt={`${name} icon`}
        src={`/images/maps/${getImageName(name)}.png`} />
      <h3 className={styles.title}>{name}</h3>
    </div>
  )
}