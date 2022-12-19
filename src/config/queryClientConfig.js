export const queryClientConfig={
    defaultOptions:{
        queries: {
            cacheTime: 60*60*1000,
            refetchOnWindowFocus: false,
            retry: false
        }
    }
}