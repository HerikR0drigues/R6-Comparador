import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

const platforms = [
  { code: 'ubi', name: 'PC' },
  { code: 'xbl', name: 'Xbox' },
  { code: 'psn', name: 'Playstation' },
];

function App() {
  const [firstPlat, setFirstPlat] = useState('ubi');
  const [secondPlat, setSecondPlat] = useState('ubi');
  const [firstNick, setFirstNick] = useState('');
  const [secondNick, setSecondNick] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCompare = async () => {
    setIsLoading(true);
    setComparisonResult(''); // Limpa o resultado anterior enquanto carrega

    try {
      const [firstResponse, secondResponse] = await Promise.all([
        axios.get(`https://r6-comparador.onrender.com/api/avg-kills/${firstNick}?platform=${firstPlat}`),
        axios.get(`https://r6-comparador.onrender.com/api/avg-kills/${secondNick}?platform=${secondPlat}`)
      ]);

      // Converte os valores de avgKills para números
      const firstAvgKills = parseFloat(firstResponse.data.avgKills);
      const secondAvgKills = parseFloat(secondResponse.data.avgKills);

      let resultMessage;
      if (firstAvgKills > secondAvgKills) {
        resultMessage = `${firstNick} é melhor que ${secondNick} com base na média de kills por ranked (${firstAvgKills} vs ${secondAvgKills})`;
      } else if (firstAvgKills < secondAvgKills) {
        resultMessage = `${secondNick} é melhor que ${firstNick} com base na média de kills por ranked (${secondAvgKills} vs ${firstAvgKills})`;
      } else {
        resultMessage = `${firstNick} e ${secondNick} têm a mesma média de kills por ranked (${firstAvgKills})`;
      }

      setComparisonResult(resultMessage);
    } catch (error) {
      setComparisonResult('Erro ao buscar dados. Por favor, tente novamente.');
    }

    setIsLoading(false);
  };


  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />

      <main className='flex-grow flex items-start justify-center px-4 py-8'>
        <div className='w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <select
              value={firstPlat}
              onChange={(event) => setFirstPlat(event.target.value)}
              className='text-sm text-textColor bg-transparent border-none focus:outline-none cursor-pointer'
            >
              {platforms.map((plat) => (
                <option key={plat.code} value={plat.code}>
                  {plat.name}
                </option>
              ))}
            </select>

            <select
              value={secondPlat}
              onChange={(event) => setSecondPlat(event.target.value)}
              className='text-sm text-textColor bg-transparent border-none focus:outline-none cursor-pointer'
            >
              {platforms.map((plat) => (
                <option key={plat.code} value={plat.code}>
                  {plat.name}
                </option>
              ))}
            </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='p-4'>
              <input
                type="text"
                placeholder='Digite o primeiro Nick..'
                value={firstNick}
                onChange={(e) => setFirstNick(e.target.value)}
                className='text-center rounded w-full h-10 text-textColor bg-gray-100 resize-none border-none outline-none'
              />
            </div>

            <div className='p-4'>
              <input
                type="text"
                placeholder='Digite o segundo Nick..'
                value={secondNick}
                onChange={(e) => setSecondNick(e.target.value)}
                className='text-center rounded w-full h-10 text-textColor bg-gray-100 resize-none border-none outline-none'
              />
            </div>
          </div>

          <div className='p-4'>
            <button
              className='w-full h-10 text-white bg-spanHeader rounded hover:bg-backgroundPurple flex items-center justify-center'
              onClick={handleCompare}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className='animate-spin rounded-full h-6 w-6 border-t-2 border-white'></div>
              ) : (
                'Comparar Nicks'
              )}
            </button>
          </div>

          {comparisonResult && (
            <div className='p-4 text-center text-lg font-semibold text-gray-800'>
              {comparisonResult.split(' ').map((word, index) => (
                (word === firstNick || word === secondNick) ? (
                  <span key={index} className='text-spanHeader font-bold'>{word} </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
