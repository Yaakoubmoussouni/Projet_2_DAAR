import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './styles.module.css'
import * as ethereum from '@/lib/ethereum'
import * as main from '@/lib/main'
import { Route, Router, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import SetCards from './pages/SetCards'
import Types from './pages/Types'
import Sets from './pages/Sets'
import Transfer from './pages/Transfer'
import Sidebar from './components/Sidebar'
import MyCards from './pages/MyCards'

type Canceler = () => void
const useAffect = (
  asyncEffect: () => Promise<Canceler | void>,
  dependencies: any[] = []
) => {
  const cancelerRef = useRef<Canceler | void>()
  useEffect(() => {
    asyncEffect()
      .then(canceler => (cancelerRef.current = canceler))
      .catch(error => console.warn('Uncatched error', error))
    return () => {
      if (cancelerRef.current) {
        cancelerRef.current()
        cancelerRef.current = undefined
      }
    }
  }, dependencies)
}

const useWallet = () => {
  const [details, setDetails] = useState<ethereum.Details>()
  const [contract, setContract] = useState<main.Main>()
  useAffect(async () => {
    const details_ = await ethereum.connect('silent')
    if (!details_) return
    setDetails(details_)
    const contract_ = await main.init(details_)
    if (!contract_) return
    setContract(contract_)
  }, [])
  return useMemo(() => {
    if (!details || !contract) return
    return { details, contract }
  }, [details, contract])
}

export const App = () => {
  const wallet = useWallet()

  const [selectedCards, setSelectedCards] = useState([]);


  return (
    <div className="flex">
      <Sidebar basketCount={selectedCards.length} />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/types" element={<Types />} />

          <Route path="/sets" element={<Sets />} />
          <Route path="/SetCards/:id" element={<SetCards selectedCards={selectedCards} setSelectedCards={setSelectedCards} />} />
          <Route path="/transfer" element={<Transfer selectedCards={selectedCards} setSelectedCards={setSelectedCards} />} />

          <Route path="/myCards" element={<MyCards />} />
        </Routes>
      </div>
    </div>
  );
}
