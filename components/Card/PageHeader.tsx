import Image from 'next/image'
import styles from './Card.module.scss'

export default function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.topBar}>
        <Image src="/images/viajemos.png" alt="Viajemos" width={140} height={32} />

        <div className={styles.topActions}>
          <ul> 
            <Image src="/icons/dollar-square.svg" alt="" width={16} height={16} /> <span>COP</span> 
            <Image src="/images/co.png" alt="" width={16} height={16} /> 
            <span>Español</span> 
            <Image src="/icons/Grupo 10009.svg" alt="" width={16} height={16} /> <span>Iniciar Sesión</span> 
            <Image src="/icons/vuesax-linear-message-question.svg" alt="" width={16} height={16} /> <span>Ayuda</span> 
          </ul>

        </div>
      </div>

      <div className={styles.subBar}>
        <div className={styles.results}>
          <strong>Grandes</strong>
          <span>(45 resultados)</span>
        </div>

          <div className={styles.priceFrom}>
            <div className={styles.topLine}>
              <span className={styles.plus}>+ Grandes</span>{' '}
              <span className={styles.prefix}>Desde</span>
            </div>
            <div className={styles.amounts}>
              <strong className={styles.prices}>$544.448</strong>
              <span className={styles.suffix}>| día</span>
            </div>
          </div>
      </div>
    </header>
  )
}
