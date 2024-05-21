import { computed, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { useClientsStore } from '../../store/Clients';

import clientsApi from '../../api/ClientsApi';
import type { Client } from '../interfaces/Client';


const getClients = async( page: number ):Promise<Client[]> => {

    await new Promise( resolve => {
        setTimeout( () => resolve(true), 1500 )
    });

    const { data } = await clientsApi.get<Client[]>(`/clients?_page=${ page }`);
    return data;
}


const useClients = () => {

    const store = useClientsStore();
    const { currentPage, clients, totalPages } = storeToRefs( store );

    const { isLoading, data } = useQuery(
        ['clients?page=', currentPage ],
        () => getClients( currentPage.value ),
        {
            // staleTime: 1000 * 60,
        }
    );

    watch( data, clients => {
        if( clients )
            store.setClients( clients );
    });
    return {
        // Properties
        clients,
        currentPage,
        isLoading,
        totalPages,

        // Methods
        getPage( page: number ) {
            store.setPage( page )
        },
    }
}


export default useClients;