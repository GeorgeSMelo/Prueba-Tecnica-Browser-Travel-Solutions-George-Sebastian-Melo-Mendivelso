import Card from '@/components/Card/Card'
import PageHeader from '@/components/Card/PageHeader'
import { cars } from '@/data/cars'

export default function Home() {
  return (
    <main>
      <PageHeader />

      {cars.map((car, index) => (
        <Card
          key={car.id}
          {...car}
          showPreview={index === 0}
          previewCarId={car.id}
        />
      ))}
    </main>
  )
}
