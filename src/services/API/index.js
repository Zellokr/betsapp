import { ref } from 'vue';
import axios from 'axios';

export const useFetch = (url, config) => {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(null);

    (async () => {
        try {
            loading.value = true;
            const res = await axios.get(url, config);
            data.value = await res.data;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    })();

    return {
        data, loading, error
    };
};
