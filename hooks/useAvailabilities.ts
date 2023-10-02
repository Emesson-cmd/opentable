import { useState } from 'react';
import axios from 'axios';

type AvailabilitiesProps = {
  slug: string;
  partySize: string;
  day: string;
  time: string;
};

type DataProps = {
  time: string;
  available: boolean;
};

export default function useAvailabilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<DataProps[] | null>(null);

  const fetchAvailabilities = async ({ slug, partySize, day, time }: AvailabilitiesProps) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setData(response.data);
    } catch (error: any) {
      setError(error.response.data.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, fetchAvailabilities };
}
