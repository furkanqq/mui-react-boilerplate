import React, { useEffect } from 'react';
import apiSlice from '../Store/apiSlice';
import { useAppDispatch } from '../Store/hooks';
import CheckNotEmpty from './CheckNotEmpty';

export default function Request({
    url,
    method,
    payload,
    reduce,
    onSuccess,
}: any) {
    const dispatch = useAppDispatch();

    method = method ?? 'get';

    const {
        data = [],
        isLoading,
        isFetching,
        isError,
    } = apiSlice.useGetPostsQuery({
        url,
        method,
        payload,
    });

    useEffect(() => {
        if (CheckNotEmpty(data)) {
            reduce &&
                dispatch({
                    type: reduce,
                    payload: data,
                });

            onSuccess && onSuccess(data);
        }
    }, [data]);

    if (isError) return <div>An error has occurred!</div>;
    if (isLoading) return <>Loading...</>;
    if (isFetching) return <>Fetching...</>;

    return <></>;
}
