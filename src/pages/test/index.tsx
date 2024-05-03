import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { TOKEN_TYPE } from "@/model/variable";
import { Button, Group } from "@mantine/core";


const Test: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const post = async () => {
        const res = await axios({
            url: `http://localhost:18886/order/api/v1/protected/order`,
            method: "POST",
            data: {
                "address": "th",
                "typePay": "cash",
                "orders": [
                    {
                        "productId": "66293bbd33919f71758d0a30",
                        "warehouseId": 2,
                        "amount": 1
                    }
                ]
            },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${Cookies.get(TOKEN_TYPE.ACCESS_TOKEN)}`,
            },
        });

        if (res.status !== 200) {
            setCount(count + 1);
        }
    }

    const test = () => {
        let i = 0;
        let a = setInterval(() => {
            for (let i = 0; i < 1000; i++) {
                post();
            }
            i++
            if(i === 10) {
                clearInterval(a)
            }
        }, 6000)
    }

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <Group>
            <Button onClick={test}>Test</Button>
        </Group>
    )
}

export default Test;