import styles from './page.module.scss'
import Marks from '../components/cars/marks'
import CarsTable from '../components/cars/table'
import ModelSelect from '../components/cars/model-select'

export default function Home() {
  return (
    <main className={styles.main}>
      <ModelSelect />
      <CarsTable />
    </main>
  )
}
