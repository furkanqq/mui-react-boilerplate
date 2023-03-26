import React from 'react';
import Request from '../Utils/Request';

export default function UserAccountRequest({ params }: any) {
    switch (params.mode) {
        case 'list':
            return (
                <Request
                    url="/posts"
                    method="get"
                    payload={params.payload}
                    reduce="adminUsers/fillList"
                    // onSuccess={(data: any) => console.log(data)}
                />
            );
        case 'add':
            return (
                <Request
                    url="/posts"
                    method="post"
                    payload={params.payload}
                    // reduce="adminUsers/fillList"
                    // onSuccess={(data: any) => console.log(data)}
                />
            );
    }

    return <></>;
}
