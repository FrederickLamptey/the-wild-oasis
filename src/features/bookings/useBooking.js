import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';

export function useBooking() {
  const { bookingId } = useParams();

  //useQuery is a hook that allows us to fetch the data from the remote source(supabase)
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking'],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { isLoading, booking, error };
}
