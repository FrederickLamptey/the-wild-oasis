import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useDeleteBooking() {
  const queryClient = useQueryClient(); //This hook allows you to get access to the quer

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      //This function allows you to clear the cach with the specified key ('cabins') and refetch the data.
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
      toast.success('Booking successfully deleted');
    },
    onError: (err) => toast.error(err.message), //This function receives the error that may be thrown by the deleteCabin() function
  });

  return { isDeleting, deleteBooking };
}
