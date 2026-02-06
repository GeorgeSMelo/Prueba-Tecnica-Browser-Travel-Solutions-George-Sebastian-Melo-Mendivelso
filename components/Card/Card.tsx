import Image from 'next/image';
import styles from './Card.module.scss';





export default function Card({
  brand,
  cost,
  model,
  price,
  image,
  passengers,
  luggage,
  temperature,
  automatic,
  rating = 4.8,
  showPreview = false, // 👈 NUEVO
  previewCarId,
}: any) {
  return (
    
    <article className={styles.card}>

{/* CONTENEDOR PRINCIPAL DE LA TARJETA */}
<div className={styles.cardWrapper}>
  <div className={styles.cards}>
    <div className={styles.brand}>
      <Image
        src={`/brands/${brand.toLowerCase()}.svg`}
        alt={brand}
        width={60}
        height={24}
      />

      <div className={styles.rating}>
        <Image src="/icons/star.svg" alt="star" width={16} height={16} />
        <span>{rating}</span>
      </div>

      <span className={styles.location}>
        <Image src="/icons/plane.svg" alt="plane" width={16} height={16} />
        En Aeropuerto
      </span>
    </div>

    <div className={styles.seal}>
      <Image src="/icons/seal.svg" alt="Seguro incluido" width={48} height={48} />
    </div>
    <div className={styles.leftColumn}>
      <div className={styles.media}>
        <Image src={image} alt={model} width={180} height={100} />
      </div>

      <div className={styles.info}>
        <h2>{cost}</h2>
        <h5 className={styles.model}>
          {model.replace(' o Similar', '')}
          <span className={styles.or}> o </span>
          <span className={styles.similar}>Similar</span>
        </h5>

        <ul className={styles.features}>
          <li>
            <Image src="/icons/people.svg" alt="Pasajeros" width={16} height={16} />
            {passengers}
          </li>
          <li>
            <Image src="/icons/shopping-bag.svg" alt="Equipaje" width={16} height={16} />
            {luggage}
          </li>
          <li>
            <Image src="/icons/frozen.svg" alt="A/C" width={16} height={16} />
            {temperature}
          </li>
          <li>
            <Image src="/icons/transmition.svg" alt="Transmisión" width={16} height={16} />
            {automatic}
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* RESERVAS */}
  <div className={styles.price}>
    {/* CON SEGURO */}
    <div className={`${styles.reservaCard} ${styles.destacada}`}>
      <div className={styles.reservaLeft}>
        <p className={styles.tipo}>
          <strong>Con Seguros</strong> – Tarifa Todo Incluido
        </p>

        <div className={styles.segurosList}>
          <span>
            <Image src="/icons/shield-tick.svg" alt="" width={14} height={14} />
            Seguro Auto Rentado
          </span>
          <span>
            <Image src="/icons/security-user.svg" alt="" width={14} height={14} />
            Seguro a Terceros
          </span>
        </div>

        <div className={styles.reservaFooter}>
          <span className={styles.verDetalles}>
            Ver Detalles
            <Image src="/icons/info-circle.svg" alt="info" width={14} height={14} />
          </span>
          <span className={styles.badgeBlue}>Recomendado</span>
        </div>
      </div>

      <div className={styles.reservaRight}>
        <div className={styles.priceTop}>
          <span className={styles.precioAnterior}>
            Antes ${price.toLocaleString()}
          </span>
          <span className={styles.tagDescuento}>-45%</span>
        </div>

        <div className={styles.priceMain}>
          <span className={styles.monto}>
            ${(price * 0.55).toLocaleString()}
          </span>
          <span className={styles.dia}> | día</span>
        </div>

        <div className={styles.totalPrice}>
          Total ${(price * 3).toLocaleString()}
        </div>

        <button className={styles.reservarBtn}>Reservar</button>
      </div>
    </div>

    {/* SIN SEGURO */}
    <div className={`${styles.reservaCard} ${styles.sinSeguro}`}>
      <div className={styles.reservaLeftSinSeguros}>
        <p className={styles.tipo}>
          <strong>Sin Seguros</strong> – Tarifa Básica
        </p>

        <div className={styles.sinsegurosList}>
          <span>
            <Image src="/icons/shield.svg" alt="" width={14} height={14} />
            Seguro Auto Rentado
          </span>
        </div>

        <div className={styles.reservaFooter}>
          <span className={styles.verDetalles}>
            Ver Detalles
            <Image src="/icons/info-circle.svg" alt="info" width={14} height={14} />
          </span>
        </div>
      </div>

      <div className={styles.reservaRight}>
        <div className={styles.priceTop}>
          <span className={styles.precioAnterior}>
            Antes ${price.toLocaleString()}
          </span>
        </div>

        <div className={styles.priceMain}>
          <span className={styles.monto}>
            ${(price * 0.55).toLocaleString()}
          </span>
          <span className={styles.dia}> | día</span>
        </div>

        <div className={styles.totalPrice}>
          Total ${(price * 3).toLocaleString()}
        </div>

        <button className={styles.btnReservarOutline}>Reservar</button>
      </div>
    </div>
  </div>
</div>

    </article>
  );
}
