import { useState } from 'react';
import axios from 'axios';

type AvailabilitiesProps = {
  slug: string;
  partySize: string;
  day: string;
  time: string;
};

export default function useAvailabilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchAvailabilities = async ({ slug, partySize, day, time }: AvailabilitiesProps) => {
    console.log({
      slug,
      partySize,
      day,
      time,
    });
    return;
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
