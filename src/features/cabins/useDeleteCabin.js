import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi} from "../../services/apiCabins";
import toast from "react-hot-toast";


export function useDeleteCabin() {
    const queryClient = useQueryClient(); //This hook allows you to get access to the quer
    
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      //This function allows you to clear the cach with the specified key ('cabins') and refetch the data.
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      toast.success('Cabin successfully deleted');
    },
    onError: (err) => toast.error(err.message), //This function receives the error that may be thrown by the deleteCabin() function
  });
    
    return {isDeleting, deleteCabin}
}