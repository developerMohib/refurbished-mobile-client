import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useNewPhone = () => {
    const axiosPublic = useAxiosPublic();

    const {data : newPhone=[] , isLoading,} = useQuery({
        queryKey: ['newMobile'],
        queryFn : async () =>{
            const res = await axiosPublic.get('/new-phone')
            return res?.data ;
        }
    })

    return {newPhone, isLoading}
};

export default useNewPhone;