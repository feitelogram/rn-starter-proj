import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('jerk chicken');
  }, []);

  const searchApi = async (term: string): Promise<void> => {
    try {
      const resp = await yelp.get(`/search`, {
        params: {
          term,
          location: 'Brooklyn',
        },
      });
      setErrorMessage('');
      setResults(resp.data.businesses);
    } catch (e) {
      setErrorMessage(
        'Search is currently not available. Please check your connection or try later.'
      );
    }
  };

  return [searchApi, results, errorMessage];
};
