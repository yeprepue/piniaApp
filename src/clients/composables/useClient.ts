import { ref, watch } from "vue";
import type { Client } from "../interfaces/client";
import { useQuery } from "@tanstack/vue-query";
import clientsApi from "@/api/clients-api";

const getClient = async (id: number): Promise<Client> => {
  const { data } = await clientsApi.get(`/clients/${id}`);
  return data as Client;
};


const useClient = (id: number) => {
  const client = ref<Client>();
  const { isLoading, data } = useQuery(
    ['client', id],
    () => getClient(id)

  );

  watch(data, () => {
    if (data.value)
      client.value = data.value;
  }, {immediate: true});
  

  return {
    client,
    isLoading
  }
}
export default useClient;