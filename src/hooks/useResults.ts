import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import { YelpResult } from '../types/YelpResult';

export default () => {
  const [results, setResults] = useState([] as YelpResult[]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('Italian');
  }, []);

  const searchApi = async (term: string): Promise<void> => {
    try {
      const resp = await yelp.get(`/search`, {
        params: {
          term,
          location: 'Brooklyn',
          limit: 50,
        },
      });
      setErrorMessage('');
      return setResults(resp.data.businesses);
    } catch (e) {
      return setErrorMessage(
        'Search is currently not available. Please check your connection or try later.'
      );
    }
  };

  return [searchApi, results, errorMessage] as [
    (term: string) => Promise<void>,
    YelpResult[],
    string
  ];
};
