import { useState } from 'react'
import { getData } from './utils/requestData'
import NewsCard from './components/NewsCard'
import { Header } from './components/Header';

function App() {
  const [data, setData] = useState([]);

  const handleData = async () => {
    try {
      const res = await getData();
      setData(res.data.articles);
    } catch (error) {
      throw error
    }
  }

  return (
    <div className='w-full flex flex-col align-center justify-center'>
      <Header />
      <br />
      <p className='pl-8 pr-8 text-center'>Imagina encontrar todas as notícias relevantes em um só lugar? Com o LastNews, você navega entre as principais notícias do Brasil em um só clique</p>
      <br />
      <button onClick={() => handleData()} className={'inline-block bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-600 transition mx-auto w-30 mt-4'}>Buscar notícias</button>
      <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'}>
        {data.map((i, index) => (
          <div key={index} className={'w-full flex align-center justify-center'}>
            <NewsCard author={i.author} title={i.title} url={i.url} publishedAt={i.publishedAt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
